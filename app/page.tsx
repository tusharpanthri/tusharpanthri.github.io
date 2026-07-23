import type { Metadata } from 'next';
import Link from 'next/link';
import Hero from '@/components/Hero';
import ProjectCard from '@/components/ProjectCard';
import Ticker from '@/components/Ticker';
import GitHubStats from '@/components/GitHubStats';
import NYClock from '@/components/NYClock';
import { resume } from '@/data/resume';
import { Mail, ArrowRight } from 'lucide-react';
import { Github, Linkedin } from '@/components/Icons';

export const metadata: Metadata = {
  title: `${resume.name} | ${resume.role}`,
  description: resume.tagline,
};

export default function Home() {
  const featuredProjects = resume.projects.filter((project) => project.featured);
  const recentPosts = resume.posts.slice(0, 3);

  return (
    <>
      <Hero />

      <GitHubStats />

      <Ticker />

      {/* Featured Projects Section */}
      <section className="py-16 border-t-4 border-near-black dark:border-[var(--dm-border)]">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <p className="font-mono text-accent-red font-black uppercase tracking-widest mb-2">01 /</p>
          <div className="flex flex-wrap justify-between items-end gap-4 mb-12">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">Featured Projects</h2>
            <Link
              href="/projects/"
              className="flex items-center gap-2 font-black uppercase text-sm tracking-wider hover:text-accent-red transition-colors"
            >
              All Projects <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.slug} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* Recent Posts Section */}
      {recentPosts.length > 0 && (
        <section className="py-16 border-t-4 border-near-black dark:border-[var(--dm-border)] bg-white dark:bg-[var(--dm-surface)]">
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <p className="font-mono text-accent-red font-black uppercase tracking-widest mb-2">02 /</p>
            <div className="flex flex-wrap justify-between items-end gap-4 mb-12">
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">Recent Posts</h2>
              <Link
                href="/blog/"
                className="flex items-center gap-2 font-black uppercase text-sm tracking-wider hover:text-accent-red transition-colors"
              >
                All Posts <ArrowRight size={16} />
              </Link>
            </div>
            <div className="grid gap-6">
              {recentPosts.map((post) => (
                <a
                  key={post.url}
                  href={post.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-cream dark:bg-[#0a0e27] border-4 border-near-black dark:border-[var(--dm-border)] p-6 md:p-8 shadow-[7px_7px_0_#11100D] dark:shadow-[7px_7px_0_var(--dm-shadow)] hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none transition-all"
                >
                  <div className="flex flex-wrap justify-between gap-2 mb-3">
                    <span className="px-3 py-1 bg-accent-yellow text-near-black border-2 border-near-black text-xs font-mono font-bold uppercase w-fit">
                      {post.tag}
                    </span>
                    <span className="font-mono text-xs font-bold text-muted dark:text-[var(--dm-muted)] uppercase">
                      {post.date}
                    </span>
                  </div>
                  <h3 className="text-2xl font-black uppercase tracking-tight mb-2">{post.title}</h3>
                  <p className="text-muted dark:text-[var(--dm-muted)] font-medium leading-relaxed">{post.excerpt}</p>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Contact CTA */}
      <section className="py-24 border-t-4 border-near-black dark:border-[var(--dm-border)] bg-accent-yellow">
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
                rel="noopener noreferrer"
                className="p-5 bg-white border-4 border-near-black rounded-full shadow-[6px_6px_0_#11100D] hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none transition-all"
              >
                <Github size={28} />
              </a>
              <a
                href={resume.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 bg-white border-4 border-near-black rounded-full shadow-[6px_6px_0_#11100D] hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none transition-all"
              >
                <Linkedin size={28} />
              </a>
            </div>
          </div>

          <Link
            href="/contact/"
            className="inline-flex items-center gap-2 mt-10 font-black uppercase text-sm tracking-wider underline hover:text-near-black/70 transition-colors"
          >
            More ways to reach me <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
