"use client";

import { useState } from "react";

type CaseStudy = { id: string; title: string; summary: string; content: string; tags?: string[] };
type BlogPost = { id: string; title: string; summary: string; content: string; tags?: string[] };

const CS_KEY = "eryze_case_studies";
const BLOG_KEY = "eryze_blog_posts";

function readLocal<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
}

function writeLocal<T>(key: string, value: T) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    /* noop */
  }
}

export default function AdminOSPage() {
  const [authed, setAuthed] = useState(false);
  const [pwd, setPwd] = useState("");
  const [error, setError] = useState("");

  const [caseStudies, setCaseStudies] = useState<CaseStudy[]>(() => readLocal<CaseStudy[]>(CS_KEY, []));
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>(() => readLocal<BlogPost[]>(BLOG_KEY, []));

  const [csForm, setCsForm] = useState<CaseStudy>({ id: "", title: "", summary: "", content: "", tags: [] });
  const [blogForm, setBlogForm] = useState<BlogPost>({ id: "", title: "", summary: "", content: "", tags: [] });


  function handleAuth(e: React.FormEvent) {
    e.preventDefault();
    if (pwd === "mili358") {
      setAuthed(true);
      setError("");
    } else {
      setError("Incorrect password");
    }
  }

  function addCaseStudy() {
    const id = `${Date.now()}`;
    const next = [...caseStudies, { ...csForm, id }];
    setCaseStudies(next);
    writeLocal(CS_KEY, next);
    setCsForm({ id: "", title: "", summary: "", content: "", tags: [] });
  }

  function addBlogPost() {
    const id = `${Date.now()}`;
    const next = [...blogPosts, { ...blogForm, id }];
    setBlogPosts(next);
    writeLocal(BLOG_KEY, next);
    setBlogForm({ id: "", title: "", summary: "", content: "", tags: [] });
  }

  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="font-header text-3xl">Operator Space</h1>
      {!authed ? (
        <form onSubmit={handleAuth} className="mt-6 max-w-md rounded-lg border border-border bg-card p-4">
          <label className="text-sm text-muted-foreground">Enter password</label>
          <input
            type="password"
            value={pwd}
            onChange={(e) => setPwd(e.target.value)}
            className="mt-2 w-full rounded-md border border-border bg-background px-3 py-2"
            placeholder="•••••••"
          />
          {error && <p className="mt-2 text-sm text-destructive">{error}</p>}
          <button type="submit" className="mt-4 px-4 py-2 rounded-md bg-accent text-primary-foreground">Unlock</button>
        </form>
      ) : (
        <div className="mt-8 grid gap-8 md:grid-cols-2">
          <div className="rounded-lg border border-border bg-card p-4">
            <h2 className="font-header text-xl">Upload Case Study</h2>
            <div className="mt-3 space-y-3">
              <input value={csForm.title} onChange={(e) => setCsForm({ ...csForm, title: e.target.value })} placeholder="Title" className="w-full rounded-md border border-border bg-background px-3 py-2" />
              <input value={csForm.summary} onChange={(e) => setCsForm({ ...csForm, summary: e.target.value })} placeholder="Summary" className="w-full rounded-md border border-border bg-background px-3 py-2" />
              <textarea value={csForm.content} onChange={(e) => setCsForm({ ...csForm, content: e.target.value })} placeholder="Content" className="w-full rounded-md border border-border bg-background px-3 py-2 h-32" />
              <button onClick={addCaseStudy} className="px-4 py-2 rounded-md bg-secondary text-primary">Save Case Study</button>
            </div>
            <div className="mt-6">
              <h3 className="font-header text-lg">Existing</h3>
              <ul className="mt-2 space-y-2">
                {caseStudies.map((cs) => (
                  <li key={cs.id} className="rounded-md border border-border bg-background px-3 py-2">
                    <span className="font-semibold">{cs.title}</span>
                    <p className="text-sm text-muted-foreground">{cs.summary}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="rounded-lg border border-border bg-card p-4">
            <h2 className="font-header text-xl">Upload Blog Post</h2>
            <div className="mt-3 space-y-3">
              <input value={blogForm.title} onChange={(e) => setBlogForm({ ...blogForm, title: e.target.value })} placeholder="Title" className="w-full rounded-md border border-border bg-background px-3 py-2" />
              <input value={blogForm.summary} onChange={(e) => setBlogForm({ ...blogForm, summary: e.target.value })} placeholder="Summary" className="w-full rounded-md border border-border bg-background px-3 py-2" />
              <textarea value={blogForm.content} onChange={(e) => setBlogForm({ ...blogForm, content: e.target.value })} placeholder="Content" className="w-full rounded-md border border-border bg-background px-3 py-2 h-32" />
              <button onClick={addBlogPost} className="px-4 py-2 rounded-md bg-secondary text-primary">Save Blog Post</button>
            </div>
            <div className="mt-6">
              <h3 className="font-header text-lg">Existing</h3>
              <ul className="mt-2 space-y-2">
                {blogPosts.map((bp) => (
                  <li key={bp.id} className="rounded-md border border-border bg-background px-3 py-2">
                    <span className="font-semibold">{bp.title}</span>
                    <p className="text-sm text-muted-foreground">{bp.summary}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
