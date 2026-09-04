import React from 'react';
import { Download, Mail, Phone } from 'lucide-react';
import { Github, Linkedin } from '@/components/Icons';
import { resume } from '@/data/resume';

interface ContactCTAProps {
  standalone?: boolean;
}

const ContactCTA: React.FC<ContactCTAProps> = ({ standalone = false }) => {
  const Heading = standalone ? 'h1' : 'h2';

  return (
    <section
      className={`bg-accent-yellow ${
        standalone
          ? 'pt-32 pb-24'
          : 'py-24 border-t-4 border-near-black dark:border-[var(--dm-border)]'
      }`}
    >
      <div className="max-w-4xl mx-auto px-6 md:px-10 text-center">
        <Heading className="text-5xl md:text-8xl font-black uppercase mb-8 tracking-tighter">Get In Touch</Heading>
        <p className="text-xl md:text-2xl font-bold mb-12 max-w-2xl mx-auto uppercase">
          Currently looking for new opportunities and interesting projects to collaborate on.
        </p>

        <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto mb-10 text-left">
          <a
            href={`mailto:${resume.email}`}
            className="flex items-center gap-4 p-6 bg-white border-4 border-near-black rounded-2xl shadow-[6px_6px_0_#11100D] hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none transition-all"
          >
            <div className="p-3 bg-cream border-4 border-near-black rounded-full">
              <Mail size={20} />
            </div>
            <div>
              <span className="block text-[10px] font-black uppercase opacity-50">Email</span>
              <span className="block text-sm font-bold break-all">{resume.email}</span>
            </div>
          </a>

          <a
            href={`tel:${resume.phone}`}
            className="flex items-center gap-4 p-6 bg-white border-4 border-near-black rounded-2xl shadow-[6px_6px_0_#11100D] hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none transition-all"
          >
            <div className="p-3 bg-cream border-4 border-near-black rounded-full">
              <Phone size={20} />
            </div>
            <div>
              <span className="block text-[10px] font-black uppercase opacity-50">Phone</span>
              <span className="block text-sm font-bold">{resume.phone}</span>
            </div>
          </a>

          <a
            href={resume.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-6 bg-white border-4 border-near-black rounded-2xl shadow-[6px_6px_0_#11100D] hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none transition-all"
          >
            <div className="p-3 bg-cream border-4 border-near-black rounded-full">
              <Github size={20} />
            </div>
            <div>
              <span className="block text-[10px] font-black uppercase opacity-50">GitHub</span>
              <span className="block text-sm font-bold">@{resume.githubUsername}</span>
            </div>
          </a>

          <a
            href={resume.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-6 bg-white border-4 border-near-black rounded-2xl shadow-[6px_6px_0_#11100D] hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none transition-all"
          >
            <div className="p-3 bg-cream border-4 border-near-black rounded-full">
              <Linkedin size={20} />
            </div>
            <div>
              <span className="block text-[10px] font-black uppercase opacity-50">LinkedIn</span>
              <span className="block text-sm font-bold">Connect</span>
            </div>
          </a>
        </div>

        <a
          href="/resume.pdf"
          download="tusharpanthri_resume.pdf"
          className="inline-flex items-center gap-3 px-10 py-5 bg-near-black text-white rounded-full font-black uppercase text-xl shadow-[8px_8px_0_#FF4B2B] hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none transition-all"
        >
          <Download size={24} /> Download Resume
        </a>
      </div>
    </section>
  );
};

export default ContactCTA;
