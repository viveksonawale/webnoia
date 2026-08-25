# Webnoia — Project Constitution & Architecture (SITE.md)

## 1. Core Identity
- **Project Name:** Webnoia (`webnoia.com`)
- **Stitch Project ID:** `2822640222041109640`
- **Mission:** Webnoia is a modern web services startup helping businesses and SaaS companies build, improve, test, and maintain high-quality websites. Webnoia uses AI-powered development agents to accelerate the work while keeping the final product polished, reliable, and human-directed.
- **Target Audience:**
  - SaaS founders & Startups
  - Small and medium-sized businesses
  - Business owners seeking a refined, professional digital presence
  - Companies needing website improvements, performance/QA testing, or active maintenance
- **Brand Voice:** Minimal, clean, modern, confident, professional, and technical without being overly complicated.
- **Tone & Identity Stance:** "A premium modern technology studio, not a generic AI-generated agency."

---

## 2. Visual Language & Aesthetic Direction

### Primary Vibes
- **Primary:** High-End Minimalist Studio (Editorial SaaS & Quiet Luxury)
- **Secondary:** Warm Architectural Precision & Generous Whitespace
- **Tertiary:** Strategic Vermilion/Coral (`#E93D25`) and Earth Accent System on Warm Canvas (`#F2F0ED`)

### Theme & Palette Constraints
- **Canvas Base:** Soft warm off-white (`#F2F0ED`, `#FBF9F6`, pure white containers `#FFFFFF`).
- **Primary Ink:** Deep near-black obsidian (`#18110E`).
- **Secondary Muted:** Slate grey (`#7D7874`).
- **Primary Action Accent:** Dynamic Vermilion Red (`#E93D25`) for primary CTAs and active states.
- **Tonal Earth Palette:** `#331102` (Deep Espresso), `#4A2713` (Mahogany), `#C26520` (Terracotta), `#CC8E60` (Clay), `#AF5C3C` (Brick), `#DC7B31` (Amber).
- **Typography:** Modern, crisp sans-serif (e.g., Inter / Plus Jakarta Sans) with strong optical hierarchy, high legibility, and refined letter-spacing.
- **Borders & Shadows:** Ultra-subtle hairline borders (`rgba(0, 0, 0, 0.06)` or `border-slate-200/80`), soft diffused shadows (`shadow-sm` / `shadow-md` with low opacity).
- **Design Reference Inspiration:** [Lineads Framer](https://lineads.framer.website/) — clean grid, generous padding, structured cards, sharp typographic rhythm.

### Strict "Do Not Use" List
- ❌ Dark mode or neon cyberpunk palettes
- ❌ Purple flood / purple backgrounds everywhere
- ❌ Heavy 3D / WebGL objects & giant floating blobs
- ❌ Heavy glassmorphism or muddy backdrop blurs
- ❌ Generic AI imagery, cheesy robotic graphics, or buzzwordy fluff
- ❌ Heavy, distracting animations that slow down user navigation

---

## 3. Architecture & File Structure

### Site Model
Single-page application (SPA) marketing site with smooth anchor scrolling and modular section components.

```
site/
├── public/
│   ├── assets/             # Brand SVGs, optimized icons, logos
│   ├── favicon.ico
│   └── index.html
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx          # Sticky responsive header with blur backdrop
│   │   │   ├── Footer.tsx          # Brand footer with secondary links & copyright
│   │   │   └── MobileNav.tsx       # Smooth slide-down drawer
│   │   ├── sections/
│   │   │   ├── Hero.tsx            # Positioning, Value Prop, Dual CTAs, Micro-visual
│   │   │   ├── Services.tsx        # 4 Core offerings: Dev, UI/UX, Testing, Maintenance
│   │   │   ├── Testimonials.tsx    # Clean social proof cards & client details
│   │   │   ├── Pricing.tsx         # Clear plan comparison, feature matrices, strong CTAs
│   │   │   ├── FAQ.tsx             # Accessible accordion with crisp answers
│   │   │   └── Contact.tsx         # Cal.com embed + native inquiry form
│   │   └── ui/                     # Reusable design tokens, buttons, cards, accordions
│   ├── styles/
│   │   └── index.css               # Global tokens, typography, smooth scroll behaviors
│   ├── App.tsx
│   └── main.tsx
└── .stitch/
    ├── SITE.md                     # Constitution & Architecture (this file)
    └── DESIGN.md                   # Visual tokens & styling system
```

---

## 4. Live Sitemap & Section Hierarchy

| Section Anchor | Purpose & Content | Status |
| :--- | :--- | :--- |
| **`#home` (Hero)** | Hero headline, clear sub-headline, primary CTA (*Book a Consultation*), secondary CTA (*View Services*), restrained micro-visual. | `[ ]` |
| **`#services`** | 4 Pillars: (1) Web Design & Dev, (2) UI/UX Design, (3) Website Testing, (4) Website Maintenance. Tangible deliverables. | `[ ]` |
| **`#testimonials`**| Curated testimonial cards with verified client details, subtle hover lift, social proof metrics. | `[ ]` |
| **`#pricing`** | Straightforward pricing cards/matrix with feature breakdowns and direct action buttons. | `[ ]` |
| **`#faq`** | Collapsible accordion answering pricing, turnaround times, tech stack, and maintenance SLA questions. | `[ ]` |
| **`#contact`** | Dual conversion hub: Cal.com embed for direct scheduling + clean inquiry form (Name, Email, Company, Message). | `[ ]` |

---

## 5. Interaction & Motion Guidelines

- **Scroll Behavior:** Smooth native scrolling with active scroll-spy on navigation links.
- **Micro-Interactions:**
  - Subtle card hover elevation (Y-axis -2px to -4px with smooth 200ms ease).
  - Button state transitions with subtle border glow/shadow expansion.
  - Accordion expand/collapse with fluid height transition (no layout jumps).
- **External Integrations:**
  - **Cal.com Modal / Embed:** Seamless popover or inline embed without disrupting light-theme aesthetics.
  - **Contact Form Validation:** Instant inline feedback with friendly, clear error states.

---

## 6. The Roadmap (Development Backlog)

### Phase 1: High Priority (Foundation & Structure)
- [ ] Initialize `DESIGN.md` with light-theme design tokens, typography scales, and spacing standards using `taste-design`.
- [ ] Generate Hero section screen mockup with Stitch and refine with `enhance-prompt`.
- [ ] Scaffold React + Vite + Tailwind project with structured component folders.
- [ ] Build responsive Navigation bar with sticky scroll-blur and mobile drawer.

### Phase 2: Medium Priority (Core Content & Sections)
- [ ] Implement Services section with 4 interactive feature cards.
- [ ] Build Pricing section with clear tier comparison and highlight badge for recommended plan.
- [ ] Build FAQ accordion component with smooth expand/collapse.
- [ ] Build Testimonials carousel/grid.
- [ ] Implement Contact section with native form and Cal.com integration.

### Phase 3: Low Priority (Polish & Optimization)
- [ ] Refine micro-interactions and button hover effects.
- [ ] Ensure 100% lighthouse performance, accessibility, and SEO meta tags.
- [ ] Add subtle scroll-triggered entrance animations (lightweight CSS/Framer Motion).
- [ ] QA cross-browser and mobile viewport testing.
