"use client";

import { motion } from "framer-motion";

type CardItem = {
  title: string;
  copy: string;
};

const items: CardItem[] = [
  {
    title: "Product & Web Development",
    copy: "From concept to launch - modern, fast, and scalable.",
  },
  {
    title: "Automation & Systems",
    copy: "Integrations that make your product smarter and leaner.",
  },
  {
    title: "Design & UX Systems",
    copy: "Where function meets emotion - design that moves people.",
  },
  {
    title: "Innovation & Hackathons",
    copy: "Rapid prototyping for transformative ideas.",
  },
];

export default function MotionCards() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {items.map((item, i) => (
        <motion.div
          key={item.title}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ margin: "-10% 0%" }}
          transition={{ delay: i * 0.1, duration: 0.5 }}
          whileHover={{ scale: 1.02 }}
          className="relative rounded-xl border border-border bg-card/60 p-6"
        >
          <div className="absolute inset-0 rounded-xl pointer-events-none" style={{
            background:
              "linear-gradient(135deg, rgba(139,92,246,0.18), rgba(192,132,252,0.10))",
            mixBlendMode: "soft-light",
          }} />
          <h3 className="font-header text-xl">{item.title}</h3>
          <p className="mt-2 text-sm text-muted-foreground">{item.copy}</p>
        </motion.div>
      ))}
    </div>
  );
}