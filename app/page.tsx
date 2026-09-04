import type { Metadata } from 'next';
import ResumeSection from '@/components/ResumeSection';
import SkillPill from '@/components/SkillPill';
import ContactCTA from '@/components/ContactCTA';
import { resume } from '@/data/resume';

export const metadata: Metadata = {
  title: `${resume.name} | ${resume.role}`,
  description: resume.summary,
};

export default function Home() {
  return (
    <div className="pt-32">
      {/* Experience Section */}
      <ResumeSection title="Experience" items={resume.experience} index={1} />

      {/* Skills Section */}
      <section className="py-16 border-t-4 border-near-black dark:border-[var(--dm-border)] bg-white dark:bg-[var(--dm-surface)]" id="skills">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <p className="font-mono text-accent-red font-black uppercase tracking-widest mb-2">02 /</p>
          <h2 className="text-4xl md:text-6xl font-black uppercase mb-12 tracking-tighter">Skills & Expertise</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {resume.skillGroups.map((group) => (
              <div key={group.category} className="space-y-6">
                <h3 className="text-2xl font-black uppercase border-b-4 border-near-black dark:border-[var(--dm-border)] pb-2 inline-block">
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-4">
                  {group.skills.map((skill) => (
                    <SkillPill key={skill.name} name={skill.name} usedIn={skill.usedIn} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <ResumeSection title="Education" items={resume.education} index={3} />

      {/* Certifications Section */}
      <ResumeSection
        title="Certifications"
        items={resume.certifications.map(cert => ({
          company: cert.issuer,
          role: cert.name,
          period: "",
          logo: cert.logo,
          logoFit: "contain" as const
        }))}
        index={4}
      />

      <ContactCTA />
    </div>
  );
}
