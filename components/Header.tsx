"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { resume } from '@/data/resume';
import { Download, Mail, Phone, ChevronDown, SquareTerminal, Moon, Sun } from 'lucide-react';
import { useSiteState } from '@/lib/site-context';

const NAV_ITEMS = [
  { label: 'About', href: '/about/' },
  { label: 'Projects', href: '/projects/' },
  { label: 'Blog', href: '/blog/' },
  { label: 'Contact', href: '/contact/' },
];

const Header = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const { setTerminalOpen } = useSiteState();
  const pathname = usePathname();

  useEffect(() => {
    const stored = localStorage.getItem('theme-preference');
    const shouldBeDark = stored ? stored === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDarkMode(shouldBeDark);
    document.documentElement.setAttribute('data-theme', shouldBeDark ? 'dark' : 'light');
    setIsMounted(true);
  }, []);

  const toggleDarkMode = () => {
    const next = !isDarkMode;
    setIsDarkMode(next);
    document.documentElement.setAttribute('data-theme', next ? 'dark' : 'light');
    localStorage.setItem('theme-preference', next ? 'dark' : 'light');
  };

  return (
    <header className="no-print fixed top-0 left-0 right-0 z-50 bg-cream/80 dark:bg-[#0a0e27]/90 backdrop-blur-md border-b-4 border-near-black dark:border-[var(--dm-border)] transition-colors duration-300 animate-in fade-in slide-in-from-top duration-500">
      <div className="max-w-7xl mx-auto px-6 md:px-10 h-20 flex items-center justify-between">
        <Link href="/" className="text-2xl font-black uppercase tracking-tighter hover:text-accent-red transition-colors">
          {resume.name.split(' ').map(n => n[0]).join('')}.
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {NAV_ITEMS.map((item) => {
            const isActive = pathname === item.href || pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-black uppercase tracking-wider transition-colors ${
                  isActive ? 'text-accent-red' : 'hover:text-accent-red'
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3 md:gap-6">
          {/* Terminal Button */}
          <button
            onClick={() => setTerminalOpen(true)}
            className="p-3 bg-white dark:bg-[var(--dm-surface)] border-4 border-near-black dark:border-[var(--dm-border)] rounded-full shadow-[4px_4px_0_#11100D] dark:shadow-[4px_4px_0_var(--dm-shadow)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all"
            title="Open terminal (press / )"
            aria-label="Open terminal"
          >
            <SquareTerminal size={16} className="dark:text-[var(--dm-text)]" />
          </button>

          {/* Resume Download */}
          <a
            href="/resume.pdf"
            download="tusharpanthri_resume.pdf"
            className="flex items-center gap-2 px-6 py-2 bg-white dark:bg-[var(--dm-surface)] dark:text-[var(--dm-text)] border-4 border-near-black dark:border-[var(--dm-border)] rounded-full font-black uppercase text-xs shadow-[4px_4px_0_#11100D] dark:shadow-[4px_4px_0_var(--dm-shadow)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all"
          >
            <Download size={14} /> Resume
          </a>

          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            className="p-3 bg-white dark:bg-[var(--dm-surface)] border-4 border-near-black dark:border-[var(--dm-border)] rounded-full shadow-[4px_4px_0_#11100D] dark:shadow-[4px_4px_0_var(--dm-shadow)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all"
            title="Toggle dark mode"
            aria-label="Toggle dark mode"
          >
            {isMounted && isDarkMode ? <Sun size={16} className="text-accent-yellow" /> : <Moon size={16} />}
          </button>

          {/* Contact Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsContactOpen(!isContactOpen)}
              className="flex items-center gap-2 px-6 py-2 bg-accent-yellow border-4 border-near-black dark:border-[var(--dm-border)] rounded-full font-black uppercase text-xs text-near-black shadow-[4px_4px_0_#11100D] dark:shadow-[4px_4px_0_var(--dm-shadow)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all"
            >
              Contact Me <ChevronDown size={14} className={`transition-transform ${isContactOpen ? 'rotate-180' : ''}`} />
            </button>

            {isContactOpen && (
              <div className="absolute top-full right-0 mt-4 w-64 bg-white dark:bg-[var(--dm-surface)] border-4 border-near-black dark:border-[var(--dm-border)] shadow-[8px_8px_0_#11100D] dark:shadow-[8px_8px_0_var(--dm-shadow)] p-4 animate-in fade-in zoom-in-95 duration-200">
                <div className="space-y-4">
                  <a href={`mailto:${resume.email}`} className="flex items-center gap-3 hover:text-accent-red transition-colors group">
                    <div className="p-2 bg-cream dark:bg-[#0a0e27] border-2 border-near-black dark:border-[var(--dm-border)] rounded-full group-hover:bg-accent-yellow transition-colors">
                      <Mail size={16} className="dark:text-[var(--dm-text)] group-hover:text-near-black" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[10px] font-black uppercase opacity-50 dark:text-[var(--dm-text)]">Email</span>
                      <span className="text-xs font-bold break-all dark:text-[var(--dm-text)]">{resume.email}</span>
                    </div>
                  </a>
                  <a href={`tel:${resume.phone}`} className="flex items-center gap-3 hover:text-accent-red transition-colors group">
                    <div className="p-2 bg-cream dark:bg-[#0a0e27] border-2 border-near-black dark:border-[var(--dm-border)] rounded-full group-hover:bg-accent-yellow transition-colors">
                      <Phone size={16} className="dark:text-[var(--dm-text)] group-hover:text-near-black" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[10px] font-black uppercase opacity-50 dark:text-[var(--dm-text)]">Phone</span>
                      <span className="text-xs font-bold dark:text-[var(--dm-text)]">{resume.phone}</span>
                    </div>
                  </a>
                </div>
                <div className="absolute -top-3 right-8 w-4 h-4 bg-white dark:bg-[var(--dm-surface)] border-l-4 border-t-4 border-near-black dark:border-[var(--dm-border)] rotate-45"></div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
