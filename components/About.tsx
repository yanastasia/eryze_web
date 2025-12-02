"use client";

import ValueIcons from "@/components/ValueIcons";

export default function About() {
  return (
    <div className="grid gap-8 sm:gap-10 md:grid-cols-2 items-center">
      <div>
        <h2 className="font-header text-3xl">What Eryze Stands For</h2>
        <p className="mt-4 text-muted-foreground">
          Eryze is an innovation-driven studio helping founders, organizations, and creatives transform concepts into digital realities.
          Based in Southeast Europe, we bridge design, technology, and strategy to craft meaningful products.
        </p>
        <div className="mt-6">
          <ValueIcons />
        </div>
      </div>
    </div>
  );
}

