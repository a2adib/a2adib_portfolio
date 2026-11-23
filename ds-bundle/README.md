# Conventions

A dark, terminal-flavoured personal-site system: near-black ground, cyan/green
gradient accents, glassmorphic cards, Syne display type over Space Grotesk body
and Fira Code mono.

## Mount on the dark ground — not optional

There is no provider or theme wrapper. What every component assumes instead is
the site shell the real app puts on `<body>`:

```jsx
<div className="bg-bg-primary text-text-primary font-body">
  <Navbar />
  <Hero />
  <About />
  <Projects />
  <Skills />
  <Experience />
  <Contact />
  <Footer />
</div>
```

Skip that wrapper and the design renders on white with `#F0F4FF` body text —
technically mounted, visually blank. Set it once on the outermost element.

`Navbar` is `position: fixed`, so it adds no height and lays out against the
viewport (or against the nearest transformed ancestor). Its links jump to the
section anchors the components render themselves: `#hero`, `#about`,
`#projects`, `#skills`, `#experience`, `#contact`.

## The 8 components take no props

Every export is a full-width page section with its own copy, data and internal
state baked in (`Hero` types out its own phrase list, `Projects` filters its own
card set, `Skills` animates its own bars). Compose pages by stacking them in
order; there is nothing to configure. Anything that must differ per design gets
built out of the class vocabulary below, not by parameterising these.

## Styling: Tailwind, with this theme's own names

Style your own layout glue with Tailwind utilities. These families are the
design language and are all present in the shipped stylesheet:

| Family | Names | Notes |
|---|---|---|
| Surfaces | `bg-bg-primary` `bg-bg-secondary` `bg-bg-card` | `#080C14` page ground, `#0D1321` band, `#111827` card |
| Accents | `accent-cyan` `accent-green` `accent-purple` | usable as `bg-` / `text-` / `border-`; cyan is primary, green secondary |
| Text | `text-text-primary` `text-text-muted` `text-text-dim` | heading, body, and de-emphasised |
| Type | `font-display` (Syne) `font-body` (Space Grotesk) `font-mono` (Fira Code) | mono carries the terminal voice: labels, tags, dates, nav |
| Motion | `animate-fade-up` `animate-blink` `animate-float` `animate-glow-pulse` `animate-scan-line` | |

And these hand-written component classes carry most of the brand:

| Class | What it is |
|---|---|
| `glass-card` | translucent blurred card + cyan hairline border, brightens on hover |
| `btn-primary` / `btn-outline` | cyan→green gradient button / cyan outline button |
| `gradient-text` / `gradient-text-purple` | cyan→green / purple→cyan clipped text gradient |
| `text-glow-cyan` / `glow-cyan` / `glow-green` | text shadow / box glow |
| `section-label` | uppercase mono eyebrow, e.g. `01 / about` |
| `grid-bg` | faint cyan grid backdrop |
| `orb` | large blurred floating colour orb (needs an inline radial-gradient background and position) |
| `timeline-dot` `skill-bar-fill` `cursor` `section-pad` | timeline marker, gradient meter fill, blinking caret, 80/120px section padding |

Section headings follow one pattern: mono `section-label` eyebrow, then a
`font-display` heading whose last words are wrapped in `gradient-text`.

## Read the real files

`_ds/<folder>/styles.css` and its imports (`fonts.css`, `_ds_bundle.css`) are the
truth for every name above — grep them before inventing a class. Per-component
API and usage live in each `<Name>.prompt.md`.

The stylesheet is a compiled Tailwind build, not the full framework: the theme
families above plus the standard layout, spacing, sizing, typography, border and
effect utilities at ordinary scales (with `sm:` `md:` `lg:` and `hover:`). An
unusual utility may not be there — grep `_ds_bundle.css` for it, or use an
inline style, which is what the components themselves do for one-off gradients
and orb positioning.

## Idiomatic snippet

```jsx
<div className="bg-bg-primary text-text-primary font-body">
  <Hero />
  <section className="section-pad max-w-6xl mx-auto px-6">
    <p className="section-label">06 / writing</p>
    <h2 className="font-display font-bold text-4xl sm:text-5xl mt-3 mb-8">
      Notes on <span className="gradient-text">shipping</span>
    </h2>
    <article className="glass-card rounded-xl p-6">
      <p className="font-mono text-xs text-accent-cyan tracking-widest uppercase">
        Mar 2026
      </p>
      <h3 className="font-display text-2xl mt-2">Why my API stopped paging me</h3>
      <p className="text-text-muted mt-3 leading-relaxed">
        Idempotency keys, a retry budget, and one very boring dashboard.
      </p>
    </article>
  </section>
  <Footer />
</div>
```

# PortfolioDS (abdullah-portfolio@1.0.0)

This design system is the published abdullah-portfolio React library, bundled as a single
browser global. All 8 components are the real upstream code.

## Where things are

- `_ds_bundle.js` — the whole-DS bundle at the project root; loads every component to `window.PortfolioDS`. First line is a `/* @ds-bundle: … */` metadata header.
- `styles.css` — the single stylesheet entry: it `@import`s the tokens, fonts, and component styles (`_ds_bundle.css`). Link this one file.
- `components/<group>/<Name>/<Name>.prompt.md` (example JSX + variants), `<Name>.d.ts` (types), `<Name>.html` (variant grid).
- `tokens/*.css` — CSS custom properties, names verbatim from upstream.
- `fonts/` — `@font-face` files + `fonts.css` (when the package ships fonts).

For a specific component, `read_file("components/<group>/<Name>/<Name>.prompt.md")`.

## Loading

Add these two lines to your page once (React must be on the page first):

```html
<link rel="stylesheet" href="styles.css">
<script src="_ds_bundle.js"></script>
```

Components are then available at `window.PortfolioDS.*`. Mount into a dedicated child node (e.g. `<div id="ds-root">`), not the host page's own React root, so the two trees don't collide:

```jsx
const { About } = window.PortfolioDS;
ReactDOM.createRoot(document.getElementById('ds-root')).render(<About />);
```

## Tokens

63 CSS custom properties from abdullah-portfolio. Names are
preserved verbatim from upstream. They are declared inside `_ds_bundle.css` (this DS ships one compiled stylesheet rather than separate token files).

- **color** (8): `--tw-border-spacing-x`, `--tw-border-spacing-y`, `--tw-ring-offset-color`, …
- **spacing** (3): `--tw-ring-inset`, `--tw-space-x-reverse`, `--tw-space-y-reverse`
- **typography** (3): `--font-display`, `--font-body`, `--font-mono`
- **shadow** (4): `--tw-ring-offset-shadow`, `--tw-ring-shadow`, `--tw-shadow`, …
- **other** (45): `--tw-translate-x`, `--tw-translate-y`, `--tw-rotate`, …

## Components

### sections
- `About`
- `Contact`
- `Experience`
- `Hero`
- `Projects`
- `Skills`

### general
- `Footer`
- `Navbar`
