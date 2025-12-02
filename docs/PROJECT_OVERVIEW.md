# Project Overview

## Stack and Structure
- Framework: Next.js (App Router)
- Styling: Tailwind CSS utilities backed by CSS variables in `app/globals.css:48-121`
- Fonts: `--font-header` set to `other` in `app/globals.css:51`; body/font-mono via Next Fonts in `app/layout.tsx:8-21,73`
- Components: Reusable UI in `components/`
- Data: Portfolio content and types in `lib/anastasiaPortfolio.ts`

## Key Routes
- Home: `app/page.tsx`
- Anastasia: `app/anastasia/page.tsx` → exports `./portfolio/page`
- Portfolio: `app/portfolio/page.tsx` (hero, projects, skills, education, CTA)
- Labs: `app/labs/page.tsx` (lists case studies saved via OS)
- Blog: `app/blog/page.tsx` (lists blog posts saved via OS)
- OS Dashboard: `app/os/page.tsx` (password‑gated admin)

## Admin OS Dashboard
- Path: `/os` (client‑side password: `mili358`)
- Adds and lists Case Studies and Blog Posts
- Persistence: `localStorage` keys `eryze_case_studies`, `eryze_blog_posts`
- Upgrade path: add API routes and database, server‑side auth/middleware

## Development
- Dev server: `npm run dev` → `http://localhost:3000/`
- Lint: `npm run lint`
- Known warnings: minor unused vars and hook deps in pixel components

