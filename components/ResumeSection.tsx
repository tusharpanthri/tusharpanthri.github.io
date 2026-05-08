"use client";
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

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
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleCourses = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 border-t-4 border-near-black" id={title.toLowerCase()}>
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <h2 className="text-4xl md:text-6xl font-black uppercase mb-12 tracking-tighter">{title}</h2>
        <div className="grid gap-8">
          {items.map((item, index) => (
            <div 
              key={index} 
              className="bg-white border-4 border-near-black p-6 md:p-8 shadow-[7px_7px_0_#11100D] hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none transition-all"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6 gap-4">
                <div className="flex gap-4 items-center">
                  {item.logo && (
                    <div className="w-12 h-12 md:w-16 md:h-16 border-4 border-near-black bg-accent-yellow flex-shrink-0 overflow-hidden">
                      <img src={item.logo} alt="" className="w-full h-full object-cover" />
                    </div>
                  )}
                  <div>
                    <h3 className="text-2xl font-black uppercase tracking-tight">
                      {item.company || item.school}
                    </h3>
                    <p className="text-xl font-bold text-accent-red">
                      {item.role || item.degree}
                    </p>
                  </div>
                </div>
                <div className="px-4 py-1 bg-accent-yellow border-4 border-near-black rounded-full text-sm font-mono font-bold w-fit">
                  {item.period}
                </div>
              </div>
              
              {item.description && (
                <p className="text-muted font-medium leading-relaxed max-w-3xl mb-4">
                  {item.description}
                </p>
              )}

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

              {/* Courses Toggle for Education */}
              {item.courses && (
                <div className="mt-8 border-t-4 border-near-black pt-4">
                  <button 
                    onClick={() => toggleCourses(index)}
                    className="flex items-center gap-2 font-black uppercase text-sm hover:text-accent-red transition-colors"
                  >
                    {openIndex === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    {openIndex === index ? 'Hide Courses' : 'View Key Courses'}
                  </button>
                  
                  {openIndex === index && (
                    <div className="mt-6 grid gap-4 animate-in fade-in slide-in-from-top-2 duration-300">
                      {item.courses.map((course, i) => (
                        <div key={i} className="bg-cream border-4 border-near-black p-4 shadow-[4px_4px_0_#11100D]">
                          <h4 className="font-black uppercase text-sm mb-1">{course.name}</h4>
                          <p className="text-xs font-bold text-muted uppercase tracking-tight">{course.description}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
