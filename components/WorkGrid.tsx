"use client";

import dynamic from "next/dynamic";
const ProjectCarousel = dynamic(() => import("@/components/ProjectCarousel"), { ssr: false });

export default function WorkGrid() {
  return <ProjectCarousel />;
}

