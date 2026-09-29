'use client';

import { useEffect, useRef, useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import { resume } from '@/data/resume';

type Message = {
  id: number;
  from: 'bot' | 'user';
  text: string;
};

type Category =
  | 'greeting'
  | 'farewell'
  | 'thanks'
  | 'meta'
  | 'background'
  | 'skills'
  | 'projects'
  | 'experience'
  | 'education'
  | 'certifications'
  | 'hire'
  | 'location'
  | 'contact'
  | 'default';

const patterns: Record<Exclude<Category, 'default'>, RegExp> = {
  greeting: /\b(hi|hello|hey|yo|sup|howdy|greetings|good\s?morning|good\s?afternoon|good\s?evening)\b/i,
  farewell: /\b(bye|goodbye|see\s?ya|see\s?you|later|take\s?care|gotta\s?go|catch\s?you\s?later)\b/i,
  thanks: /\b(thanks|thank\s?you|thx|ty|appreciate\s?it|cheers)\b/i,
  meta: /\b(are\s?you\s?(a\s?)?(real\s?)?(ai|bot|human|person)|chatgpt|gpt|llm|large\s?language\s?model|artificial\s?intelligence|who\s?(built|made|coded|wrote)\s?you|how\s?do\s?you\s?work)\b/i,
  background: /\b(background|about\s?(you|yourself|tushar)?|who\s?are\s?you|bio|summary|introduce|tell\s?me\s?about)\b/i,
  education: /\b(education|degree|school|university|college|study|studied|stony\s?brook|ggsipu|masters?|bachelors?|gpa|major|coursework|courses?)\b/i,
  certifications: /\b(certificat(e|ion|ions)?|certified)\b/i,
  skills: /\b(skills?|stack|tech(nolog(y|ies))?|languages?\b(?!.*speak)|tools?|know\b|proficient|familiar\s?with|expertise|good\s?at)\b/i,
  projects: /\b(projects?|built|build|portfolio|repo(sitory)?|github|side\s?project|paxos|pbft|byzantine|transaction|banking\s?system)\b/i,
  experience: /\b(experience|work\s?(history)?|job|career|role|position|company|companies|employer|amex|american\s?express|ameriprise|cognizant|how\s?long|years?\s?(of\s?)?experience)\b/i,
  hire: /\b(why\s?(should\s?i\s?)?hire|why\s?you|strengths?|impact|achievements?|results?|accomplish(ed|ments?)|proud\s?of)\b/i,
  location: /\b(location|based|live|city|where\s?are\s?you|remote|relocate|on-?site|hybrid|visa|sponsor(ship)?|time\s?zone)\b/i,
  contact: /\b(contact|email|reach|hire\s?me|linkedin|phone|number|available|availability|get\s?in\s?touch|talk|connect|message)\b/i,
};

const domainPatterns: { pattern: RegExp; categoryMatch: RegExp }[] = [
  { pattern: /\bbackend\b/i, categoryMatch: /backend/i },
  { pattern: /\b(frontend|front-end|front\s?end|ui|react|next\.?js)\b/i, categoryMatch: /frontend/i },
  { pattern: /\b(cloud|aws|lambda|s3|ec2|ecs)\b/i, categoryMatch: /frontend/i },
  { pattern: /\b(devops|ci\/?cd|terraform|infra(structure)?|deploy(ment)?)\b/i, categoryMatch: /devops/i },
  { pattern: /\b(databases?|\bsql\b|nosql|postgres|mysql|mongo|dynamodb)\b/i, categoryMatch: /database/i },
  { pattern: /\b(languages?|oop|object[- ]oriented)\b/i, categoryMatch: /languages/i },
];

function getDomainResponse(input: string): string | null {
  for (const domain of domainPatterns) {
    if (!domain.pattern.test(input)) continue;
    const group = resume.skillGroups.find((g) => domain.categoryMatch.test(g.category));
    if (!group) continue;
    const items = group.skills.map((s) => `${s.name} (${s.usedIn})`).join(', ');
    return `${group.category}: ${items}.`;
  }
  return null;
}

type SkillLookup = { token: string; name: string; usedIn: string; category: string };

function buildSkillIndex(): SkillLookup[] {
  const index: SkillLookup[] = [];
  resume.skillGroups.forEach((group) => {
    group.skills.forEach((skill) => {
      const tokens = new Set<string>([skill.name.toLowerCase(), ...skill.name.split(/[/,]/).map((t) => t.trim().toLowerCase())]);
      tokens.forEach((token) => {
        if (token) index.push({ token, name: skill.name, usedIn: skill.usedIn, category: group.category });
      });
    });
  });
  return index.sort((a, b) => b.token.length - a.token.length);
}

function getSkillResponse(input: string, skillIndex: SkillLookup[]): string | null {
  const lower = input.toLowerCase();
  for (const skill of skillIndex) {
    if (skill.token.length < 2) continue;
    if (lower.includes(skill.token)) {
      return `Yes, ${skill.name}. Used in ${skill.usedIn} (${skill.category}).`;
    }
  }
  return null;
}

type CompanyLookup = { tokens: string[]; job: (typeof resume.experience)[number] };

function buildCompanyIndex(): CompanyLookup[] {
  return resume.experience.map((job) => {
    const tokens = [job.company.toLowerCase()];
    if (/american express/i.test(job.company)) tokens.push('amex');
    return { tokens, job };
  });
}

function getCompanyResponse(input: string, companyIndex: CompanyLookup[]): string | null {
  const lower = input.toLowerCase();
  for (const company of companyIndex) {
    if (company.tokens.some((token) => lower.includes(token))) {
      const { job } = company;
      return `${job.role} at ${job.company} (${job.period}): ${job.bullets[0]}`;
    }
  }
  return null;
}

type ProjectLookup = { tokens: string[]; project: (typeof resume.projects)[number] };

function buildProjectIndex(): ProjectLookup[] {
  return resume.projects.map((project) => {
    const tokens = [
      project.slug.toLowerCase(),
      ...project.title.toLowerCase().split(/\s+/),
      ...project.tech.map((t) => t.toLowerCase()),
    ];
    return { tokens, project };
  });
}

function getProjectResponse(input: string, projectIndex: ProjectLookup[]): string | null {
  const lower = input.toLowerCase();
  for (const { tokens, project } of projectIndex) {
    if (tokens.some((token) => token.length > 3 && lower.includes(token))) {
      return `${project.title} (${project.techLine}): ${project.headline}`;
    }
  }
  return null;
}

function pick(list: string[]): string {
  return list[Math.floor(Math.random() * list.length)];
}

function buildResponses(): Record<Category, string[]> {
  const latestJob = resume.experience[0];
  const projectTitles = resume.projects.map((p) => p.title).join(', ');
  const skillNames = resume.skillGroups
    .map((group) => group.skills.map((s) => s.name).join(', '))
    .join('; ');
  const schools = resume.education.map((e) => `${e.degree} at ${e.school} (${e.period})`).join('. ');
  const certNames = resume.certifications.map((c) => `${c.name} (${c.issuer})`).join(', ');
  const proofLine = resume.proof.map((p) => `${p.value} ${p.label}`).join('; ');

  return {
    greeting: [
      `Hey, I'm a small rule-based assistant for ${resume.name}'s site. Ask me about background, skills, projects, or experience.`,
      `Hi there! Ask me about ${resume.name}'s work history, stack, or how to get in touch.`,
    ],
    farewell: [
      'Take care! Feel free to come back with more questions anytime.',
      `Thanks for stopping by. You can always reach ${resume.name.split(' ')[0]} directly at ${resume.email}.`,
    ],
    thanks: [
      "You're welcome! Anything else you'd like to know?",
      'No problem at all. Happy to answer more.',
    ],
    meta: [
      "I'm a rule-based assistant, just pattern matching on keywords, no LLM or API call behind me. Ask about background, skills, projects, or experience and I'll do my best.",
      "Honest answer: I'm a small regex-driven FAQ bot, not ChatGPT. I only know what's in Tushar's resume data.",
    ],
    background: [
      resume.summary,
      `${resume.name} is a ${resume.role} based in ${resume.location}. ${resume.tagline}`,
    ],
    education: [
      `Education: ${schools}`,
      `Currently pursuing an M.S. in Computer Science and Applied Mathematics & Statistics at Stony Brook University (2024-2026), after a B.Tech in Electronics & Communication from GGSIPU Delhi.`,
    ],
    certifications: [
      `Certifications: ${certNames}.`,
      `Holds ${resume.certifications.length} certifications, including ${resume.certifications[0]?.name}.`,
    ],
    skills: [
      `Core stack: ${resume.stack.join(', ')}.`,
      `Skill areas: ${skillNames}.`,
    ],
    projects: [
      `A couple of favorites: ${projectTitles}. Check the Projects page for write-ups and diagrams.`,
      `${resume.projects[0]?.headline ?? ''}`.trim(),
    ],
    experience: [
      `Most recently: ${latestJob.role} at ${latestJob.company} (${latestJob.period}). ${latestJob.impact}`,
      `3+ years across American Express, Ameriprise Financial, and Cognizant, mostly backend services, REST APIs, and AWS data pipelines.`,
    ],
    hire: [
      `A few numbers that stand out: ${proofLine}.`,
      `${latestJob.impact} That kind of measurable impact is the pattern across every role.`,
    ],
    location: [
      `Based in ${resume.location}, open to backend and platform roles.`,
      `Located in ${resume.location}. Check the site header for real-time local time.`,
    ],
    contact: [
      `Best way in: email ${resume.email} or use the "Send me a message" button below, it goes straight to the inbox.`,
      `Reach out via email (${resume.email}) or LinkedIn: ${resume.linkedin}`,
    ],
    default: [
      "I'm just a small pattern-matching bot, not a full AI, so I didn't catch that one. Try asking about background, skills, projects, experience, education, certifications, or how to get in touch.",
      "Not sure how to answer that yet. Try: \"what's your stack?\", \"tell me about your experience\", \"any certifications?\", or \"how do I contact you?\"",
    ],
  };
}

function getBotResponse(
  input: string,
  responses: Record<Category, string[]>,
  indexes: { skills: SkillLookup[]; companies: CompanyLookup[]; projects: ProjectLookup[] }
): string {
  const metaOrSocial = (['meta', 'farewell', 'thanks'] as const).find((category) => patterns[category].test(input));
  if (metaOrSocial) return pick(responses[metaOrSocial]);

  const skillResponse = getSkillResponse(input, indexes.skills);
  if (skillResponse) return skillResponse;

  const companyResponse = getCompanyResponse(input, indexes.companies);
  if (companyResponse) return companyResponse;

  const projectResponse = getProjectResponse(input, indexes.projects);
  if (projectResponse) return projectResponse;

  const domainResponse = getDomainResponse(input);
  if (domainResponse) return domainResponse;

  const categories = Object.keys(patterns) as Array<Exclude<Category, 'default'>>;
  for (const category of categories) {
    if (patterns[category].test(input)) {
      return pick(responses[category]);
    }
  }
  return pick(responses.default);
}

const SUGGESTIONS = ['What do you work on?', "What's your stack?", 'How do I reach you?'];

const INK = '#11100D';
const PAPER = '#EEE9D8';
const YELLOW = '#FFE119';
const MUTED = '#6E675A';

export default function InteractiveChatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: 0, from: 'bot', text: `Hi, I'm a rule-based assistant for ${resume.name}'s site. Ask about background, skills, projects, experience, or contact info.` },
  ]);
  const [input, setInput] = useState('');
  const [typing, setTyping] = useState(false);
  const responsesRef = useRef(buildResponses());
  const indexesRef = useRef({
    skills: buildSkillIndex(),
    companies: buildCompanyIndex(),
    projects: buildProjectIndex(),
  });
  const scrollRef = useRef<HTMLDivElement>(null);
  const nextId = useRef(1);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' });
  }, [messages, typing]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  function send(text: string) {
    const trimmed = text.trim();
    if (!trimmed || typing) return;
    const userMsg: Message = { id: nextId.current++, from: 'user', text: trimmed };
    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setTyping(true);
    const delay = 1000 + Math.random() * 1000;
    setTimeout(() => {
      const reply = getBotResponse(trimmed, responsesRef.current, indexesRef.current);
      setMessages((prev) => [...prev, { id: nextId.current++, from: 'bot', text: reply }]);
      setTyping(false);
    }, delay);
  }

  return (
    <>
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? 'Close chat assistant' : 'Open chat assistant'}
        aria-expanded={open}
        style={{
          position: 'fixed',
          right: 24,
          bottom: 24,
          zIndex: 40,
          width: 44,
          height: 44,
          background: INK,
          color: YELLOW,
          border: `2px solid ${INK}`,
          boxShadow: `3px 3px 0 ${YELLOW}`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
        }}
      >
        {open ? <X size={18} /> : <MessageCircle size={18} />}
      </button>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Chat assistant"
          style={{
            position: 'fixed',
            right: 24,
            bottom: 78,
            zIndex: 40,
            width: 300,
            maxWidth: 'calc(100vw - 48px)',
            height: 380,
            maxHeight: 'calc(100vh - 160px)',
            background: PAPER,
            border: `2px solid ${INK}`,
            boxShadow: `6px 6px 0 ${INK}`,
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <div
            style={{
              padding: '10px 14px',
              borderBottom: `2px solid ${INK}`,
              background: INK,
              color: PAPER,
              fontFamily: "'Geist Mono', monospace",
              fontSize: 10,
              letterSpacing: '.06em',
              textTransform: 'uppercase',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: 8,
            }}
          >
            <span>ask about {resume.name.split(' ')[0]}</span>
            <span style={{ color: MUTED, whiteSpace: 'nowrap' }}>rule-based</span>
          </div>

          <div
            ref={scrollRef}
            style={{
              flex: 1,
              overflowY: 'auto',
              padding: '12px 12px 6px',
              display: 'flex',
              flexDirection: 'column',
              gap: 8,
            }}
          >
            {messages.map((m) => (
              <div
                key={m.id}
                style={{
                  alignSelf: m.from === 'bot' ? 'flex-start' : 'flex-end',
                  maxWidth: '85%',
                  background: m.from === 'bot' ? '#fff' : INK,
                  color: m.from === 'bot' ? INK : YELLOW,
                  border: m.from === 'bot' ? `2px solid ${INK}` : 'none',
                  padding: '7px 10px',
                  fontFamily: 'Geist, sans-serif',
                  fontSize: 13,
                  lineHeight: 1.4,
                }}
              >
                {m.text}
              </div>
            ))}
            {typing && (
              <div
                style={{
                  alignSelf: 'flex-start',
                  background: '#fff',
                  border: `2px solid ${INK}`,
                  padding: '8px 11px',
                  fontFamily: "'Geist Mono', monospace",
                  fontSize: 13,
                  color: MUTED,
                }}
              >
                typing…
              </div>
            )}
          </div>

          {messages.length <= 1 && (
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, padding: '0 14px 10px' }}>
              {SUGGESTIONS.map((s) => (
                <button
                  key={s}
                  onClick={() => send(s)}
                  style={{
                    fontFamily: "'Geist Mono', monospace",
                    fontSize: 11,
                    border: `1px solid ${INK}`,
                    background: 'transparent',
                    padding: '5px 8px',
                    cursor: 'pointer',
                  }}
                >
                  {s}
                </button>
              ))}
            </div>
          )}

          <form
            onSubmit={(e) => {
              e.preventDefault();
              send(input);
            }}
            style={{
              display: 'flex',
              borderTop: `2px solid ${INK}`,
            }}
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a question…"
              aria-label="Type a question"
              style={{
                flex: 1,
                border: 0,
                outline: 'none',
                background: '#fff',
                padding: '11px 12px',
                fontFamily: 'Geist, sans-serif',
                fontSize: 14,
                color: INK,
              }}
            />
            <button
              type="submit"
              aria-label="Send"
              disabled={typing || !input.trim()}
              style={{
                width: 46,
                border: 0,
                borderLeft: `2px solid ${INK}`,
                background: YELLOW,
                color: INK,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: typing || !input.trim() ? 'default' : 'pointer',
                opacity: typing || !input.trim() ? 0.5 : 1,
              }}
            >
              <Send size={16} />
            </button>
          </form>
        </div>
      )}
    </>
  );
}
