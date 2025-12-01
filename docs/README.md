# Eryze Studio Codebase

Next.js 15 + Tailwind + Framer Motion. Modular sections and dynamic motion.

## Getting Started
- `npm install`
- `npm run dev` → http://localhost:3000

## Structure
- `src/app` — routes and layout
- `src/components` — UI + motion components
- `src/components/ui` — shadcn-styled inputs and buttons
- `docs` — brand and engineering documentation

## Key Features
- Theme control via `next-themes` with toggle in header
- Section transitions via `Section` wrapper
- Projects carousel with tilt and reduced-motion support
- AmbientParticles for subtle ambience (hex option used in Labs)
- Dynamic imports for heavy motion components

## Routes
- `/` — Landing
- `/work`, `/labs`, `/contact`, `/anastasia`
- `/work/[slug]` — dynamic case studies
- Optional: `/insights`, `/events`, hidden `/os`

## Accessibility
- Honors `prefers-reduced-motion` in core components
- High contrast defaults and dark theme ready

## Deployment
- Ready for Vercel or Render
- Ensure environment variables for future CMS integrations are set in `.env`