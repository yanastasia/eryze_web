"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import type { HTMLMotionProps } from "framer-motion";

type SectionWrapperProps = HTMLMotionProps<"section"> & {
  children: React.ReactNode;
  parallaxStrength?: number; // pixels of translateY at max
};

export default function SectionWrapper({ children, className, parallaxStrength = 20, ...props }: SectionWrapperProps) {
  const { scrollYProgress } = useScroll();
  const translateY = useTransform(scrollYProgress, [0, 1], [0, parallaxStrength]);

  return (
    <motion.section
      className={className}
      style={{ y: translateY }}
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, margin: "-10%" }}
      transition={{ duration: 0.5 }}
      {...props}
    >
      {children}
    </motion.section>
  );
}