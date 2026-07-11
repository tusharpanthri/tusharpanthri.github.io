"use client";
import React from 'react';
import { resume } from '@/data/resume';

const Ticker = () => {
  const items = resume.tickerItems ?? [];
  if (items.length === 0) return null;

  const renderItems = (ariaHidden: boolean) => (
    <div className="flex items-center shrink-0" aria-hidden={ariaHidden}>
      {items.map((item, i) => (
        <span key={i} className="flex items-center">
          <span className="px-6 py-4 font-mono text-sm md:text-base font-black uppercase tracking-widest text-cream whitespace-nowrap">
            {item}
          </span>
          <span className="text-accent-yellow text-sm">&#9670;</span>
        </span>
      ))}
    </div>
  );

  return (
    <div className="no-print border-y-4 border-near-black bg-near-black overflow-hidden">
      <div
        className="flex w-max"
        style={{ animation: 'marqueeScroll 22s linear infinite' }}
      >
        {renderItems(false)}
        {renderItems(true)}
      </div>
    </div>
  );
};

export default Ticker;
