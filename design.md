---
name: Boundary + BAML Brand System
version: 1.0.0
date: 2026-10-16
owner: Happy Pizza Studio
source: Boundary + BAML Brand Guide (brand-book.pdf, 47pp), Happy Pizza Studio
scope: Color, Typography, Logo. Nothing else is defined here.
---

# Boundary + BAML

One brand system, two brands. **Boundary** is the company and its cloud platform. **BAML** is the
open-source language. They share a type system, a logo family and a black-and-white base, and they
split on color.

**The lanes rule:** green is Boundary, purple is BAML. Keep them in their own lanes. Black and white
form the base of both. (p.3)

**Stop-and-ask rule:** every value you need is in this file. If something you want is not defined
here — a spacing scale, a radius, a shadow, a motion curve, a copy rule — it is not part of this
system. Stop and ask Happy Pizza Studio. Do not invent it, and do not borrow it from a reference site.

---

## 1. Color

### Core colors (p.3, p.4)

| Role | Name | Hex | RGB |
|---|---|---|---|
| Boundary's color | **Pasture** (core, scale step 600) | `#3E6B2E` | 62, 107, 46 |
| BAML's color | **Clover** (core, scale step 200) | `#CAAAF2` | 202, 170, 242 |
| Base of both scales, default for type | **Black** | `#0F0F0F` | 15, 15, 15 |
| Base of both | **White** | `#FFFFFF` | 255, 255, 255 |

Pasture leads every Boundary layout and is the ground the whole brand stands on. Clover leads every
BAML layout; when BAML shows up inside a Boundary layout it reads like flowers in the pasture. The
outlined swatch in each column of p.4 is the core color — Pasture `#3E6B2E`, Clover `#CAAAF2`.

### Pasture scale — Boundary (p.4)

| Step | Hex | RGB |
|---|---|---|
| 50 | `#F1FAEE` | 241, 250, 238 |
| 100 | `#E1F3DC` | 225, 243, 220 |
| 200 | `#C7E5BD` | 199, 229, 189 |
| 300 | `#82B571` | 130, 181, 113 |
| 400 | `#5F934E` | 95, 147, 78 |
| 500 | `#4A7A39` | 74, 122, 57 |
| **600 (core)** | `#3E6B2E` | 62, 107, 46 |
| 700 | `#2B501E` | 43, 80, 30 |
| 800 | `#1C3912` | 28, 57, 18 |
| 900 | `#0E2306` | 14, 35, 6 |

### Clover scale — BAML (p.4)

| Step | Hex | RGB |
|---|---|---|
| 50 | `#F1E9FF` | 241, 233, 255 |
| 100 | `#E4D1FF` | 228, 209, 255 |
| **200 (core)** | `#CAAAF2` | 202, 170, 242 |
| 300 | `#B484EA` | 180, 132, 234 |
| 400 | `#9A5BDA` | 154, 91, 218 |
| 500 | `#833EC1` | 131, 62, 193 |
| 600 | `#6D2EA3` | 109, 46, 163 |
| 700 | `#552182` | 85, 33, 130 |
| 800 | `#3E185F` | 62, 24, 95 |
| 900 | `#260B3D` | 38, 11, 61 |

Use the lighter steps for backgrounds and panels, and the darker steps for text and depth. BAML's
dusk and dark mode layouts draw on the deep end of the Clover scale. Black sits at the base of both
scales and is the default for type. (p.4)

Step numbers follow the site's existing token names (`--color-pasture-*`, `--color-clover-*`). The
site publishes the two core colors as `--color-pasture` / `--color-clover` rather than as numbered
steps; 600 and 200 are the steps those values occupy in the book's scales.

### Approved text pairings (p.5, contrast recomputed to WCAG 2.2)

These six combinations are what the Color Combinations page shows. **Anything not listed here is
unapproved** — including every other scale step as a text color.

**Boundary**

| Background | Heading | Body | Contrast |
|---|---|---|---|
| White `#FFFFFF` (hairline rule in Pasture 600) | Pasture 600 `#3E6B2E` | Black `#0F0F0F` | 6.27:1 / 19.17:1 |
| Pasture 600 `#3E6B2E` | White `#FFFFFF` | White `#FFFFFF` | 6.27:1 |
| Pasture 100 `#E1F3DC` | Black `#0F0F0F` | Black `#0F0F0F` | 16.48:1 |

**BAML**

| Background | Heading | Body | Contrast |
|---|---|---|---|
| White `#FFFFFF` (hairline rule in Clover 600) | Clover 600 `#6D2EA3` | Black `#0F0F0F` | 8.17:1 / 19.17:1 |
| Clover 800 `#3E185F` | White `#FFFFFF` | White `#FFFFFF` | 13.99:1 |
| Clover 900 `#260B3D` | Clover 200 `#CAAAF2` | White `#FFFFFF` | 8.80:1 / 17.53:1 |

All six clear WCAG AA (4.5:1) for body text and AAA (7:1) except the two Pasture 600 pairings, which
are AA.

---

## 2. Typography

Three faces (p.7):

- **Lexend** — the headline face. A sturdy sans-serif with real weight in the letterforms, built for
  screens but dense enough to hold up large. Weights shown: Light, Regular, Medium, SemiBold, Bold,
  ExtraBold (300–800).
- **Geist** — the body face. Neutral and open, comfortable at any length. It does the reading work so
  Lexend can do the talking. Weights shown: Light, Regular, SemiBold, Bold, ExtraBold (300, 400, 600,
  700, 800).
- **Geist Pixel** — the accent face, shared by both brands. A pixel cut of Geist for callout moments,
  captions and anything that refers to BAML. It ties the type back to the pixel-drawn BAML lamb. One
  style: **Square**.

### Hierarchy (p.8 roles, p.9 values)

| Level | Face + weight | Size | Line height | Letter spacing | Use |
|---|---|---|---|---|---|
| **H1** | Lexend SemiBold (600) | 80px | 110% (1.1) | -3% (-0.03em) | Primary page headings and hero moments |
| **H2** | Lexend Medium (500) | 60px | 110% (1.1) | -2% (-0.02em) | Section headings. Switch to Geist Pixel Square for callout moments or headings about BAML |
| **H3** | Lexend Medium (500) | 40px | 120% (1.2) | -3% (-0.03em) | Supporting headings inside a section |
| **Body** | Geist Regular (400) | 20px | 140% (1.4) | 0% (0em) | Long-form and UI copy |
| **Caption** | Geist Pixel Square | 16px | 110% (1.1) | -2% (-0.02em) | Small labels, annotations and highlighted words, across both brands |

There is no responsive or mobile type scale in the brand book. Do not invent one — see the
stop-and-ask rule.

### Font stacks (from the site code)

```css
--font-display: Lexend, Geist, system-ui, sans-serif;   /* headings */
--font-sans:    Geist, system-ui, sans-serif;           /* body + UI */
--font-pixel:   "Geist Pixel", "JetBrains Mono", monospace; /* captions, BAML accents */
```

Licensing: Lexend is OFL — link it from Google Fonts or self-host. Geist and Geist Pixel are Vercel's
faces — self-host from the `geist` package, as both sites already do (`next/font/local`). Ship links
and a license note, never binaries.

---

## 3. Logo

The suite is five marks across two brands (p.31). The primary logos are the defaults. The logomarks
and the combination mark let the identity flex without being redrawn.

| Mark | What it is | When to use | Aspect ratio (w:h) | File |
|---|---|---|---|---|
| **Boundary primary logo** | The gate and the boundary wordmark | Default for the company and the cloud platform. Use it wherever there is room (p.15) | 5.847:1 (649 × 111) | `logo/svg/boundary-primary-{black,white}.svg` |
| **Boundary logomark** | The pasture gate alone | Where the wordmark will not fit or will not be read: favicon, avatar, app icon, nav tile (p.11) | 1.593:1 (137 × 86) | `logo/svg/boundary-logomark-{black,white}.svg` |
| **BAML primary logo** | The baml wordmark with the lamb leaping off the end of the L | Default for the language: the BAML site, docs, repos and community spaces (p.23) | 2.602:1 (588 × 226.02) | `logo/svg/baml-primary-{black,white}.svg` |
| **BAML logomark** | The pixel lamb alone, caught mid-leap | Where the BAML wordmark will not fit: favicons, avatars, docs, stickers (p.19) | 0.844:1 (356 × 422) | `logo/svg/baml-logomark-{black,white}.svg` |
| **Combination mark** | The lamb leaping over the gate | When BAML and Boundary need to appear as one: launches, merch, co-branded moments. It does not replace either primary logo (p.27) | 0.929:1 (474 × 510.29) | `logo/svg/combination-mark-{black,white}.svg` |

The wordmarks are lowercase artwork. Never retype them, never set them in a font, never redraw a
mark. If the SVG is unreachable, leave the space and say so.

### Color

Black on white is the default. The inverse is white on black. On imagery or busy backgrounds, use
whichever version holds the strongest contrast. (p.11, p.15, p.19, p.23)

The marks are drawn in **pure black `#000000`**, not the `#0F0F0F` used for type — this matches the
book's logo pages and the master SVGs shipped on both sites. White is `#FFFFFF`.

### Clearspace (p.13, p.17, p.21, p.25, p.29)

Maintain a minimum clearspace of **0.5x on all sides**, where **x is the width of the logomark**.
This applies wherever the mark appears, regardless of size or context. Nothing enters that space —
not type, not a rule, not the edge of a crop.

- Boundary primary logo and Boundary logomark: x = the width of the gate logomark.
- BAML primary logo and BAML logomark: x = the width of the lamb logomark.
- Combination mark: x = the width of the mark itself.

### Minimum sizes — measured by height (p.13, p.17, p.21, p.25, p.29)

| Mark | Screen | Print |
|---|---|---|
| Boundary primary logo, Boundary logomark, BAML primary logo, BAML logomark | **32px tall** | **10mm tall** |
| Combination mark | **80px tall** | **25mm tall** |

Measure by height, always. A width-based rule silently produces an illegally small logo on a wide
lockup: at `width: 50px` the Boundary primary logo is only 8.6px tall, a quarter of the minimum.
Below the minimum the bars close up and the gate stops reading, and the lamb's pixels close up.

The brand book has no logo misuse page, so there are no documented don'ts beyond the rules above.

### Assets

`logo/svg/` — ten masters, five marks × black/white. Each file carries exactly one color value, with
no background, padding box or clearspace guide baked in.
`logo/png/` — transparent PNGs of all ten at 512px and 1024px **height**; widths follow the aspect
ratios above.
`logo/favicon/boundary/` and `logo/favicon/baml/` — 16/32/48/512 plus a white 512, `apple-touch-icon.png`
and `favicon.ico`, built from the two logomarks on a transparent square.

The Boundary gate logomark is 2.4KB as a path and is referenced rather than inlined here: read it
from `logo/svg/boundary-logomark-black.svg` (viewBox `0 0 137 86`).

---

## 4. Site theme tokens

**These are not brand book colors.** They are the surface, ink and rule grays each live site already
ships. They are recorded so new work matches the sites; the book's values above win in any conflict.

**Boundary** (`src-css/boundary-globals.css` L7–41) — light: bg `#FFFFFF`, surface `#FFFFFF`, panel
`#F1FAEE`, ink `#0F0F0F`, ink-2 `#555555`, ink-3 `#8A8A8A`, line `#D6D6D6`, hair `#E6E6E3`, card-line
`#E1E8DC`, accent `#3E6B2E`, primary `#3E6B2E`, primary-hover `#2B501E`, logo `#7C7C7C`. Dark: bg
`#0F0F0F`, surface `#161915`, panel `#131A11`, ink `#F1F2EE`, ink-2 `#A9AEA5`, ink-3 `#787E73`, line
`#3A3F37`, hair `#252922`, card-line `#2B3228`, accent `#82B571`, primary `#3E6B2E`, primary-hover
`#4A7A39`, logo `#8D9389`.

**BAML** (`src-css/baml-globals.css` L37–145) — dark (the default): ground `#0A0A0A`, raised
`#121212`, rule `#262626`, rule-accent `#CAAAF2`, head `#FEFEFE`, ink `#F4F4F2`, ink-2 `#D6D6D2`,
body `#ABABA6`, muted `#828280`, faint `#3F3F3C`, accent `#CAAAF2`, accent-hover `#E4D1FF`,
on-accent `#0F0F0F`. Light: ground `#FFFFFF`, raised `#F6F1FC`, rule `#E4DFEC`, rule-accent
`#3E185F`, head `#000000`, ink `#0F0F0F`, ink-2 `#2A2A28`, body `#4A4A48`, muted `#6F6F6A`, faint
`#C9C4D0`, accent `#260B3D`, accent-hover `#3E185F`, on-accent `#F1E9FF`.

Full values, with per-token sources, are in `tokens.json` under `siteTheme`.

---

## 5. Self-audit

Before you ship anything made with this file:

1. Is every color on the page a hex from §1? Green only for Boundary, purple only for BAML?
2. Is every text-on-color pairing one of the six in §1? If not, it is unapproved.
3. Is every type style one of the five in §2, at the exact size, weight, line height and tracking?
4. Is the logo an unmodified file from `logo/`, at or above its minimum **height**, with 0.5x clear
   on all four sides?
5. Did you invent any value this file does not define? If so, remove it and ask.
