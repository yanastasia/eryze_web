"use client";
import { motion } from "framer-motion";
import { useMemo } from "react";

export default function StrategistDoc() {
  const sections = useMemo(
    () => [
      {
        header: "> [ PRODUCT LEADERSHIP ]",
        lines: [
          "KIDSGO — Co-Founder & CEO",
          "→ Built MVP with UX flow, admin dashboards, and marketplace logic.",
          "→ Validated user research across parents & organizers in SEE region.",
          "→ Secured placement in 5 accelerators: Start for Future, Beyond, SEEIP, Plug&Pay, Skills2Scale.",
        ],
      },
      {
        header: "> [ STRATEGIC LEARNING ]",
        lines: [
          "Brainster Academy – Product & Project Management (2025–2026)",
          "→ Agile implementation, stakeholder mapping, sprint planning.",
        ],
      },
      {
        header: "> [ VENTURE MINDSET ]",
        lines: [
          "LAUNCHub Ventures VC Crash Course (2025)",
          "→ Created investment memos, deal analysis, and term sheet evaluations.",
          "→ Research: “Universities as Startup Hubs — Adapting Global Models for the Balkans.”",
        ],
      },
    ],
    []
  );

  return (
    <div className="rounded-sm border border-white/20 bg-[#0B1526] text-[#E6F0FF]">
      {/* Top bar */}
      <div className="flex gap-4 px-3 py-2 text-[12px] tracking-wide" style={{ fontFamily: "ui-monospace, Menlo, Monaco" }}>
        <span>Document Tools</span>
        <span>Format</span>
        <span>Insert</span>
        <span>Help</span>
      </div>

      {/* Ruler */}
      <div className="px-3 text-[#84A9FF] text-[11px]">==============================================</div>

      {/* Content */}
      <div className="max-h-[360px] overflow-y-auto p-4">
        {sections.map((s, si) => (
          <div key={si} className="mb-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0.9] }}
              transition={{ duration: 0.8 }}
              className="text-[13px] text-[#84A9FF]"
            >
              {s.header}
            </motion.div>
            <div className="text-[12.5px] text-[#E6F0FF]">
              <div className="text-[#84A9FF]">————————————————————————————————————</div>
              {s.lines.map((line, li) => (
                <motion.div
                  key={li}
                  initial={{ opacity: 0, color: "#FFFFFF" }}
                  animate={{ opacity: 1, color: ["#FFFFFF", "#84A9FF"] }}
                  transition={{ duration: 0.8, delay: 0.08 * li }}
                  className="px-1 py-0.5 hover:bg-[#1A2240]"
                >
                  {line}
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between px-3 py-2 text-[11px] text-[#84A9FF]">
        <span>* Strategy is structure in motion *</span>
        <span>[PAGE 1 OF 3]</span>
      </div>
    </div>
  );
}