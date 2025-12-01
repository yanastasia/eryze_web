"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useCallback, useEffect } from "react";

type Project = {
  title: string;
  slug: string;
  description: string;
};

const projects: Project[] = [
  { title: "KidsGo", slug: "kidsgo", description: "Marketplace for children’s activities (launch 2026)" },
  { title: "Acting Europe", slug: "acting-europe", description: "Theatre & culture booking platform" },
  { title: "Labs Prototypes", slug: "labs-prototypes", description: "Experimental builds & hackathon outputs" },
];

function Card({ p, onSelect, onHover }: { p: Project; onSelect?: () => void; onHover?: () => void }) {
  return (
    <motion.div
      onMouseEnter={onHover}
      onClick={onSelect}
      className="group relative h-56 w-64 sm:h-64 sm:w-80 md:h-72 md:w-96 shrink-0 overflow-hidden rounded-xl border border-border bg-card/60 cursor-pointer"
      whileHover={{ scale: 1.01 }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-background to-card" />
      <div className="absolute inset-0 opacity-30" style={{
        background:
          "radial-gradient(400px circle at 30% 30%, rgba(121,207,255,0.18), transparent 60%), radial-gradient(400px circle at 70% 70%, rgba(139,92,246,0.18), transparent 60%)",
      }} />

      <div className="absolute inset-0 flex flex-col justify-end p-4">
        <div className="rounded-lg dark:bg-black/40 bg-white/60 backdrop-blur p-3 text-foreground">
          <div className="flex items-center justify-between">
            <h3 className="font-header text-base sm:text-lg">{p.title}</h3>
            <Link href={`/work/${p.slug}`} className="text-xs sm:text-sm underline underline-offset-4">View Project</Link>
          </div>
          <p className="mt-1 text-[11px] sm:text-xs opacity-80">{p.description}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default function ProjectCarousel() {
  const [centerIndex, setCenterIndex] = useState(Math.floor(projects.length / 2));
  const goPrev = useCallback(() => setCenterIndex((i) => Math.max(0, i - 1)), []);
  const goNext = useCallback(() => setCenterIndex((i) => Math.min(projects.length - 1, i + 1)), []);
  const [hovering, setHovering] = useState(false);

  // Auto-advance when not hovering
  useEffect(() => {
    if (hovering) return;
    const id = setInterval(() => {
      setCenterIndex((i) => (i + 1) % projects.length);
    }, 5500);
    return () => clearInterval(id);
  }, [hovering]);

  return (
    <div className="relative overflow-hidden">
      {/* Desktop: fan-style layout */}
      <div
        className="relative hidden md:flex h-72 items-center justify-center overflow-hidden px-4"
        tabIndex={0}
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
        onKeyDown={(e) => {
          if (e.key === "ArrowLeft") goPrev();
          if (e.key === "ArrowRight") goNext();
        }}
        aria-label="Selected Projects Carousel"
      >
        {projects.map((p, i) => {
          const offset = i - centerIndex;
          const rotate = 0;
          const translateX = offset * 110;
          const translateY = Math.abs(offset) * 10;
          const scale = 1 - Math.abs(offset) * 0.08;
          const opacity = offset === 0 ? 1 : Math.max(0.30, 0.85 - Math.abs(offset) * 0.28);
          const zIndex = 100 - Math.abs(offset);
          return (
            <motion.div
              key={p.slug}
              className="absolute"
              style={{ zIndex }}
              aria-current={offset === 0 ? "true" : undefined}
              animate={{ x: translateX, y: translateY, rotate, scale, opacity }}
              transition={{ type: "tween", ease: "easeOut", duration: 0.45 }}
            >
              <Card p={p} onSelect={() => setCenterIndex(i)} />
            </motion.div>
          );
        })}

        <div className="absolute -bottom-2 flex gap-2">
          <button
            className="rounded-md border border-border bg-card/70 px-3 py-1 text-sm hover:bg-muted"
            onClick={goPrev}
            aria-label="Previous project"
          >
            Prev
          </button>
          <button
            className="rounded-md border border-border bg-card/70 px-3 py-1 text-sm hover:bg-muted"
            onClick={goNext}
            aria-label="Next project"
          >
            Next
          </button>
        </div>
      </div>

      {/* Mobile: horizontal scroll fallback */}
      <div className="md:hidden flex gap-6 overflow-x-auto pb-2" style={{ scrollSnapType: "x mandatory" }}>
        {projects.map((p) => (
          <div key={p.slug} style={{ scrollSnapAlign: "start" }}>
            <Card p={p} />
          </div>
        ))}
      </div>
    </div>
  );
}