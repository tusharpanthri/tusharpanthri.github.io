"use client";
import React, { useEffect, useRef, useState } from 'react';
import { resume } from '@/data/resume';
import { useSiteState } from '@/lib/site-context';
import { downloadResume } from '@/lib/resume';

interface Line {
  type: 'input' | 'output' | 'banner';
  text: string;
}

const PROMPT = 'guest@portfolio:~$';
const TERMINAL_BANNER = [
  '          .-/+oossssoo+/-.',
  '      `:+ssssssssssssssssss+:`',
  '    -+ssssssssssssssssssyyssss+-',
  '  .ossssssssssssssssssdMMMNysssso.',
  ' /ssssssssssshdmmNNmmyNMMMMhssssss/',
  '+ssssssssshmydMMMMMMMNddddyssssssss+',
  '/sssssssshNMMMyhhyyyyhmNMMMNhssssssss/',
  '.ssssssssdMMMNhsssssssssshNMMMdssssssss.',
  '+sssshhhyNMMNyssssssssssssyNMMMysssssss+',
  'ossyNMMMNyMMhsssssssssssssshmmmhssssssso',
  'ossyNMMMNyMMhsssssssssssssshmmmhssssssso',
  '+sssshhhyNMMNyssssssssssssyNMMMysssssss+',
  '.ssssssssdMMMNhsssssssssshNMMMdssssssss.',
  '/sssssssshNMMMyhhyyyyhmNMMMNhssssssss/',
  '+ssssssssshmydMMMMMMMNddddyssssssss+',
  ' /ssssssssssshdmmNNmmyNMMMMhssssss/',
  '  .ossssssssssssssssssdMMMNysssso.',
  '    -+sssssssssssssssssyyyssss+-',
  '      `:+ssssssssssssssssss+:`',
  '          .-/+oossssoo+/-.',
].join('\n');

const HELP_LINES = [
  'Available commands:',
  '  help        Show this list',
  '  whoami      Who am I',
  '  about       Short bio',
  '  skills      List skills',
  '  projects    List projects',
  '  experience  List work experience',
  '  socials     Links to GitHub / LinkedIn / email',
  '  resume      Download resume PDF',
  '  clear       Clear the terminal'
];

function runCommand(raw: string): string[] {
  const cmd = raw.trim().toLowerCase();
  switch (cmd) {
    case '': return [];
    case 'help': return HELP_LINES;
    case 'whoami': return [resume.name.toLowerCase().replace(/\s+/g, '-')];
    case 'about': return [resume.summary];
    case 'skills': return resume.skillGroups.flatMap((g) => [`${g.category}:`, ...g.skills.map((s) => `  - ${s.name}`)]);
    case 'projects': return resume.projects.flatMap((p) => [`${p.title} - ${p.description}`, `  tech: ${p.tech.join(', ')}`]);
    case 'experience': return resume.experience.flatMap((e) => [`${e.company} - ${e.role} (${e.period})`, ...e.bullets.map((b) => `  - ${b}`)]);
    case 'socials': return [`github    ${resume.github}`, `linkedin  ${resume.linkedin}`, `email     ${resume.email}`];
    case 'resume': return ['Downloading resume...'];
    default: return [`command not found: ${cmd}. type 'help' for a list of commands.`];
  }
}

const Terminal = () => {
  const { terminalOpen, setTerminalOpen } = useSiteState();
  const [history, setHistory] = useState<Line[]>([
    { type: 'input', text: 'neofetch' },
    { type: 'banner', text: TERMINAL_BANNER },
    { type: 'output', text: "Welcome. Type 'help' to get started." },
  ]);
  const [input, setInput] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement | null;
      const isEditable = !!target && (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.isContentEditable);
      if (terminalOpen && e.key === 'Escape') { setTerminalOpen(false); return; }
      if (!terminalOpen && !isEditable && (e.key === '/' || e.key === '~')) { e.preventDefault(); setTerminalOpen(true); }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [terminalOpen, setTerminalOpen]);

  useEffect(() => { if (terminalOpen) inputRef.current?.focus(); }, [terminalOpen]);
  useEffect(() => { if (bodyRef.current) bodyRef.current.scrollTop = bodyRef.current.scrollHeight; }, [history, terminalOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input;
    const trimmed = cmd.trim().toLowerCase();
    setHistory((h) => [...h, { type: 'input', text: cmd }]);
    if (trimmed === 'clear') {
      setHistory([]);
    } else {
      const output = runCommand(cmd);
      setHistory((h) => [...h, ...output.map((text): Line => ({ type: 'output', text }))]);
      if (trimmed === 'resume') downloadResume();
    }
    setInput('');
  };

  if (!terminalOpen) return null;

  return (
    <div className="no-print fixed inset-0 z-[300] flex items-end justify-center bg-[#090908]/75 p-3 backdrop-blur-sm sm:p-6" onClick={() => setTerminalOpen(false)}>
      <div className="w-full max-w-[960px] overflow-hidden rounded-t-xl border border-[#3c3932] bg-[#11100d] shadow-[0_-18px_70px_rgba(0,0,0,.42)]" style={{ animation: 'termRise 0.25s ease-out' }} onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center gap-2 border-b border-[#302e28] bg-[#1b1a17] px-4 py-3">
          <span className="h-3 w-3 rounded-full bg-[#ff5f57]"></span><span className="h-3 w-3 rounded-full bg-[#febc2e]"></span><span className="h-3 w-3 rounded-full bg-[#28c840]"></span>
          <span className="ml-3 font-mono text-[11px] tracking-[.08em] text-[#a7a092]">{resume.name.toLowerCase().replace(/\s+/g, '-')}@portfolio — zsh</span>
          <button onClick={() => setTerminalOpen(false)} className="ml-auto rounded border border-[#4a463d] px-2 py-0.5 font-mono text-[10px] text-[#a7a092] transition-colors hover:border-[#eee9d8] hover:text-cream" aria-label="Close terminal">esc</button>
        </div>
        <div ref={bodyRef} className="h-[min(620px,72vh)] overflow-y-auto px-5 py-5 font-mono text-sm sm:px-7 sm:py-6">
          {history.map((line, i) => {
            if (line.type === 'banner') {
              return (
                <div key={i} className="mb-5 flex max-w-full justify-center overflow-x-auto border-y border-[#2b2923] bg-[#0d0c0a] px-4 py-4">
                  <pre className="w-max origin-center scale-x-[1.18] font-mono text-[9px] leading-[1.08] sm:text-[11px]">
                    {line.text.split('\n').map((row, rowIndex) => (
                      <span key={rowIndex} className="block">{[...row].map((character, characterIndex) => <span key={characterIndex} className={character === 'M' || character === 'N' ? 'text-cream' : 'text-accent-red'}>{character}</span>)}</span>
                    ))}
                  </pre>
                </div>
              );
            }
            return <div key={i} className={line.type === 'input' ? 'text-cream' : 'text-[#90d66b] whitespace-pre-wrap'}>{line.type === 'input' ? <><span className="text-[#ff4b2b]">{PROMPT}</span> {line.text}</> : line.text}</div>;
          })}
          <form onSubmit={handleSubmit} className="sticky bottom-0 mt-5 flex items-center gap-2 border-t border-[#2b2923] bg-[#11100d] pt-4 text-[#ff4b2b]">
            <span>{PROMPT}</span>
            <input ref={inputRef} aria-label="Terminal command" placeholder="type help" value={input} onChange={(e) => setInput(e.target.value)} className="flex-1 bg-transparent text-cream outline-none placeholder:text-[#5e594e]" autoComplete="off" autoCapitalize="off" spellCheck={false} />
            <span className="h-4 w-2 bg-[#eee9d8] animate-pulse"></span>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Terminal;
