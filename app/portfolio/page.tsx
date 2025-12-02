"use client";

import React from "react";
import { motion } from "framer-motion";
import { anastasiaPortfolio } from "@/lib/anastasiaPortfolio";

export default function PortfolioPage() {
  return (
    <main className="min-h-screen pt-20 pb-10">
      <section className="py-20 border-b border-border">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-5xl md:text-6xl font-header text-foreground mb-4">{anastasiaPortfolio.name}</h1>
            <p className="text-2xl text-accent mb-4">{anastasiaPortfolio.title}</p>
            <p className="text-lg text-muted-foreground max-w-2xl">{anastasiaPortfolio.tagline}</p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 border-b border-border">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {anastasiaPortfolio.projects.map((project, idx) => (
              <motion.div key={project.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: idx * 0.1 }}>
                <div className="rounded-lg p-6 border border-border bg-card/60">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-header text-foreground">{project.title}</h3>
                    <span className="text-muted-foreground text-sm">{project.year}</span>
                  </div>
                  <p className="text-muted-foreground text-sm">{project.description}</p>
                  <div className="mt-4 flex gap-2 flex-wrap">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="px-3 py-1 rounded-full text-xs font-semibold bg-white/5 text-secondary border border-secondary/30">{tech}</span>
                    ))}
                  </div>
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-block mt-4 text-secondary underline">View</a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 border-b border-border">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-4xl font-header text-foreground mb-6">Skills</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {Object.values(anastasiaPortfolio.skills).map((group) => (
              <div key={group.label} className="rounded-lg p-6 border border-border bg-card/60">
                <h3 className="text-lg font-header text-foreground">{group.label}</h3>
                <div className="mt-3 flex gap-2 flex-wrap">
                  {group.items.map((item) => (
                    <span key={item} className="px-3 py-1 rounded-full text-xs bg-white/5 text-muted-foreground border border-white/10">{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 border-b border-border">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-4xl font-header text-foreground mb-6">Education</h2>
          <div className="space-y-6">
            {anastasiaPortfolio.education.map((edu) => (
              <div key={edu.id} className="rounded-lg p-6 border border-border bg-card/60">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-lg font-header text-foreground">{edu.degree}</h3>
                    <p className="text-accent">{edu.school}</p>
                  </div>
                  <span className="text-muted-foreground text-sm">{edu.period}</span>
                </div>
                {edu.details && <p className="text-muted-foreground text-sm">{edu.details}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 text-center">
          <h2 className="text-4xl font-header text-foreground mb-6">Let&#39;s Build Something Great</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">Interested in collaborating on innovative products, startups, or tech solutions? Let&#39;s connect and explore how we can work together.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="/contact" className="px-8 py-3 bg-accent text-primary-foreground rounded">Get in Touch</a>
            <a href={`mailto:${anastasiaPortfolio.email}`} className="px-8 py-3 border border-secondary text-secondary rounded">Send Email</a>
          </div>
        </div>
      </section>
    </main>
  );
}
