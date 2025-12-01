"use client";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PixelWindow from "@/components/pixel/PixelWindow";
import PixelTaskbar from "@/components/pixel/PixelTaskbar";
import PixelFolderGrid from "@/components/pixel/PixelFolderGrid";
import { CRT, PALETTE } from "@/components/pixel/colors";
import BuilderTerminal from "@/components/pixel/BuilderTerminal";
import StrategistDoc from "@/components/pixel/StrategistDoc";
import CreatorImageViewer from "@/components/pixel/CreatorImageViewer";
import ConnectorChat from "@/components/pixel/ConnectorChat";

type AppId = "builder" | "strategist" | "creator" | "connector" | "visionary" | "skills";

export default function RetroDesktop() {
  const [open, setOpen] = useState<AppId[]>(["skills"]);
  const [focused, setFocused] = useState<AppId | null>(null);
  const [command, setCommand] = useState<string>("");
  const desktopRef = useRef<HTMLDivElement | null>(null);
  const toggleApp = useCallback((id: AppId) => {
    setOpen((prev) => (prev.includes(id) ? prev.filter((p) => p !== id) : [...prev, id]));
    setFocused(id);
  }, []);

  const folders = useMemo(() => [
    { name: "Engineering", items: ["Python", "Next.js", "UNIX", "DFM", "Automation", "APIs"] },
    { name: "Product", items: ["Discovery", "Roadmapping", "MVP", "Metrics", "Ops", "Growth"] },
    { name: "Design", items: ["Figma", "Systems", "Identity", "Motion", "Prototyping", "UX"] },
    { name: "Community", items: ["Programs", "DEI", "Events", "Mentorship", "Partners", "Content"] },
    { name: "Research", items: ["AI", "Scraping", "Data", "Mapping", "ServiceMap", "Docs"] },
    { name: "Tools", items: ["Prisma", "Tailwind", "Postmark", "Vercel", "Docker", "Git"] },
  ], []);

  // Global reset shortcut
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.altKey && e.key.toLowerCase() === "r") {
        setOpen(["skills"]);
        setFocused(null);
        setCommand("");
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Command parser: "> run [file]"
  const runCommand = useCallback(() => {
    const trimmed = command.trim().toLowerCase();
    if (!trimmed) return;
    const file = trimmed.replace(/^>\s*/, "").replace(/^run\s*/, "");
    if (file.includes("builder")) toggleApp("builder");
    else if (file.includes("strategist")) toggleApp("strategist");
    else if (file.includes("creator")) toggleApp("creator");
    else if (file.includes("connector")) toggleApp("connector");
    else if (file.includes("visionary")) toggleApp("visionary");
    else if (file.includes("skills")) toggleApp("skills");
    setCommand("");
  }, [command, toggleApp]);

  return (
    <div ref={desktopRef} className="min-h-screen" style={{ background: CRT.bg, color: CRT.text }}>
      {/* CRT scanlines overlay */}
      <div aria-hidden className="fixed inset-0 -z-10 opacity-[0.08]" style={{
        backgroundImage: "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px)",
        backgroundSize: "100% 3px",
        mixBlendMode: "screen",
      }} />

      {/* Pixel grid background */}
      <div aria-hidden className="fixed inset-0 -z-20 opacity-10" style={{
        backgroundImage: "linear-gradient(" + CRT.grid + " 1px, transparent 1px), linear-gradient(90deg, " + CRT.grid + " 1px, transparent 1px)",
        backgroundSize: "12px 12px, 12px 12px",
      }} />

      {/* Desktop icons / folders window */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 pt-8 pb-28">
        <AnimatePresence initial={false}>
          {open.includes("skills") && (
            <PixelWindow title="Skills" accent={PALETTE.builder} onClose={() => toggleApp("skills")} className="max-w-xl" focused={focused === "skills"}>
              <div className="space-y-3">
                <PixelFolderGrid
                  folders={folders}
                  onOpen={(name) => {
                    // Map folders to windows
                    const map: Record<string, AppId> = {
                      Engineering: "builder",
                      Product: "strategist",
                      Design: "creator",
                      Community: "connector",
                      Research: "visionary",
                      Tools: "builder",
                    };
                    const target = map[name];
                    if (target) toggleApp(target);
                  }}
                />
                <div className="rounded-sm border border-white/20 bg-black/50 p-2 text-xs opacity-75">
                  Tip: Click a folder to open its window (Builder, Strategist, Creator, Connector, Visionary).
                </div>
              </div>
            </PixelWindow>
          )}

          {open.includes("builder") && (
            <PixelWindow
              title="C:\\ERYZE_SYSTEM\\BUILDER.EXE"
              accent={PALETTE.builder}
              onClose={() => {
                if (window.confirm("Are you sure?")) toggleApp("builder");
              }}
              className="mt-6"
              focused={focused === "builder"}
            >
              <BuilderTerminal onExecutionComplete={() => { /* noop for now */ }} />
            </PixelWindow>
          )}

          {open.includes("strategist") && (
            <PixelWindow
              title="C:\\ERYZE_SYSTEM\\STRATEGIST.DOC"
              accent={PALETTE.strategist}
              onClose={() => {
                if (window.confirm("Are you sure?")) toggleApp("strategist");
              }}
              className="mt-6"
              focused={focused === "strategist"}
            >
              <StrategistDoc />
            </PixelWindow>
          )}

          {open.includes("creator") && (
            <PixelWindow
              title="C:\\ERYZE_SYSTEM\\CREATOR.PNG"
              accent={PALETTE.creator}
              onClose={() => {
                if (window.confirm("Are you sure?")) toggleApp("creator");
              }}
              className="mt-6"
              focused={focused === "creator"}
            >
              <CreatorImageViewer />
            </PixelWindow>
          )}

          {open.includes("connector") && (
            <PixelWindow
              title="C:\\ERYZE_SYSTEM\\CONNECTOR.COM"
              accent={PALETTE.connector}
              onClose={() => toggleApp("connector")}
              className="mt-6"
              focused={focused === "connector"}
            >
              <ConnectorChat />
            </PixelWindow>
          )}

          {open.includes("visionary") && (
            <PixelWindow title="Visionary" accent={PALETTE.visionary} onClose={() => toggleApp("visionary")} className="mt-6">
              <div className="grid gap-3 md:grid-cols-2">
                {Array.from({ length: 4 }).map((_, i) => (
                  <div key={i} className="rounded-sm border border-white/20 bg-black/40 p-3 text-sm">Vision Card {i + 1}</div>
                ))}
              </div>
            </PixelWindow>
          )}
        </AnimatePresence>
      </div>

      {/* Command bar */}
      <div className="fixed bottom-8 left-0 right-0 z-40">
        <div className="mx-auto max-w-7xl px-3">
          <div className="rounded-sm border border-white/20 bg-black/70 text-sm p-2 flex items-center gap-2">
            <span className="opacity-70">&gt;</span>
            <input
              value={command}
              onChange={(e) => setCommand(e.target.value)}
              onKeyDown={(e) => { if (e.key === "Enter") runCommand(); }}
              placeholder="run [file]"
              className="bg-transparent outline-none flex-1"
            />
          </div>
        </div>
      </div>

      {/* Taskbar */}
      <PixelTaskbar
        active={open}
        onToggle={(id) => toggleApp(id as AppId)}
      />
    </div>
  );
}