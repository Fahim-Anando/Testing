# Design System Inspired by Antimetal

## 1. Visual Theme & Atmosphere

Antimetal's design language is industrial, infrastructure-grade, and quietly confident. The brand sits at the intersection of SRE precision and consumer-grade product polish — it has the calm of a status page and the warmth of a well-pressed photographic print. Every surface feels machined: borders are exact, type is set tight, and color stays out of the way until a signal needs to land. The canvas is the foundation — a deep, slightly warm black in dark mode and a warm off-white in light mode — and almost everything else is grayscale, with two saturated signals carrying the brand: a coral-orange that marks attention and a chrome blue that marks data. A soft aurora gradient sits behind the hero in both themes, an analog warm-glow remnant of server-room lighting rendered in pixels.

**Key Characteristics**
- Twin themes that share the same anatomy — dark is the primary, light is the documentation
- Warm-black canvas (`#0A0908`) rather than clinical black — softer, less synthetic
- One signal color (`#FF6B47` coral-orange) carries every call-to-action and live state
- Mono is the equal of sans — used for stats, file paths, integration labels, and status text
- Aurora mesh appears behind hero and CTA sections — soft, painterly, never decorative
- Borders are hairline (1px) and do nearly all of the depth work
- Geometric sans set tight (-0.02 to -0.04em) for display; mono at default tracking for technical
- Single italic-serif accent word per heading — the only place anything fancy happens
- Status indicators ("All systems normal") and compliance marks (SOC 2 / GDPR / HIPAA) are treated as first-class design elements

## 2. Color Palette & Roles

The system has two themes that share component shape but invert surfaces and ink. Both share the same accent and signal colors so brand recognition is preserved when switching.

### Dark Theme (Primary)

**Surfaces**
- **Canvas** (`#0A0908`): The default page background. Warm-black, slight brown undertone.
- **Surface Raised** (`#14130F`): Cards, panels, raised regions.
- **Surface Sunken** (`#070605`): Inputs and pressed states.
- **Surface Chrome** (`#1C1B17`): Nav bar, modal chrome, integration tiles.

**Ink & Text**
- **Ink** (`#FAFAF7`): Headings, primary text, button labels.
- **Body** (`#C8C6BE`): Running body copy.
- **Body Muted** (`#8D8B83`): Captions, metadata, helper text.
- **Body Dim** (`#5E5C55`): Placeholders, deprioritized labels.
- **Body Faint** (`#3A3833`): Disabled labels, decorative numerals.

**Borders**
- **Hairline** (`#232120`): Universal 1px border across cards, inputs, dividers.
- **Hairline Strong** (`#332F2C`): Hovered, focused, separating chrome.
- **Rule** (`#1A1815`): Section rules and footer separations.

### Light Theme (Documentation)

**Surfaces**
- **Canvas** (`#FAFAF7`): Page background. Warm off-white — a faint paper undertone.
- **Surface Raised** (`#FFFFFF`): Cards, panels.
- **Surface Sunken** (`#F2F0EA`): Inputs and pressed states.
- **Surface Chrome** (`#F6F4EE`): Nav, integration tiles.

**Ink & Text**
- **Ink** (`#0A0908`): Headings, primary text, button labels.
- **Body** (`#36342D`): Running body copy.
- **Body Muted** (`#6E6B62`): Captions, metadata.
- **Body Dim** (`#9D9A8F`): Placeholders.
- **Body Faint** (`#C2BFB3`): Disabled, decorative numerals.

**Borders**
- **Hairline** (`#E5E3DD`): Universal border.
- **Hairline Strong** (`#D2CFC5`): Hovered, focused.
- **Rule** (`#EAE8E1`): Section rules.

### Signal Colors (shared across themes)

- **Signal Coral** (`#FF6B47`): Primary brand signal. CTAs, links on hover, "live" markers, the brand's single saturated emphasis. Used in solid form on dark, with a +5% saturation bump on light backgrounds.
- **Signal Coral Deep** (`#E04E2F`): Pressed states, deep emphasis.
- **Signal Coral Wash** (`rgba(255, 107, 71, 0.12)`): Pill backgrounds, focus rings.
- **Chrome Blue** (`#6EA8FE`): Data, telemetry, "scanning" / "connected" states for integrations.
- **Chrome Blue Wash** (`rgba(110, 168, 254, 0.12)`): Info pills, hover states on data.

### Status

- **Live Green** (`#4ADE80`): "All systems normal", success, connected, resolved.
- **Amber Warn** (`#FBBF24`): Investigating, in progress, draft.
- **Crimson Alert** (`#F87171`): Incidents, errors, destructive actions.

### Aurora (decorative — hero/CTA only)

A soft radial-gradient mesh that sits behind the hero and final CTA only. Always low opacity, always warm-leaning. Composition: a coral hotspot at one corner, a chrome-blue hotspot opposite, and an amber spill in between. Never used behind cards, behind body text, or in light theme tiles. In light theme the aurora is significantly desaturated to remain in the same paper family as the canvas.

## 3. Typography Rules

### Font Family

**Primary (sans):** Geist (`'Geist', 'Inter', -apple-system, BlinkMacSystemFont, sans-serif`)
**Monospace:** Geist Mono (`'Geist Mono', 'JetBrains Mono', 'SF Mono', Menlo, monospace`)
**Accent (italic serif):** Instrument Serif (`'Instrument Serif', 'Iowan Old Style', Georgia, serif`)

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|------|--------|-------------|-----------------|-------|
| Display / H1 | Geist | 76px | 500 | 1.02 | -0.035em | Hero. Medium weight only — never 700. |
| Heading / H2 | Geist | 52px | 500 | 1.06 | -0.03em | Section heads. Paired with one italic serif word. |
| Subheading / H3 | Geist | 24px | 500 | 1.3 | -0.018em | Card titles, step titles. |
| Body Large | Geist | 19px | 400 | 1.55 | -0.005em | Hero subtitle, section descriptions. |
| Body | Geist | 16px | 400 | 1.6 | 0em | Paragraph copy. |
| Body Small | Geist | 14px | 400 | 1.55 | 0em | Captions. |
| UI Label | Geist | 13px | 500 | 1.4 | -0.005em | Button text, nav links, form labels. |
| Eyebrow | Geist Mono | 11px | 500 | 1.4 | 0.06em | UPPERCASE pre-heading tag. |
| Mono Caption | Geist Mono | 12px | 400 | 1.5 | 0em | Specs, file paths, integration labels. |
| Code | Geist Mono | 13px | 400 | 1.65 | 0em | Inline and block code. |
| Stat Numeral | Geist | 84px | 500 | 0.95 | -0.045em | Tabular numerals (`font-feature-settings: 'tnum'`). Always paired with a unit. |
| Mega Stat | Geist | 200px | 500 | 0.85 | -0.06em | The "40%" / "5x" hero stats. Often half-color, half-gradient. |
| Serif Accent | Instrument Serif | inherit | 400 italic | inherit | 0em | One italic word per heading — never two. |

### Principles
- **Medium, never bold.** Geist at 500 carries display through subhead. 600+ is reserved for very small uppercase eyebrows.
- **Tighten as type grows.** Anything ≥ 32px gets `-0.03em` or tighter. The hero pushes to `-0.04em`.
- **Mono earns its keep.** Eyebrows, stat captions, file paths, integration names, status text — all mono. Mono carries the system's "infrastructure" voice.
- **Tabular numerals everywhere they matter.** Stats, pricing, mega-figures, status timestamps.
- **One italic word per heading.** Instrument Serif italic appears as a single accented word, lowercase, never in body copy.
- **UPPERCASE only in eyebrows and status pills.** Both stay in mono.
- **Mega-stat numerals are a design element.** The "40%" or "5x" is treated like a hero — usually 200px+, with the numeral half-rendered in coral and half in ink.

## 4. Component Stylings

### Buttons

**Primary Button (Solid Ink)**
- **Background (dark):** `#FAFAF7` · **(light):** `#0A0908`
- **Text (dark):** `#0A0908` · **(light):** `#FAFAF7`
- **Font Size:** `14px` / weight `500` / Geist
- **Padding:** `10px 20px`
- **Border Radius:** `8px`
- **Border:** `1px solid` matching background
- **Height:** `40px`
- **Box Shadow:** `inset 0 1px 0 rgba(255, 255, 255, 0.12), 0 1px 2px rgba(0, 0, 0, 0.25)` (dark) / `inset 0 1px 0 rgba(255, 255, 255, 0.06), 0 1px 2px rgba(10, 9, 8, 0.12)` (light)
- **Hover:** Background shifts 4% toward complement, shadow strengthens.

**Coral Button (Brand Signal)**
- **Background:** `#FF6B47`
- **Text:** `#0A0908` (always — for contrast on coral)
- **Padding / radius / height:** Same as primary.
- **Border:** `1px solid #E04E2F`
- **Box Shadow:** `inset 0 1px 0 rgba(255, 255, 255, 0.25), 0 1px 2px rgba(224, 78, 47, 0.4)`
- **Hover:** Background shifts to `#FF7D5C`, shadow grows by 4px.
- **Active:** Background `#E04E2F`.

**Secondary Button (Outline)**
- **Background:** `transparent`
- **Text (dark):** `#FAFAF7` · **(light):** `#0A0908`
- **Border:** `1px solid #332F2C` (dark) / `1px solid #D2CFC5` (light)
- **Padding:** `10px 20px`, radius `8px`, height `40px`
- **Hover:** Background becomes `#14130F` (dark) / `#F2F0EA` (light), border becomes ink color.

**Ghost Button**
- **Background:** transparent
- **Text:** ink color
- **Padding:** `10px 14px`, radius `8px`
- **Hover:** Color shifts to Coral.
- **Arrow suffix:** ` →` appears, translates `2px` right on hover.

### Cards & Containers

**Standard Card**
- **Background (dark):** `#14130F` · **(light):** `#FFFFFF`
- **Border:** `1px solid` hairline
- **Border Radius:** `12px`
- **Padding:** `28px`
- **Box Shadow:** none (flat default)
- **Hover:** Border becomes hairline-strong, shadow rises to `0 1px 2px rgba(0,0,0,0.2), 0 8px 24px rgba(0,0,0,0.2)` (dark) / lighter equivalent (light).

**Integration Tile** (the logo grid)
- **Background:** Surface Chrome
- **Border:** `1px solid` hairline
- **Border Radius:** `12px`
- **Padding:** `24px`
- **Aspect:** square (`1 / 1`)
- **Center:** integration logo, ~40px max-height
- **Footer label:** mono 11px, integration name, color body-muted
- **Hover:** Border → coral, status dot appears in top-right corner.

**Hero Halo Card** (the mockup or media container)
- **Background:** Surface Raised
- **Border:** `1px solid` hairline
- **Border Radius:** `16px`
- **Padding:** `0` (content rendered inside with own chrome)
- **Box Shadow (dark):** `0 1px 2px rgba(0,0,0,0.4), 0 24px 48px rgba(0,0,0,0.4), 0 60px 120px rgba(255,107,71,0.06)` — the soft coral glow under the card.
- **Box Shadow (light):** Same anatomy, lighter opacity.

**Section Container**
- **Padding:** `120px 32px` (desktop) · `80px 24px` (tablet) · `64px 20px` (mobile)
- **Max Width:** `1280px`, centered

### Inputs & Forms

**Text Input**
- **Background:** Surface Sunken
- **Text:** ink color
- **Font:** Geist 15px / 400
- **Padding:** `12px 14px`
- **Border Radius:** `10px`
- **Border:** `1px solid` hairline
- **Height:** `44px`
- **Placeholder:** body-dim color
- **Focus:** Border → coral, box shadow `0 0 0 3px rgba(255, 107, 71, 0.18)`.

**Textarea**
- Same as input. `min-height: 120px`, `resize: vertical`, `font-family: Geist Mono` (so user input feels like a query, like the "Ask, search, or give instructions" field on the live site).

**Form Label**
- **Font:** Geist 13px / 500 (or Geist Mono 12px when the field is technical)
- **Color:** ink
- **Margin Bottom:** `8px`

### Navigation

**Nav Link**
- **Background:** transparent
- **Color:** body
- **Font:** Geist 13px / 500
- **Padding:** `8px 12px`, radius `8px`
- **Hover:** Background → Surface Chrome, color → ink.

**Nav Bar**
- **Background:** `rgba(10, 9, 8, 0.7)` (dark) / `rgba(250, 250, 247, 0.8)` (light) — both with `backdrop-filter: blur(20px)`
- **Border Bottom:** `1px solid` hairline
- **Padding:** `14px 32px`
- **Height:** `60px`
- **Position:** sticky

### Pills, Badges & Status

**Eyebrow Pill**
- **Background:** Surface Chrome
- **Border:** `1px solid` hairline
- **Padding:** `4px 10px`, radius `6px`
- **Font:** Geist Mono 11px / 500, UPPERCASE, letter-spacing `0.06em`

**Status Pill (Live, Investigating, Incident)**
- **Padding:** `3px 9px`, radius `999px`
- **Font:** Geist Mono 11px / 500, UPPERCASE
- **Includes:** Status dot prefix (`6px` circle, 0–3px glow halo)
- **Variants:** Live (green), Investigating (amber), Incident (crimson), Connected (chrome blue), Live-Signal (coral)

**Compliance Mark**
- **Background:** Surface Chrome
- **Border:** `1px solid` hairline
- **Padding:** `6px 12px`, radius `6px`
- **Font:** Geist Mono 10px / 500, UPPERCASE
- **Used for:** SOC 2 · GDPR · HIPAA · ISO 27001 — always shown as a row in the footer.

### Tabs

**Tab (Inactive)**
- **Background:** transparent
- **Color:** body-muted
- **Font:** Geist 13px / 500
- **Padding:** `10px 14px`, border-bottom `1px solid transparent`
- **Hover:** Color → ink

**Tab (Active)**
- **Color:** ink
- **Border Bottom:** `1px solid` coral

## 5. Layout Principles

### Spacing System

**Base Unit:** `4px`

**Spacing Scale**
- **xs (4px)** — Icon-to-label gap, inline padding inside chips.
- **sm (8px)** — Stack between related labels and inputs.
- **md (12px)** — Inline button padding, card meta-row spacing.
- **lg (16px)** — Card internal stacking, nav gaps.
- **xl (24px)** — Between card rows, between subtitle and content.
- **2xl (32px)** — Card padding, container horizontal padding.
- **3xl (48px)** — Between section title and content body.
- **4xl (72px)** — Between minor sections.
- **5xl (96px)** — Standard between-section padding (tablet).
- **6xl (120px)** — Section vertical padding (desktop).
- **7xl (160px)** — Hero top padding and CTA-section breathing room.

### Grid & Container

**Max Width Container:** `1280px`
**Hero text max width:** `1000px`
**Body text max width:** `680px`

**Section Patterns**
- **Hero:** Centered text + halo card or mega-stat below. Aurora mesh background. `160px` top, `120px` bottom.
- **Three-feature grid:** Equal cards on desktop, `20px` gap.
- **Integration grid:** `auto-fill, minmax(140px, 1fr)`, `12px` gap — tight, dense, square tiles.
- **Stat split:** Two-column 50/50 — mega-stat numeral on one side, copy + button on the other.
- **Pricing:** 3-column, `16px` gap. Middle plan elevated with coral border.

### Border Radius Scale

- **0px** — Section dividers, full-width rules.
- **6px** — Eyebrow pills, compliance marks.
- **8px** — Buttons, nav links.
- **10px** — Inputs, textarea.
- **12px** — Cards, integration tiles, pricing cards.
- **16px** — Hero halo card, large media containers.
- **999px** — Status pills, avatar circles.

### Whitespace Philosophy

Antimetal pages breathe like a server room — quiet, climate-controlled, deliberate. Sections are far apart, the hero halo card sits in air, and integration tiles get room around them so each logo registers. Whitespace is part of the brand promise: "this product handles complexity so you don't have to feel it." Never crowd. Never use ornament to fill space — let the canvas (and the aurora behind it) carry the moment.

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| **Flat (0)** | `box-shadow: none` | Default. Sections, basic cards, inputs. |
| **Hairline (1)** | `1px solid` hairline only | Default card definition. |
| **Press (2)** | `0 1px 2px rgba(0,0,0,0.2)` (dark) / `rgba(10,9,8,0.04)` (light) | Subtle hover on buttons and small cards. |
| **Float (3)** | `0 1px 2px rgba(0,0,0,0.2), 0 8px 24px rgba(0,0,0,0.24)` (dark) | Hovered cards, popovers. |
| **Halo (4)** | Float shadow + `0 60px 120px rgba(255,107,71,0.08)` | Hero card — the soft coral aurora glow. |
| **Modal (5)** | `0 24px 48px rgba(0,0,0,0.4), 0 48px 96px rgba(0,0,0,0.4)` | Command palette, dialogs. |

**Shadow Philosophy:** Borders carry the hierarchy. Shadows are rare and intentional. The Hero Halo shadow is the only place coral leaks into ambient lighting — everywhere else, shadows are pure black at low opacity. In light theme, the same shadow shapes apply but at half opacity.

## 7. Do's and Don'ts

### Do
- **Default to dark.** Dark is the primary theme. Light is the documentation/print equivalent.
- **Use one coral.** `#FF6B47` is the single saturated brand color. Use it for the primary CTA, live signals, and one accent moment per section — no more.
- **Set Geist at 500 for almost everything.** 600+ is reserved for tiny mono eyebrows.
- **Use mono for stats labels, file paths, integration names, status pills, eyebrows.** Mono carries the technical voice.
- **Tabular numerals on every stat.** Always.
- **Pair every section heading with one italic Instrument Serif word.** Never two.
- **Treat status indicators as first-class.** "All systems normal" with a live green dot belongs in the footer of every page, like a heartbeat.
- **Use the aurora only behind the hero and CTA sections.** Never behind body content.
- **Compliance marks always live together in a single row.** SOC 2 · GDPR · HIPAA, mono uppercase.

### Don't
- **Don't use pure black.** `#0A0908` warm-black only. Pure `#000` reads as cheap.
- **Don't introduce a second saturated color besides coral and chrome blue.** No purple, no pink, no teal.
- **Don't apply heavy weights (700+) to display headings.** Medium-only is the system's voice.
- **Don't use Instrument Serif anywhere outside the single accent word.** It's a spotlight, not a font.
- **Don't decorate cards with gradients.** Cards are flat with a hairline. The aurora is for canvas only.
- **Don't use color on plain text.** Body copy stays in the ink/body/muted scale.
- **Don't all-caps a heading.** Only mono eyebrows and tiny status pills get uppercase.
- **Don't crowd the integration grid.** Each tile needs to register as a single brand.
- **Don't put shadows on inputs.** Borders + sunken background do the work.
- **Don't let the mega-stat numeral compete with the surrounding copy.** It's the moment — surround it with air.

## 8. Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|------|-------|-------------|
| **Mobile** | 320–639px | Single column, `20px` horizontal padding, hero type drops to 40px, nav becomes hamburger. |
| **Tablet** | 640–1023px | Two-column where applicable, `28px` padding, hero 56px. |
| **Desktop** | 1024–1279px | Full layout, `32px` padding, hero 68px. |
| **Large** | 1280px+ | Container caps at `1280px`, hero 76px, all systems at full scale. |

### Touch Targets
- **Mobile minimum:** `44px × 44px`
- **Desktop minimum:** `36px × 36px`
- **Inter-target spacing:** `8px` minimum on mobile

### Collapsing Strategy

**Nav**
- **Desktop:** Full horizontal nav with Platform/Company/Resources dropdowns and a "Book a demo" coral CTA.
- **Mobile:** Hamburger icon, full-screen sheet with stacked links and a single coral CTA pinned to the bottom.

**Integration grid**
- **Desktop:** 6–8 columns of square tiles.
- **Tablet:** 4 columns.
- **Mobile:** 3 columns, tiles shrink to maintain density.

**Mega-stat**
- **Desktop:** Single row, numeral and copy side-by-side, numeral ~200px tall.
- **Tablet:** Stacked, numeral ~140px.
- **Mobile:** Stacked, numeral ~96px.

**Sections**
- **Desktop:** `120px` vertical padding.
- **Tablet:** `80px`.
- **Mobile:** `64px`.

**Typography Scaling**
- H1: 76px → 56px → 40px
- H2: 52px → 40px → 30px
- H3: 24px → 22px → 20px
- Body: 16px across all breakpoints
- Mega stat: 200px → 140px → 96px

## 9. Agent Prompt Guide

### Quick Color Reference

**Dark theme (primary):**
- Canvas `#0A0908` · Raised `#14130F` · Chrome `#1C1B17`
- Ink `#FAFAF7` · Body `#C8C6BE` · Muted `#8D8B83`
- Hairline `#232120`

**Light theme:**
- Canvas `#FAFAF7` · Raised `#FFFFFF` · Chrome `#F6F4EE`
- Ink `#0A0908` · Body `#36342D` · Muted `#6E6B62`
- Hairline `#E5E3DD`

**Shared signals:**
- Coral `#FF6B47` (brand CTA & live signals)
- Chrome Blue `#6EA8FE` (data, integration "connected")
- Live Green `#4ADE80`, Amber `#FBBF24`, Crimson `#F87171`

### Iteration Guide

1. **Theme parity.** Every component must exist in both themes with the same shape. Only surfaces, ink, and borders invert — coral, chrome blue, and the status palette stay identical.

2. **Buttons.** Primary = solid ink on canvas (white on dark, black on light). Coral = the brand emphasis, used once per section maximum. Secondary = transparent + outline. Ghost = link with arrow.

3. **Cards.** Flat by default. Surface Raised background, hairline border, 12px radius, no shadow. Hover adds Float shadow.

4. **Aurora discipline.** The aurora mesh appears in exactly two places per page: behind the hero and behind the final CTA. Nowhere else.

5. **Mega-stat treatment.** The hero stat is the section. Numeral at 160–200px with `-0.06em` tracking and tabular numerals. The copy supporting it stays small (16–19px) and lives in the gutter.

6. **Mono is a voice.** Every eyebrow, every stat label, every file path, every integration name, every status pill, every compliance mark. If it's technical, it's mono.

7. **One italic word per heading.** Pick the verb or noun the section turns on (e.g. *deploy*, *fix*, *prevent*, *answers*, *frontier*). Color it the same ink as the rest of the heading — the italic carries the moment, not the color.

8. **Integration tiles are square.** Always `1:1` aspect ratio with the logo centered. The mono label sits underneath in body-muted color. On hover, the border switches to coral and a green status dot appears top-right.

9. **Live status everywhere.** A "All systems normal" indicator with a pulsing green dot lives in the footer. The same component appears in card headers and integration tiles as a readiness signal.

10. **Compliance is design.** SOC 2, GDPR, HIPAA marks always render as a single mono row, never broken across lines. Footer is the canonical location.
