"use client";

import Hero from "@/components/Hero";
import About from "@/components/About";
import ServicesGrid from "@/components/ServicesGrid";
import WorkGrid from "@/components/WorkGrid";
import dynamic from "next/dynamic";
const MapSEE = dynamic(() => import("@/components/MapSEE"), { ssr: false });
import CTASection from "@/components/CTASection";

export default function Home() {
  return (
    <main className="relative">
      <Hero />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <section id="studio" className="pt-16">
          <About />
          <div className="mt-8">
            <ServicesGrid />
          </div>
        </section>

        <section className="pt-16">
          <h2 className="text-3xl font-header text-foreground">Selected Work</h2>
          <p className="mt-2 text-muted-foreground">A curated selection of projects and case studies.</p>
          <WorkGrid />
        </section>

        <section className="pt-16">
          <MapSEE />
        </section>

        <section className="pt-16 pb-12">
          <CTASection />
        </section>
      </div>
    </main>
  );
}
