# Mradi Africa — Brand Guidelines

## Colors

| Token            | Hex       | CSS Variable       | Usage                          |
| ---------------- | --------- | ------------------ | ------------------------------ |
| `accent`         | `#2b6cb0` | `--accent`         | Primary brand blue, CTAs       |
| `accent-hover`   | `#22578a` | `--accent-hover`   | Hover state for accent buttons |
| `accent-light`   | `#e8f0fa` | `--accent-light`   | Badges, subtle highlights      |
| `accent-on-dark` | `#6b9dd6` | `--accent-on-dark` | Accent color on dark surfaces  |
| `ink`            | `#1a1814` | `--ink`            | Primary text                   |
| `ink-2`          | `#5a564e` | `--ink-2`          | Secondary text                 |
| `ink-3`          | `#9a968e` | `--ink-3`          | Tertiary/muted text            |
| `bg`             | `#f7f5f0` | `--bg`             | Page background                |
| `bg-card`        | `#ffffff` | `--bg-card`        | Card background                |
| `bg-dark`        | `#1a1814` | `--bg-dark`        | Dark section background        |
| `border`         | `#e2dfd8` | `--border`         | Default border                 |
| `border-mid`     | `#d4d0c8` | `--border-mid`     | Stronger border                |

## Typography

| Role     | Font Family | Weights  | Tailwind Class |
| -------- | ----------- | -------- | -------------- |
| Headings | Syne        | 400–800  | `font-syne`    |
| Body     | DM Sans     | 100–1000 | `font-sans`    |

### Heading scale

- Section label: `text-xs font-medium uppercase tracking-[0.2em] text-accent`
- Section heading: `font-syne text-3xl font-bold text-ink sm:text-4xl`
- Hero heading: `font-syne text-4xl font-bold sm:text-5xl lg:text-6xl`

## Spacing

| Context         | Mobile (`<640px`) | Tablet (`≥640px`) | Desktop (`≥1024px`) |
| --------------- | ----------------- | ----------------- | ------------------- |
| Section padding | `py-16` (64px)    | `py-20` (80px)    | `py-32` (128px)     |

- Container max-width: `1080px`
- Horizontal padding: `2rem` (desktop), `1.25rem` (≤560px)
- Use the `.wrap` class for consistent section containers

## Border Radius

| Token     | Value  | CSS Variable  | Tailwind Class    |
| --------- | ------ | ------------- | ----------------- |
| `card`    | `12px` | `--radius`    | `rounded-card`    |
| `card-sm` | `8px`  | `--radius-sm` | `rounded-card-sm` |

## Logo

- File: `src/media/image-removebg-preview.png`
- Nav width: `w-28`
- Footer width: `w-24` with `filter: brightness(2)` for dark backgrounds

## Component Patterns

### Section structure

```html
<section class="wrap py-16 sm:py-20 lg:py-32">
  <p
    class="font-syne text-xs font-medium uppercase tracking-[0.2em] text-accent"
  >
    Section Label
  </p>
  <h2 class="mt-2 font-syne text-3xl font-bold text-ink sm:text-4xl">
    Section Heading
  </h2>
  <!-- content -->
</section>
```

### Card

```html
<div class="border-border rounded-card border bg-bg-card p-6">
  <!-- content -->
</div>
```

### Button (primary)

```html
<button
  class="rounded-card-sm bg-accent px-6 py-3 font-medium text-white transition-colors hover:bg-accent-hover"
>
  Label
</button>
```
