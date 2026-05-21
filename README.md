# Lattice

AI-native task management — a landing page concept.

**Live:** https://lattice-landing-sigma.vercel.app

A clean, minimal landing page for an AI task-management SaaS, built with the Cursor-inspired paper-and-ink design system in [DESIGN.md](./DESIGN.md).

## Stack

- **Next.js 16** (App Router, Turbopack)
- **React 19**
- **Tailwind CSS 4** + design tokens inlined from `DESIGN.md`
- **Framer Motion** (via `motion`) for entrance, scroll-reveal, marquee, and hover springs
- **lucide-react** for iconography
- **next/font** — Inter Tight (sans), Newsreader italic (serif accent), JetBrains Mono (mono)

## Page Structure

12 sections, modeled after the editorial rhythm of cursor.com:

1. Nav (sticky, blurred)
2. Hero — centered headline, layered window mockups
3. Trust bar — continuous logo marquee
4. Feature row — Agents turn ideas into tasks
5. Feature row — Works autonomously, runs in parallel
6. Feature row — In every tool, at every step
7. Feature row — Magically accurate recall
8. Bento grid — 5 cards (3 + 2 layout), one accent card
9. Connected — 2-panel workspace + collaboration showcase
10. Testimonials — 3-card row
11. Stay on the frontier — 3 mini feature cards
12. Applied research lab + Final CTA + Footer

## Design Discipline

Per [DESIGN.md](./DESIGN.md):

- Paper canvas (`#FAFAF7`) — never pure white as the page background
- Single ink color (`#14120B`) carries 95% of type and chrome
- One italic Newsreader word per heading
- Mono for eyebrows, file paths, stats, code
- Borders carry hierarchy; shadows are rare
- Color reserved for syntax / status: blue (links), green (success), amber (in-progress), crimson (errors)

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deployment

Deployed on Vercel. To redeploy:

```bash
./node_modules/.bin/vercel deploy --prod --yes --name lattice-landing
```
