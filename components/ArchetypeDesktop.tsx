"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { Folder, Wrench, Palette, Users, FlaskConical, Cpu, LineChart } from "lucide-react";

type Archetype = {
  id: string;
  title: string;
  accent: string;
  bg: string;
  copy: string;
};

const archetypes: Archetype[] = [
  { id: "builder", title: "The Builder", accent: "#79CFFF", bg: "linear-gradient(135deg,#0B1224,#101B37)", copy: "Engineering clarity into reality." },
  { id: "strategist", title: "The Strategist", accent: "#9B5FFF", bg: "linear-gradient(135deg,#0B1224,#140E26)", copy: "Designing products with purpose." },
  { id: "creator", title: "The Creator", accent: "#B77CFF", bg: "linear-gradient(135deg,#101B37,#140E26)", copy: "Designing emotion into technology." },
  { id: "connector", title: "The Connector", accent: "#79CFFF", bg: "linear-gradient(135deg,#0B1224,#0B1220)", copy: "Building communities that rise together." },
  { id: "explorer", title: "The Explorer", accent: "#B77CFF", bg: "linear-gradient(135deg,#0B1224,#101B37)", copy: "Where curiosity becomes creation." },
  { id: "visionary", title: "The Visionary", accent: "#9B5FFF", bg: "linear-gradient(135deg,#0B1224,#140E26)", copy: "Innovation in motion." },
];

const skills = [
  { name: "Engineering", icon: Cpu },
  { name: "Product", icon: LineChart },
  { name: "Design", icon: Palette },
  { name: "Community", icon: Users },
  { name: "Research", icon: FlaskConical },
  { name: "Tools", icon: Wrench },
];

export default function ArchetypeDesktop() {
  const [active, setActive] = useState<string>("builder");
  const [skillOpen, setSkillOpen] = useState<string | null>(null);

  const activeData = archetypes.find((a) => a.id === active)!;

  return (
    <div className="relative grid grid-cols-1 md:grid-cols-[220px,1fr] gap-6">
      {/* Pixel grid background */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 opacity-10" style={{
        backgroundImage: "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
        backgroundSize: "16px 16px, 16px 16px",
      }} />

      {/* Folders column */}
      <div className="rounded-2xl border border-border bg-card/60 p-4">
        <h3 className="text-sm uppercase tracking-wide opacity-70 mb-3">Skills</h3>
        <div className="grid grid-cols-2 gap-3">
          {skills.map(({ name, icon: Icon }) => (
            <button
              key={name}
              onClick={() => setSkillOpen(skillOpen === name ? null : name)}
              className="group flex items-center gap-2 rounded-md border border-border bg-background/60 px-3 py-2 text-sm hover:bg-background"
            >
              <Folder size={16} className="opacity-80" />
              <Icon size={14} className="opacity-80" />
              <span>{name}</span>
            </button>
          ))}
        </div>
        {/* Simple drawer for selected folder */}
        {skillOpen && (
          <div className="mt-3 rounded-md border border-border bg-background/60 p-3 text-xs">
            <div className="font-semibold mb-2">{skillOpen}</div>
            <div className="grid grid-cols-2 gap-2">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="rounded-sm border border-border/70 bg-card/50 px-2 py-1">Item {i + 1}</div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Window area */}
      <div className="space-y-4">
        {/* Window chrome */}
        <div className="rounded-2xl border border-border overflow-hidden">
          <div className="flex items-center justify-between px-3 py-2" style={{
            background: `linear-gradient(90deg, ${activeData.accent}33, transparent)`,
          }}>
            <div className="flex items-center gap-2">
              <span className="inline-flex h-3 w-3 rounded-sm bg-red-400" />
              <span className="inline-flex h-3 w-3 rounded-sm bg-yellow-400" />
              <span className="inline-flex h-3 w-3 rounded-sm bg-green-400" />
              <span className="text-sm font-header uppercase tracking-wide">{activeData.title}</span>
            </div>
            <div className="flex items-center gap-2">
              {archetypes.map((a) => (
                <button key={a.id} onClick={() => setActive(a.id)} className="text-xs px-2 py-1 rounded-md border border-border hover:bg-card/60" style={{ color: a.accent }}>
                  {a.title.split(" ")[1]}
                </button>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="p-6"
            style={{ background: activeData.bg }}
          >
            <p className="text-sm text-muted-foreground">{activeData.copy}</p>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="rounded-xl border border-border bg-card/60 p-4">
                  <div className="text-sm opacity-70">{activeData.title} Card {i + 1}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}