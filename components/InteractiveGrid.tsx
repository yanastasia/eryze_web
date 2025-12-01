"use client";

import { motion } from "framer-motion";

export type GridItem = { title: string; caption: string; color?: string };

export default function InteractiveGrid({ items }: { items: GridItem[] }) {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {items.map((card, i) => (
        <motion.div
          key={card.title}
          className="relative h-56 rounded-xl border border-border bg-card/60 overflow-hidden"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ margin: "-10% 0%" }}
          transition={{ delay: i * 0.05, duration: 0.45 }}
          whileHover={{ scale: 1.02 }}
        >
          <div className="absolute inset-0" style={{
            background: `radial-gradient(400px circle at 30% 30%, ${card.color ?? "#79CFFF"}33, transparent 60%)`,
            filter: "blur(4px)",
          }} />
          <div className="absolute inset-0 bg-gradient-to-br from-background to-card opacity-70" />
          <div className="absolute inset-0 flex items-end p-4">
            <div className="rounded-lg dark:bg-black/40 bg-white/60 backdrop-blur p-3">
              <h3 className="font-header text-base uppercase tracking-wide">{card.title}</h3>
              <p className="mt-1 text-xs opacity-80">{card.caption}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}