"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { Button } from "@/components/ui/button";
import type { ComponentProps, ReactNode } from "react";

export default function MagneticButton({ children, ...props }: ComponentProps<typeof Button> & { children: ReactNode }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 140, damping: 22 });
  const springY = useSpring(y, { stiffness: 140, damping: 22 });

  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    const mx = e.clientX - rect.left - rect.width / 2;
    const my = e.clientY - rect.top - rect.height / 2;
    const radius = 12;
    x.set(Math.max(Math.min(mx, radius), -radius));
    y.set(Math.max(Math.min(my, radius), -radius));
  }

  function reset() {
    x.set(0);
    y.set(0);
  }

  return (
    <div onMouseMove={handleMove} onMouseLeave={reset} className="relative inline-block">
      <motion.div style={{ x: springX, y: springY }}>
        <Button {...props}>{children}</Button>
      </motion.div>
    </div>
  );
}