"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Eye, Sparkles, Users, Move } from "lucide-react";

const values = [
  { label: "Integrity", Icon: ShieldCheck },
  { label: "Clarity", Icon: Eye },
  { label: "Innovation", Icon: Sparkles },
  { label: "Community", Icon: Users },
  { label: "Motion", Icon: Move },
];

export default function ValueIcons() {
  return (
    <div className="flex flex-wrap gap-4">
      {values.map(({ label, Icon }, i) => (
        <motion.div
          key={label}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ margin: "-10% 0%" }}
          transition={{ delay: i * 0.1, duration: 0.5 }}
          className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/20 px-4 py-2"
        >
          <Icon size={16} />
          <span className="text-sm">{label}</span>
        </motion.div>
      ))}
    </div>
  );
}