"use client";
import React, { useEffect, useState } from 'react';
import { MapPin } from 'lucide-react';
import { Github, Linkedin } from '@/components/Icons';
import { resume } from '@/data/resume';
import { getQuoteOfDay } from '@/lib/quotes';

const Hero = () => {
  const [quote, setQuote] = useState('');

  useEffect(() => {
    setQuote(getQuoteOfDay());
  }, []);

  return (
    <section className="pt-32 pb-20 max-w-7xl mx-auto px-6 md:px-10">
      <div className="flex flex-col lg:flex-row gap-12 items-start lg:items-center">
        <div className="flex flex-col gap-8 flex-1 animate-in fade-in slide-in-from-left duration-700">
          <div className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-[var(--dm-surface)] border-4 border-near-black dark:border-[var(--dm-border)] rounded-full w-fit shadow-[4px_4px_0_#11100D] dark:shadow-[4px_4px_0_var(--dm-shadow)] animate-bounce">
            <span className="w-3 h-3 bg-accent-red rounded-full animate-pulse"></span>
            <span className="font-mono text-sm font-bold uppercase tracking-wider">Available for new opportunities</span>
          </div>

          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter leading-[0.9] text-near-black dark:text-[var(--dm-text)] animate-in fade-in slide-in-from-top duration-1000 delay-200">
            {resume.name.split(' ')[0]} <br />
            {resume.name.split(' ')[1]}
          </h1>

          <p className="text-2xl md:text-3xl font-bold text-muted dark:text-[var(--dm-muted)] max-w-2xl leading-tight animate-in fade-in slide-in-from-bottom duration-700 delay-500">
            {resume.tagline}
          </p>

          <div className="flex flex-wrap gap-3 mt-4 animate-in fade-in zoom-in duration-500 delay-700">
            <div className="flex items-center gap-2 px-4 py-2 bg-cream dark:bg-[var(--dm-surface)] border-4 border-near-black dark:border-[var(--dm-border)] rounded-full font-mono text-sm font-bold uppercase">
              <MapPin size={16} /> {resume.location}
            </div>
            <a
              href={resume.github}
              target="_blank"
              className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-[var(--dm-surface)] border-4 border-near-black dark:border-[var(--dm-border)] rounded-full font-mono text-sm font-bold uppercase hover:bg-accent-yellow hover:text-near-black transition-colors"
            >
              <Github size={16} /> GitHub
            </a>
            <a
              href={resume.linkedin}
              target="_blank"
              className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-[var(--dm-surface)] border-4 border-near-black dark:border-[var(--dm-border)] rounded-full font-mono text-sm font-bold uppercase hover:bg-accent-yellow hover:text-near-black transition-colors"
            >
              <Linkedin size={16} /> LinkedIn
            </a>
          </div>

          {quote && (
            <div className="pt-6 border-t-2 border-muted dark:border-[var(--dm-border)]">
              <p className="text-lg italic text-muted dark:text-[var(--dm-muted)] max-w-2xl leading-relaxed">
                &ldquo;{quote}&rdquo;
              </p>
              <p className="text-xs uppercase font-mono text-muted dark:text-[var(--dm-muted)] mt-2 opacity-60">— Stoic wisdom</p>
            </div>
          )}
        </div>

        {/* Profile Photo */}
        <div className="relative group mx-auto lg:mx-0">
          <div className="absolute inset-0 bg-accent-yellow border-4 border-near-black dark:border-[var(--dm-border)] translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-all"></div>
          <div className="relative w-64 h-64 md:w-80 md:h-80 border-4 border-near-black dark:border-[var(--dm-border)] bg-white overflow-hidden shadow-[8px_8px_0_#11100D] dark:shadow-[8px_8px_0_var(--dm-shadow)] group-hover:translate-x-[4px] group-hover:translate-y-[4px] group-hover:shadow-none transition-all">
             {resume.profileImage && (
               <img 
                 src={resume.profileImage} 
                 alt={resume.name}
                 className="w-full h-full object-cover"
               />
             )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
