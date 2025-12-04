"use client";
import { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";

type BuilderTerminalProps = {
  onExecutionComplete?: () => void;
};

function useBeep() {
  const ctxRef = useRef<AudioContext | null>(null);
  useEffect(() => () => { ctxRef.current?.close(); }, []);
  return (freq = 800, duration = 0.04) => {
    if (!ctxRef.current) {
      const AC = (window as unknown as { AudioContext?: typeof AudioContext; webkitAudioContext?: typeof AudioContext }).AudioContext
        ?? (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
      ctxRef.current = AC ? new AC() : null;
      if (!ctxRef.current) return;
    }
    const ctx = ctxRef.current!;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = "square";
    osc.frequency.value = freq;
    gain.gain.value = 0.03;
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    setTimeout(() => osc.stop(), duration * 1000);
  };
}

export default function BuilderTerminal({ onExecutionComplete }: BuilderTerminalProps) {
  const bootLines = useMemo(
    () => [
      "> Initializing core modules…",
      "> Loading automation scripts...",
      "> Launching DFM Deck...",
      "> Connection Established ✅",
    ],
    []
  );

  const contentLines = useMemo(
    () => [
      "PROJECT: GLOBALFOUNDRIES AUTOMATION INFRASTRUCTURE",
      "ROLE: Principal Technician, Design Enablement",
      "FOCUS: Process Automation | Python | UNIX | DFM | Pattern Optimization",
      "---------------------------------------------",
      "• Built XML automation pipeline for FILL team — 80% faster prep time.",
      "• Developed UNIX-based tools for DFM deck validation.",
      "• Co-authored technical paper on ML-assisted pattern optimization.",
      "• Mentored interns, co-organized GlobalWomen Sofia initiatives.",
      "---------------------------------------------",
      "PHILOSOPHY: Code is clarity. Systems are stories written in logic.",
    ],
    []
  );

  const [display, setDisplay] = useState<string[]>([]);
  const [typing, setTyping] = useState<boolean>(true);
  const [cursor, setCursor] = useState<string>("");
  const beep = useBeep();

  useEffect(() => {
    let cancelled = false;
    const typeLine = async (line: string) => {
      let buf = "";
      setCursor("_");
      for (let i = 0; i < line.length && !cancelled; i++) {
        buf += line[i];
        setDisplay((prev) => [...prev.slice(0, -1), buf]);
        await new Promise((r) => setTimeout(r, 30));
      }
      beep(900, 0.03);
      setCursor("");
    };

    const run = async () => {
      setDisplay([""]); // prime first line
      for (const l of bootLines) {
        await typeLine(l);
        setDisplay((prev) => [...prev, ""]);
      }
      for (const l of contentLines) {
        await typeLine(l);
        setDisplay((prev) => [...prev, ""]);
      }
      setTyping(false);
    };
    run();
    return () => { cancelled = true; };
  }, [bootLines, contentLines, beep]);

  const handleEnter = () => {
    setDisplay((prev) => [...prev, "> EXECUTION COMPLETE."]);
    beep(600, 0.05);
    onExecutionComplete?.();
  };

  return (
    <div
      className="relative rounded-sm border border-[#3FFFE277] bg-black p-3 text-[13px] leading-relaxed"
      style={{ color: "#3FFFE2", fontFamily: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas" }}
      onKeyDown={(e) => {
        if (e.key === "Enter") handleEnter();
      }}
      tabIndex={0}
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 opacity-[0.06]" style={{
        backgroundImage: "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px)",
        backgroundSize: "100% 3px",
        mixBlendMode: "screen",
      }} />
      <div aria-hidden className="pointer-events-none absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: "linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
        backgroundSize: "4px 100%",
        mixBlendMode: "overlay",
      }} />

      <motion.div
        initial={{ opacity: 0.9 }}
        animate={{ opacity: [0.9, 1, 0.95, 1] }}
        transition={{ duration: 8, repeat: Infinity }}
      >
        <pre className="whitespace-pre-wrap">
          {display.map((line, i) => (
            <div key={i}>
              <span className="text-[#3FFFE2]">{line}</span>
              {i === display.length - 1 && typing ? cursor : null}
            </div>
          ))}
        </pre>
      </motion.div>

      <div className="absolute left-1 top-1 text-[#3FFFE2] opacity-60">┌</div>
      <div className="absolute right-1 top-1 text-[#3FFFE2] opacity-60">┐</div>
      <div className="absolute left-1 bottom-1 text-[#3FFFE2] opacity-60">└</div>
      <div className="absolute right-1 bottom-1 text-[#3FFFE2] opacity-60">┘</div>
    </div>
  );
}
