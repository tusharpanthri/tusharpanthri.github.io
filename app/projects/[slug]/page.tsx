import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ExternalLink, ArrowLeft } from 'lucide-react';
import { Github } from '@/components/Icons';
import ContactCTA from '@/components/ContactCTA';
import { resume } from '@/data/resume';

export const dynamicParams = false;

export function generateStaticParams() {
  return resume.projects
    .filter((project) => project.status === 'live')
    .map((project) => ({ slug: project.slug }));
}

function getProject(slug: string) {
  return resume.projects.find((project) => project.slug === slug && project.status === 'live');
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    return { title: `Project Not Found | ${resume.name}` };
  }

  return {
    title: `${project.title} | Projects | ${resume.name}`,
    description: project.description,
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  return (
    <>
    <section className="pt-32 pb-16">
      <div className="max-w-4xl mx-auto px-6 md:px-10">
        <Link
          href="/projects/"
          className="inline-flex items-center gap-2 font-black uppercase text-sm tracking-wider mb-10 hover:text-accent-red transition-colors"
        >
          <ArrowLeft size={16} /> All Projects
        </Link>

        <h1 className="text-5xl md:text-7xl font-black uppercase mb-6 tracking-tighter">{project.title}</h1>

        <p className="text-xl md:text-2xl font-bold text-muted dark:text-[var(--dm-muted)] mb-8 leading-relaxed">
          {project.description}
        </p>

        {(project.liveUrl || project.repoUrl) && (
          <div className="flex flex-wrap gap-4 mb-10">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-accent-yellow text-near-black border-4 border-near-black dark:border-[var(--dm-border)] rounded-full font-black uppercase text-sm shadow-[4px_4px_0_#11100D] dark:shadow-[4px_4px_0_var(--dm-shadow)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all"
              >
                <ExternalLink size={18} /> Live Demo
              </a>
            )}
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-white dark:bg-[var(--dm-surface)] border-4 border-near-black dark:border-[var(--dm-border)] rounded-full font-black uppercase text-sm shadow-[4px_4px_0_#11100D] dark:shadow-[4px_4px_0_var(--dm-shadow)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all"
              >
                <Github size={18} /> Repository
              </a>
            )}
          </div>
        )}

        <div className="flex flex-wrap gap-2 mb-12">
          {project.tech.map((item) => (
            <span key={item} className="px-3 py-1 bg-cream dark:bg-[#0a0e27] dark:text-[var(--dm-text)] border-2 border-near-black dark:border-[var(--dm-border)] text-xs font-mono font-bold uppercase">
              {item}
            </span>
          ))}
        </div>

        {project.details && project.details.length > 0 && (
          <div className="bg-white dark:bg-[var(--dm-surface)] border-4 border-near-black dark:border-[var(--dm-border)] p-6 md:p-8 shadow-[7px_7px_0_#11100D] dark:shadow-[7px_7px_0_var(--dm-shadow)]">
            <h2 className="text-xl font-black uppercase mb-4 border-b-4 border-near-black dark:border-[var(--dm-border)] pb-2">
              Technical Details
            </h2>
            <ul className="grid gap-3">
              {project.details.map((detail, i) => (
                <li key={i} className="flex gap-3 text-muted dark:text-[var(--dm-muted)] font-medium leading-relaxed">
                  <span className="text-accent-red font-black mt-1">/</span>
                  {detail}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>

    <ContactCTA />
    </>
  );
}
