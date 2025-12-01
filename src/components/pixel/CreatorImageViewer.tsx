"use client";
import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Item = { title: string; description: string };

export default function CreatorImageViewer() {
  const items = useMemo<Item[]>(
    () => [
      { title: "Eryze Brand Kit", description: "Logo, typography, and color identity for Eryze ecosystem." },
      { title: "KidsGo UI Sketches", description: "Onboarding flow and playful calendar prototypes." },
      { title: "ActingEurope Design", description: "Seat-map system and PDF ticket UX." },
      { title: "Cafe Bar Ministerstvo", description: "Event campaign posters, photos, and video reel snapshots." },
      { title: "Figma System Previews", description: "Shared component sets and style tokens." },
      { title: "Studio Moodboard", description: "Textures and gradients that guide brand feeling." },
    ],
    []
  );

  const [selected, setSelected] = useState<number | null>(null);
  const [progress, setProgress] = useState<number>(60);

  return (
    <div className="rounded-sm border border-white bg-gradient-to-br from-[#3C165B] to-[#140E26] p-3">
      {/* Toolbar */}
      <div className="mb-3 flex items-center gap-2 text-[12px]">
        {"[ Open ] [ Zoom ] [ Filter ] [ Exit ]"}
      </div>

      {/* Gallery grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {items.map((it, i) => (
          <motion.button
            key={it.title}
            onClick={() => setSelected(i)}
            className="group relative aspect-[4/3] rounded-sm border-2 border-white bg-[#D073FF]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <motion.div
              className="absolute inset-0"
              whileHover={{ scale: 1.05, filter: "invert(1)", rotate: 0.2 }}
              transition={{ type: "tween", duration: 0.2 }}
              style={{
                backgroundImage: "linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)",
                backgroundSize: "8px 100%, 100% 8px",
              }}
            />
            <div className="absolute bottom-1 left-1 right-1 text-[11px] bg-black/40 text-white px-1 py-0.5">
              {it.title}
            </div>
          </motion.button>
        ))}
      </div>

      {/* Loader */}
      <div className="mt-4 text-[12px] text-white/80">
        [<span className="inline-block align-middle" style={{ width: "160px" }}>
          <span
            className="inline-block h-[10px] bg-[#D073FF]"
            style={{ width: `${progress}%` }}
          />
          <span className="inline-block h-[10px] bg-black/40" style={{ width: `${100 - progress}%` }} />
        </span>] {progress}% LOADING…
      </div>

      {/* Footer caption */}
      <div className="mt-2 text-[12px] text-white/90">
        "Design is the interface between logic and feeling."
      </div>

      {/* Fullscreen pop-up */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="max-w-lg w-full rounded-sm border-2 border-white bg-black text-white p-4"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.96 }}
            >
              <div className="text-lg font-semibold">{items[selected].title}</div>
              <motion.div
                className="mt-2 text-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ type: "tween", duration: 0.5 }}
              >
                {items[selected].description}
              </motion.div>
              <div className="mt-4 flex justify-end">
                <button className="rounded-sm border border-white px-3 py-1 text-sm" onClick={() => setSelected(null)}>Close</button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}