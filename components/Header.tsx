"use client";
import React, { useEffect, useState } from 'react';
import { resume } from '@/data/resume';
import { FileText, Mail, Phone, ChevronDown, SquareTerminal, Contrast } from 'lucide-react';
import { useSiteState } from '@/lib/site-context';
import { printResume } from '@/lib/print';

const NAV_ITEMS = ['Experience', 'Projects', 'Education', 'Certifications'];

const Header = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const { setTerminalOpen, inkMode, setInkMode } = useSiteState();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 140;
      let current = '';
      for (const item of NAV_ITEMS) {
        const el = document.getElementById(item.toLowerCase());
        if (el && el.offsetTop <= scrollPos) {
          current = item.toLowerCase();
        }
      }
      setActiveSection(current);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handlePrint = () => {
    printResume();
  };

  return (
    <header className="no-print fixed top-0 left-0 right-0 z-50 bg-cream/80 backdrop-blur-md border-b-4 border-near-black animate-in fade-in slide-in-from-top duration-500">
      <div className="max-w-7xl mx-auto px-6 md:px-10 h-20 flex items-center justify-between">
        <a href="#" className="text-2xl font-black uppercase tracking-tighter hover:text-accent-red transition-colors">
          {resume.name.split(' ').map(n => n[0]).join('')}.
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={`text-sm font-black uppercase tracking-wider transition-colors ${
                activeSection === item.toLowerCase() ? 'text-accent-red' : 'hover:text-accent-red'
              }`}
            >
              {item}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3 md:gap-6">
          {/* Terminal Button */}
          <button
            onClick={() => setTerminalOpen(true)}
            className="p-3 bg-white border-4 border-near-black rounded-full shadow-[4px_4px_0_#11100D] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all"
            title="Open terminal (press / )"
            aria-label="Open terminal"
          >
            <SquareTerminal size={16} />
          </button>

          {/* Ink Mode Toggle */}
          <button
            onClick={() => setInkMode(!inkMode)}
            className={`p-3 border-4 border-near-black rounded-full shadow-[4px_4px_0_#11100D] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all ${
              inkMode ? 'bg-near-black text-cream' : 'bg-white'
            }`}
            title="Toggle ink mode"
            aria-label="Toggle ink mode"
          >
            <Contrast size={16} />
          </button>

          {/* Resume / Print Button */}
          <button
            onClick={handlePrint}
            className="flex items-center gap-2 px-6 py-2 bg-white border-4 border-near-black rounded-full font-black uppercase text-xs shadow-[4px_4px_0_#11100D] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all"
          >
            <FileText size={14} /> Resume
          </button>

          {/* Contact Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsContactOpen(!isContactOpen)}
              className="flex items-center gap-2 px-6 py-2 bg-accent-yellow border-4 border-near-black rounded-full font-black uppercase text-xs shadow-[4px_4px_0_#11100D] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all"
            >
              Contact Me <ChevronDown size={14} className={`transition-transform ${isContactOpen ? 'rotate-180' : ''}`} />
            </button>

            {isContactOpen && (
              <div className="absolute top-full right-0 mt-4 w-64 bg-white border-4 border-near-black shadow-[8px_8px_0_#11100D] p-4 animate-in fade-in zoom-in-95 duration-200">
                <div className="space-y-4">
                  <a href={`mailto:${resume.email}`} className="flex items-center gap-3 hover:text-accent-red transition-colors group">
                    <div className="p-2 bg-cream border-2 border-near-black rounded-full group-hover:bg-accent-yellow transition-colors">
                      <Mail size={16} />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[10px] font-black uppercase opacity-50">Email</span>
                      <span className="text-xs font-bold break-all">{resume.email}</span>
                    </div>
                  </a>
                  <a href={`tel:${resume.phone}`} className="flex items-center gap-3 hover:text-accent-red transition-colors group">
                    <div className="p-2 bg-cream border-2 border-near-black rounded-full group-hover:bg-accent-yellow transition-colors">
                      <Phone size={16} />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[10px] font-black uppercase opacity-50">Phone</span>
                      <span className="text-xs font-bold">{resume.phone}</span>
                    </div>
                  </a>
                </div>
                <div className="absolute -top-3 right-8 w-4 h-4 bg-white border-l-4 border-t-4 border-near-black rotate-45"></div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
