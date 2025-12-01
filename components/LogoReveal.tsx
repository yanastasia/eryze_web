"use client";

import { motion } from "framer-motion";

export default function LogoReveal() {
  return (
    <div className="flex items-center gap-3">
      <motion.div
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="font-header text-3xl font-semibold"
        style={{
          backgroundImage: "linear-gradient(135deg, #9B5FFF 0%, #79CFFF 60%, #D3D8E0 100%)",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          color: "transparent",
        }}
      >
        Eryze
      </motion.div>
    </div>
  );
}