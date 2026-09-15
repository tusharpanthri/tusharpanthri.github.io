'use client';

import { createContext, useContext, useState } from 'react';

interface SiteState {
  terminalOpen: boolean;
  setTerminalOpen: (value: boolean) => void;
}

const SiteContext = createContext<SiteState | null>(null);

export function useSiteState() {
  const context = useContext(SiteContext);
  if (!context) throw new Error('useSiteState must be used within SiteStateProvider');
  return context;
}

export function SiteStateProvider({ children }: { children: React.ReactNode }) {
  const [terminalOpen, setTerminalOpen] = useState(false);
  return <SiteContext.Provider value={{ terminalOpen, setTerminalOpen }}>{children}</SiteContext.Provider>;
}
