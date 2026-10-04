import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ExternalLink, ArrowLeft } from 'lucide-react';
import { Github } from '@/components/Icons';
import ContactCTA from '@/components/ContactCTA';
import { resume } from '@/data/resume';
import { projectArticles } from '@/data/project-articles';

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

  const article = projectArticles[slug];
  const wordCount = article ? [article.subtitle, ...article.introduction, article.takeaway, ...article.sections.flatMap((section) => [section.title, ...section.paragraphs])].join(' ').split(/\s+/).length : 0;

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

        <p className="font-mono text-sm uppercase tracking-wider mb-5">{project.title} / {project.projectLabel}</p>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight leading-[1.08]">{article?.title ?? project.title}</h1>

        <p className="text-xl md:text-2xl font-bold text-muted dark:text-[var(--dm-muted)] mb-8 leading-relaxed">
          {article?.subtitle ?? project.description}
        </p>

        {article && <p className="font-mono text-xs text-muted dark:text-[var(--dm-muted)] mb-8">By {resume.name} · {Math.max(1, Math.ceil(wordCount / 200))} min read · Project case study</p>}

        {project.diagramImage && (
          <figure className="mb-10 overflow-hidden border-4 border-near-black dark:border-[var(--dm-border)] bg-cream shadow-[7px_7px_0_#11100D] dark:shadow-[7px_7px_0_var(--dm-shadow)]">
            <Image
              src={`/${project.diagramImage}`}
              alt={project.diagramAlt ?? `${project.title} cover illustration`}
              width={1680}
              height={941}
              className="h-auto w-full"
            />
            <figcaption className="px-5 py-3 text-sm text-muted border-t border-near-black/20">Conceptual illustration of {project.title}. The implementation flow is explained below.</figcaption>
          </figure>
        )}

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

        {article ? (
          <article className="max-w-[720px] mx-auto">
            <div className="space-y-6 text-lg leading-[1.85]">
              {article.introduction.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
            <blockquote className="my-10 border-l-4 border-accent-red pl-6 text-2xl md:text-3xl font-semibold leading-relaxed">{article.takeaway}</blockquote>
            <nav aria-label="Article contents" className="my-10 border-y border-near-black/20 dark:border-[var(--dm-border)] py-6">
              <p className="font-mono text-xs uppercase tracking-widest mb-4">In this article</p>
              <ol className="space-y-2 list-decimal pl-5">
                {article.sections.map((section, index) => <li key={section.title}><a href={`#section-${index + 1}`} className="underline underline-offset-4 hover:text-accent-red">{section.title}</a></li>)}
              </ol>
            </nav>
            <figure className="my-10 border-2 border-near-black dark:border-[var(--dm-border)] bg-white dark:bg-[var(--dm-surface)] p-5 md:p-7">
              <h2 className="text-xl font-bold mb-6">{article.diagram.title}</h2>
              <ol className="grid gap-4 sm:grid-cols-2">
                {article.diagram.steps.map((step, index) => (
                  <li key={step.label} className="relative border-2 border-near-black dark:border-[var(--dm-border)] p-4">
                    <span className="font-mono text-xs bg-accent-yellow text-near-black px-2 py-1 inline-block mb-3">0{index + 1} {index < article.diagram.steps.length - 1 ? '→' : '✓'}</span>
                    <p className="font-bold">{step.label}</p>
                    <p className="text-sm leading-relaxed mt-2 text-muted dark:text-[var(--dm-muted)]">{step.detail}</p>
                  </li>
                ))}
              </ol>
              <figcaption className="text-sm leading-relaxed text-muted dark:text-[var(--dm-muted)] mt-5">{article.diagram.caption}</figcaption>
            </figure>
            {article.sections.map((section, index) => (
              <section key={section.title} id={`section-${index + 1}`} className="scroll-mt-28 my-12">
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-5">{section.title}</h2>
                <div className="space-y-6 text-lg leading-[1.85]">{section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
              </section>
            ))}
            <footer className="border-t-2 border-near-black dark:border-[var(--dm-border)] pt-7 mt-12">
              <h2 className="text-2xl font-bold mb-5">Sources & further reading</h2>
              <ul className="space-y-5">{article.references.map((reference) => (
                <li key={reference.url}>
                  <a href={reference.url} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-4 hover:text-accent-red">{reference.title} ↗</a>
                  <p className="text-sm text-muted dark:text-[var(--dm-muted)] mt-1 leading-relaxed">{reference.note}</p>
                </li>
              ))}</ul>
            </footer>
          </article>
        ) : project.details && project.details.length > 0 && (
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
