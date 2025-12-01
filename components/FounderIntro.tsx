"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import HeadshotOrbit from "@/components/HeadshotOrbit";

export default function FounderIntro() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -40]);

  return (
    <div className="grid gap-10 md:grid-cols-2 items-center">
      <motion.div style={{ y }} className="place-self-center">
        <HeadshotOrbit size={256} src="/anastasia-headshot.jpg" alt="Anastasia headshot" />
      </motion.div>

      <div>
        <h3 className="font-header text-3xl">Meet Anastasia</h3>
        <p className="mt-3 text-muted-foreground">
          I’m Anastasia Yakimovska, founder of Eryze. Builder, product thinker, and community connector shaping the SEE innovation landscape.
        </p>
        <div className="mt-6">
          <Link href="/anastasia" className="text-sm underline underline-offset-4">Explore My Work</Link>
        </div>
      </div>
    </div>
  );
}