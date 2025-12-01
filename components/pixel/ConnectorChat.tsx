"use client";
import { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Retro chat / dial-up client window (IRC/BBS vibes)
// Accent Lime #C9FF8E, thin borders, dithered background, status bar
export default function ConnectorChat() {
  const accent = "#C9FF8E";

  // Left column channel list
  const channels = useMemo(
    () => [
      { id: "#globalwomen", label: "#globalwomen" },
      { id: "#etp-bulgaria", label: "#etp-bulgaria" },
      { id: "#eryze-labs", label: "#eryze-labs" },
      { id: "#erasmus", label: "#erasmus" },
      { id: "#see-ecosystem", label: "#see-ecosystem" },
    ],
    []
  );

  // Simulated system messages stream (not real chat)
  type Msg = { id: number; text: string };
  const seeds = useMemo<Msg[]>(
    () => [
      { id: 1, text: "[SYS] Handshake complete :: CONNECTED @ 56 kbps" },
      { id: 2, text: "[SYS] Syncing channels :: #globalwomen, #eryze-labs, #erasmus" },
      { id: 3, text: "[SYS] New community node detected :: SEE Ecosystem" },
      { id: 4, text: "[SYS] Broadcast scheduled :: Collaboration Week (Eryze Labs)" },
      { id: 5, text: "[SYS] Mentorship circle opening :: Erasmus cohort Q2" },
      { id: 6, text: "[SYS] Resource map updated :: Bulgaria ETP partners" },
      { id: 7, text: "[SYS] Signal boost :: GlobalFoundries women in tech" },
    ],
    []
  );
  const [messages, setMessages] = useState<Msg[]>([]);
  const [cursor, setCursor] = useState(0);
  const timer = useRef<number | null>(null);

  useEffect(() => {
    if (cursor >= seeds.length) return;
    timer.current = window.setTimeout(() => {
      setMessages((prev) => [...prev, seeds[cursor]]);
      setCursor((c) => c + 1);
    }, 900 + cursor * 250);
    return () => {
      if (timer.current) window.clearTimeout(timer.current);
    };
  }, [cursor, seeds]);

  return (
    <div
      className="rounded-sm border border-white/40 bg-black/80"
      style={{
        backgroundImage:
          // Dithered backdrop: subtle checker + noise lines
          "repeating-linear-gradient(45deg, rgba(255,255,255,0.04) 0 2px, transparent 2px 4px)",
      }}
    >
      {/* Split layout */}
      <div className="grid grid-cols-3 gap-0">
        {/* Left: channel list */}
        <div className="col-span-1 border-r border-white/30 p-2 text-xs">
          <div className="mb-2 opacity-70">Channels</div>
          <div className="space-y-1">
            {channels.map((ch) => (
              <button
                key={ch.id}
                className="block w-full rounded-sm border px-2 py-1 text-left hover:opacity-100"
                style={{
                  borderColor: accent,
                  color: accent,
                  boxShadow: "0 0 0 0.5px rgba(201,255,142,0.45) inset",
                }}
              >
                <span className="transition-colors">{ch.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Right: main chat log */}
        <div className="col-span-2 p-2">
          <div className="rounded-sm border text-[12px] font-mono"
            style={{ borderColor: accent }}
          >
            <div className="p-2 space-y-2">
              <AnimatePresence initial={false}>
                {messages.map((m) => (
                  <motion.div
                    key={m.id}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="rounded-sm border px-2 py-1"
                    style={{
                      borderColor: accent,
                      color: accent,
                      background:
                        "linear-gradient(180deg, rgba(201,255,142,0.08), rgba(0,0,0,0.3))",
                    }}
                  >
                    {m.text}
                  </motion.div>
                ))}
              </AnimatePresence>

              {cursor < seeds.length && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, repeat: Infinity, repeatType: "reverse" }}
                  className="text-[12px] font-mono opacity-60"
                  style={{ color: accent }}
                >
                  …streaming
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Status bar */}
      <div
        className="mt-2 border-t px-2 py-1 text-[12px] font-mono"
        style={{ borderColor: accent, color: accent }}
      >
        STATUS: CONNECTED @ 56 kbps
      </div>
    </div>
  );
}