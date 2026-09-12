# Portfolio

HUD/cyberpunk-themed portfolio built with Next.js 14 (App Router), TypeScript,
Tailwind CSS, and Framer Motion.

## Setup

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Structure

- `src/app` — routes (`/`, `/about`, `/projects`, `/projects/[slug]`, `/contact`)
- `src/components/ui` — HudPanel, GlitchText, StatBar, CornerBrackets, ScanlineOverlay
- `src/components/layout` — Navbar, SideRail, Footer
- `src/components/sections` — Hero, About, Skills, Projects, Contact
- `src/components/background` — CircuitLines (static SVG background)
- `src/lib` — `utils.ts` (cn helper), `data.ts` (edit this with your real content)

## Customize

1. Edit `src/lib/data.ts` with your real skills and projects.
2. Edit `Hero.tsx` with your name and tagline.
3. Replace the email/social links in `Footer.tsx` and `Contact.tsx`.
4. Colors live in `tailwind.config.ts` under `theme.extend.colors` — change
   `crimson` to any accent you like; everything references that token.
