"use client";
import React, { createContext, useContext, useState } from 'react';

interface SiteState {
  terminalOpen: boolean;
  setTerminalOpen: (v: boolean) => void;
}

const SiteContext = createContext<SiteState | null>(null);

export function useSiteState() {
  const ctx = useContext(SiteContext);
  if (!ctx) throw new Error('useSiteState must be used within SiteStateProvider');
  return ctx;
}

export function SiteStateProvider({ children }: { children: React.ReactNode }) {
  const [terminalOpen, setTerminalOpen] = useState(false);

  return (
    <SiteContext.Provider value={{ terminalOpen, setTerminalOpen }}>
      {children}
    </SiteContext.Provider>
  );
}
