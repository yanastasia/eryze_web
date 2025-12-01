"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const cities = [
  { name: "Sofia", x: 55, y: 45 },
  { name: "Skopje", x: 45, y: 60 },
];

export default function MapSEE() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { margin: "-20% 0px" });

  return (
    <div ref={ref} className="relative h-64 w-full rounded-xl border border-border overflow-hidden bg-gradient-to-br from-background to-card">
      <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full text-foreground">
        <defs>
          <radialGradient id="glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="var(--mapaccent)" stopOpacity="0.8" />
            <stop offset="100%" stopColor="var(--mapaccent)" stopOpacity="0" />
          </radialGradient>
        </defs>
        {cities.map((c, i) => (
          <g key={c.name}>
            <motion.circle
              cx={c.x}
              cy={c.y}
              r={2.5}
              fill="var(--mapaccent)"
              initial={{ opacity: 0.2, scale: 0.8 }}
              animate={inView ? { opacity: [0.4, 1, 0.6], scale: [1, 1.4, 1] } : {}}
              transition={{ delay: i * 0.25, duration: 1.6, repeat: Infinity }}
            />
            <circle cx={c.x} cy={c.y} r={10} fill="url(#glow)" />
            <text x={c.x + 3} y={c.y - 3} fill="currentColor" fontSize={3}>
              {c.name}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}