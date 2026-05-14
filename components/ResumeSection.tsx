"use client";
import React, { useState, useRef } from 'react';

interface Course {
  name: string;
  description: string;
}

interface ResumeItem {
  company?: string;
  school?: string;
  role?: string;
  degree?: string;
  period: string;
  description?: string;
  bullets?: string[];
  logo?: string;
  courses?: Course[];
}

interface ResumeSectionProps {
  title: string;
  items: ResumeItem[];
}

const ResumeSection: React.FC<ResumeSectionProps> = ({ title, items }) => {
  const [openIndices, setOpenIndices] = useState<number[]>([]);
  const timeoutRefs = useRef<{ [key: number]: NodeJS.Timeout }>({});

  const handleMouseEnter = (index: number) => {
    if (timeoutRefs.current[index]) {
      clearTimeout(timeoutRefs.current[index]);
    }
    setOpenIndices(prev => prev.includes(index) ? prev : [...prev, index]);
  };

  const handleMouseLeave = (index: number) => {
    // Add a small delay before closing to make it more stable
    timeoutRefs.current[index] = setTimeout(() => {
      setOpenIndices(prev => prev.filter(i => i !== index));
    }, 300); 
  };

  return (
    <section className="py-16 border-t-4 border-near-black" id={title.toLowerCase()}>
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <h2 className="text-4xl md:text-6xl font-black uppercase mb-12 tracking-tighter">{title}</h2>
        <div className="grid gap-8">
          {items.map((item, index) => {
            const isOpen = openIndices.includes(index);

            return (
              <div 
                key={index} 
                className="bg-white border-4 border-near-black p-6 md:p-8 shadow-[7px_7px_0_#11100D] transition-all relative"
                onMouseLeave={() => handleMouseLeave(index)}
                onMouseEnter={() => handleMouseEnter(index)}
              >
                {/* Trigger Area - Increased proximity area */}
                <div 
                  className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 cursor-help group/header pb-4"
                >
                  <div className="flex gap-4 items-center">
                    {item.logo && (
                      <div className="w-12 h-12 md:w-16 md:h-16 border-4 border-near-black bg-white flex-shrink-0 overflow-hidden group-hover/header:rotate-3 transition-transform flex items-center justify-center p-2">
                        <img src={item.logo} alt="" className="w-full h-full object-contain" />
                      </div>
                    )}
                    <div>
                      <h3 className="text-2xl font-black uppercase tracking-tight group-hover/header:text-accent-red transition-colors">
                        {item.company || item.school}
                      </h3>
                      <p className="text-xl font-bold text-accent-red group-hover/header:text-near-black transition-colors">
                        {item.role || item.degree}
                      </p>
                    </div>
                  </div>
                  <div className="px-4 py-1 bg-accent-yellow border-4 border-near-black rounded-full text-sm font-mono font-bold w-fit">
                    {item.period}
                  </div>
                </div>
                
                {item.description && (
                  <p className="text-muted font-medium leading-relaxed max-w-3xl">
                    {item.description}
                  </p>
                )}

                {/* Content Area - Expandable */}
                <div 
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[1000px] opacity-100 mt-6' : 'max-h-0 opacity-0'}`}
                >
                  {/* Bullets (Experience/General) */}
                  {item.bullets && (
                    <ul className="grid gap-2">
                      {item.bullets.map((bullet, i) => (
                        <li key={i} className="flex gap-3 text-muted font-medium leading-relaxed">
                          <span className="text-accent-red font-black mt-1">/</span>
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Courses (Education) */}
                  {item.courses && (
                    <div className="border-t-4 border-near-black pt-6">
                      <h4 className="font-black uppercase text-sm mb-4">Key Courses & Insights</h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        {item.courses.map((course, i) => (
                          <div key={i} className="bg-cream border-4 border-near-black p-4 shadow-[4px_4px_0_#11100D]">
                            <h5 className="font-black uppercase text-sm mb-1">{course.name}</h5>
                            <p className="text-xs font-bold text-muted uppercase tracking-tight">{course.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {!isOpen && (
                  <div className="text-[10px] font-black uppercase opacity-20 mt-4 animate-pulse">
                    Hover for more info
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
