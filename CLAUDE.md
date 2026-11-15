# CLAUDE.md

> **This is the frozen Edition No. 00 archive branch, deployed to its own Vercel project at 2025.matthewraylee.com. Never merge it into main. Only small fixes go here.**

## Project overview

Personal portfolio site, deployed on Vercel. **Pushing to `main` deploys the live site.**

**Tech stack**
- Next.js 15 (App Router) + React 19 + TypeScript
- Tailwind CSS 4, shadcn/ui-style components on Radix UI, `next-themes` for light/dark mode
- framer-motion, tsparticles, `react-type-animation` for visuals

**Folder structure**
- `app/` — `layout.tsx` (root layout), `page.tsx` (single-page site), `data.ts` (project/portfolio content), `globals.css`
- `middleware.ts` — redirects `/test` to `/`
- `components/sections/` — page sections (Hero, About, Projects, Skills, Resume, Contact with a mailto link)
- `components/layout/` — Header, Footer, MobileNavigation, EditionBanner (archive notice shown on every page)
- `components/ui/` — shared UI primitives (button, card, dialog, tabs, toast, …)
- `components/projects/`, `components/background/` — project dialog, background effects
- `lib/utils.ts` — `cn()` class helper
- `public/` — static assets (logo, `Projects/` screenshots)

**Commands:** `npm run dev`, `npm run build`, `npm run lint` (lint is skipped during `build` via `next.config.ts`).

## Workflow rules

- **Never commit or push directly to `main`.** Pushing to `main` deploys the live site on Vercel.
- For every feature or fix, create a new branch named `feature/<short-name>` or `fix/<short-name>` from an up-to-date `main` (`git checkout main && git pull --ff-only` first).
- Before committing, run `npm run build` locally and make sure it passes.
- Show the user the diff and wait for their approval before committing.
- After pushing the branch, give the user the Vercel preview link so they can review it, then open a pull request for them to merge.
- Never add private details to the site, such as unconfirmed job plans or company data.
