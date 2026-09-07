"use client";
import React, { useEffect, useState } from 'react';
import { resume } from '@/data/resume';

interface GitHubUser {
  public_repos: number;
  followers: number;
}

interface GitHubRepo {
  stargazers_count: number;
  pushed_at: string;
}

interface Stats {
  publicRepos: number;
  totalStars: number;
  followers: number;
  lastPush: string;
}

function relativeTime(dateStr: string): string {
  const diffMs = Date.now() - new Date(dateStr).getTime();
  const minutes = Math.floor(diffMs / 60000);
  if (minutes < 1) return "just now";
  if (minutes < 60) return `${minutes}m ago`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours}h ago`;
  const days = Math.floor(hours / 24);
  if (days < 30) return `${days}d ago`;
  const months = Math.floor(days / 30);
  if (months < 12) return `${months}mo ago`;
  const years = Math.floor(months / 12);
  return `${years}y ago`;
}

const GitHubStats = () => {
  const [stats, setStats] = useState<Stats | null>(null);

  useEffect(() => {
    const username = resume.githubUsername;
    if (!username) return;

    let cancelled = false;

    (async () => {
      try {
        const [userRes, reposRes] = await Promise.all([
          fetch(`https://api.github.com/users/${username}`),
          fetch(`https://api.github.com/users/${username}/repos?per_page=100&sort=pushed`)
        ]);

        if (!userRes.ok || !reposRes.ok) return;

        const user: GitHubUser = await userRes.json();
        const repos: GitHubRepo[] = await reposRes.json();
        if (!Array.isArray(repos)) return;

        const totalStars = repos.reduce((sum, r) => sum + (r.stargazers_count || 0), 0);
        const newestPush = repos.reduce<string | null>((latest, r) => {
          if (!r.pushed_at) return latest;
          if (!latest || new Date(r.pushed_at) > new Date(latest)) return r.pushed_at;
          return latest;
        }, null);

        if (cancelled) return;

        setStats({
          publicRepos: user.public_repos,
          totalStars,
          followers: user.followers,
          lastPush: newestPush ? relativeTime(newestPush) : "—"
        });
      } catch {
        // Fail silently — unauthenticated GitHub API rate limits are expected on a low-traffic page
      }
    })();

    return () => {
      cancelled = true;
    };
  }, []);

  if (!stats) return null;

  const cards = [
    { label: "Public Repos", value: stats.publicRepos },
    { label: "Total Stars", value: stats.totalStars },
    { label: "Followers", value: stats.followers },
    { label: "Last Push", value: stats.lastPush }
  ];

  return (
    <section className="py-12 border-t-4 border-near-black dark:border-[var(--dm-border)]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex items-center gap-3 mb-8">
          <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
          <span className="font-mono text-xs font-black uppercase tracking-widest text-muted dark:text-[var(--dm-muted)]">
            Live from GitHub
          </span>
        </div>
        <div className="grid gap-6" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))' }}>
          {cards.map((card) => (
            <div
              key={card.label}
              className="bg-white dark:bg-[var(--dm-surface)] border-4 border-near-black dark:border-[var(--dm-border)] p-6 shadow-[6px_6px_0_#11100D] dark:shadow-[6px_6px_0_var(--dm-shadow)]"
            >
              <div className="text-4xl md:text-5xl font-black tabular-nums">{card.value}</div>
              <div className="font-mono text-xs font-bold uppercase tracking-widest text-muted dark:text-[var(--dm-muted)] mt-2">
                {card.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GitHubStats;
