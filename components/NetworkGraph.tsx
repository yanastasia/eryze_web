"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export type GraphNode = { label: string; x: number; y: number };
export type GraphEdge = [[number, number], [number, number]];

export default function NetworkGraph({ nodes, edges, className }: { nodes: GraphNode[]; edges: GraphEdge[]; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { margin: "-20% 0px" });

  return (
    <div ref={ref} className={"relative rounded-xl border border-border bg-card/60 p-6 overflow-hidden " + (className ?? "")}> 
      <div className="relative h-64 w-full">
        {nodes.map((n, i) => (
          <motion.div
            key={n.label}
            className="absolute"
            style={{ left: `${n.x}%`, top: `${n.y}%` }}
            initial={{ opacity: 0.6, scale: 0.9 }}
            whileHover={{ scale: 1.08 }}
            animate={inView ? { opacity: [0.6, 1, 0.8] } : {}}
            transition={{ delay: i * 0.15, duration: 2.5, repeat: Infinity }}
          >
            <div className="rounded-full px-3 py-1 text-xs bg-white/70 dark:bg-black/40 backdrop-blur border border-border">
              {n.label}
            </div>
            <div className="absolute -z-10 -left-6 -top-4 h-12 w-12" style={{
              background: "radial-gradient(circle, rgba(121,207,255,0.25), transparent 70%)",
              filter: "blur(8px)",
            }} />
          </motion.div>
        ))}

        {edges.map(([[x1,y1],[x2,y2]], i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{ left: `${Math.min(x1,x2)}%`, top: `${Math.min(y1,y2)}%`, width: `${Math.abs(x2-x1)}%`, height: 1 }}
            initial={{ opacity: 0.2 }}
            animate={inView ? { opacity: [0.2, 0.5, 0.3] } : {}}
            transition={{ duration: 3 + i, repeat: Infinity }}
          >
            <div className="h-px w-full" style={{ background: "rgba(121,207,255,0.22)" }} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}