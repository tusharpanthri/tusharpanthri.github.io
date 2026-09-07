'use client';

import { useState } from 'react';
import { Send } from 'lucide-react';
import ContactModal from '@/components/ContactModal';

export default function ContactCTA({ standalone = false }: { standalone?: boolean }) {
  const [showContact, setShowContact] = useState(false);

  const button = (
    <button
      onClick={() => setShowContact(true)}
      className="flex items-center justify-center gap-3 w-full sm:w-auto sm:min-w-[320px] px-8 py-[19px] bg-near-black text-accent-yellow font-bold text-[17px]"
    >
      <Send size={17} /> Send me a message
    </button>
  );

  if (standalone) {
    return (
      <section className="py-24">
        <div className="max-w-[1080px] mx-auto px-6 sm:px-10">
          <p className="font-mono text-[15px] font-bold uppercase tracking-[.2em] mb-6">Contact</p>
          <h1 className="text-[40px] sm:text-[54px] font-extrabold tracking-[-.035em] mb-6">Get in touch</h1>
          <p className="text-[19px] leading-[1.5] mb-10 text-muted dark:text-[var(--dm-muted)] [text-wrap:pretty]">
            Drop a message and it lands straight in my inbox. I usually reply within a day.
          </p>
          <div className="flex">{button}</div>
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
