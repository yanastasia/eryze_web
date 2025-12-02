# Portfolio Data & Types

## Types
- File: `lib/anastasiaPortfolio.ts:1-36`
- Models: `ExperienceItem`, `PortfolioProject`, `SkillGroup`, `EducationItem`, `LanguageItem`, `AchievementItem`, `AnastasiaPortfolio`

## Data Object
- File: `lib/anastasiaPortfolio.ts:37`
- Fields: name, title, tagline, bio, location, email, notionProjects, arrays for experience, projects, education, certifications, languages, achievements, social

## Usage
- Portfolio page: `app/portfolio/page.tsx` (hero + sections)
- Anastasia page: `app/anastasia/page.tsx` exports portfolio route
- Detailed portfolio: `app/anastasia/portfolio/page.tsx` (experience, projects, skills, education, achievements, languages, CTA)

## Education Note
- RailsGirls card includes detail: `lib/anastasiaPortfolio.ts:179-181`

## Editing
-- Update `lib/anastasiaPortfolio.ts` to change portfolio content
-- Types enforce shape; pages consume typed data directly

