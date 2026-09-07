import type { Metadata } from 'next';
import { ExternalLink } from 'lucide-react';
import ContactCTA from '@/components/ContactCTA';
import { resume } from '@/data/resume';

export const metadata: Metadata = {
  title: `Blog | ${resume.name}`,
  description: 'Writing on backend systems, distributed architecture, and software engineering.',
};

export default function BlogPage() {
  return (
    <>
    <section className="pt-32 pb-16">
      <div className="max-w-4xl mx-auto px-6 md:px-10">
        <p className="font-mono text-accent-red font-black uppercase tracking-widest mb-2">01 /</p>
        <h1 className="text-4xl md:text-6xl font-black uppercase mb-12 tracking-tighter">Blog</h1>

        {resume.posts.length === 0 ? (
          <div className="bg-white dark:bg-[var(--dm-surface)] border-4 border-near-black dark:border-[var(--dm-border)] p-10 md:p-16 shadow-[7px_7px_0_#11100D] dark:shadow-[7px_7px_0_var(--dm-shadow)] text-center">
            <p className="text-2xl font-black uppercase tracking-tight mb-2">No posts yet</p>
            <p className="text-muted dark:text-[var(--dm-muted)] font-medium">
              Check back soon — new writing lands here first.
            </p>
          </div>
        ) : (
          <div className="grid gap-6">
            {resume.posts.map((post) => (
              <a
                key={post.url}
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-white dark:bg-[var(--dm-surface)] border-4 border-near-black dark:border-[var(--dm-border)] p-6 md:p-8 shadow-[7px_7px_0_#11100D] dark:shadow-[7px_7px_0_var(--dm-shadow)] hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none transition-all"
              >
                <div className="flex flex-wrap justify-between gap-2 mb-3">
                  <span className="px-3 py-1 bg-accent-yellow text-near-black border-2 border-near-black text-xs font-mono font-bold uppercase w-fit">
                    {post.tag}
                  </span>
                  <span className="font-mono text-xs font-bold text-muted dark:text-[var(--dm-muted)] uppercase">
                    {post.date}
                  </span>
                </div>
                <h2 className="text-2xl font-black uppercase tracking-tight mb-2 flex items-center gap-2">
                  {post.title} <ExternalLink size={18} className="opacity-50" />
                </h2>
                <p className="text-muted dark:text-[var(--dm-muted)] font-medium leading-relaxed">{post.excerpt}</p>
              </a>
            ))}
          </div>
        )}
      </div>
    </section>

    <ContactCTA />
    </>
  );
}
