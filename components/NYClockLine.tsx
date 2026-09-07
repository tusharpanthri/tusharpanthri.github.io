'use client';

import { useEffect, useState } from 'react';

export default function NYClockLine() {
  const [label, setLabel] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const time = new Intl.DateTimeFormat('en-US', {
        timeZone: 'America/New_York', hour: 'numeric', minute: '2-digit', hour12: true,
      }).format(now);
      const hour = Number(new Intl.DateTimeFormat('en-US', {
        timeZone: 'America/New_York', hour: 'numeric', hour12: false,
      }).format(now));
      const awake = hour >= 8 && hour < 24;
      setLabel(`${time} NY · ${awake ? 'Likely awake' : 'Probably asleep'}`);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return label ? <span>{label}</span> : null;
}
