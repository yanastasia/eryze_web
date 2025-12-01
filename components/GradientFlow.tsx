"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

export default function GradientFlow() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  const style = {
    y,
    opacity,
    // Use CSS variables for radial highlight position
    ["--mx" as any]: `${pos.x}px`,
    ["--my" as any]: `${pos.y}px`,
  } as any;

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <motion.div style={style} className="h-full w-full">
        <div
          className="h-full w-full"
          style={{
            background:
              `radial-gradient(600px circle at var(--mx) var(--my), rgba(121,207,255,0.18), transparent 60%),` +
              `radial-gradient(500px circle at 20% 30%, rgba(139,92,246,0.20), transparent 60%),` +
              `radial-gradient(500px circle at 80% 70%, rgba(192,132,252,0.18), transparent 60%),` +
              `linear-gradient(135deg, #0B1224 0%, #101B37 60%, #0B1224 100%)`,
            filter: "saturate(1.1)",
          }}
        />
      </motion.div>
    </div>
  );
}