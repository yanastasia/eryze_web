"use client"
import React from 'react'
import { motion } from 'framer-motion'
import { anastasiaPortfolio } from '../../../lib/anastasiaPortfolio'
import type { ExperienceItem, PortfolioProject, SkillGroup, EducationItem, AchievementItem, LanguageItem } from '../../../lib/anastasiaPortfolio'

export default function AnastasiaPortfolio() {
  return (
    <main className="min-h-screen pt-20 pb-10">
      {/* Hero Section */}
      <section className="py-20 border-b border-border">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex flex-col md:flex-row gap-12 items-start">
              <div className="flex-1">
                <h1 className="text-5xl md:text-6xl font-header text-foreground mb-4">{anastasiaPortfolio.name}</h1>
                <p className="text-2xl text-accent mb-4">{anastasiaPortfolio.title}</p>
                <p className="text-lg text-muted-foreground max-w-2xl mb-6">
                  {anastasiaPortfolio.tagline}
                </p>
                <p className="text-base text-muted-foreground max-w-3xl mb-8">
                  {anastasiaPortfolio.bio}
                </p>
                <div className="flex gap-4 flex-wrap">
                  <a href={`mailto:${anastasiaPortfolio.email}`} className="px-6 py-3 bg-accent text-primary-foreground rounded hover:bg-opacity-90 transition">
                    Get in Touch
                  </a>
                  <a href={anastasiaPortfolio.notionProjects} target="_blank" rel="noopener noreferrer" className="px-6 py-3 border border-secondary text-secondary rounded hover:bg-secondary/10 transition">
                    View University Projects
                  </a>
                </div>
              </div>
              <div className="flex-shrink-0 w-48 h-48 rounded-lg p-1 brand-gradient">
                <div className="w-full h-full rounded-lg bg-card flex items-center justify-center">
                  <div className="text-center text-muted-foreground">
                    <div className="text-4xl mb-2">🎯</div>
                    <p className="text-sm">Portfolio</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 border-b border-border">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-12">
              <h2 className="text-4xl font-header text-foreground">Experience</h2>
            </div>
          </motion.div>
          <div className="space-y-8">
            {anastasiaPortfolio.experience.map((exp: ExperienceItem, idx: number) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                >
                <div className="rounded-lg p-8 border border-border bg-card hover:border-secondary/30 transition">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-header text-foreground">{exp.role}</h3>
                    <p className="text-accent text-lg">{exp.company}</p>
                  </div>
                  <span className="text-muted-foreground text-sm">{exp.period}</span>
                </div>
                <p className="text-muted-foreground text-sm mb-4">{exp.location}</p>
                <ul className="space-y-2">
                  {exp.highlights.map((highlight: string, i: number) => (
                    <li key={i} className="text-muted-foreground flex gap-3">
                      <span className="text-secondary flex-shrink-0 mt-1">▸</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20 border-b border-border">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-12">
              <h2 className="text-4xl font-header text-foreground">Featured Projects</h2>
            </div>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8">
            {anastasiaPortfolio.projects
              .filter((p: PortfolioProject) => p.featured)
              .map((project: PortfolioProject, idx: number) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                >
                  <div className="rounded-lg p-8 border border-border bg-card hover:border-secondary/30 transition group">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-header text-foreground">{project.title}</h3>
                    <span className="text-secondary text-sm font-semibold">{project.year}</span>
                  </div>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <ul className="space-y-2 mb-6">
                    {project.details.map((detail: string, i: number) => (
                      <li key={i} className="text-muted-foreground text-sm flex gap-2">
                        <span className="text-accent flex-shrink-0">•</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex gap-2 flex-wrap mb-4">
                    {project.technologies.map((tech: string) => (
                      <span key={tech} className="px-3 py-1 rounded-full text-xs font-semibold bg-white/5 text-secondary border border-secondary/30">
                        {tech}
                      </span>
                    ))}
                  </div>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block text-accent hover:text-secondary transition"
                    >
                      View Project →
                    </a>
                  )}
                  </div>
                </motion.div>
              ))}
          </div>
        </div>
      </section>

      {/* All Projects */}
      <section className="py-20 border-b border-border">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-12">
              <h2 className="text-4xl font-header text-foreground">All Projects</h2>
            </div>
          </motion.div>
          <div className="space-y-6">
            {anastasiaPortfolio.projects
              .filter((p: PortfolioProject) => !p.featured)
              .map((project: PortfolioProject, idx: number) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                >
                  <div className="rounded-lg p-6 border border-border bg-card/60 hover:border-secondary/30 transition">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-header text-foreground">{project.title}</h3>
                    <span className="text-muted-foreground text-sm">{project.year}</span>
                  </div>
                  <p className="text-muted-foreground text-sm">{project.description}</p>
                  </div>
                </motion.div>
              ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 border-b border-border">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-12">
              <h2 className="text-4xl font-header text-foreground">Skills & Expertise</h2>
            </div>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8">
            {Object.entries(anastasiaPortfolio.skills).map(([key, skillGroup]: [string, SkillGroup], idx) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                >
                <div className="rounded-lg p-8 border border-border bg-card">
                <h3 className="text-xl font-header text-accent mb-6">{(skillGroup as { label: string }).label}</h3>
                <div className="flex flex-wrap gap-3">
                  {(skillGroup as { items: string[] }).items.map((skill: string) => (
                    <span
                      key={skill}
                      className="px-4 py-2 rounded-full text-sm font-semibold bg-secondary/10 text-secondary border border-secondary/30 hover:bg-secondary/20 transition"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 border-b border-border">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-12">
              <h2 className="text-4xl font-header text-foreground">Education</h2>
            </div>
          </motion.div>
          <div className="space-y-6">
            {anastasiaPortfolio.education.map((edu: EducationItem, idx: number) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                >
                <div className="rounded-lg p-6 border border-border bg-card">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-lg font-header text-foreground">{edu.degree}</h3>
                    <p className="text-accent">{edu.school}</p>
                  </div>
                  <span className="text-muted-foreground text-sm">{edu.period}</span>
                </div>
                {edu.details && <p className="text-muted-foreground text-sm">{edu.details}</p>}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 border-b border-border">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-12">
              <h2 className="text-4xl font-header text-foreground">Achievements & Recognition</h2>
            </div>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-6">
            {anastasiaPortfolio.achievements.map((achievement: AchievementItem, idx: number) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                >
                <div className="rounded-lg p-6 border border-border bg-card">
                <div className="flex gap-3 mb-3">
                  <span className="text-2xl">⭐</span>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-foreground">{achievement.title}</h3>
                    <p className="text-secondary text-sm">{achievement.organization}</p>
                    <p className="text-muted-foreground text-xs">{achievement.year}</p>
                    {achievement.details && <p className="text-muted-foreground text-sm mt-2">{achievement.details}</p>}
                  </div>
                </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Languages Section */}
      <section className="py-20 border-b border-border">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-12">
              <h2 className="text-4xl font-header text-foreground">Languages</h2>
            </div>
          </motion.div>
          <div className="grid md:grid-cols-4 gap-6">
            {anastasiaPortfolio.languages.map((lang: LanguageItem, idx: number) => (
              <motion.div
                key={lang.language}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                >
                <div className="rounded-lg p-6 text-center border border-border bg-card">
                <p className="text-foreground font-semibold mb-2">{lang.language}</p>
                <p className="text-secondary text-sm font-semibold">{lang.proficiency}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="rounded-xl p-12 text-center border border-border bg-card">
            <h2 className="text-4xl font-header text-foreground mb-6">Let&#39;s Build Something Great</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Interested in collaborating on innovative products, startups, or tech solutions? Let&#39;s connect and explore how we can work together.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <a href="/contact" className="px-8 py-3 bg-accent text-primary-foreground rounded hover:bg-opacity-90 transition font-semibold">
                Get in Touch
              </a>
              <a href="mailto:anastasiayakimovska@gmail.com" className="px-8 py-3 border border-secondary text-secondary rounded hover:bg-secondary/10 transition font-semibold">
                Send Email
              </a>
            </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
