"use client";
import { useEffect, useState } from "react";
import { PALETTE } from "./colors";

type TaskbarProps = {
  onToggle: (id: string) => void;
  active: string[];
};

export default function PixelTaskbar({ onToggle, active }: TaskbarProps) {
  const apps = [
    { id: "builder", label: "Builder", color: PALETTE.builder },
    { id: "strategist", label: "Strategist", color: PALETTE.strategist },
    { id: "creator", label: "Creator", color: PALETTE.creator },
    { id: "connector", label: "Connector", color: PALETTE.connector },
    { id: "visionary", label: "Visionary", color: PALETTE.visionary },
  ];
  // Client-only clock to avoid SSR hydration mismatch
  const [time, setTime] = useState<string>("");
  useEffect(() => {
    const update = () => setTime(new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", hour12: false }));
    update();
    const id = setInterval(update, 30_000);
    return () => clearInterval(id);
  }, []);
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-white/15 bg-black/70">
      <div className="mx-auto max-w-7xl px-3 py-2 flex items-center gap-3">
        {apps.map((app) => (
          <button
            key={app.id}
            onClick={() => onToggle(app.id)}
            className="rounded-sm border border-white/20 px-2 py-1 text-xs hover:bg-white/5"
            style={{ color: app.color }}
          >
            {active.includes(app.id) ? "■" : "□"} {app.label}
          </button>
        ))}
        <div className="ml-auto text-xs opacity-70" suppressHydrationWarning>{time}</div>
      </div>
    </div>
  );
}