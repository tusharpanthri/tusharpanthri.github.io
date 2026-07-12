"use client";
import React, { useEffect, useRef, useState } from 'react';
import { resume } from '@/data/resume';
import { useSiteState } from '@/lib/site-context';
import { downloadResume } from '@/lib/resume';

interface Line {
  type: 'input' | 'output';
  text: string;
}

const PROMPT = 'guest@portfolio:~$';

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
    case '':
      return [];
    case 'help':
      return HELP_LINES;
    case 'whoami':
      return [resume.name.toLowerCase().replace(/\s+/g, '-')];
    case 'about':
      return [resume.summary];
    case 'skills':
      return resume.skillGroups.flatMap((g) => [
        `${g.category}:`,
        ...g.skills.map((s) => `  - ${s.name}`)
      ]);
    case 'projects':
      return resume.projects.flatMap((p) => [
        `${p.title} - ${p.description}`,
        `  tech: ${p.tech.join(', ')}`
      ]);
    case 'experience':
      return resume.experience.flatMap((e) => [
        `${e.company} - ${e.role} (${e.period})`,
        ...e.bullets.map((b) => `  - ${b}`)
      ]);
    case 'socials':
      return [
        `github    ${resume.github}`,
        `linkedin  ${resume.linkedin}`,
        `email     ${resume.email}`
      ];
    case 'resume':
      return ['Downloading resume...'];
    default:
      return [`command not found: ${cmd}. type 'help' for a list of commands.`];
  }
}

const Terminal = () => {
  const { terminalOpen, setTerminalOpen } = useSiteState();
  const [history, setHistory] = useState<Line[]>([
    { type: 'output', text: "Welcome. Type 'help' to get started." }
  ]);
  const [input, setInput] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement | null;
      const isEditable =
        !!target &&
        (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.isContentEditable);

      if (terminalOpen && e.key === 'Escape') {
        setTerminalOpen(false);
        return;
      }

      if (!terminalOpen && !isEditable && (e.key === '/' || e.key === '~')) {
        e.preventDefault();
        setTerminalOpen(true);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [terminalOpen, setTerminalOpen]);

  useEffect(() => {
    if (terminalOpen) {
      inputRef.current?.focus();
    }
  }, [terminalOpen]);

  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
    }
  }, [history, terminalOpen]);

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
      if (trimmed === 'resume') {
        downloadResume();
      }
    }
    setInput('');
  };

  if (!terminalOpen) return null;

  return (
    <div
      className="no-print fixed inset-0 z-[300] flex items-end justify-center bg-near-black/40"
      onClick={() => setTerminalOpen(false)}
    >
      <div
        className="w-full max-w-4xl border-4 border-b-0 border-near-black rounded-t-xl overflow-hidden"
        style={{ background: '#11100D', animation: 'termRise 0.25s ease-out' }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-2 px-4 py-3 border-b-2 border-[#2a2820]">
          <span className="w-3 h-3 rounded-full bg-[#FF5F56]"></span>
          <span className="w-3 h-3 rounded-full bg-[#FFBD2E]"></span>
          <span className="w-3 h-3 rounded-full bg-[#27C93F]"></span>
          <span className="ml-3 font-mono text-xs text-[#6E675A] uppercase tracking-widest">
            {resume.name.toLowerCase().replace(/\s+/g, '-')}@portfolio: ~
          </span>
          <button
            onClick={() => setTerminalOpen(false)}
            className="ml-auto font-mono text-xs text-[#6E675A] hover:text-cream transition-colors"
            aria-label="Close terminal"
          >
            esc
          </button>
        </div>

        <div ref={bodyRef} className="h-80 md:h-96 overflow-y-auto px-4 py-4 font-mono text-sm">
          {history.map((line, i) => (
            <div
              key={i}
              className={line.type === 'input' ? 'text-cream' : 'text-[#3ddc5b] whitespace-pre-wrap'}
            >
              {line.type === 'input' ? `${PROMPT} ${line.text}` : line.text}
            </div>
          ))}
          <form onSubmit={handleSubmit} className="flex items-center gap-2 text-[#3ddc5b] mt-1">
            <span>{PROMPT}</span>
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 bg-transparent outline-none text-cream caret-transparent"
              autoComplete="off"
              autoCapitalize="off"
              spellCheck={false}
            />
            <span className="w-2 h-4 bg-[#3ddc5b] animate-pulse"></span>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Terminal;
