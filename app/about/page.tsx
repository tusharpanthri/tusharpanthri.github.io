import type { Metadata } from 'next';
import { resume } from '@/data/resume';

export const metadata: Metadata = {
  title: `About | ${resume.name}`,
  description: resume.summary,
};

const heading = 'font-mono text-[15px] font-bold uppercase tracking-[.2em] mb-8';
const row = 'grid md:grid-cols-[210px_1fr] gap-5 md:gap-10 py-7 border-t border-near-black/20 dark:border-[var(--dm-border)]';

export default function AboutPage() {
  return (
    <div className="max-w-[1080px] mx-auto px-6 sm:px-10 py-[88px]">
      <p className={heading}>About</p>
      <h1 className="text-[40px] sm:text-[54px] font-extrabold tracking-[-.035em] mb-7">{resume.name}</h1>
      <p className="text-[22px] leading-[1.5] max-w-[760px] [text-wrap:pretty]">{resume.summary}</p>
      <section className="pt-[72px]">
        <h2 className={heading}>Full history</h2>
        {resume.experience.map((job) => (
          <div key={job.company} className={row}>
            <div><h3 className="text-[19px] font-bold">{job.company}</h3><p className="font-mono text-[12px] text-muted dark:text-[var(--dm-muted)] mt-1.5">{job.period}</p></div>
            <div>
              <p className="font-semibold mb-3">{job.role}</p>
              <ul className="list-disc pl-5 space-y-3 text-[17px] leading-[1.55] text-[#35322c] dark:text-[var(--dm-text)] [text-wrap:pretty]">
                {job.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
              </ul>
            </div>
          </div>
        ))}
      </section>
      <section className="pt-16">
        <h2 className={heading}>Education</h2>
        {resume.education.map((school) => (
          <div key={school.school} className={row}>
            <div><h3 className="text-[19px] font-bold">{school.school}</h3><p className="font-mono text-[12px] text-muted dark:text-[var(--dm-muted)] mt-1.5">{school.period}</p></div>
            <div><p className="font-semibold mb-3 [text-wrap:pretty]">{school.degree}</p><ul className="space-y-3 text-[17px] leading-[1.55] [text-wrap:pretty]">{school.courses.map((course) => <li key={course.name}><span className="font-semibold">{course.name}:</span> {course.description}</li>)}</ul></div>
          </div>
        ))}
      </section>
      <section className="pt-16">
        <h2 className={heading}>Skills</h2>
        {resume.skillGroups.map((group) => <div key={group.category} className={row}><h3 className="font-bold">{group.category}</h3><p className="text-[17px] leading-[1.55] [text-wrap:pretty]">{group.skills.map((skill) => skill.name).join(' · ')}</p></div>)}
      </section>
      <section className="pt-16">
        <h2 className={heading}>Certifications</h2>
        {resume.certifications.map((certification) => <div key={certification.name} className={row}><p className="font-mono text-[13px] text-muted dark:text-[var(--dm-muted)]">{certification.issuer}</p><h3 className="text-[17px] font-semibold [text-wrap:pretty]">{certification.name}</h3></div>)}
      </section>
    </div>
  );
}
