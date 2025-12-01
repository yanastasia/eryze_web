"use client";
import { motion } from "framer-motion";
import { X, Minus, Square } from "lucide-react";

type PixelWindowProps = {
  title: string;
  accent: string;
  children: React.ReactNode;
  onClose?: () => void;
  onMinimize?: () => void;
  onMaximize?: () => void;
  className?: string;
  focused?: boolean;
  draggable?: boolean;
};

export default function PixelWindow({ title, accent, children, onClose, onMinimize, onMaximize, className, focused = false, draggable = true }: PixelWindowProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 8 }}
      transition={{ duration: 0.25 }}
      className={`rounded-sm border ${focused ? "border-[color:var(--accent-border)]" : "border-white/20"} bg-black/60 text-[#E6E6E6] shadow-[0_0_0_2px_#000_inset,0_8px_0_rgba(0,0,0,0.35)] ${className ?? ""}`}
      style={{
        imageRendering: "pixelated",
        backdropFilter: "blur(2px)",
        boxShadow: focused ? `0 0 0 2px ${accent}66, 0 0 12px ${accent}44 inset` : undefined,
      }}
      drag={draggable}
      dragMomentum={false}
    >
      <div className="flex items-center justify-between px-3 py-2" style={{ background: `linear-gradient(90deg, ${accent}33, transparent)` }}>
        <div className="flex items-center gap-2">
          <span className="inline-block h-2.5 w-2.5 bg-red-500" />
          <span className="inline-block h-2.5 w-2.5 bg-yellow-400" />
          <span className="inline-block h-2.5 w-2.5 bg-green-400" />
          <span className="text-sm uppercase tracking-wider" style={{ letterSpacing: "0.06em" }}>{title}</span>
        </div>
        <div className="flex items-center gap-1">
          <button onClick={onMinimize} className="p-1 hover:bg-white/10 rounded-sm" aria-label="Minimize"><Minus size={12} /></button>
          <button onClick={onMaximize} className="p-1 hover:bg-white/10 rounded-sm" aria-label="Maximize"><Square size={12} /></button>
          <button onClick={onClose} className="p-1 hover:bg-white/10 rounded-sm" aria-label="Close"><X size={12} /></button>
        </div>
      </div>
      <div className="p-4">
        {children}
      </div>
    </motion.div>
  );
}