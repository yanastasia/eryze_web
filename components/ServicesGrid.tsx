"use client";

import dynamic from "next/dynamic";
const MotionCards = dynamic(() => import("@/components/MotionCards"), { ssr: false });

export default function ServicesGrid() {
  return <MotionCards />;
}

