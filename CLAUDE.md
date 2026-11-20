# CLAUDE.md

## Project overview

Personal portfolio site, deployed on Vercel. **Pushing to `main` deploys the live site.**

**Tech stack**
- Next.js 15 (App Router) + React 19 + TypeScript
- Tailwind CSS 4 with the Edition 01 design tokens in `app/globals.css` (night = default `.dark`, day = `.light`)
- `next-themes` (night by default, no system theme), Archivo via `next/font/google` (weight + `wdth` axis), `lucide-react` icons
- Vercel Analytics. No contact form: contact is email only (mailto)

**Folder structure**
- `app/` — `layout.tsx` (header, footer, theme, grain, analytics), `page.tsx` (homepage), `not-found.tsx`, `globals.css` (tokens, type scale, utilities)
- `components/home/` — homepage sections in order: Hero, SelectedWork, About, WorkWithMe, Experience, OutsideWork, Contact
- `components/layout/` — Header (desktop nav + mobile menu), Footer
- `components/ui/` — Logo (SVG, chrome or plain), ButtonLink (hairline primary / underlined secondary), SectionLabel, Placeholder, Grain, ThemeToggle
- `content/` — all copy: `site.ts` (hero, status line, bio, links, edition), `projects/*` (one file per project; `featured` + `order` pick the homepage highlights), `experience.ts`
- `site.config.ts` — feature flags (`workWithMe`, `shelfPlayer`)
- `lib/` — `nav.ts` (nav items, respects flags), `utils.ts` (`cn()` helper)
- `public/` — static assets

**Commands:** `npm run dev`, `npm run build`, `npm run lint` (lint is skipped during `build` via `next.config.ts`).

## Edition 01

For Edition 01, follow design-reference/edition-01-build-brief.md for all values (colors, fonts, sizes, layout, copy), and compare your work against the screenshots in design-reference/.

## Workflow rules

- **Never commit or push directly to `main`.** Pushing to `main` deploys the live site on Vercel.
- For every feature or fix, create a new branch named `feature/<short-name>` or `fix/<short-name>` from an up-to-date `main` (`git checkout main && git pull --ff-only` first).
- Before committing, run `npm run build` locally and make sure it passes.
- Show the user the diff and wait for their approval before committing.
- After pushing the branch, give the user the Vercel preview link so they can review it, then open a pull request for them to merge.
- Never add private details to the site, such as unconfirmed job plans or company data.
