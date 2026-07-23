import React from 'react';
import { Mail } from 'lucide-react';
import { Github, Linkedin } from '@/components/Icons';
import { resume } from '@/data/resume';
import DynamicGreeting from '@/components/DynamicGreeting';

const Footer = () => {
  return (
    <footer className="py-12 border-t-4 border-near-black dark:border-[var(--dm-border)] bg-cream dark:bg-[var(--dm-surface)] text-center font-mono font-bold uppercase tracking-widest px-6 text-near-black dark:text-[var(--dm-text)]">
      <div className="flex justify-center gap-4 mb-6">
        <a
          href={`mailto:${resume.email}`}
          className="p-3 bg-white dark:bg-[var(--dm-surface)] border-4 border-near-black dark:border-[var(--dm-border)] rounded-full shadow-[4px_4px_0_#11100D] dark:shadow-[4px_4px_0_var(--dm-shadow)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all"
          aria-label="Email"
        >
          <Mail size={20} />
        </a>
        <a
          href={resume.github}
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 bg-white dark:bg-[var(--dm-surface)] border-4 border-near-black dark:border-[var(--dm-border)] rounded-full shadow-[4px_4px_0_#11100D] dark:shadow-[4px_4px_0_var(--dm-shadow)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all"
          aria-label="GitHub"
        >
          <Github size={20} />
        </a>
        <a
          href={resume.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 bg-white dark:bg-[var(--dm-surface)] border-4 border-near-black dark:border-[var(--dm-border)] rounded-full shadow-[4px_4px_0_#11100D] dark:shadow-[4px_4px_0_var(--dm-shadow)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all"
          aria-label="LinkedIn"
        >
          <Linkedin size={20} />
        </a>
      </div>
      &copy; {new Date().getFullYear()} {resume.name} <DynamicGreeting />
      <div className="no-print text-[10px] font-bold opacity-40 tracking-widest mt-3 normal-case">
        Press / for the terminal
      </div>
    </footer>
  );
};

export default Footer;
