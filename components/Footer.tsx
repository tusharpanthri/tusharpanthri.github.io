import { resume } from '@/data/resume';

export default function Footer() {
  return (
    <footer className="py-8 border-t-2 border-near-black dark:border-[var(--dm-border)] bg-cream dark:bg-[#0a0e27]">
      <div className="max-w-[1080px] mx-auto px-6 sm:px-10 flex flex-wrap items-center justify-between gap-5 font-mono text-[12px] tracking-[.04em] text-muted dark:text-[var(--dm-muted)]">
        <p>&copy; {new Date().getFullYear()} {resume.name}</p>
        <div className="flex gap-5">
          <a href={`mailto:${resume.email}`} className="border-b border-current">email</a>
          <a href={resume.github} target="_blank" rel="noopener noreferrer" className="border-b border-current">github</a>
          <a href={resume.linkedin} target="_blank" rel="noopener noreferrer" className="border-b border-current">linkedin</a>
        </div>
        <p className="no-print">Press / for the terminal</p>
      </div>
    </footer>
  );
}
