"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

type HeadshotOrbitProps = {
  src?: string;
  alt?: string;
  size?: number; // diameter in px
  className?: string;
};

export default function HeadshotOrbit({ src = "/anastasia-headshot.jpg", alt = "Founder headshot", size = 220, className }: HeadshotOrbitProps) {
  const [errored, setErrored] = useState(false);

  return (
    <div className={"relative " + (className ?? "")} style={{ width: size, height: size }}>
      {/* Orbiting glow */}
      <motion.div
        aria-hidden
        className="absolute inset-0 rounded-full"
        style={{ filter: "blur(12px)", background: "conic-gradient(from 0deg, rgba(121,207,255,0.25), rgba(155,95,255,0.25), rgba(211,216,224,0.15))" }}
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
      />

      {/* Inner ring */}
      <div className="absolute inset-2 rounded-full border border-border" style={{ background: "linear-gradient(135deg, #0B1224, #101B37)" }} />

      {/* Headshot or fallback */}
      <div className="absolute inset-4 rounded-full overflow-hidden">
        {errored ? (
          <div className="flex h-full w-full items-center justify-center text-2xl font-header">A</div>
        ) : (
          <Image
            src={src}
            alt={alt}
            fill
            sizes={`${size}px`}
            style={{ objectFit: "cover" }}
            onError={() => setErrored(true)}
            priority
          />
        )}
      </div>

      {/* Hover ripple */}
      <motion.div
        aria-hidden
        className="absolute -inset-2 rounded-full"
        style={{ background: "radial-gradient(closest-side, rgba(121,207,255,0.20), transparent 70%)" }}
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1, scale: 1.04 }}
        transition={{ duration: 0.3 }}
      />
    </div>
  );
}