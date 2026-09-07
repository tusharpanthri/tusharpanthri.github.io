import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import ContactCTA from '@/components/ContactCTA';
import CopyEmailButton from '@/components/CopyEmailButton';
import NYClockLine from '@/components/NYClockLine';
import { resume } from '@/data/resume';

export const metadata: Metadata = {
  title: `${resume.name} | ${resume.role}`,
  description: resume.tagline,
};

const column = 'max-w-[1080px] mx-auto px-6 sm:px-10';
const sectionHeading = 'font-mono text-[15px] font-bold uppercase tracking-[.2em]';
const metadataStyle = 'font-mono text-[13px] tracking-[.04em] text-muted dark:text-[var(--dm-muted)]';

export default function Home() {
  const featuredProjects = resume.projects.filter((project) => project.featured);

  return (
    <>
      <section className="pt-[88px] pb-[72px]">
        <div className={`${column} flex flex-col lg:flex-row items-start gap-16`}>
          <div className="flex-1 min-w-0 flex flex-col gap-7">
            <p className={`flex items-center gap-2.5 ${metadataStyle}`}>
              <span className="availability-dot w-2 h-2 shrink-0 rounded-full bg-accent-red animate-[softPulse_2.4s_cubic-bezier(.4,0,.6,1)_infinite]" />
              Open to backend / platform roles · {resume.location}
            </p>
            <h1 className="text-[52px] sm:text-[78px] font-extrabold tracking-[-.035em] leading-[.96] [text-wrap:pretty]">{resume.name}</h1>
            <p className="text-[22px] sm:text-[25px] font-medium leading-[1.35] max-w-[620px] [text-wrap:pretty]">
              Software engineer, 3+ years building backend services, REST APIs and distributed data pipelines on AWS for financial clients — American Express, Ameriprise.
            </p>
            <div className="flex flex-wrap gap-3.5 items-center pt-1">
              <a href={`mailto:${resume.email}`} className="bg-near-black text-cream px-7 py-[15px] text-[15px] font-bold shadow-[5px_5px_0_#FFE119]">Email me</a>
              <a href={resume.resumeUrl} download="tusharpanthri_resume.pdf" className="border-2 border-near-black dark:border-[var(--dm-text)] px-7 py-[15px] text-[15px] font-bold">Download résumé</a>
              <a href={resume.github} target="_blank" rel="noopener noreferrer" className="font-mono text-[13px] border-b border-near-black/35 dark:border-[var(--dm-muted)] ml-1.5">github</a>
              <a href={resume.linkedin} target="_blank" rel="noopener noreferrer" className="font-mono text-[13px] border-b border-near-black/35 dark:border-[var(--dm-muted)]">linkedin</a>
            </div>
          </div>
          <div className="relative shrink-0 mt-1.5">
            <div aria-hidden="true" className="absolute inset-0 bg-accent-yellow translate-x-3 translate-y-3" />
            <div className="relative w-[272px] h-[320px] border-2 border-near-black overflow-hidden">
              <Image src={`/${resume.profileImage}`} alt={resume.name} width={272} height={320} preload className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section aria-label="Career impact" className="bg-sand dark:bg-[var(--dm-surface)] border-y-2 border-near-black dark:border-[var(--dm-border)]">
        <div className={`${column} grid sm:grid-cols-3`}>
          {resume.proof.map((metric) => (
            <div key={metric.value} className="py-[34px] pl-[26px] border-l border-near-black/[.18] dark:border-[var(--dm-border)]">
              <p className="text-[46px] font-extrabold tracking-[-.03em] tabular-nums">{metric.value}</p>
              <p className="text-[15px] leading-[1.4] text-[#4a4640] dark:text-[var(--dm-muted)] mt-2 max-w-[260px] [text-wrap:pretty]">{metric.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={`${column} pt-[72px] pb-2`}>
        <div className="flex flex-wrap gap-4 items-baseline justify-between mb-8">
          <h2 className={sectionHeading}>Experience</h2>
          <Link href="/about/" className={metadataStyle}>full history →</Link>
        </div>
        {resume.experience.map((job) => (
          <div key={job.company} className="grid md:grid-cols-[210px_1fr] gap-4 md:gap-10 py-[26px] border-t border-near-black/20 dark:border-[var(--dm-border)]">
            <div>
              <h3 className="text-[19px] font-bold">{job.company}</h3>
              <p className="font-mono text-[12px] tracking-[.04em] text-muted dark:text-[var(--dm-muted)] mt-1.5">{job.period}</p>
            </div>
            <div>
              <p className="text-[16px] font-semibold mb-1.5">{job.role}</p>
              <p className="text-[17px] leading-[1.55] text-[#35322c] dark:text-[var(--dm-text)] max-w-[660px] [text-wrap:pretty]">{job.impact}</p>
            </div>
          </div>
        ))}
      </section>

      <section className={`${column} pt-16 pb-4`}>
        <div className="flex flex-wrap gap-4 items-baseline justify-between mb-8">
          <h2 className={sectionHeading}>Selected projects</h2>
          <Link href="/projects/" className={metadataStyle}>all six →</Link>
        </div>
        {featuredProjects.map((project) => (
          <Link key={project.slug} href={`/projects/${project.slug}/`} className="grid md:grid-cols-[1fr_300px] gap-5 md:gap-10 items-start py-7 border-t border-near-black/20 dark:border-[var(--dm-border)] hover:bg-sand dark:hover:bg-[var(--dm-surface)]">
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <h3 className="text-[27px] font-bold tracking-[-.02em]">{project.title}</h3>
                <span className="bg-accent-yellow text-near-black px-2 py-[3px] font-mono text-[11px] uppercase tracking-[.14em]">{project.status}</span>
              </div>
              <p className="text-[17px] leading-[1.55] text-[#35322c] dark:text-[var(--dm-text)] mt-2.5 max-w-[600px] [text-wrap:pretty]">{project.headline}</p>
            </div>
            <div className="flex flex-col gap-3 items-start">
              <p className="font-mono text-[12px] tracking-[.04em] text-muted dark:text-[var(--dm-muted)] leading-[1.7] [text-wrap:pretty]">{project.techLine}</p>
              <span className="font-mono text-[12px] border-b border-near-black dark:border-[var(--dm-muted)]">read the write-up →</span>
            </div>
          </Link>
        ))}
      </section>

      {resume.posts.length > 0 && (
        <section className={`${column} pt-16 pb-4`}>
          <div className="flex flex-wrap gap-4 items-baseline justify-between mb-8">
            <h2 className={sectionHeading}>Writing</h2>
            <a href="https://medium.com/@tusharpanthri" target="_blank" rel="noopener noreferrer" className={metadataStyle}>all posts on medium →</a>
          </div>
          {resume.posts.map((post) => (
            <a key={post.title} href={post.url} target="_blank" rel="noopener noreferrer" className="grid md:grid-cols-[1fr_190px] gap-5 md:gap-10 items-start py-[26px] border-t border-near-black/20 dark:border-[var(--dm-border)] hover:bg-sand dark:hover:bg-[var(--dm-surface)]">
              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <span className="border border-near-black/35 dark:border-[var(--dm-muted)] px-2 py-[3px] font-mono text-[11px] uppercase tracking-[.14em]">{post.tag}</span>
                  <span className="font-mono text-[12px] text-muted dark:text-[var(--dm-muted)]">{post.read}</span>
                </div>
                <h3 className="text-[22px] font-bold tracking-[-.02em] mt-3 max-w-[620px] [text-wrap:pretty]">{post.title}</h3>
                <p className="text-[16px] leading-[1.55] text-[#35322c] dark:text-[var(--dm-text)] mt-2 max-w-[620px] [text-wrap:pretty]">{post.excerpt}</p>
              </div>
              <div className="flex flex-col items-start gap-3">
                <span className="font-mono text-[12px] text-muted dark:text-[var(--dm-muted)]">{post.date}</span>
                <span className="font-mono text-[12px] border-b border-near-black dark:border-[var(--dm-muted)]">read on medium →</span>
              </div>
            </a>
          ))}
        </section>
      )}

      <section aria-labelledby="stack-heading">
        <div className={`${column} pt-16 pb-7`}><h2 id="stack-heading" className={sectionHeading}>Stack</h2></div>
        <div className="border-t border-near-black/20 border-b-2 border-b-near-black dark:border-[var(--dm-border)] overflow-hidden py-[18px]">
          <div className="editorial-marquee flex w-max animate-[marqueeScroll_48s_linear_infinite]">
            {[...resume.stack, ...resume.stack].map((item, index) => (
              <span key={`${item}-${index}`} aria-hidden={index >= resume.stack.length || undefined} className="flex items-center gap-6 pr-6 font-mono text-[14px] tracking-[.04em] whitespace-nowrap">
                {item}<span aria-hidden="true" className="text-accent-red text-[9px]">◆</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-accent-yellow text-near-black border-t-2 border-near-black">
        <div className={`${column} py-[76px] flex flex-wrap items-end justify-between gap-12`}>
          <div className="flex-1 min-w-0 basis-[460px]">
            <h2 className="text-[40px] sm:text-[54px] font-extrabold tracking-[-.035em] leading-[1.02] mb-4 [text-wrap:pretty]">Hiring for backend<br />or data platform work?</h2>
            <p className="text-[19px] leading-[1.5] max-w-[520px] [text-wrap:pretty]">I’m looking for my next role and happy to talk through anything in here. Copy my address, or send a message — it reaches my inbox directly.</p>
            <div className="flex items-center gap-2.5 font-mono text-[13px] text-[#4a4640] mt-[22px] min-h-5">
              <span className="w-2 h-2 bg-near-black rounded-full shrink-0" />
              <NYClockLine />
            </div>
          </div>
          <div className="flex flex-col gap-3 items-start w-full sm:w-auto sm:shrink-0">
            <ContactCTA />
            <CopyEmailButton />
            <div className="flex flex-wrap gap-4 pl-0.5 font-mono text-[13px] max-w-[350px]">
              <a href={`mailto:${resume.email}`} className="border-b border-near-black/40">open in mail app</a>
              <a href={resume.github} target="_blank" rel="noopener noreferrer" className="border-b border-near-black/40">github</a>
              <a href={resume.linkedin} target="_blank" rel="noopener noreferrer" className="border-b border-near-black/40">linkedin</a>
              <a href={`tel:${resume.phone}`} className="border-b border-near-black/40">{resume.phone}</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
