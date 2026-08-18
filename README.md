# Anju Mathew — Portfolio (v3, comprehensive rebuild)

A premium, editorial, case-study-driven portfolio built with plain HTML, CSS and vanilla JavaScript. No build step, no frameworks, no dependencies beyond Google Fonts.

This version rebuilds the site around your **real profile photo**, **real resume PDF**, and the specific project details, positioning and page structure from the latest brief — filter bar included.

## ⚠️ One thing to check before you publish

`assets/resume/Anju_Mathew_Resume.pdf` — the file with this exact name in your repo — is **internally titled and headed "Software Engineer,"** not "Full Stack Developer." I pulled it directly from your GitHub repo as instructed (and did not touch `Anju_Mathew_Business_Analyst.pdf` or `Anju_Mathew_Software_Engineer.pdf`), so the filename is correct, but the PDF's actual content still carries the old positioning. Since the whole point of this rebuild is to present you as a Full Stack Developer, a recruiter who downloads this PDF from the site will land on a document headed "Software Engineer" — worth re-exporting the resume with the right header before this goes live.

## Structure

```
portfolio/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── assets/
│   ├── images/
│   │   └── profile.jpg        ← your real photo, pulled from the repo
│   ├── resume/
│   │   └── Anju_Mathew_Resume.pdf   ← your real resume, pulled from the repo
│   └── case-study/            ← empty — drop real project screenshots here
└── README.md
```

## Running it

Open `index.html` directly in a browser — no server or build tools required.

## What's new in this version

- **Real photo, real resume.** The profile photo is treated with a desaturation + radial vignette (`.photo-frame img` / `.photo-frame::after` in `style.css`) so the plain studio background blends into the dark theme instead of sitting as a stark white rectangle. The resume is a genuine `download` link in three places: hero, About section, and the contact block/footer.
- **Project filter bar.** ALL / LARAVEL / PHP / MIGRATION / PERFORMANCE chips above the project list. Clicking one dims non-matching projects (`is-dimmed`, opacity only — nothing is removed from the DOM, so layout never jumps). Tags live on each `<article class="project" data-tags="...">`.
- **Renumbered, re-scoped projects** to match your latest descriptions: 01 Blossom Valley (Core PHP redesign + the 49s→9s metric band), 02 Five Four 54 (WordPress → Custom PHP, "End-to-End Website Rebuild"), 03 Volga Tigris (the largest, hero-style project — tagged "CURRENT PROJECT," full-page Laravel Blade redesign), 04 Aurifer Tax (three-step "Same Design. New Architecture." flow).
- **A dedicated Performance/Impact section** below the project list restates the 49s → 9s result at a much larger scale as a standalone brand statement, on top of (not instead of) the smaller version inside the Blossom Valley card.
- **New sections**: About (with the two-column Business Websites / Software Engineering split), What I Actually Do (Build / Redesign / Migrate / Optimize / Maintain / Deploy), Education + Certifications (deliberately kept visually smaller than the project case studies), Professional Approach (four short principles).
- **Nav** now reads Work / About / Experience / Skills / Contact, with an "● AVAILABLE FOR OPPORTUNITIES" status instead of just the city.

## Swapping in real project screenshots

All four projects still use CSS-built placeholder browser mockups — no real screenshots were supplied. To swap them in, add files to `assets/case-study/` (e.g. `blossom-valley.webp`, `fivefour54.webp`, `volga-tigris.webp`, `aurifer-tax.webp`) and replace the `.browser-canvas` markup inside the matching `.browser-mock` with an `<img loading="lazy" ...>` tag.

## Design system

- **Colors** — near-black ink (`#0A0B0D` / `#131519`) for most sections, a warm parchment "paper" tone (`#E8E3D6`) for the project section, single brass/gold accent (`#C6A15B` on dark, `#8C6A2E` on paper).
- **Type** — Space Grotesk (display), Manrope (body), IBM Plex Mono (labels, eyebrows, code, nav).
- **Motion** — scroll reveals, scroll-spy nav, a top scroll-progress bar, animated counters, marquee strips, a custom cursor (desktop only), a typing terminal, and the project filter. Everything respects `prefers-reduced-motion`.

## Accessibility

- Semantic landmarks (`header`, `main`, `footer`, `section`) and a single `h1`.
- Visible keyboard focus states on all interactive elements, including filter chips.
- `prefers-reduced-motion` disables scroll reveals, the marquee, the typing animation and smooth scrolling.
- Skip-to-content link for keyboard users.
- Custom cursor is automatically disabled on touch/coarse-pointer devices.
- Profile photo has descriptive alt text.

## Tested

Screenshot-tested headless at 390px, 768px, 1024px, 1280px and 1440px — no horizontal overflow at any width, mobile nav opens/closes correctly, project filter verified to dim/restore the right projects, resume download link resolves to the real PDF, no console errors.

## Browser support

Built on standard CSS Grid, `position: sticky`, `IntersectionObserver` and `requestAnimationFrame` — supported in all current major browsers (Chrome, Safari, Firefox, Edge).
