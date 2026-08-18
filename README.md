# Anju Mathew — Portfolio

A premium, editorial-style personal portfolio built with plain HTML, CSS and vanilla JavaScript. No build step, no frameworks, no dependencies beyond Google Fonts.

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

Just open `index.html` in a browser — no server or build tools required.

For live-reload during editing, any static server works, e.g.:

```
npx serve .
```

## Design system

- **Colors** — near-black graphite background (`#0B0C0E`), off-white text (`#ECEAE2`), single brass/gold accent (`#C6A15B`). Defined as CSS custom properties at the top of `style.css`.
- **Type** — Space Grotesk (display headings), Manrope (body copy), IBM Plex Mono (labels, eyebrows, code fragments, nav).
- **Signature element** — the hero terminal window types out real Laravel/PHP code fragments, tying the visual language directly to the stack described in the copy.
- **Motion** — scroll reveals, a scroll-spy nav, animated counters, a custom cursor (desktop only) and a typing terminal. Everything respects `prefers-reduced-motion`.

## Swapping in real project images

The four project sections currently use CSS-built placeholder compositions (browser mockup, metric card, migration diagram, editorial grid) instead of screenshots, since none were provided.

To use real screenshots:

1. Add images to `assets/images/projects/` (suggested names: `volga-tigris.webp`, `blossom-valley.webp`, `aurifer.webp`, `fivefour54.webp`).
2. In `index.html`, replace the relevant `.project-media` inner markup (e.g. `.browser-mock`) with an `<img>` tag pointing at the new file, keeping the `.project-media` wrapper and `loading="lazy"` on the image.
3. Adjust `.project-media img` sizing in `style.css` if needed (`width: 100%; border-radius: 8px;` is a good starting point).

## Editing content

All copy lives directly in `index.html` — there's no CMS or data file. Section order matches the on-page nav: Hero → About → Current Role → Work → Skills → Experience → Engineering → Performance → Philosophy → Credentials → Contact.

## Accessibility

- Semantic landmarks (`header`, `main`, `footer`, `section`) and a single `h1`.
- Visible keyboard focus states on all interactive elements.
- `prefers-reduced-motion` disables scroll reveals, the typing animation and smooth scrolling.
- Skip-to-content link for keyboard users.
- Custom cursor is automatically disabled on touch/coarse-pointer devices.

## Browser support

Built on standard CSS Grid, `IntersectionObserver` and `requestAnimationFrame` — supported in all current major browsers (Chrome, Safari, Firefox, Edge).
