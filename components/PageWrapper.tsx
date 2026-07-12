"use client";
import React, { useEffect } from 'react';
import Terminal from './Terminal';
import { SiteStateProvider } from '@/lib/site-context';

type TimeBucket = 'morning' | 'day' | 'evening' | 'night';

function getTimeBucket(hour: number): TimeBucket {
  if (hour >= 5 && hour < 11) return 'morning';
  if (hour >= 11 && hour < 17) return 'day';
  if (hour >= 17 && hour < 21) return 'evening';
  return 'night';
}

const BUCKET_STYLES: Record<TimeBucket, { background: string; dot: string }> = {
  morning: { background: '#F2EEDE', dot: 'rgba(17, 16, 13, 0.55)' },
  day: { background: '#EEE9D8', dot: 'rgba(17, 16, 13, 0.5)' },
  evening: { background: '#E8E0C8', dot: 'rgba(17, 16, 13, 0.45)' },
  night: { background: '#DED6BC', dot: 'rgba(17, 16, 13, 0.4)' }
};

const GRAIN_SVG =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E";

function PageInner({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const applyTint = () => {
      if (document.documentElement.getAttribute('data-theme') === 'dark') return;
      const bucket = getTimeBucket(new Date().getHours());
      const { background, dot } = BUCKET_STYLES[bucket];
      document.documentElement.style.setProperty('--background', background);
      document.documentElement.style.setProperty('--dot-color', dot);
    };
    applyTint();
    const interval = setInterval(applyTint, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {children}

      <div
        className="no-print grain-overlay fixed inset-0 pointer-events-none"
        style={{
          zIndex: 200,
          mixBlendMode: 'multiply',
          backgroundImage: `url("${GRAIN_SVG}")`
        }}
      />

      <Terminal />
    </>
  );
}

export default function PageWrapper({ children }: { children: React.ReactNode }) {
  return (
    <SiteStateProvider>
      <PageInner>{children}</PageInner>
    </SiteStateProvider>
  );
}
