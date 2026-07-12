import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ResumeSection from '@/components/ResumeSection';
import ProjectCard from '@/components/ProjectCard';
import SkillPill from '@/components/SkillPill';
import DynamicGreeting from '@/components/DynamicGreeting';
import Ticker from '@/components/Ticker';
import GitHubStats from '@/components/GitHubStats';
import NYClock from '@/components/NYClock';
import { resume } from '@/data/resume';
import { Mail } from 'lucide-react';
import { Github, Linkedin } from '@/components/Icons';

export default function Home() {
  return (
    <main className="min-h-screen selection:bg-accent-yellow">
      <Header />

      <Hero />

      <GitHubStats />

      <Ticker />

      {/* Experience Section */}
      <ResumeSection title="Experience" items={resume.experience} index={1} />

      {/* Projects Section */}
      <section className="py-16 border-t-4 border-near-black dark:border-[var(--dm-border)]" id="projects">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <p className="font-mono text-accent-red font-black uppercase tracking-widest mb-2">02 /</p>
          <h2 className="text-4xl md:text-6xl font-black uppercase mb-12 tracking-tighter">Selected Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {resume.projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 border-t-4 border-near-black dark:border-[var(--dm-border)] bg-white dark:bg-[var(--dm-surface)]" id="skills">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <p className="font-mono text-accent-red font-black uppercase tracking-widest mb-2">03 /</p>
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
      <ResumeSection title="Education" items={resume.education} index={4} />

      {/* Certifications Section */}
      <ResumeSection
        title="Certifications"
        items={resume.certifications.map(cert => ({
          company: cert.issuer,
          role: cert.name,
          period: "",
          logo: cert.logo,
          logoFit: "contain"
        }))}
        index={5}
      />

      {/* Contact Section */}
      <section className="py-24 border-t-4 border-near-black dark:border-[var(--dm-border)] bg-accent-yellow" id="contact">
        <div className="max-w-7xl mx-auto px-6 md:px-10 text-center">
          <h2 className="text-5xl md:text-8xl font-black uppercase mb-8 tracking-tighter">Let&apos;s Build Something</h2>
          <p className="text-xl md:text-2xl font-bold mb-8 max-w-2xl mx-auto uppercase">
            Currently looking for new opportunities and interesting projects to collaborate on.
          </p>

          <div className="flex justify-center mb-10">
            <NYClock />
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            <a 
              href={`mailto:${resume.email}`}
              className="flex items-center gap-3 px-10 py-5 bg-near-black text-white rounded-full font-black uppercase text-xl shadow-[8px_8px_0_#FF4B2B] hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none transition-all"
            >
              <Mail size={24} /> Email Me
            </a>
            <div className="flex gap-4">
              <a 
                href={resume.github}
                target="_blank"
                className="p-5 bg-white border-4 border-near-black rounded-full shadow-[6px_6px_0_#11100D] hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none transition-all"
              >
                <Github size={28} />
              </a>
              <a 
                href={resume.linkedin}
                target="_blank"
                className="p-5 bg-white border-4 border-near-black rounded-full shadow-[6px_6px_0_#11100D] hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none transition-all"
              >
                <Linkedin size={28} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 border-t-4 border-near-black dark:border-[var(--dm-border)] bg-cream dark:bg-[var(--dm-surface)] text-center font-mono font-bold uppercase tracking-widest px-6 text-near-black dark:text-[var(--dm-text)]">
        &copy; {new Date().getFullYear()} {resume.name} <DynamicGreeting />
        <div className="no-print text-[10px] font-bold opacity-40 tracking-widest mt-3 normal-case">
          Press / for the terminal
        </div>
      </footer>
    </main>
  );
}
