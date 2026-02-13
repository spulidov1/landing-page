# Sergio Pulido — Portfolio

> Building calm, intelligent systems. Evolution as proof.

## Strategic Intent

This is not a beginner's portfolio. This is a signal of **outlier capability** disguised as calm restraint.

**The Deception (Intentional):**
- Surface: Accessible, warm, inviting
- Depth: Surgical precision, obsessive craft, version control as philosophy

**The Proof:**
- FitFlow v1 → v2 → v3 evolution visible
- Each version shows decision-making, not just execution
- Tabs/layers reveal increasing complexity without shouting

## Tech Stack

- **Framework:** Next.js 14+ (App Router)
- **Styling:** Tailwind CSS 3.4+
- **Motion:** Framer Motion 11+
- **Icons:** lucide-react
- **Language:** TypeScript

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the portfolio.

## Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx          # Root layout, metadata, fonts
│   ├── page.tsx            # Main page assembly
│   └── globals.css         # Design system, glass effects
├── components/
│   ├── Nav.tsx             # Glassmorphic navigation
│   ├── HeroSection.tsx     # Name, tagline, CTA
│   ├── WorkSection.tsx     # Tabbed projects (outlier signal)
│   ├── AboutSection.tsx    # Brief, human bio
│   ├── Footer.tsx          # Links, attribution
│   └── tabs/
│       ├── FeaturedTab.tsx # FitFlow v3 hero card
│       └── VersionsTab.tsx # Timeline of all versions
├── lib/
│   └── animations.ts       # Framer Motion spring presets
└── public/                 # Static assets (add screenshots here)
```

## Design System

### Colors

**Primary (Dominant):**
- `ink-950` to `ink-700` — Deep backgrounds, primary text
- `canvas-50` to `canvas-200` — Light backgrounds, subtle borders

**Accent (Sparingly):**
- `bronze-600` to `bronze-500` — Interactive elements, active states

**Semantic:**
- `emerald-500` — Success (current version)
- `blue-500` — Shipped versions
- Red/gray — Archived/deprecated

### Typography

- **Font:** System fonts (SF Pro Display, Segoe UI, Roboto fallbacks)
- **Mono:** JetBrains Mono, Fira Code for version numbers
- **Scales:** Display (text-6xl → text-2xl), Heading (text-3xl → text-xl), Body (text-lg → text-sm)
- **Tracking:** Tight (-0.02em) for numbers, Normal for body, Wide (0.02em) for labels

### Motion

**Spring Presets:**
```typescript
gentle: { stiffness: 300, damping: 30, mass: 1 }
snappy: { stiffness: 340, damping: 28, mass: 0.9 }
```

**Interaction:**
- Hover: scale 1.006, translateY -1px
- Tab transitions: 320px slide with gentle spring
- Stagger: 40-80ms between children

### Glassmorphism

```css
backdrop-blur-xl
bg-white/[0.08] dark:bg-black/40
border border-white/10 dark:border-white/5
shadow-soft-xl
```

**Inner glow** follows cursor via CSS custom properties.

## Content Strategy

### Version Stories

Each version card includes:

1. **What I built** — Feature list (concise)
2. **Why I rebuilt** — One honest sentence about what felt wrong
3. **What I killed** — Features removed and why (taste signal)
4. **Stack** — Tech, no fluff

**Example:**
```
FitFlow v2

What I built:
• Rebuilt state management from scratch
• Killed gamification (felt manipulative)

Why I rebuilt:
"v1 worked, but every interaction felt like I was designing 
for my past self, not my future users."

Stack: React Native, Firebase
```

### Tone Guidelines

**Not:** "I'm a passionate full-stack developer who loves to code!"  
**But:** "I build apps. Sometimes I rebuild them when they feel wrong."

## Quality Gates

Before shipping, all **7 questions** must be **YES**:

1. **Calm test:** Does this feel calm and supportive on a curious day?
2. **Longevity test:** Would this still feel good after 1,000 visits?
3. **Control test:** Does the visitor feel fully in control at all times?
4. **Motion test:** Is motion subtle enough to be almost unnoticeable?
5. **Outlier test:** Would a senior designer/engineer recognize taste here?
6. **Honesty test:** Does this show decision-making, not just execution?
7. **Restraint test:** Would an Apple/Linear designer approve the restraint?

**If ANY are no:** Redesign or delete the offending element.

## Performance Targets

- **Lighthouse:** 95+ on all metrics
- **FCP:** <1.2s
- **LCP:** <2.0s
- **CLS:** <0.1
- **FID:** <100ms

## Accessibility

- **WCAG 2.1 AA** minimum
- Semantic HTML (`<nav>`, `<main>`, `<article>`)
- ARIA labels on interactive elements
- Focus visible: 2px solid ring
- Keyboard nav: Tab, Enter, Escape
- Reduced motion support
- Color contrast: 4.5:1 minimum

## Next Steps

1. **Content:**
   - Replace placeholder FitFlow descriptions with actual project details
   - Add screenshots/demos to `public/` and update image paths
   - Write real version stories (v1, v2, v3)

2. **Links:**
   - Update GitHub/LinkedIn URLs in Footer.tsx
   - Add live project links in FeaturedTab.tsx and VersionsTab.tsx

3. **Optional Features:**
   - Enable Graveyard tab (high-risk, high-reward outlier signal)
   - Add case study pages for each version
   - Integrate analytics (Plausible/Fathom)

4. **Deploy:**
   - Vercel deployment
   - Custom domain
   - OG images for social sharing

## Philosophy

> "Outliers don't ship fast. They ship right."

This portfolio is proof of **iteration as craft**. Every version visible. Every decision explained. No shortcuts, no hype.

If it screams "hire me" → redesign.  
If it demonstrates through layers → ship.

---

Built with care in 2024.
