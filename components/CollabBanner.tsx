"use client";

import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import Link from "next/link";
import MagneticButton from "@/components/MagneticButton";

export default function CollabBanner() {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";
  return (
    <div className="relative overflow-hidden rounded-2xl border border-border">
      <div
        className="absolute inset-0"
        style={{
          background: isDark
            ? "linear-gradient(135deg, #101B37, #0B1224)"
            : "linear-gradient(135deg, #E2E8F0, #CBD5E1)",
        }}
      />
      <motion.div
        className="absolute inset-0 opacity-60"
        animate={{ x: ["-20%", "120%", "-20%"] }}
        transition={{ duration: 8, repeat: Infinity }}
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(121,207,255,0.25), transparent)",
          filter: "blur(12px)",
        }}
      />
      <div className="relative px-6 py-10 md:px-10 md:py-14">
        <h3 className="font-header text-2xl">Let’s Build Something Meaningful</h3>
        <p className="mt-2 text-muted-foreground max-w-3xl">
          Whether you’re a founder, cultural project, or innovator - Eryze helps you transform vision into impact.
        </p>
        <div className="mt-6 flex flex-wrap gap-4">
          <MagneticButton asChild>
            <Link href="/contact">Work with Eryze</Link>
          </MagneticButton>
          <MagneticButton variant="outline" asChild>
            <Link href="/labs#collaborate">Partner with Labs</Link>
          </MagneticButton>
        </div>
      </div>
    </div>
  );
}
