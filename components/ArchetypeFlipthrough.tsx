"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type ArchetypeItem = {
  id: string;
  title: string;
  subtitle: string;
  accent: string;
};

const items: ArchetypeItem[] = [
  { id: "builder", title: "The Builder", subtitle: "Engineering clarity into reality", accent: "#79CFFF" },
  { id: "strategist", title: "The Strategist", subtitle: "Designing products with purpose", accent: "#9B5FFF" },
  { id: "creator", title: "The Creator", subtitle: "Designing emotion into technology", accent: "#B77CFF" },
  { id: "connector", title: "The Connector", subtitle: "Communities that rise together", accent: "#79CFFF" },
  { id: "explorer", title: "The Explorer", subtitle: "Where curiosity becomes creation", accent: "#B77CFF" },
  { id: "visionary", title: "The Visionary", subtitle: "Innovation in motion", accent: "#9B5FFF" },
];

export default function ArchetypeFlipthrough() {
  const [index, setIndex] = useState(0);
  const next = useCallback(() => setIndex((i) => (i + 1) % items.length), []);
  const prev = useCallback(() => setIndex((i) => (i - 1 + items.length) % items.length), []);

  return (
    <div className="relative overflow-hidden rounded-2xl border border-border bg-card/60">
      {/* Pixel grid background */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          backgroundImage:
            "linear-gradient(rgba(121,207,255,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(121,207,255,0.12) 1px, transparent 1px)",
          backgroundSize: "12px 12px, 12px 12px",
          filter: "contrast(110%)",
        }}
      />

      <div className="flex items-center justify-between px-3 py-2">
        <button aria-label="Previous" onClick={prev} className="rounded-md p-2 hover:bg-muted">
          <ChevronLeft size={18} />
        </button>
        <div className="text-xs opacity-70">Flipthrough</div>
        <button aria-label="Next" onClick={next} className="rounded-md p-2 hover:bg-muted">
          <ChevronRight size={18} />
        </button>
      </div>

      <div className="relative h-[220px] sm:h-[260px]">
        <AnimatePresence mode="popLayout">
          {items.map((item, i) => {
            const isActive = i === index;
            return (
              <motion.div
                key={item.id}
                className="absolute inset-0 mx-6 my-4 rounded-xl border border-border bg-background/60 backdrop-blur"
                initial={{ opacity: 0, rotateX: -90, scale: 0.96 }}
                animate={{ opacity: isActive ? 1 : 0, rotateX: isActive ? 0 : -90, scale: isActive ? 1 : 0.98 }}
                exit={{ opacity: 0, rotateX: 90, scale: 0.96 }}
                transition={{ duration: 0.35 }}
                style={{ boxShadow: "0 0 0 2px #000 inset, 0 12px 0 rgba(0,0,0,0.2)", outline: `2px solid ${item.accent}` }}
              >
                <div className="h-full grid grid-cols-[1fr_auto] items-center gap-4 px-6">
                  <div>
                    <h3 className="font-header text-xl">{item.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{item.subtitle}</p>
                  </div>
                  <a href={`#${item.id}`} className="inline-flex items-center gap-2 rounded-md border border-border px-3 py-1 text-xs hover:bg-card" style={{ color: item.accent }}>
                    View
                    <span aria-hidden>↗</span>
                  </a>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </div>
  );
}