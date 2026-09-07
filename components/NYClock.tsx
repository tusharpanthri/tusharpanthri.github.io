"use client";
import React, { useEffect, useState } from 'react';

function getNYTime(): { time: string; hour: number } {
  const now = new Date();
  const time = new Intl.DateTimeFormat('en-US', {
    timeZone: 'America/New_York',
    hour: 'numeric',
    minute: '2-digit',
    hour12: true
  }).format(now);

  const hour = parseInt(
    new Intl.DateTimeFormat('en-US', {
      timeZone: 'America/New_York',
      hour: 'numeric',
      hour12: false
    }).format(now),
    10
  );

  return { time, hour };
}

const NYClock = () => {
  const [state, setState] = useState<{ time: string; hour: number } | null>(null);

  useEffect(() => {
    setState(getNYTime());
    const interval = setInterval(() => setState(getNYTime()), 1000);
    return () => clearInterval(interval);
  }, []);

  if (!state) return null;

  const isAwake = state.hour >= 8 && state.hour < 24;

  return (
    <div className="inline-flex items-center gap-3 px-5 py-2 bg-white border-4 border-near-black rounded-full font-mono text-sm font-bold uppercase shadow-[4px_4px_0_#11100D]">
      <span className={`w-2.5 h-2.5 rounded-full ${isAwake ? 'bg-green-500 animate-pulse' : 'bg-muted'}`}></span>
      {state.time} NY &middot; {isAwake ? 'Likely awake' : 'Probably asleep'}
    </div>
  );
};

export default NYClock;
