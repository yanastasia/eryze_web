"use client";

import { useState } from "react";

type BlogPost = { id: string; title: string; summary: string; content: string; tags?: string[] };
const BLOG_KEY = "eryze_blog_posts";

function readLocal<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
}

export default function BlogPage() {
  const [posts] = useState<BlogPost[]>(() => readLocal<BlogPost[]>(BLOG_KEY, []));

  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="font-header text-3xl">Insights</h1>
      <p className="mt-2 text-muted-foreground max-w-2xl">Notes, case learnings, and perspectives from the studio.</p>

      <div className="mt-8 space-y-4">
        {posts.length === 0 && (
          <div className="rounded-lg border border-border bg-card p-6">No posts yet.</div>
        )}
        {posts.map((p) => (
          <article key={p.id} className="rounded-lg border border-border bg-card p-6">
            <h2 className="font-header text-xl">{p.title}</h2>
            <p className="mt-1 text-muted-foreground">{p.summary}</p>
            <div className="mt-3 text-sm text-foreground whitespace-pre-wrap">{p.content}</div>
          </article>
        ))}
      </div>
    </div>
  );
}
