'use client';

import { useState } from 'react';
import { Mail } from 'lucide-react';
import ContactModal from '@/components/ContactModal';

export default function ContactCTA({ standalone = false }: { standalone?: boolean }) {
  const [showContact, setShowContact] = useState(false);

  const button = (
    <button
      onClick={() => setShowContact(true)}
      className="flex items-center gap-3 px-10 py-5 bg-near-black text-white rounded-full font-black uppercase text-xl shadow-[8px_8px_0_#FF4B2B] hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none transition-all"
    >
      <Mail size={24} /> Send Me A Message
    </button>
  );

  if (standalone) {
    return (
      <section className="py-24 border-t-4 border-near-black dark:border-[var(--dm-border)]">
        <div className="max-w-3xl mx-auto px-6 md:px-10 text-center">
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-6">Get In Touch</h1>
          <p className="text-lg md:text-xl font-bold uppercase mb-10 text-muted dark:text-[var(--dm-muted)]">
            Drop a message and it lands straight in my inbox. I usually reply within a day.
          </p>
          <div className="flex justify-center">{button}</div>
        </div>
        {showContact && <ContactModal onClose={() => setShowContact(false)} />}
      </section>
    );
  }

  return (
    <>
      {button}
      {showContact && <ContactModal onClose={() => setShowContact(false)} />}
    </>
  );
}
