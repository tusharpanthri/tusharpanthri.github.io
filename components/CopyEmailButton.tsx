'use client';

import { useEffect, useRef, useState } from 'react';
import { Copy } from 'lucide-react';
import { resume } from '@/data/resume';

export default function CopyEmailButton() {
  const [label, setLabel] = useState(resume.email);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const mountedRef = useRef(false);

  useEffect(() => {
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  async function copyEmail() {
    let result = 'copied to clipboard ✓';
    try {
      await navigator.clipboard.writeText(resume.email);
    } catch {
      result = 'copy failed — use mail app';
    }
    if (!mountedRef.current) return;
    setLabel(result);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setLabel(resume.email), 2000);
  }

  return (
    <button onClick={copyEmail} className="bg-transparent border-2 border-near-black px-4 sm:px-8 py-[13px] font-mono text-[13px] sm:text-[15px] font-semibold w-full sm:w-auto sm:min-w-[320px] flex items-center justify-center gap-3">
      <Copy size={17} className="shrink-0" /><span aria-live="polite">{label}</span>
    </button>
  );
}
