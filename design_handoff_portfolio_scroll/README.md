# Handoff: Portfolio — Scroll Acts

## Overview
A single-page personal portfolio for **Abdullah Al Adib**, Junior Backend Developer at Govaly Ltd. (Python/FastAPI). The page is a scroll-driven narrative in five parts: a type-led hero with animated outcome metrics, then four numbered "acts" — Backend systems, Selected work, Track record, How I work — closing on a chat-style contact block. Warm off-white paper, near-black ink, one accent, monospace for all metadata.

Target: replace the existing Next.js portfolio at `a2adib.vercel.app` (repo layout: `app/`, `components/sections/`, `lib/data.ts`). All copy in this design is CV-accurate as of Aug 2026.

## About the Design Files
The files in `design/` are **design references created in HTML** — prototypes showing intended look and behavior. They are **not production code to copy directly**: markup is written with inline styles and a small runtime shim so it can render in a design tool.

The task is to **recreate these designs in the target codebase's existing environment** — here, the Next.js + Tailwind app already in the repo — using its established patterns: one component per section under `components/sections/`, all content sourced from `lib/data.ts`, Tailwind classes and `tailwind.config.js` theme extension rather than inline styles. If starting fresh instead, any modern framework is fine; Next.js App Router + Tailwind is the closest match to the existing project.

`design/PortfolioScroll.dc.html` is the primary design. `design/alternate-editorial/` holds an earlier rejected direction (serif, centered, duotone portrait hero) — reference only, do not implement unless asked.

## Fidelity
**High-fidelity.** Final colors, typography, spacing, and interactions are specified. Recreate pixel-faithfully with the codebase's own utilities. Every hex value, font size, and easing curve below is taken from the design file, not approximated.

Note the existing repo's design system is a dark neon Tailwind theme (`--accent-cyan`, `--accent-green`, Syne/Space Grotesk fonts). **This design replaces it.** The old theme tokens should be retired, not reconciled.

---

## Screens / Views

Single scrolling page. Section IDs are anchor targets from the header nav: `#top`, `#act1`, `#act2`, `#act3`, `#act4`, `#contact`.

### Global shell
- Page background `#faf9f7`, text `#14140f`, body font Instrument Sans 400, 17px / 1.6, `letter-spacing: -0.005em`.
- `overflow-x: hidden` on the page wrapper; `scroll-behavior: smooth` on `html` (nav anchors rely on it).
- Selection highlight `#e8e2d8`.
- Horizontal page padding used by every section: `clamp(20px, 5vw, 56px)`.
- Section vertical padding: `clamp(60px, 8vw, 120px)`; contact uses `clamp(60px, 9vw, 140px)`.
- Section dividers: `1px solid #e6e2da` on `border-top`.

### Scroll progress bar
- `position: fixed`, top 0, left 0, height **2px**, `z-index: 60`, background = accent.
- Width = `scrollY / (scrollHeight - innerHeight) * 100%`, `transition: width .12s linear`.

### Header (fixed)
- `position: fixed`, top 0, full width, `z-index: 50`. Padding `18px clamp(18px, 4vw, 44px)`.
- Background `rgba(250,249,247,.78)` + `backdrop-filter: blur(10px)`; bottom border `1px solid rgba(20,20,15,.07)`.
- Flex row, `space-between`, `gap: 20px`.
- **Left** — wordmark `a2adib.dev`, JetBrains Mono 13px, `letter-spacing: .04em`; the `.` is accent-colored. Links to `#top`.
- **Center** — nav, JetBrains Mono 11px, `letter-spacing: .12em`, uppercase, color `#6f6c66`, `gap: clamp(14px, 2.2vw, 30px)`. Items: `01 Backend`, `02 Work`, `03 Track record`, `04 How I work`; the numeral is `#b9b5ad`. **Hidden below 900px** (see Responsive).
- **Right** — pill CTA "Start a project →": JetBrains Mono 11px, `letter-spacing: .1em`, uppercase, `1px solid #14140f`, `border-radius: 999px`, padding `9px 16px`. Links to `#contact`.

### Hero (`#top`)
- `min-height: 100vh`, flex column, `justify-content: center`, padding `120px [side] 60px`.
- Eyebrow: "Backend developer · Dhaka, Bangladesh" — JetBrains Mono 12px, `letter-spacing: .16em`, uppercase, `#6f6c66`, margin-bottom `clamp(24px, 4vw, 44px)`.
- H1: "APIs that don't break / at **3 AM**." — `clamp(46px, 9vw, 132px)`, weight 500, `line-height: .95`, `letter-spacing: -.035em`, `max-width: 16ch`. "3 AM" is accent-colored; hard `<br>` after "break".
- Below: 2-column grid `minmax(0,1fr) minmax(0,420px)`, `gap: clamp(24px, 5vw, 64px)`, `align-items: end`, `margin-top: clamp(36px, 6vw, 72px)`.
  - **Left** — intro paragraph, `clamp(17px, 1.5vw, 21px)`, color `#3d3b35`, `max-width: 46ch`: "I build Python/FastAPI systems for teams that can't afford downtime — async APIs, PostgreSQL that stays fast under load, and migrations that don't lose a row."
  - **Right** — metrics quad: 2×2 grid, `gap: 1px` over a `#e6e2da` background with `1px solid #e6e2da` border (hairline grid effect); each cell `background: #faf9f7`, padding `18px 20px`. Number `clamp(26px, 3vw, 36px)` weight 500 `letter-spacing: -.03em`; label JetBrains Mono 10px `letter-spacing: .12em` uppercase `#6f6c66`.
    | Value | Label |
    |---|---|
    | 3× | Concurrent requests |
    | 40% | Faster responses |
    | 35% | Faster reports |
    | 70% | Core test coverage |
- Scroll cue: "Scroll ↓", JetBrains Mono 11px, `letter-spacing: .2em`, uppercase, `#a5a199`, `margin-top: clamp(44px, 7vw, 90px)`, gently drifting (see Animations).

### Act 01 — Backend systems (`#act1`)
- 2-column grid `minmax(0,1fr) minmax(0,1.1fr)`, `gap: clamp(28px, 5vw, 80px)`, `align-items: start`, `max-width: 1400px` centered.
- **Left column is sticky**: `position: sticky; top: 110px`.
  - Act label "01 — Backend systems": JetBrains Mono 11px, `letter-spacing: .16em`, uppercase, accent.
  - H2 "Legacy code, made to move." — `clamp(32px, 4.6vw, 64px)`, weight 500, `line-height: 1.02`, `letter-spacing: -.03em`, `max-width: 13ch`.
  - Paragraph (`max-width: 44ch`, `#3d3b35`): "At Govaly I took a synchronous FastAPI codebase and rebuilt it async, end to end — then kept going into caching, schema drift, and the query patterns nobody had time to look at."
  - Tech chips, `flex-wrap`, `gap: 8px`: `1px solid #e0dbd2`, `border-radius: 999px`, padding `6px 12px`, JetBrains Mono 11px, `#3d3b35`. Items: FastAPI, async SQLAlchemy, SQLModel, Alembic, PostgreSQL, Redis, Pydantic, pytest.
- **Right column** — stacked panels, `gap: 16px`:
  1. **Code panel** — `1px solid #e6e2da`, `background: #fff`, `border-radius: 10px`. Title bar: `background: #f6f4f0`, bottom border `1px solid #efece6`, padding `11px 14px`, three 9px `#e0dbd2` dots, filename `reports/service.py` (JetBrains Mono 11px `#8a867e`), right-aligned `async` badge in accent (Mono 10px, `.1em`, uppercase). Body `<pre>`: JetBrains Mono 12.5px / 1.85, `#3d3b35`, padding 18px, `overflow-x: auto`. Comments `#a5a199`; Python keywords (`for`, `in`, `await`) accent-colored. Content is a before/after: a blocking per-row loop vs. one `select()` + `groupby` aggregation.
  2. **Two cards side by side** (`1fr 1fr`, `gap: 16px`), both `1px solid #e6e2da`, `#fff`, `border-radius: 10px`, padding 20px, card label JetBrains Mono 10px `.14em` uppercase `#8a867e`:
     - *Response time* — bar pair in a 96px-tall flex row, `gap: 12px`: left bar 100% height `#e6e2da` labeled `800ms` (`#8a867e`), right bar 60% height accent labeled `480ms` (`#14140f`); bar radius `4px 4px 0 0`; labels JetBrains Mono 11px. Caption 14px: "Redis caching on high-traffic endpoints."
     - *Data integrity* — 4-line mono log (12px, `gap: 9px`): two accent `✕ insert failed — schema drift`, then `✓ alembic revision applied` and `✓ daily transactions clean` with `✓` in `#7c9a6b`. Caption 14px: "Financial pipelines restored end to end."

### Act 02 — Selected work (`#act2`)
- Background `#f4f2ee` (the one tonal shift on the light half of the page).
- Act label "02 — Selected work"; H2 "Things I shipped and still stand behind." (`max-width: 16ch`, same H2 spec), `margin-bottom: clamp(34px, 5vw, 64px)`.
- Card grid: `repeat(auto-fit, minmax(320px, 1fr))`, `gap: 16px`.
- **Card**: `1px solid #e6e2da`, `background: #faf9f7`, `border-radius: 12px`, `overflow: hidden`, flex column.
  - Browser-chrome bar: `background: #fff`, bottom border `1px solid #efece6`, padding `11px 14px`, two 8px `#e0dbd2` dots, repo slug in JetBrains Mono 11px `#8a867e`.
  - Body padding 22px, flex column `gap: 14px`: title 26px weight 500 `letter-spacing: -.02em`; description 15.5px `#3d3b35`; stack line JetBrains Mono 11px `#8a867e` pushed to the bottom with `margin-top: auto`; link row JetBrains Mono 11px with `border-bottom: 1px solid #ddd8ce; padding-bottom: 3px`, `gap: 16px`.
  - Six cards in order — slug / title / description / stack / links:
    1. `freelance-marketplace` · Freelance Marketplace · "Full-stack platform with separate frontend and backend repos — job posting, a bidding system, and authentication, built API-first." · Node.js · REST API · React · Backend ↗ (`github.com/a2adib/freelance_marketplace_backend`), Frontend ↗ (`…_frontend`)
    2. `clubsphere` · ClubSphere · "Club management and social platform — members, events, and announcements behind a clean RESTful backend." · Node.js · React · REST API · Backend ↗ (`clubsphere-backend`), Frontend ↗ (`clubsphere-frontend`)
    3. `customer-support-zone` · Customer Support Zone · "Ticket dashboard for creating, tracking, and updating customer requests — modular UI for status changes and feedback." · JavaScript · React · Dashboard · Repository ↗ (`github.com/a2adib`)
    4. `emergency-contact` · Emergency Contact · "Contact manager with full CRUD and an interface built for fast lookup and quick edits under pressure." · JavaScript · CRUD · Frontend · Repository ↗ (`github.com/a2adib`)
    5. `formelting-app` · Formelting App · "Formula and melting-point reference for technical users who need fast, accurate lookups." · JavaScript · React · Repository ↗ (`Formelting_App`)
    6. `shooting-1v1` · 1v1 Shooting Game · "Browser shooter in vanilla JS — real-time game loop, movement, collision detection, live scoring." · JavaScript · Canvas API · Repository ↗ (`shooting_1v1_game`)
  - Cards 3 and 4 have live links in the CV ("Live link"); if those URLs are available, add a `Live ↗` link in the same style.

### Act 03 — Track record (`#act3`)
- Act label "03 — Track record"; H2 "Where the hours went." (`max-width: 14ch`).
- Three timeline rows, each a grid `minmax(0,260px) minmax(0,1fr)`, `gap: clamp(16px, 4vw, 56px)`, padding `clamp(24px, 3vw, 40px) 0`, `border-top: 1px solid #e6e2da` (last row also `border-bottom`).
  - Left: period in JetBrains Mono 12px `letter-spacing: .1em` `#14140f`; type below in Mono 11px `.1em` uppercase `#a5a199`.
  - Right: role heading `clamp(22px, 2.4vw, 30px)` weight 500 `letter-spacing: -.02em`, company name accent-colored; bullet list `max-width: 70ch`, 16px, `#3d3b35`, `gap: 11px`, each bullet prefixed by a **two-digit mono counter** (`01`…) absolutely positioned at `left: 0`, JetBrains Mono 12px `#c2beb6`, list item `padding-left: 26px`.
  - Rows:
    1. **Jan 2025 — Present / Full-time** — "Junior Backend Developer, *Govaly Ltd.*" — 6 bullets: async migration (~3× concurrency); Redis caching (40%, 800ms → 480ms); Alembic migrations fixing ORM/schema drift in financial pipelines; 35% faster multi-join reports via Python-side aggregation; 4+ production reporting APIs (expense P/L, job-at-a-glance, station-wise billing, party-wise registers); 70% test coverage on core legacy modules.
    2. **Aug 2020 — Jun 2022 / Startup** — "Co-Founder, *Backloggers*" — 2 bullets: led operations and team execution for an educational support platform; supported marketing and customer communication to drive steady growth.
    3. **2020 — 2025 / Education** — "B.Sc. Computer Science & Engineering, *Premier University*" — body line "CGPA 3.06 · Thesis completed."
- Skills block below, `margin-top: clamp(44px, 6vw, 80px)`: grid `repeat(auto-fit, minmax(220px, 1fr))`, `gap: clamp(20px, 3vw, 44px)`. Group heading JetBrains Mono 11px `.14em` uppercase accent; items JetBrains Mono 13px `#3d3b35`, `gap: 9px`, no bullets.
  - Languages: Python, JavaScript
  - Backend: FastAPI, SQLModel, async SQLAlchemy, Alembic · Pydantic, REST API design
  - Data & infra: PostgreSQL, Redis, VPS deployment, Uvicorn · Nginx · systemd
  - Tooling: Git · uv · just, ruff · pytest, ReactJS · HTML/CSS

### Act 04 — How I work (`#act4`)
- **Inverted**: background `#14140f`, text `#f4f2ee`.
- Act label "04 — How I work" (accent); H2 "Understand it, then make it boring." (`max-width: 15ch`, color `#f4f2ee`).
- Three cards: grid `repeat(auto-fit, minmax(260px, 1fr))`, `gap: 1px` over `#2a2a22` with `1px solid #2a2a22` (same hairline technique as the hero metrics); each cell `background: #14140f`, padding `clamp(24px, 3vw, 38px)`.
- Per card: mono numeral (12px, accent), title 22px weight 500 `letter-spacing: -.02em`, body 15.5px `#a9a69e`.
  1. **Read the system first** — "Before changing a line I trace the request path, the schema, and where it actually hurts. Most bugs are drift, not logic."
  2. **Measure, then change** — "Timings and query counts before the refactor, the same numbers after. If it isn't measurably better, it doesn't ship."
  3. **Leave tests behind** — "Coverage on the modules that carry money and data, so the next person can move fast without breaking the ledger."

### Contact (`#contact`)
- `max-width: 960px` centered.
- Label "Write to me" (accent mono). H2 "Got a backend that needs a steadier hand?" — `clamp(34px, 6vw, 84px)`, weight 500, `line-height: 1`, `letter-spacing: -.035em`.
- Compose card: `1px solid #e6e2da`, `#fff`, `border-radius: 12px`, padding `clamp(22px, 3vw, 34px)`.
  - "To: 24adib75@gmail.com" — JetBrains Mono 12px `#8a867e`.
  - Draft line `clamp(20px, 2.4vw, 30px)` `letter-spacing: -.02em`: "Hey Abdullah, " in `#14140f` + "we need someone to…" in `#a5a199` + a **2px × 1em blinking accent caret**.
  - Buttons, `gap: 12px`, `margin-top: 26px`, both JetBrains Mono 12px `.08em` uppercase `border-radius: 999px` padding `12px 20px`: primary "Send an email →" (`background: #14140f`, text `#faf9f7`, `mailto:24adib75@gmail.com`); secondary "Download CV" (`1px solid #14140f`, `/Abdullah_Al_Adib_CV.pdf`).
  - **If the compose line is made a real form** (recommended evolution — the reference site treats it as an editable field): make it a `contenteditable`/`textarea` that grows, prefill "Hey Abdullah, ", and post to an email service; the caret then belongs to the real input.
- Detail row: grid `repeat(auto-fit, minmax(170px, 1fr))`, `gap: 20px`, `margin-top: clamp(40px, 5vw, 72px)`, `padding-top: 24px`, `border-top: 1px solid #e6e2da`, JetBrains Mono 12px. Labels `#a5a199`, values links: Phone `+880 1877 555484` (`tel:+8801877555484`); GitHub `a2adib ↗`; LinkedIn `abdullah-al-adib ↗` (`linkedin.com/in/abdullah-al-adib-01a1b6313`); Based in `Dhaka, Bangladesh` (plain text).
- Footer line: "© 2026 Abdullah Al Adib", JetBrains Mono 11px `.1em` `#a5a199`, `margin-top: clamp(36px, 5vw, 64px)`.

---

## Interactions & Behavior

**Scroll reveal** — every element marked `data-reveal` starts at `opacity: 0; translateY(26px)` and animates to `opacity: 1; translateY(0)` over **.9s `cubic-bezier(.16,.84,.32,1)`** when it enters the viewport. IntersectionObserver, `threshold: 0.1`, `rootMargin: '0px 0px -6% 0px'`, **unobserve after firing** (one-shot, never re-hides). No-IO fallback: reveal everything immediately. Respect `prefers-reduced-motion: reduce` by skipping the transform and showing content immediately — the current prototype does not, and should.

**Hero entrance** — staggered `riseIn` keyframe (`opacity 0 → 1`, `translateY(24px) → 0`) on load, 1.1s `cubic-bezier(.16,.84,.32,1)`: eyebrow at 0.1s, H1 at 0.2s, intro paragraph at 0.45s, metrics quad at 0.6s.

**Metric counters** — each `[data-count]` is set to `0` on mount, then counts to its target when ≥60% visible (`threshold: 0.6`, one-shot). **1100ms**, ease-out cubic (`1 - (1-p)³`), `Math.round` per frame via `requestAnimationFrame`, suffix (`×`, `%`) re-appended each frame. Toggleable — when disabled, render final values statically.

**Scroll cue** — `drift` keyframe, `translateY(0 → -8px)`, 1.6s `ease-in-out`, `infinite alternate`.

**Caret** — `caret` keyframe, `step-end`, 1.1s infinite, opacity 1 for the first half of the cycle and 0 for the second.

**Sticky act panel** — Act 01's left column sticks at `top: 110px` (clears the fixed header) while its right column scrolls. Static below 900px.

**Progress bar** — passive `scroll` listener; also run once on mount so a mid-page reload shows the right width.

**Hover states** — all links go to the accent color on hover (`a:hover { color: accent }`); underlined links keep their `#ddd8ce` border. Cards have no hover lift in the current design; a `border-color: #d6d0c6` shift on hover is an acceptable addition.

**Anchor nav** — smooth scroll via CSS. Because the header is fixed and 60px tall, add `scroll-margin-top: 80px` to each section when implementing (the prototype relies on generous section padding instead).

## Responsive behavior
Everything is fluid via `clamp()`; only three breakpoint rules exist, all at **max-width: 900px**:
- Every 2-column grid (hero split, act 01 split, project/timeline rows) collapses to `1fr`.
- The sticky column becomes `position: static; height: auto`.
- The center nav is hidden. **Not yet designed: a mobile menu.** Implement one — a full-screen overlay with the four act links plus the CTA is in keeping with the reference.

Below 900px the metrics quad stays 2×2 (intentional), and card/skill grids reflow by `auto-fit`.

## State Management
Presentational page; no server state. Client state needed:
- `revealed` per section — DOM-class driven in the prototype; in React use a small `useReveal()` hook wrapping IntersectionObserver, or a library like Framer Motion's `whileInView`.
- `counterValue` per metric — local, animation-only.
- `scrollProgress` — single number, throttled to `requestAnimationFrame`.
- `mobileMenuOpen` — boolean, new work.
- Content: keep sourcing from `lib/data.ts`. It needs updating to match the CV — projects and skills there still describe a Node-first stack; the design's copy above is authoritative.

## Design Tokens

**Colors**
| Token | Value | Use |
|---|---|---|
| paper | `#faf9f7` | Page background, card fill on tinted sections |
| paper-tint | `#f4f2ee` | Act 02 background, inverted-section text |
| surface | `#ffffff` | Panels, code/compose cards, chrome bars |
| surface-alt | `#f6f4f0` | Code panel title bar |
| ink | `#14140f` | Primary text, inverted background, primary button |
| ink-soft | `#3d3b35` | Body copy |
| ink-mute | `#6f6c66` | Nav, eyebrow, small labels |
| ink-faint | `#8a867e` | Mono metadata |
| ink-ghost | `#a5a199` | Placeholders, footer, scroll cue |
| numeral | `#c2beb6` | Bullet counters |
| nav-numeral | `#b9b5ad` | Nav item numerals |
| rule | `#e6e2da` | Borders, hairline grid |
| rule-soft | `#efece6` | Chrome-bar borders |
| rule-line | `#ddd8ce` | Link underlines |
| chip-border | `#e0dbd2` | Chips, window dots, "before" bar |
| ink-rule (dark) | `#2a2a22` | Hairline grid on Act 04 |
| ink-body (dark) | `#a9a69e` | Body copy on Act 04 |
| accent | `#b8543a` | Default accent (terracotta) |
| accent alts | `#4a6b57`, `#3d5a8a`, `#14140f` | Approved accent swaps — the design is accent-agnostic; **`#3d5a8a` (slate blue) is the currently preferred pick** |
| positive | `#7c9a6b` | Success ticks |
| header bg | `rgba(250,249,247,.78)` | + `blur(10px)` |
| header border | `rgba(20,20,15,.07)` | |
| selection | `#e8e2d8` | |

Implement the accent as a single CSS custom property (`--accent`) so it can be swapped in one place.

**Typography**
- Display / body: **Instrument Sans** (Google), weights 400/500/600. Weight 500 for all headings.
- Mono: **JetBrains Mono** (Google), weights 400/500. Used for every label, numeral, chip, code block, and link in metadata rows.
- Scale: H1 `clamp(46px,9vw,132px)` / `-.035em` / `.95`; contact H2 `clamp(34px,6vw,84px)` / `-.035em` / `1`; act H2 `clamp(32px,4.6vw,64px)` / `-.03em` / `1.02`; role H3 `clamp(22px,2.4vw,30px)` / `-.02em`; card H3 26px; card title (dark) 22px; metric number `clamp(26px,3vw,36px)` / `-.03em`; lead 21px max; body 17px / 1.6; card body 15.5px; bullets 16px; mono 13px / 12px / 11px / 10px.
- Mono tracking: `.1em`–`.2em` depending on size — smaller text gets more tracking. Uppercase for all labels.
- No font weight above 600 anywhere.

**Spacing** — `clamp()` pairs, not a fixed scale: side padding `clamp(20px,5vw,56px)`; section `clamp(60px,8vw,120px)`; grid gaps `clamp(16px,4vw,56px)` / `clamp(28px,5vw,80px)`; card padding 20–22px and `clamp(24px,3vw,38px)`; card grid gap 16px; hairline gap 1px.

**Radius** — 10px (code panel, stat cards), 12px (project cards, compose card), 999px (chips, pills), `4px 4px 0 0` (bars).

**Shadows** — **none.** Depth comes from 1px borders and tonal fills. Do not add shadows.

**Motion** — easing `cubic-bezier(.16,.84,.32,1)` for all entrances; durations .9s (reveal), 1.1s (hero, counters), 1.6s (drift), .12s linear (progress bar).

## Assets
- **Fonts** — Instrument Sans + JetBrains Mono from Google Fonts. Self-host via `next/font/google` in the target app rather than a `<link>`.
- **CV PDF** — `Abdullah_Al_Adib_CV.pdf` must live at the site root (`public/`); linked from hero-adjacent CTA and the contact block.
- **No images, no icons, no illustrations.** All "UI" (window chrome, bars, logs) is CSS boxes and text. Arrows are the literal characters `→ ↗ ↓ ✓ ✕`.
- The alternate editorial direction in `design/alternate-editorial/` uses `portrait.jpg` (the user's photo, duotone-filtered). Not used in this design.

## Files
- `design/PortfolioScroll.dc.html` — the design to implement. Open it in a browser to see it live. Its markup is inline-styled; its `<script>`-side class holds the reveal/counter/progress logic described above.
- `design/alternate-editorial/Portfolio.dc.html` + `tokens.css` + `portrait.jpg` — rejected earlier direction, reference only.
- In the existing repo, the files this replaces: `app/page.tsx`, `app/globals.css`, `tailwind.config.js` (theme), `components/Navbar.tsx`, `components/Footer.tsx`, `components/sections/*`; content lives in `lib/data.ts`.
