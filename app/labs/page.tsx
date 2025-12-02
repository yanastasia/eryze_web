"use client";

import { useState } from "react";

type CaseStudy = { id: string; title: string; summary: string; content: string; tags?: string[] };
const CS_KEY = "eryze_case_studies";

function readLocal<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
}

export default function LabsPage() {
  const [studies] = useState<CaseStudy[]>(() => readLocal<CaseStudy[]>(CS_KEY, []));

  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="font-header text-3xl">Ideas in motion</h1>
      <p className="mt-2 text-muted-foreground max-w-2xl">Prototypes, experiments, and creative tools from Eryze Labs. Where concepts evolve into capability.</p>

      <section className="mt-10">
        <h2 className="font-header text-2xl">Case Studies</h2>
        <div className="mt-4 space-y-4">
          {studies.length === 0 && <div className="rounded-lg border border-border bg-card p-6">No case studies yet.</div>}
          {studies.map((cs) => (
            <div key={cs.id} className="rounded-lg border border-border bg-card p-6">
              <h3 className="font-header text-xl">{cs.title}</h3>
              <p className="mt-1 text-muted-foreground">{cs.summary}</p>
              <div className="mt-3 text-sm text-foreground whitespace-pre-wrap">{cs.content}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
