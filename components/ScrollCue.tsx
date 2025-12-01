"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export default function ScrollCue() {
  return (
    <motion.div
      className="absolute bottom-6 left-1/2 -translate-x-1/2 text-muted-foreground"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.2, duration: 0.6 }}
    >
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 1.6, repeat: Infinity }}
      >
        <ArrowDown className="h-6 w-6" />
      </motion.div>
    </motion.div>
  );
}