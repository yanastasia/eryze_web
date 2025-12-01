"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useMemo } from "react";

type AmbientParticlesProps = {
  count?: number;
  shape?: "circle" | "hex";
  className?: string;
};

export default function AmbientParticles({ count = 24, shape = "circle", className }: AmbientParticlesProps) {
  const reduce = useReducedMotion();
  const particles = useMemo(() => Array.from({ length: count }), [count]);

  return (
    <div aria-hidden className={"pointer-events-none absolute inset-0 overflow-hidden " + (className ?? "")}> 
      {particles.map((_, i) => {
        const delay = (i % 10) * 0.6;
        const size = 6 + (i % 6) * 4;
        const left = `${(i * 97) % 100}%`;
        const top = `${(i * 53) % 100}%`;
        const hue = (200 + (i * 9)) % 360;
        const bg = shape === "hex"
          ? `conic-gradient(from 0deg, transparent 0 60deg, hsl(${hue} 90% 60% / 0.5) 60deg 120deg, transparent 120deg 180deg, hsl(${hue} 90% 60% / 0.2) 180deg 240deg, transparent 240deg 300deg, hsl(${hue} 90% 60% / 0.08) 300deg 360deg)`
          : `radial-gradient(circle at 30% 30%, hsl(${hue} 90% 70% / 0.25), transparent 60%)`;

        return (
          <motion.span
            key={i}
            className="absolute rounded-full"
            style={{ width: size * 8, height: size * 8, left, top, backgroundImage: bg, filter: "blur(10px)" }}
            initial={{ opacity: 0, y: 10 }}
            animate={reduce ? { opacity: 0.25 } : { opacity: 0.35, y: [0, -12, 0] }}
            transition={{ duration: reduce ? 0.01 : 8 + (i % 6), repeat: reduce ? 0 : Infinity, delay }}
          />
        );
      })}
    </div>
  );
}