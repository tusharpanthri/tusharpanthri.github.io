"use client";
import React, { useEffect, useState } from 'react';
import { Mail, MapPin, ArrowRight } from 'lucide-react';
import { Github, Linkedin } from '@/components/Icons';
import { resume } from '@/data/resume';
import { getDailyQuote } from '@/lib/quotes';

const Hero = () => {
  const [quote, setQuote] = useState('');

  useEffect(() => {
    setQuote(getDailyQuote());
  }, []);

  return (
    <section className="pt-32 pb-20 max-w-7xl mx-auto px-6 md:px-10">
      <div className="flex flex-col lg:flex-row gap-12 items-start lg:items-center">
        <div className="flex flex-col gap-8 flex-1 animate-in fade-in slide-in-from-left duration-700">
          <div className="flex items-center gap-2 px-4 py-2 bg-white border-4 border-near-black rounded-full w-fit shadow-[4px_4px_0_#11100D] animate-bounce">
            <span className="w-3 h-3 bg-accent-red rounded-full animate-pulse"></span>
            <span className="font-mono text-sm font-bold uppercase tracking-wider">Available for new opportunities</span>
          </div>

          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter leading-[0.9] text-near-black animate-in fade-in slide-in-from-top duration-1000 delay-200">
            {resume.name.split(' ')[0]} <br />
            {resume.name.split(' ')[1]}
          </h1>

          <p className="text-2xl md:text-3xl font-bold text-muted max-w-2xl leading-tight animate-in fade-in slide-in-from-bottom duration-700 delay-500">
            {resume.tagline}
          </p>

          <div className="flex flex-wrap gap-3 mt-4 animate-in fade-in zoom-in duration-500 delay-700">
            <div className="flex items-center gap-2 px-4 py-2 bg-cream border-4 border-near-black rounded-full font-mono text-sm font-bold uppercase">
              <MapPin size={16} /> {resume.location}
            </div>
            <a 
              href={resume.github}
              target="_blank"
              className="flex items-center gap-2 px-4 py-2 bg-white border-4 border-near-black rounded-full font-mono text-sm font-bold uppercase hover:bg-accent-yellow transition-colors"
            >
              <Github size={16} /> GitHub
            </a>
            <a
              href={resume.linkedin}
              target="_blank"
              className="flex items-center gap-2 px-4 py-2 bg-white border-4 border-near-black rounded-full font-mono text-sm font-bold uppercase hover:bg-accent-yellow transition-colors"
            >
              <Linkedin size={16} /> LinkedIn
            </a>
          </div>

          {quote && (
            <p className="max-w-xl pt-4 mt-2 border-t-2 border-near-black/20 italic text-muted text-sm md:text-base font-medium animate-in fade-in duration-1000">
              &ldquo;{quote}&rdquo;
            </p>
          )}
        </div>

        {/* Profile Photo */}
        <div className="relative group mx-auto lg:mx-0">
          <div className="absolute inset-0 bg-accent-yellow border-4 border-near-black translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-all"></div>
          <div className="relative w-64 h-64 md:w-80 md:h-80 border-4 border-near-black bg-white overflow-hidden shadow-[8px_8px_0_#11100D] group-hover:translate-x-[4px] group-hover:translate-y-[4px] group-hover:shadow-none transition-all">
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
