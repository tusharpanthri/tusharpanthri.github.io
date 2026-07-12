"use client";
import React, { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import { Github } from '@/components/Icons';

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  link: string;
  liveLink?: string;
  image?: string;
  details?: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, tech, link, liveLink, image, details }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="bg-white dark:bg-[var(--dm-surface)] border-4 border-near-black dark:border-[var(--dm-border)] flex flex-col shadow-[7px_7px_0_#11100D] dark:shadow-[7px_7px_0_var(--dm-shadow)] hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none transition-all group overflow-hidden relative before:content-[''] before:absolute before:top-0 before:right-0 before:z-10 before:w-[30px] before:h-[30px] before:bg-near-black before:[clip-path:polygon(100%_0,0_0,100%_100%)] after:content-[''] after:absolute after:top-1 after:right-1 after:z-10 after:w-[22px] after:h-[22px] after:bg-accent-yellow after:[clip-path:polygon(100%_0,0_0,100%_100%)]"
      style={{ clipPath: 'polygon(0 0, calc(100% - 30px) 0, 100% 30px, 100% 100%, 0 100%)' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => window.open(link, '_blank')}
    >
      {/* Project Image Placeholder */}
      <div className="h-48 md:h-64 border-b-4 border-near-black dark:border-[var(--dm-border)] bg-cream relative overflow-hidden">
        {image ? (
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center font-black text-4xl opacity-10 uppercase select-none">
            {title}
          </div>
        )}

        {/* Details Overlay on Hover */}
        <div className={`absolute inset-0 bg-accent-yellow/95 text-near-black p-6 md:p-8 flex flex-col justify-center transition-all duration-300 ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-full'}`}>
          <h4 className="text-xl font-black uppercase mb-4 border-b-2 border-near-black pb-2">Technical Details</h4>
          <ul className="grid gap-2">
            {details?.map((detail, i) => (
              <li key={i} className="flex gap-2 text-sm font-bold uppercase leading-tight">
                <span className="text-accent-red">/</span> {detail}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="p-6 md:p-8 flex flex-col flex-1">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight">{title}</h3>
          <div className="flex gap-2" onClick={(e) => e.stopPropagation()}>
            {liveLink && (
              <a
                href={liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-accent-yellow text-near-black border-4 border-near-black dark:border-[var(--dm-border)] rounded-full shadow-[4px_4px_0_#11100D] dark:shadow-[4px_4px_0_var(--dm-shadow)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all"
                title="Live Demo"
              >
                <ExternalLink size={20} />
              </a>
            )}
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white dark:bg-[var(--dm-surface)] border-4 border-near-black dark:border-[var(--dm-border)] rounded-full shadow-[4px_4px_0_#11100D] dark:shadow-[4px_4px_0_var(--dm-shadow)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all"
              title="GitHub Repo"
            >
              <Github size={20} />
            </a>
          </div>
        </div>
        <p className="text-muted dark:text-[var(--dm-muted)] font-medium mb-6 leading-relaxed flex-1">
          {description}
        </p>
        <div className="flex flex-wrap gap-2 mt-auto">
          {tech.map((item) => (
            <span key={item} className="px-3 py-1 bg-cream dark:bg-[#0a0e27] dark:text-[var(--dm-text)] border-2 border-near-black dark:border-[var(--dm-border)] text-xs font-mono font-bold uppercase">
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Click Hint */}
      <div className="bg-near-black text-white text-[10px] font-mono font-black py-1 px-3 absolute bottom-0 right-0 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
        Click for GitHub
      </div>
    </div>
  );
};

export default ProjectCard;
