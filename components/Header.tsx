'use client';

import { useSyncExternalStore } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { SquareTerminal, Moon, Sun } from 'lucide-react';
import { resume } from '@/data/resume';
import { useSiteState } from '@/lib/site-context';

const NAV_ITEMS = [
  { label: 'projects', href: '/projects/' },
  { label: 'writing', href: '/blog/' },
  { label: 'about', href: '/about/' },
];

function subscribeTheme(onChange: () => void) {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
  return () => observer.disconnect();
}

export default function Header() {
  const { setTerminalOpen } = useSiteState();
  const pathname = usePathname();
  const isDarkMode = useSyncExternalStore(
    subscribeTheme,
    () => document.documentElement.getAttribute('data-theme') === 'dark',
    () => false
  );

  const toggleDarkMode = () => {
    const theme = isDarkMode ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', theme);
    try { localStorage.setItem('theme-preference', theme); } catch { /* Theme still works without storage. */ }
  };

  return (
    <header className="no-print relative z-50 border-b-2 border-near-black dark:border-[var(--dm-border)] bg-cream/80 dark:bg-[#0a0e27]/90 backdrop-blur-md">
      <div className="max-w-[1080px] mx-auto px-6 sm:px-10 min-h-[76px] lg:h-[76px] py-4 lg:py-0 flex flex-wrap items-center justify-between gap-5">
        <Link href="/" className="font-mono text-[15px] font-black tracking-[.04em] whitespace-nowrap">{resume.name.toLowerCase().split(' ').join('\u200a')}</Link>
        <nav aria-label="Main navigation" className="flex flex-wrap items-center gap-5 font-mono text-[13px] tracking-[.04em]">
          {NAV_ITEMS.map((item) => {
            const isActive = `${pathname.replace(/\/$/, '')}/`.startsWith(item.href);
            return <Link key={item.href} href={item.href} aria-current={isActive ? 'page' : undefined} className={isActive ? 'text-accent-red' : ''}>{item.label}</Link>;
          })}
          <a href={`/${resume.resumeUrl}`} download="tusharpanthri_resume.pdf" className="border-b-2 border-near-black dark:border-[var(--dm-text)] pb-0.5">resume ↓</a>
        </nav>
        <div className="flex items-center gap-2.5">
          <button onClick={() => setTerminalOpen(true)} aria-label="Open terminal" title="Open terminal (press /)" className="border-2 border-near-black dark:border-[var(--dm-muted)] p-2.5"><SquareTerminal size={17} /></button>
          <button onClick={toggleDarkMode} aria-label="Toggle dark mode" aria-pressed={isDarkMode} className="border-2 border-near-black dark:border-[var(--dm-muted)] p-2.5">{isDarkMode ? <Sun size={17} /> : <Moon size={17} />}</button>
          <Link href="/contact/" className="bg-near-black text-cream px-4 py-2 font-mono text-[13px]">get in touch</Link>
        </div>
      </div>
    </header>
  );
}
