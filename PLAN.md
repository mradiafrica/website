# Implementation Plan: Mobile Spacing & Design Token Fixes

## 1. Define Missing CSS Variables

Add to `:root` in `src/global.css`:

```css
--ink-2: #5a564e; /* medium body text (subtitles, descriptions) */
--ink-3: #9a968e; /* light/muted text (captions, meta labels) */
--border-mid: #d4d0c8; /* slightly more visible than --border, used for button outlines */
--radius-sm: 8px; /* smaller radius for buttons, inputs, pills */
```

**Rationale:**

- `ink-2` is used for paragraph descriptions (projects, services, about, testimonials) — needs to be readable but softer than `--ink`
- `ink-3` is used for stat labels, marquee items, meta text — should be clearly muted
- `border-mid` is only used on the hero secondary button (`border-mid`) — slightly more prominent than section borders
- `radius-sm` is used on all buttons and form inputs — smaller than the card radius (12px)

These match the original removed values (`--ink-mid: #5a564e`, `--ink-light: #9a968e`).

---

## 2. Fix Mobile Section Spacing

**Current:** `py-24 lg:py-32` (96px mobile → 128px desktop)

**Proposed:** `py-16 sm:py-20 lg:py-32` (64px mobile → 80px tablet → 128px desktop)

### Changes per component:

| File                  | Current          | New                       |
| --------------------- | ---------------- | ------------------------- |
| `hero.tsx:5`          | `py-24 lg:py-32` | `py-16 sm:py-20 lg:py-32` |
| `projects.tsx:57`     | `py-24 lg:py-32` | `py-16 sm:py-20 lg:py-32` |
| `services.tsx:53`     | `py-24 lg:py-32` | `py-16 sm:py-20 lg:py-32` |
| `process.tsx:34`      | `py-24 lg:py-32` | `py-16 sm:py-20 lg:py-32` |
| `about.tsx:12`        | `py-24 lg:py-32` | `py-16 sm:py-20 lg:py-32` |
| `testimonials.tsx:31` | `py-24 lg:py-32` | `py-16 sm:py-20 lg:py-32` |
| `contact.tsx:18`      | `py-24 lg:py-32` | `py-16 sm:py-20 lg:py-32` |

**Result:** Adjacent sections go from 192px → 128px combined gap on mobile (375px). Still generous but no longer dominant.

---

## 3. Consolidate Hardcoded Colors into Design Tokens

### New CSS variables to add to `:root`:

```css
--accent-hover: #22578a; /* darker accent for hover states */
--accent-on-dark: #6b9dd6; /* accent color on dark backgrounds */
--bg-dark: #1a1814; /* dark section backgrounds (contact, footer) */
--ink-on-dark: #d1d5db; /* body text on dark bg (replaces gray-300) */
--ink-on-dark-muted: #9ca3af; /* muted text on dark bg (replaces gray-400) */
--ink-on-dark-faint: #6b7280; /* placeholder text on dark bg (replaces gray-500) */
```

### Tailwind config additions:

```js
colors: {
  // ... existing ...
  "accent-hover": "var(--accent-hover)",
  "accent-on-dark": "var(--accent-on-dark)",
  "bg-dark": "var(--bg-dark)",
  "ink-on-dark": "var(--ink-on-dark)",
  "ink-on-dark-muted": "var(--ink-on-dark-muted)",
  "ink-on-dark-faint": "var(--ink-on-dark-faint)",
}
```

### Replacement map:

| Hardcoded                                     | Token                                | Used in                                         |
| --------------------------------------------- | ------------------------------------ | ----------------------------------------------- |
| `hover:bg-[#22578A]`                          | `hover:bg-accent-hover`              | nav.tsx (×2), hero.tsx, contact.tsx             |
| `bg-[#1A1814]`                                | `bg-bg-dark`                         | contact.tsx, footer.tsx                         |
| `text-[#6B9DD6]`                              | `text-accent-on-dark`                | contact.tsx (×5)                                |
| `focus:border-[#2B6CB0]`                      | `focus:border-accent`                | contact.tsx (×5) — already have `accent` token! |
| `text-gray-300`                               | `text-ink-on-dark`                   | contact.tsx (×3)                                |
| `text-gray-400`                               | `text-ink-on-dark-muted`             | contact.tsx (×3), footer.tsx (×9)               |
| `text-gray-500` / `placeholder:text-gray-500` | `placeholder:text-ink-on-dark-faint` | contact.tsx (×7)                                |

---

## 4. Fix Contact Section Horizontal Padding

**Current:** `<section>` has no `.wrap`, inner `<div>` uses `mx-auto max-w-[1080px] px-8`

**Problem:** `px-8` (32px) doesn't match `.wrap` which uses `padding: 0 2rem` (32px on desktop, 20px on mobile ≤560px). The contact section always has 32px padding even on small screens.

**Fix:** Replace the inner div's classes with the `.wrap` class:

```diff
- <section id="contact" class="bg-bg-dark py-16 sm:py-20 lg:py-32 text-white">
-   <div class="mx-auto max-w-[1080px] px-8">
+ <section id="contact" class="bg-bg-dark py-16 sm:py-20 lg:py-32 text-white">
+   <div class="wrap">
```

Same fix for **nav.tsx** and **footer.tsx** which also use `mx-auto max-w-[1080px] px-8`:

- `nav.tsx:20` → add `wrap` class (but keep `flex h-16 items-center justify-between`)
- `footer.tsx:7` → replace with `wrap py-12`

---

## 5. Fix manifest.json

Replace `public/manifest.json` with:

```json
{
  "$schema": "https://json.schemastore.org/web-manifest-combined.json",
  "name": "Mradi Africa",
  "short_name": "Mradi",
  "description": "Software development agency based in Nairobi, Kenya.",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#f7f5f0",
  "theme_color": "#2b6cb0",
  "icons": [
    {
      "src": "/favicon.png",
      "sizes": "192x192",
      "type": "image/png"
    }
  ]
}
```

---

## 6. Fix Favicon

The current `public/favicon.svg` is the Qwik logo (contains Qwik's distinctive paths and colors `#18B6F6`, `#AC7EF4`).

**Action:** Replace `public/favicon.svg` with the Mradi Africa logo. The project already has `public/image-removebg-preview.png` and `public/logo.png` as logo assets.

**Options:**

- Convert `public/logo.png` to SVG for `favicon.svg`
- Or replace `favicon.svg` content with a simple "M" lettermark in brand accent color
- Update `src/root.tsx` to reference the favicon explicitly in `<head>`

---

## 7. Create BRAND.md

Create `/BRAND.md` at project root with:

```markdown
# Mradi Africa — Brand Guidelines

## Colors

### Light theme (default)

| Token               | Hex     | Usage                                     |
| ------------------- | ------- | ----------------------------------------- |
| --accent            | #2b6cb0 | Primary buttons, links, selection         |
| --accent-hover      | #22578a | Button hover states                       |
| --accent-light      | #e8f0fa | Subtle accent backgrounds                 |
| --accent-on-dark    | #6b9dd6 | Accent color on dark sections             |
| --bg                | #f7f5f0 | Page background (warm off-white)          |
| --bg-card           | #ffffff | Card backgrounds                          |
| --bg-dark           | #1a1814 | Dark section backgrounds                  |
| --ink               | #1a1814 | Primary text                              |
| --ink-2             | #5a564e | Secondary text (descriptions)             |
| --ink-3             | #9a968e | Tertiary text (captions, labels)          |
| --ink-on-dark       | #d1d5db | Body text on dark backgrounds             |
| --ink-on-dark-muted | #9ca3af | Secondary text on dark backgrounds        |
| --ink-on-dark-faint | #6b7280 | Placeholder/hint text on dark backgrounds |
| --border            | #e2dfd8 | Default borders                           |
| --border-mid        | #d4d0c8 | Emphasized borders (button outlines)      |

### Palette family

- Warm neutrals derived from base `#1a1814` (charcoal-brown)
- Blue accent `#2b6cb0` with lighter/darker variants

## Typography

| Token          | Value                          | Usage                    |
| -------------- | ------------------------------ | ------------------------ |
| --font-heading | Syne, system-ui, sans-serif    | Headings, section labels |
| --font-body    | DM Sans, system-ui, sans-serif | Body text, UI elements   |

### Scale

- Body: 16px / 1.6 line-height
- Headings: font-syne, bold (700-800)
- Section labels: xs, uppercase, tracking-[0.2em]

## Spacing

| Context              | Mobile (<640px) | Tablet (640-1023px) | Desktop (≥1024px) |
| -------------------- | --------------- | ------------------- | ----------------- |
| Section padding (py) | 64px (py-16)    | 80px (py-20)        | 128px (py-32)     |
| Horizontal wrap      | 20px            | 32px                | 32px              |
| Max content width    | —               | —                   | 1080px            |

## Border Radius

| Token       | Value | Usage                   |
| ----------- | ----- | ----------------------- |
| --radius    | 12px  | Cards, large containers |
| --radius-sm | 8px   | Buttons, inputs, pills  |

## Logo

- Primary: `public/logo.png` / `src/media/image-removebg-preview.png`
- Favicon: `public/favicon.png` (needs replacing from Qwik default)
- On dark backgrounds: apply `filter: brightness(2)`

## Component Conventions

- Sections use `.wrap` class for horizontal containment
- Dark sections (contact, footer) use `bg-bg-dark text-white`
- Buttons: `rounded-card-sm bg-accent hover:bg-accent-hover text-white`
- Secondary buttons: `rounded-card-sm border border-mid hover:bg-white`
```

---

## Summary of Files to Modify

| File                                           | Changes                                     |
| ---------------------------------------------- | ------------------------------------------- |
| `src/global.css`                               | Add 6 missing CSS variables                 |
| `tailwind.config.js`                           | Add new color tokens                        |
| `src/components/hero/hero.tsx`                 | Spacing + token replacements                |
| `src/components/projects/projects.tsx`         | Spacing                                     |
| `src/components/services/services.tsx`         | Spacing                                     |
| `src/components/process/process.tsx`           | Spacing                                     |
| `src/components/about/about.tsx`               | Spacing                                     |
| `src/components/testimonials/testimonials.tsx` | Spacing                                     |
| `src/components/contact/contact.tsx`           | Spacing + `.wrap` + token replacements      |
| `src/components/nav/nav.tsx`                   | `.wrap` + token replacements                |
| `src/components/footer/footer.tsx`             | `.wrap` + token replacements                |
| `src/components/marquee/marquee.tsx`           | (no changes — already uses tokens)          |
| `public/manifest.json`                         | Replace with Mradi Africa values            |
| `public/favicon.svg`                           | Replace Qwik logo (manual — need brand SVG) |
| `BRAND.md`                                     | Create new file                             |

## Execution Order

1. `src/global.css` — define variables (unblocks everything else)
2. `tailwind.config.js` — register new tokens
3. All component files — spacing + token replacements (can be done in parallel)
4. `public/manifest.json` — simple replacement
5. `BRAND.md` — documentation
6. `public/favicon.svg` — needs design asset (flag for manual action)
