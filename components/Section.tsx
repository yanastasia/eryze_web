"use client";

import { motion } from "framer-motion";
import type { HTMLMotionProps } from "framer-motion";

type SectionProps = HTMLMotionProps<"section"> & { children: React.ReactNode };

export default function Section({ children, className, ...props }: SectionProps) {
  return (
    <motion.section
      className={className}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-20%" }}
      transition={{ duration: 0.6 }}
      {...props}
    >
      {children}
    </motion.section>
  );
}