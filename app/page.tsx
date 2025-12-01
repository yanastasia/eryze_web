"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
const GradientFlow = dynamic(() => import("@/components/GradientFlow"), { ssr: false });
import MagneticButton from "@/components/MagneticButton";
import ScrollCue from "@/components/ScrollCue";
const MapSEE = dynamic(() => import("@/components/MapSEE"), { ssr: false });
import ValueIcons from "@/components/ValueIcons";
const MotionCards = dynamic(() => import("@/components/MotionCards"), { ssr: false });
const ProjectCarousel = dynamic(() => import("@/components/ProjectCarousel"), { ssr: false });
const LabsGrid = dynamic(() => import("@/components/LabsGrid"), { ssr: false });
const FounderIntro = dynamic(() => import("@/components/FounderIntro"), { ssr: false });
const CollabBanner = dynamic(() => import("@/components/CollabBanner"), { ssr: false });
import AmbientParticles from "@/components/AmbientParticles";
import Section from "@/components/Section";

export default function Home() {
  const container = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };
  const word = {
    hidden: { opacity: 0, y: 14 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="relative">
      {/* Hero */}
      <div className="relative min-h-[70vh] md:min-h-[80vh]">
        <GradientFlow />
        <AmbientParticles count={18} shape="circle" />
        <div className="mx-auto max-w-6xl px-4 sm:px-6 pt-20 sm:pt-24">
          <motion.h1
            variants={container}
            initial="hidden"
            animate="visible"
            className="mt-8 font-header text-5xl sm:text-6xl font-semibold tracking-tight"
          >
            {"Rise above the ordinary.".split(" ").map((w, i) => (
              <motion.span key={i} variants={word} className="inline-block mr-2">
                {w}
              </motion.span>
            ))}
            <br />
            {"Build what moves the world.".split(" ").map((w, i) => (
              <motion.span key={i} variants={word} className="inline-block mr-2">
                {w}
              </motion.span>
            ))}
          </motion.h1>
          <p className="mt-4 max-w-2xl text-base sm:text-lg text-muted-foreground">
            A development studio crafting bold digital experiences.
          </p>
          <div className="mt-8 sm:mt-10 flex flex-wrap gap-3 sm:gap-4">
            <MagneticButton asChild>
              <Link href="#services">Explore Studio</Link>
            </MagneticButton>
            <MagneticButton variant="outline" asChild>
              <Link href="/labs">Visit Labs</Link>
            </MagneticButton>
          </div>
        </div>
        <ScrollCue />
      </div>

      {/* About */}
      <Section className="mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-24 grid gap-8 sm:gap-10 md:grid-cols-2 items-center">
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
        <MapSEE />
      </Section>

      {/* Services */}
      <Section id="services" className="mx-auto max-w-6xl px-4 sm:px-6 pb-16 sm:pb-24">
        <h2 className="font-header text-3xl">What We Build</h2>
        <p className="mt-2 text-muted-foreground">
          From product development to design systems and rapid innovation.
        </p>
        <div className="mt-8">
          <MotionCards />
        </div>
      </Section>

      {/* Work */}
      <Section className="mx-auto max-w-6xl px-4 sm:px-6 pb-16 sm:pb-24">
        <h2 className="font-header text-3xl">Selected Projects</h2>
        <p className="mt-2 text-muted-foreground">A snapshot of builds in motion.</p>
        <div className="mt-6">
          <ProjectCarousel />
        </div>
      </Section>

      {/* Labs */}
      <Section className="mx-auto max-w-6xl px-4 sm:px-6 pb-16 sm:pb-24">
        <h2 className="font-header text-3xl">Where Ideas Evolve</h2>
        <p className="mt-2 text-muted-foreground max-w-3xl">
          Eryze Labs explores technology that empowers creative ecosystems. From prototypes to public releases, every idea begins here.
        </p>
        <div className="mt-6">
          <LabsGrid />
        </div>
      </Section>

      {/* Founder */}
      <Section className="mx-auto max-w-6xl px-4 sm:px-6 pb-16 sm:pb-24" id="about">
        <FounderIntro />
      </Section>

      {/* Collaboration CTA */}
      <Section className="mx-auto max-w-6xl px-4 sm:px-6 pb-16 sm:pb-24">
        <CollabBanner />
      </Section>
    </div>
  );
}
