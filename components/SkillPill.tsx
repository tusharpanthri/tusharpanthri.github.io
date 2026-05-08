"use client";
import React, { useState } from 'react';

interface SkillPillProps {
  name: string;
  usedIn: string;
}

const SkillPill: React.FC<SkillPillProps> = ({ name, usedIn }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span className="inline-block px-6 py-3 bg-cream border-4 border-near-black rounded-full font-mono font-bold text-lg shadow-[5px_5px_0_#11100D] hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none transition-all cursor-help">
        {name}
      </span>
      
      {isHovered && (
        <div className="absolute z-20 bottom-full left-1/2 -translate-x-1/2 mb-4 w-64 p-4 bg-accent-yellow border-4 border-near-black shadow-[6px_6px_0_#11100D] pointer-events-none animate-in fade-in slide-in-from-bottom-2 duration-200">
          <p className="text-sm font-bold uppercase tracking-tight text-near-black">
            <span className="text-accent-red">Leveraged in:</span><br />
            {usedIn}
          </p>
          <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-4 h-4 bg-accent-yellow border-r-4 border-b-4 border-near-black rotate-45"></div>
        </div>
      )}
    </div>
  );
};

export default SkillPill;
