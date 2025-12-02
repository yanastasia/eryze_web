"use client";

import dynamic from "next/dynamic";
const CollabBanner = dynamic(() => import("@/components/CollabBanner"), { ssr: false });

export default function CTASection() {
  return <CollabBanner />;
}

