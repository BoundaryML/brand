# Boundary + BAML — agent brief

Read `design.md` before you write code or make artwork. It is the whole system. This file is only
the part you must not get wrong.

- **Lanes.** Green is Boundary, purple is BAML. Never mix them. Black `#0F0F0F` and white are the
  base of both.
- **Core colors.** Pasture `#3E6B2E` (Boundary), Clover `#CAAAF2` (BAML). Full ten-step scales in
  `design.md` §1 and `tokens.json`.
- **Text pairings.** Only the six combinations in `design.md` §1 are approved. Anything else is not.
- **Type.** Lexend for headings, Geist for body, Geist Pixel Square for captions and BAML accents.
  H1 80/110/-3%, H2 60/110/-2%, H3 40/120/-3%, Body 20/140/0, Caption 16/110/-2%.
- **Logos.** Five marks in `logo/svg/`, black for light backgrounds, white for dark. Never redraw a
  mark and never retype a wordmark — they are lowercase artwork.
- **Minimum size is measured by HEIGHT.** 32px for the four logos and logomarks, 80px for the
  combination mark. Setting `width` on a wide lockup produces an illegally small logo.
- **Clearspace:** 0.5x on all sides, where x is the width of the logomark.

**If a value is not in `design.md`, it is not defined. Stop and ask — do not invent it.** The book
covers color, typography and logo only; there is no spacing scale, radius, shadow or motion system.

Files: `design.md` · `tokens.json` (W3C DTCG) · `logo/`
