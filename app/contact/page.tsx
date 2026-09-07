import type { Metadata } from 'next';
import ContactCTA from '@/components/ContactCTA';
import { resume } from '@/data/resume';

export const metadata: Metadata = {
  title: `Contact | ${resume.name}`,
  description: `Get in touch with ${resume.name} — email, phone, GitHub, and LinkedIn.`,
};

export default function ContactPage() {
  return <ContactCTA standalone />;
}
