---
name: Webnoia Design System
stitch_project_id: "2822640222041109640"
colors:
  surface-canvas: "#F2F0ED"
  surface-bright: "#FBF9F6"
  surface-container: "#FFFFFF"
  surface-subtle: "#EFEEEB"
  surface-card: "#EAE8E5"
  ink-primary: "#18110E"
  ink-secondary: "#7D7874"
  accent-primary: "#E93D25"
  earth-espresso: "#331102"
  earth-mahogany: "#4A2713"
  earth-terracotta: "#C26520"
  earth-clay: "#CC8E60"
  earth-brick: "#AF5C3C"
  earth-amber: "#DC7B31"
  border-hairline: "rgba(24, 17, 14, 0.08)"
  border-subtle: "rgba(24, 17, 14, 0.14)"
typography:
  display-lg:
    fontFamily: Hanken Grotesk
    fontSize: 72px
    fontWeight: "700"
    lineHeight: 80px
    letterSpacing: -0.04em
  display-lg-mobile:
    fontFamily: Hanken Grotesk
    fontSize: 44px
    fontWeight: "700"
    lineHeight: 52px
    letterSpacing: -0.03em
  headline-xl:
    fontFamily: Hanken Grotesk
    fontSize: 48px
    fontWeight: "600"
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Hanken Grotesk
    fontSize: 32px
    fontWeight: "600"
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Hanken Grotesk
    fontSize: 24px
    fontWeight: "600"
    lineHeight: 32px
    letterSpacing: -0.01em
  body-lg:
    fontFamily: DM Sans
    fontSize: 18px
    fontWeight: "400"
    lineHeight: 28px
  body-md:
    fontFamily: DM Sans
    fontSize: 16px
    fontWeight: "400"
    lineHeight: 24px
  label-md:
    fontFamily: DM Sans
    fontSize: 14px
    fontWeight: "500"
    lineHeight: 20px
    letterSpacing: 0.05em
  label-sm:
    fontFamily: DM Sans
    fontSize: 12px
    fontWeight: "700"
    lineHeight: 16px
    letterSpacing: 0.08em
    textTransform: uppercase
rounded:
  sm: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  "2xl": 1rem
  full: 9999px
spacing:
  base: 8px
  container-max: 1280px
  gutter: 24px
  margin-desktop: 64px
  margin-tablet: 32px
  margin-mobile: 20px
---

# Design System: Webnoia Studio

## 1. Visual Theme & Atmosphere
The Webnoia design system represents **Architectural Quiet Luxury & Technical Precision**. 

Inspired by the tactile discipline of high-end editorial portfolios and contemporary industrial design studios (reference: *Lineads Framer*), it rejects cold tech-blue abstractions and AI clichés in favor of warm, tactile earth tones and disciplined geometry.

- **Density:** 5/10 (Balanced, intentional whitespace, generous breathing room)
- **Variance:** 6/10 (Structured asymmetry, multi-scale grid layouts, off-center focal cards)
- **Motion:** 5/10 (Subtle spring physics, tactile button dips, smooth accordion unfolds, zero gimmickry)
- **Lighting & Depth:** Soft atmospheric daylight; reliance on flat tonal planes and 1px hairline borders rather than heavy blur or drop shadows.

---

## 2. Color Palette & Roles

| Token | Hex | Role & Functional Usage |
| :--- | :--- | :--- |
| **`surface-canvas`** | `#F2F0ED` | Primary warm off-white canvas background. Reduces optical glare and grounds layout. |
| **`surface-bright`** | `#FBF9F6` | Lightened surface for contrasting background panels. |
| **`surface-container`**| `#FFFFFF` | Crisp pure white container cards, modal dialogs, and elevated surfaces. |
| **`ink-primary`** | `#18110E` | Deep obsidian-brown ink for primary headlines, hero copy, and maximum contrast text. |
| **`ink-secondary`** | `#7D7874` | Neutral slate stone for descriptions, metadata, subtitles, and placeholder text. |
| **`accent-primary`** | `#E93D25` | High-energy vermilion red. Reserved strictly for primary CTAs, active tags, and key focal points. |
| **`earth-espresso`** | `#331102` | Deep rich espresso for structural elements, dark button variants, and header accents. |
| **`earth-mahogany`** | `#4A2713` | Warm dark timber tone for secondary accents, dark card surfaces, and footer accents. |
| **`earth-terracotta`**| `#C26520` | Terracotta rust used for service badges, category chips, and section dividers. |
| **`earth-clay`** | `#CC8E60` | Warm clay tone for subtle badge fills, icon backdrops, and active tab indicators. |
| **`earth-brick`** | `#AF5C3C` | Earthy brick tone for hovered borders, secondary badges, and graphical accents. |
| **`earth-amber`** | `#DC7B31` | Vibrant amber for step numbers, highlight tags, and warm interactive micro-cues. |
| **`border-hairline`**| `rgba(24, 17, 14, 0.08)` | 1px crisp structural border separating cards and grid cells. |
| **`border-subtle`** | `rgba(24, 17, 14, 0.14)` | 1px border for inputs, active card states, and button outlines. |

---

## 3. Typographic Architecture

The typography pairing reflects architectural confidence and calm clarity:

### Primary Fonts
- **Headlines / Display:** `Hanken Grotesk` — Sharp, contemporary geometric sans with tight tracking (`-0.02em` to `-0.04em`) and controlled line-heights.
- **Body & Captions:** `DM Sans` — Clean, low-contrast, highly legible neutral sans with relaxed leading (`1.6` to `1.75`).
- **Utility / Monospace:** `DM Sans` (Uppercase, tracked `+0.08em`) for category pills, section trackers, and status badges.

### Typographic Hierarchy Rules
- Headlines never scream with excessive font size; they rely on proportional weight and crisp ink contrast (`#18110E`).
- Body text is strictly capped at `65ch` max width per paragraph for optimal readability.
- Section pre-headers use `label-sm` in all caps with a colored indicator dot (e.g., `• SERVICES`).

---

## 4. Component Stylings & Behaviors

### Buttons
- **Primary Button:** Solid `#E93D25` (Vermilion) or `#18110E` (Obsidian), white text, `rounded-[4px]`, padding `12px 24px`, font weight `600`.
  - *Interaction:* Tactile `-1px` Y-translate on hover, active state `-2px` with zero outer neon glow.
- **Secondary / Outline Button:** 1px border in `rgba(24, 17, 14, 0.2)` with background `transparent` or `#FFFFFF`, text `#18110E`.
  - *Interaction:* Background shifts to `rgba(24, 17, 14, 0.04)` on hover.

### Cards & Service Containers
- **Container Structure:** Pure white (`#FFFFFF`) or soft canvas (`#FBF9F6`), bounded by a clean `1px` border `rgba(24, 17, 14, 0.08)`.
- **Corner Radius:** `8px` to `12px` (`rounded-lg` / `rounded-xl`) for structural stability.
- **Hover Behavior:** Micro-elevation using `transform: translateY(-3px)` with smooth cubic-bezier easing (`cubic-bezier(0.16, 1, 0.3, 1)`).

### Accordions (FAQ)
- **Structure:** Crisp horizontal hairline dividers (`rgba(24, 17, 14, 0.1)`).
- **Trigger:** Left-aligned question in `headline-md` or `body-lg` (bold), right-aligned minimalist plus/minus `+`/`−` toggle icon.
- **State:** Smooth height transition (`grid-template-rows: 0fr -> 1fr`) without layout jump.

### Inputs & Forms (Contact)
- **Style:** Clean border-bottom or 1px subtle rounded input box (`#FFFFFF` background, `border: rgba(24,17,14,0.15)`).
- **Focus State:** 1px crisp outline in `#E93D25` or `#331102`, no fuzzy glow rings.
- **Labels:** `label-sm` positioned clearly above inputs with `#7D7874` color.

### Tags & Service Badges
- **Style:** Background in `clay` or `surface-subtle` at low opacity (8–12%), text in `earth-mahogany` or `earth-espresso`, `4px` corner radius.

---

## 5. Layout & Spacing Principles

- **Grid Architecture:** 12-column desktop grid with a maximum content container width of `1280px`.
- **Vertical Breathing Room:** Major sections utilize `clamp(80px, 10vw, 140px)` top/bottom padding.
- **Micro Spacing:** 8px base grid increments (`8px`, `16px`, `24px`, `32px`, `48px`, `64px`).
- **Responsive Stacking:**
  - Desktop: Asymmetric 2-column or 4-column structured grids.
  - Tablet (< 1024px): 2-column reflow.
  - Mobile (< 768px): Strict single-column stack with `20px` gutter padding and `min-h-[100dvh]` hero handling.

---

## 6. Motion Philosophy & Spring Specs

- **Spring Physics:** `stiffness: 120, damping: 18` for responsive, weighted physical feedback.
- **Transitions:** Default transitions use `200ms ease-out` on color and opacity; `300ms cubic-bezier(0.16, 1, 0.3, 1)` on transforms.
- **Hardware Acceleration:** Animations restricted strictly to `transform` and `opacity`.

---

## 7. Anti-Patterns & Strict Bans

- ❌ **No Dark Mode / Cyberpunk Neons:** Strictly light canvas only.
- ❌ **No Purple Flood:** Use the specified warm earth + vermilion palette.
- ❌ **No Inter Font:** Use `Hanken Grotesk` + `DM Sans`.
- ❌ **No Fabricated / Fake Statistics:** Do not invent metrics like "99.9% Uptime" or "10k+ Deployments".
- ❌ **No Overlapping Cluttered Layers:** Every card and text block maintains clean, designated bounding boxes.
- ❌ **No Generic 3-Equal Cards:** Use asymmetric grids, 2-column pairings, or editorial lists.
- ❌ **No Heavy Drop Shadows:** Use hairline borders (`1px`) and tonal background shifts.
