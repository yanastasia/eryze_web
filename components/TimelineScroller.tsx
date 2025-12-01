"use client";

import { motion } from "framer-motion";

export type TimelineItem = { title: string; detail: string };

export default function TimelineScroller({ items }: { items: TimelineItem[] }) {
  return (
    <div className="relative">
      <div className="flex gap-6 overflow-x-auto pb-3" style={{ scrollSnapType: "x mandatory" }}>
        {items.map((t, i) => (
          <motion.div
            key={t.title}
            className="relative shrink-0 w-80 sm:w-96 rounded-xl border border-border bg-card/60 p-6"
            style={{ scrollSnapAlign: "start" }}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ margin: "-10% 0%" }}
            transition={{ delay: i * 0.06, duration: 0.45 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="absolute inset-0 rounded-xl pointer-events-none" style={{
              background: "linear-gradient(135deg, rgba(183,124,255,0.16), rgba(121,207,255,0.10))",
              mixBlendMode: "soft-light",
            }} />
            <h3 className="font-header text-lg uppercase tracking-wide">{t.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{t.detail}</p>
            <div className="mt-3 text-xs opacity-80">Experimentation is where innovation begins.</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}