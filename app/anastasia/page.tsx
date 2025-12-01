"use client";

import Link from "next/link";
import { motion, useMotionValue, useSpring, useTransform, animate } from "framer-motion";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { Space_Grotesk } from "next/font/google";
import Section from "@/components/Section";
import SectionWrapper from "@/components/SectionWrapper";
import InteractiveGrid from "@/components/InteractiveGrid";
import NetworkGraph, { type GraphNode, type GraphEdge } from "@/components/NetworkGraph";
import TimelineScroller from "@/components/TimelineScroller";
import MagneticButton from "@/components/MagneticButton";
import AmbientParticles from "@/components/AmbientParticles";
import HeadshotOrbit from "@/components/HeadshotOrbit";
// Replacing old desktop portfolio with flipthrough
import { Laptop, Cog, Globe, Linkedin, Github, NotebookPen } from "lucide-react";
import type { Metadata } from "next";
import RetroDesktop from "@/components/RetroDesktop";
// Pixel-tech desktop UI for portfolio
import { Inter } from "next/font/google";

const GradientFlow = dynamic(() => import("@/components/GradientFlow"), { ssr: false });

const spaceGrotesk = Space_Grotesk({
  variable: "--font-portfolio-header",
  subsets: ["latin"],
  weight: ["700"],
});

const inter = Inter({
  variable: "--font-portfolio-body",
  subsets: ["latin"],
  weight: ["500"],
});

// Lightweight 3D tilt card for smoother, less jumpy hover depth
function TiltCard({ children, className }: { children: React.ReactNode; className?: string }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rx = useSpring(y, { stiffness: 120, damping: 12 });
  const ry = useSpring(x, { stiffness: 120, damping: 12 });

  function onMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(px * 10);
    y.set(-py * 10);
  }
  function onMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{ rotateX: rx, rotateY: ry }}
      className={`relative rounded-xl border border-border bg-card/60 p-6 will-change-transform ${className ?? ""}`}
      whileHover={{ scale: 1.01 }}
    >
      {children}
    </motion.div>
  );
}

function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const mv = useMotionValue(0);
  const rounded = useTransform(mv, (latest) => Math.round(latest));
  useEffect(() => {
    const controls = animate(mv, value, { duration: 1.2, ease: "easeOut" });
    return () => controls.stop();
  }, [value]);
  return <motion.span style={{}}>{rounded.get()} {suffix}</motion.span>;
}

export default function AnastasiaPage() {
  const container = {
    hidden: { opacity: 1 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
  };
  const word = {
    hidden: { opacity: 0, y: 12 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  // Shared selection for Strategist carousel; enables hover-browse behavior
  const [strategistSelected, setStrategistSelected] = useState<number | null>(null);

function CarouselCard({ index, title, details, selectedIndex, setSelectedIndex }: { index: number; title: string; details: string[]; selectedIndex: number | null; setSelectedIndex: (i: number | null) => void }) {
  const isSelected = selectedIndex === index;
  return (
    <motion.div
      onClick={() => setSelectedIndex(isSelected ? null : index)}
      onMouseEnter={() => setSelectedIndex(index)}
      onMouseLeave={() => setSelectedIndex(null)}
      className="snap-center min-w-[280px] md:min-w-[360px] rounded-xl border border-border bg-card/60 p-6 relative overflow-hidden"
      animate={{ scale: isSelected ? 1.03 : 1 }}
      transition={{ type: "tween", duration: 0.25 }}
      whileHover={{ scale: 1.02 }}
    >
      <motion.div
        className="absolute inset-0"
        animate={{ opacity: isSelected ? 0.25 : 0 }}
        transition={{ duration: 0.25 }}
        style={{ background: "linear-gradient(90deg, transparent, rgba(121,207,255,0.25), transparent)", filter: "blur(8px)" }}
      />
      <h3 className="font-header text-lg uppercase tracking-wide">{title}</h3>
      <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
        {details.map((d) => (
          <li key={d}>{d}</li>
        ))}
      </ul>
    </motion.div>
  );
}

// Metadata for this page is defined in `src/app/anastasia/head.tsx`

  return <RetroDesktop />;
}