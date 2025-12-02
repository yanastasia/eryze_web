# Labs & Blog Integration

## Labs (`/labs`)
- Source: case studies saved via OS
- File: `app/labs/page.tsx:1-69`
- Read: `localStorage['eryze_case_studies']`
- Render: title, summary, content in cards

## Blog (`/blog`)
- Source: blog posts saved via OS
- File: `app/blog/page.tsx:1-43`
- Read: `localStorage['eryze_blog_posts']`
- Render: title, summary, content in articles

## Data Shape
- CaseStudy: `{ id, title, summary, content, tags? }`
- BlogPost: `{ id, title, summary, content, tags? }`

## Upgrades
- Add edit/delete, tags filtering, pagination
- Migrate to API routes with DB for persistence and SSR for SEO

