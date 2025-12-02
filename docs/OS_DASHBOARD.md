# OS Dashboard

## Access
- URL: `/os`
- Password: `mili358`
- Gate: client‑side form (`app/os/page.tsx:73-86`)

## Features
- Case Studies
  - Add: title, summary, content, tags (optional)
  - View: existing items listed under Upload section
  - Storage key: `eryze_case_studies`
- Blog Posts
  - Add: title, summary, content, tags (optional)
  - View: existing items listed under Upload section
  - Storage key: `eryze_blog_posts`

## Implementation
- Helpers: `readLocal`/`writeLocal` (`app/os/page.tsx:16-29`)
- State init: read from localStorage in `useState` initializers (`app/os/page.tsx:32-33`)
- Add actions: `addCaseStudy`, `addBlogPost` append and persist (`app/os/page.tsx:88-105,107-124`)

## Security & Persistence
- Current: client‑side password and localStorage (not secure)
- Recommended: server auth (middleware) and database persistence

