"use client";

import { motion } from "framer-motion";
import Link from "next/link";

type LabCard = {
  title: string;
  oneLiner: string;
  tags: string[];
};

const labs: LabCard[] = [
  { title: "AI Tools", oneLiner: "Assistive copilots for creative workflows.", tags: ["AI", "Tools"] },
  { title: "Cultural Tech", oneLiner: "Platforms that empower communities.", tags: ["Culture", "Platform"] },
  { title: "Automation Pipelines", oneLiner: "Glue systems for faster operations.", tags: ["Automation", "Pipelines"] },
];

export default function LabsGrid() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {labs.map((l) => (
        <motion.div
          key={l.title}
          className="relative h-56 w-full rounded-xl border border-border bg-card/60"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 250, damping: 22 }}
        >
          <div className="absolute inset-0 p-6">
            <h3 className="font-header text-xl">{l.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{l.oneLiner}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {l.tags.map((t) => (
                <motion.span
                  key={t}
                  className="rounded-full border border-border px-3 py-1 text-xs"
                  animate={{ opacity: [0.8, 1, 0.9] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  {t}
                </motion.span>
              ))}
            </div>
            <div className="absolute bottom-4 left-6">
              <Link href="/labs" className="text-sm underline underline-offset-4">View Concept</Link>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}