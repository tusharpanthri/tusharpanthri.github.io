import type { Metadata } from 'next';
import ProjectCard from '@/components/ProjectCard';
import ContactCTA from '@/components/ContactCTA';
import { resume } from '@/data/resume';

export const metadata: Metadata = {
  title: `Projects | ${resume.name}`,
  description: 'A selection of backend services, data platforms, and full-stack projects.',
};

export default function ProjectsPage() {
  const liveProjects = resume.projects.filter((project) => project.status === 'live');

  return (
    <>
      <section className="pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <p className="font-mono text-accent-red font-black uppercase tracking-widest mb-2">01 /</p>
          <h2 className="text-4xl md:text-6xl font-black uppercase mb-12 tracking-tighter">Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {liveProjects.map((project) => (
              <ProjectCard key={project.slug} {...project} />
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
