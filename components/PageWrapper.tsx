'use client';

import Terminal from './Terminal';
import { SiteStateProvider } from '@/lib/site-context';

export default function PageWrapper({ children }: { children: React.ReactNode }) {
  return (
    <SiteStateProvider>
      {children}
      <Terminal />
    </SiteStateProvider>
  );
}
