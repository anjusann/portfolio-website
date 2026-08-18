# Anju Mathew — Portfolio (v2, dense editorial redesign)

A premium, editorial-style personal portfolio built with plain HTML, CSS and vanilla JavaScript. No build step, no frameworks, no dependencies beyond Google Fonts.

This is a **complete visual redesign** of the original layout — denser, more visual, with real case-study compositions instead of small equal-sized cards.

## Structure

```
portfolio/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── assets/
│   ├── images/projects/   ← drop real project screenshots here
│   └── icons/
└── README.md
```

## Running it

Open `index.html` directly in a browser — no server or build tools required.

For live-reload during editing, any static server works, e.g. `npx serve .`

## What changed from v1

- **Page composition** now runs Hero → Stats strip → Selected Work (all 4 case studies) → Engineering → Current Role → Skills → Timeline → Contact. The separate About/Philosophy/Certifications/Education sections were dropped to cut text density, per the redesign brief.
- **Section backgrounds alternate**: near-black hero and stats strip → **off-white paper section** for all four project case studies → back to dark for Engineering, Current Role, Skills, Timeline and Contact. This is the "dark → light → dark" rhythm called out in the brief, and it's what makes the project screenshots pop.
- **Project 01 (Volga Tigris)** is treated as the hero project: a large (~65%-width) browser mockup with an oversized outlined "01" behind it, and a sticky info panel beside it.
- **Project 02 (Blossom Valley)** breaks the 49s → 9s metric out into its own full-width dark band — the single strongest visual moment on the page, as requested.
- **Project 03 (Aurifer Tax)** uses a WordPress ↓ Laravel migration diagram instead of a mockup.
- **Project 04 (Five Four 54)** is intentionally compact and quieter than the other three.
- Added a **scroll-progress bar**, an infinite **marquee strip** of tech keywords under the hero and above the footer, and a **12-column grid** with sticky project rails on desktop.
- Skills are now a typographic list ("ecosystem"), not bordered cards.

## Swapping in real project screenshots

All four projects currently use CSS-built placeholder browser mockups since no screenshots were provided. To swap in real ones:

1. Add images to `assets/images/projects/` (suggested names: `volga-tigris.webp`, `blossom-valley.webp`, `aurifer.webp`, `fivefour54.webp`).
2. In `index.html`, replace the `.browser-canvas` markup inside the relevant `.browser-mock` with an `<img loading="lazy" ...>` tag, keeping the `.browser-chrome` bar above it.
3. The `.browser-mock`, `.browser-mock--lg` and `.browser-mock--sm` classes already control sizing — an `<img>` dropped into `.browser-canvas` will fill the available width automatically with `width: 100%`.

## Design system

- **Colors** — near-black ink (`#0A0B0D` / `#131519`) for most sections, a warm parchment "paper" tone (`#E8E3D6`) for the project section, and a single brass/gold accent (`#C6A15B` on dark, `#8C6A2E` on paper for contrast).
- **Type** — Space Grotesk (display), Manrope (body), IBM Plex Mono (labels, eyebrows, code, nav).
- **Motion** — scroll reveals, a scroll-spy nav, a top scroll-progress bar, animated counters, marquee strips, a custom cursor (desktop only) and a typing terminal. Everything respects `prefers-reduced-motion`.

## Accessibility

- Semantic landmarks (`header`, `main`, `footer`, `section`) and a single `h1`.
- Visible keyboard focus states on all interactive elements.
- `prefers-reduced-motion` disables scroll reveals, the marquee, the typing animation and smooth scrolling.
- Skip-to-content link for keyboard users.
- Custom cursor is automatically disabled on touch/coarse-pointer devices.

## Browser support

Built on standard CSS Grid, `position: sticky`, `IntersectionObserver` and `requestAnimationFrame` — supported in all current major browsers (Chrome, Safari, Firefox, Edge).
