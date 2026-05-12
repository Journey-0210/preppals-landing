# PrepPals Design System

> Master Today, Excel Tomorrow.

A design system for **CSCA PrepPals** — a math tuition / exam-prep coaching service that runs a registration funnel for booking free trial classes. The visual identity is dark, confident, and "academic-but-modern" — deep navy backgrounds, vivid orange CTAs, decorative math glyphs floating in the canvas, and large, condensed display type.

---

## What this system covers

PrepPals is currently a single-product brand: a **registration / lead-capture site** with sections for Home, Courses, Why Us, Results, Testimonials, and Contact, plus a sticky "Start Your Math Journey" form on the hero. This system therefore focuses on:

- **Brand foundations** — logo, color, typography, spacing, motion.
- **Marketing surface** — hero, navigation, stats strip, registration form card, feature pills.
- **Form components** — inputs, selects, primary/secondary CTAs, validation states.

---

## Sources used

| Source | Provided as | Saved as |
|---|---|---|
| Logo (transparent PNG) | `uploads/logo去背 (1).png` | `assets/preppals-logo.png` |
| Landing page reference | `uploads/a4ab1e45-7398-4bcb-bfb1-b26352c1f231.png` | `assets/reference-landing.png` |

No codebase, Figma file, or written brand guide was provided. **All tokens were extracted by eye from the landing screenshot and logo.** Please verify hex values, type weights, and sizes against your source-of-truth — see _Caveats_ at the end.

---

## Index

- `colors_and_type.css` — all design tokens (CSS variables), base element styles
- `assets/` — logo, reference imagery
- `preview/` — Design System tab cards (color, type, components, spacing)
- `ui_kits/registration/` — interactive recreation of the registration site
- `SKILL.md` — agent skill manifest (also valid for Claude Code)

---

## Content fundamentals

**Voice.** Direct, motivational, achievement-oriented. The brand speaks to ambitious students and their parents. Every line is short and confident; no corporate hedging.

**Tone keywords:** confident, aspirational, structured, results-focused, parental-trust.

**Person.** Mostly imperative or declarative ("Master Math.", "Book Free Trial", "Start My Journey"). Light second person ("We respect your privacy", "Why Us"). Avoid first-person plural marketing fluff.

**Casing.**
- **Display headlines** use Title Case with strong terminal periods: _"Master Math. Unlock Your Future."_ The period is part of the voice — it lands the statement.
- **Buttons / nav** use Title Case ("Book Free Trial", "View Courses", "Start My Journey").
- **Eyebrows / micro-labels** are Title Case or Sentence case, never ALL-CAPS unless used as a small uppercase eyebrow with wide letter-spacing.
- **Form labels** are concise Sentence case noun phrases ("Full Name", "Phone Number", "Grade / Level", "Subject Interested", "Preferred Trial Date").

**Sentence shape.** Two- or three-beat headlines, usually with one orange-accented word for emphasis (`Master Math. Unlock Your <span class="accent">Future</span>.`). Body copy stays under ~140 characters.

**Numbers and proof.** Stats are foregrounded in orange and paired with a tiny gray descriptor: `500+ / Students Taught`, `4.9★ / Parent Rating`, `5+ Years / Teaching Excellence`, `92% improved grades`. This pattern is core to the brand.

**Emoji.** Not used. Replaced by **outlined icons in orange-tinted circular badges** (see Iconography).

**Examples (lift verbatim if relevant):**
- Hero: _"Master Math. Unlock Your Future."_
- Subhead: _"Expert math tuition designed to build confidence, strengthen concepts, and achieve outstanding results."_
- Form heading: _"Start Your Math Journey"_ / _"Fill in your details to book a free trial class."_
- CTA: _"Book Free Trial"_, _"Start My Journey"_, _"View Courses"_
- Trust line: _"We respect your privacy. Your information is safe with us."_
- Social proof pill: _"127 students joined this month"_

**Avoid.** Casual slang, emoji, jokes, exclamation marks (except sparingly), gradients in headlines, lower-case logos.

---

## Visual foundations

### Colors
- **Surface:** deep navy `#0a1124` page, slightly lifted `#111a33` cards, `#1a2545` form fields. Not pure black — always a blue undertone.
- **Accent:** vivid orange `#ff6534` for CTAs, accent words, icons, stat numbers. Used sparingly — one accent per region.
- **Logo navy:** `#233186` — appears in the logo only, not in UI surfaces.
- **Text on dark:** white at 100% for primary, ~78% for body, ~58% for secondary, ~38% for muted. No gray hex values — alpha-on-white.
- **No gradients** in solid UI surfaces. The hero canvas does carry a very subtle radial vignette + a faint dot grid.

### Type
- **Display + UI:** Plus Jakarta Sans (substituted for the unidentified font in the screenshot — flagged below). Weights 800 (hero), 700 (h1/h2), 600 (CTAs, labels), 400 (body).
- **Display behavior:** very tight tracking (`-0.02em` to `-0.025em`), `line-height: 1.05` on hero, generous size jump from h2 → hero (32 → 72px).
- **Mono:** JetBrains Mono for code/numerals if needed (not used on the landing).

### Spacing
- 4px base. Common rhythm: 8 / 12 / 16 / 24 / 32 / 48 / 64 / 80.
- Hero section uses ~80px vertical breathing room.
- Form fields are ~56px tall with 16px horizontal padding.

### Backgrounds & decoration
- **Full-bleed dark canvas** with floating, low-opacity math glyphs (`π`, `√x`, `∫f(x)dx`, `x²`, `sinθ`, `f(x)`) and 3D-rendered school tools (compass, set square, calculator) at the edges.
- **Faint dot grid** texture in the background corners, ~6% opacity.
- **Connection lines** between glyphs, very subtle, orange at ~20%.
- **No photography of people on this surface.** Imagery is illustrative / object-based.

### Animation
- **Subtle, fast, ease-out.** 120–200ms for hovers, 360ms for larger reveals. Easing: `cubic-bezier(.2,.7,.2,1)`.
- Hovers on CTAs: lift `translateY(-1px)` + slightly stronger shadow + arrow nudges right `+2px`.
- Form field focus: 1px stroke goes from `--stroke-2` to `--orange-500` + 3px outer halo at 35% alpha.
- No bounces, no spring animations, no parallax.

### Hover / press states
- **Primary CTA (orange):** hover → `--orange-600`, slight lift; press → `translateY(0)` + reduced shadow.
- **Secondary CTA (outlined):** hover → fill becomes `rgba(255,255,255,.06)`, border brightens.
- **Nav links:** active uses orange underline 2px, 4px below baseline; hover fades to white.
- No scale-down on press (would feel mobile-app-y; this is a marketing site).

### Borders, strokes, dividers
- Hairlines on dark are **white-alpha**, never gray. Default `rgba(255,255,255,.14)`.
- Form fields use a single inner stroke at 8% alpha. Focus replaces it with full-orange.
- No double-borders. No left-accent-border cards.

### Shadows
- Cards: `0 18px 48px rgba(0,0,0,.45)` — large, soft, only on the hero form card.
- CTA: `0 10px 24px -6px rgba(255,101,52,.55)` — colored shadow that matches the button.
- No inner shadows except a 1px alpha-stroke fake-bevel on form fields.

### Transparency & blur
- Used sparingly. Form card sits on solid surface (`--navy-800`), not glass.
- The "127 students joined" pill uses `backdrop-filter: blur(8px)` over the busy hero canvas.

### Corner radii
- Default card / form field / button: **16px** (`--r-lg`).
- Pills and badges: full-rounded (`999px`).
- Small chips / icons: 12px.

### Cards
- Solid navy fill, 16–28px radius, large soft drop shadow, **no border** by default. The form card has a faint 1px white-alpha hairline only because it sits on a busy canvas.

### Layout rules
- Max content width 1200px, 24px gutters.
- The registration form card is **anchored top-right of the hero**, occupying ~40% of the hero width, ~600px tall.
- Primary CTA pair: solid orange + outlined-white, side-by-side, equal width.

---

## Iconography

PrepPals does not ship a custom icon font. The reference uses **outlined, single-stroke, ~1.75px-stroke icons** at 20–24px, rendered inside small circular orange-tint chips (`#ff6534` filled circle at 16% alpha, white icon stroke).

**Substitute:** [**Lucide**](https://lucide.dev) — closest stroke weight and feel. Loaded from CDN in this kit. If you have a different icon library in production, swap in `ui_kits/registration/components/Icon.jsx`.

**Specific mappings observed in the reference → Lucide name:**

| Use | Icon |
|---|---|
| Full Name field | `user` |
| Phone field | `phone` |
| Email field | `mail` |
| School field | `school` / `building-2` |
| Grade / Level | `bar-chart-3` |
| Subject Interested | `book-open` |
| Preferred Trial Date | `calendar` |
| Form heading badge | `graduation-cap` |
| Proven Results pill | `target` |
| Small Class Sizes pill | `users` |
| Exam Strategies pill | `brain` |
| Top Performance pill | `trending-up` |
| Stats strip — Students Taught | `graduation-cap` |
| Stats strip — Parent Rating | `star` |
| Stats strip — Teaching Excellence | `trophy` |
| Stats strip — Curriculum Support | `globe` |
| Privacy line | `shield-check` |
| Social-proof pill | `users` |

**Emoji.** Never used.

**Decorative math glyphs** (`π`, `∫`, `√`, `x²`, `sinθ`) are typeset, not iconographic — render as text in `Plus Jakarta Sans` or any serif math face at low opacity. Do not vectorize.

---

## Caveats & asks

1. **Font is a substitution.** The screenshot's display font (geometric sans, very heavy 800 with tight tracking) was not provided. I'm using **Plus Jakarta Sans 800** as the closest free Google Fonts match. If the brand uses **Satoshi**, **Cabinet Grotesk**, **Sora**, or a custom face, please share the `.ttf`/`.woff2` files and I'll wire them in.
2. **Logo mismatch.** The provided `logo去背` is a navy + orange hexagonal "P" — but the screenshot's header logo is a slightly different geometric "P" with a green tint and **"CSCA PrepPals / Master Today, Excel Tomorrow."** wordmark. I'm treating the uploaded logo as canonical and reconstructing the wordmark in CSS. **Please confirm which logo lock-up is correct** and share the wordmark file if the screenshot version is preferred.
3. **No production code or Figma.** All tokens were extracted by eye. Hex values, exact type sizes, and exact spacing are best-guess. **Please share the Figma file or production CSS** if you have one and I'll align everything precisely.
4. **Iconography is substituted** with Lucide. If you have a specific licensed icon set, share it and I'll swap.
5. **Single product / surface.** I built one UI kit (the registration site). If there's also a parent dashboard, student portal, or course-detail pages, point me at them and I'll add kits.

---

## Index of files

```
README.md                     ← you are here
colors_and_type.css           ← tokens
SKILL.md                      ← agent skill manifest
assets/
  preppals-logo.png           ← provided logo
  reference-landing.png       ← provided landing screenshot
preview/                      ← Design System tab cards
  logo.html
  colors-brand.html
  colors-neutrals.html
  colors-semantic.html
  type-display.html
  type-scale.html
  type-eyebrow-stats.html
  spacing.html
  radii.html
  shadows.html
  buttons.html
  form-fields.html
  feature-pills.html
  stats-strip.html
  social-proof.html
  iconography.html
ui_kits/
  registration/
    README.md
    index.html
    components/*.jsx
```
