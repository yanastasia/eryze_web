"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import MagneticButton from "@/components/MagneticButton";
const GradientFlow = dynamic(() => import("@/components/GradientFlow"), { ssr: false });
import AmbientParticles from "@/components/AmbientParticles";
import ScrollCue from "@/components/ScrollCue";

export default function Hero() {
  const container = {
    hidden: { opacity: 1 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };
  const word = {
    hidden: { opacity: 0, y: 14 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="relative min-h-[70vh] md:min-h-[80vh]">
      <GradientFlow />
      <AmbientParticles count={18} shape="circle" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6 pt-20 sm:pt-24">
        <div
          className="relative mt-8"
          onMouseMove={(e) => {
            const r = e.currentTarget.getBoundingClientRect();
            const x = e.clientX - r.left;
            const y = e.clientY - r.top;
            e.currentTarget.style.setProperty("--mx", `${x}px`);
            e.currentTarget.style.setProperty("--my", `${y}px`);
          }}
          style={{
            // ensure overlay is fully masked until the first mouse move
            WebkitMaskPosition: "var(--mx) var(--my)",
            maskPosition: "var(--mx) var(--my)",
            // place mask far offscreen initially so nothing is revealed
            // CSS variables used by mask gradient in overlay
            // @ts-expect-error CSS custom properties
            ["--mx"]: "-9999px",

            ["--my"]: "-9999px",
          }}
        >
        <motion.h1 variants={container} initial="hidden" animate="visible" className="font-header text-5xl sm:text-6xl font-semibold tracking-tight">
          {"Rise above the ordinary.".split(' ').map((w, i) => (
            <motion.span key={i} variants={word} className="inline-block mr-2">
              {w}
            </motion.span>
          ))}
          <br />
          {"Build what moves the world.".split(' ').map((w, i) => (
            <motion.span key={i} variants={word} className="inline-block mr-2 text-transparent select-none opacity-0">
              {w}
            </motion.span>
          ))}
        </motion.h1>
        <motion.h1
          aria-hidden
          className={"pointer-events-none absolute inset-0 font-header text-5xl sm:text-6xl font-semibold tracking-tight text-secondary dark:text-accent"}
          style={{
            WebkitMaskImage: `radial-gradient(130px circle at var(--mx) var(--my), #000 40%, transparent 60%)`,
            maskImage: `radial-gradient(130px circle at var(--mx) var(--my), #000 40%, transparent 60%)`,
          }}
        >
          <span className="inline-block mr-2"></span>
          <br />
          {"Build what moves the world.".split(' ').map((w, i) => (
            <span key={i} className="inline-block mr-2">
              {w}
            </span>
          ))}
        </motion.h1>
        </div>
        <p className="mt-4 max-w-2xl text-base sm:text-lg text-muted-foreground">A development studio crafting bold digital experiences.</p>
        <div className="mt-8 sm:mt-10 flex flex-wrap gap-3 sm:gap-4">
          <MagneticButton asChild>
            <Link href="#services">Explore Studio</Link>
          </MagneticButton>
          <MagneticButton variant="outline" asChild>
            <Link href="/labs">Visit Labs</Link>
          </MagneticButton>
        </div>
      </div>
      <ScrollCue />
    </div>
  );
}
