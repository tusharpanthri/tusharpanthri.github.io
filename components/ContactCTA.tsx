'use client';

import { useState } from 'react';
import { Mail } from 'lucide-react';
import ContactModal from '@/components/ContactModal';

export default function ContactCTA() {
  const [showContact, setShowContact] = useState(false);

  return (
    <>
      <button
        onClick={() => setShowContact(true)}
        className="flex items-center gap-3 px-10 py-5 bg-near-black text-white rounded-full font-black uppercase text-xl shadow-[8px_8px_0_#FF4B2B] hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none transition-all"
      >
        <Mail size={24} /> Send Me A Message
      </button>
      {showContact && <ContactModal onClose={() => setShowContact(false)} />}
    </>
  );
}
