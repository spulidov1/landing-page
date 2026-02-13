# Customization Guide

Quick reference for updating content and styling.

## 1. Update Your Information

### Personal Details (Hero & About)

**File:** `components/HeroSection.tsx`
```typescript
// Line 20-21: Update name and tagline
<h1>Sergio Pulido</h1>
<p>Building calm, intelligent systems</p>
```

**File:** `components/AboutSection.tsx`
```typescript
// Lines 26-42: Update bio
<p>I'm Sergio — I build apps...</p>
```

**File:** `components/Footer.tsx`
```typescript
// Lines 10-12: Update social links
const socialLinks = [
  { name: 'GitHub', href: 'https://github.com/yourusername', icon: Github },
  { name: 'LinkedIn', href: 'https://linkedin.com/in/yourprofile', icon: Linkedin },
  { name: 'Email', href: 'mailto:your@email.com', icon: Mail },
]
```

## 2. Update FitFlow Content

### Featured Project (v3)

**File:** `components/tabs/FeaturedTab.tsx`

```typescript
// Lines 44-66: Update project details
<h3>FitFlow v3</h3>
<p>Habit tracking without shame</p>
<p>A rethought approach to building habits...</p>
```

**Add Screenshot:**
1. Save image to `/public/fitflow-v3.png`
2. Update line 38-46:
```typescript
<div className="aspect-[4/3] ... relative">
  <Image
    src="/fitflow-v3.png"
    alt="FitFlow v3 screenshot"
    fill
    className="object-cover"
  />
</div>
```

### All Versions Timeline

**File:** `components/tabs/VersionsTab.tsx`

Update the `versions` array (lines 6-58):

```typescript
const versions = [
  {
    version: 'v3',
    status: 'current', // or 'shipped' or 'archived'
    year: '2024',
    title: 'FitFlow v3',
    tagline: 'One-line description',
    built: [
      'Feature 1',
      'Feature 2',
      // Add more...
    ],
    why: '"Your honest quote about rebuilding"',
    killed: [
      'Feature you removed',
      'Another removed feature',
    ],
    stack: ['Next.js 14', 'Supabase', 'etc.'],
  },
  // Add v2, v1, or more versions...
]
```

## 3. Enable Graveyard Tab (Optional)

**File:** `components/WorkSection.tsx`

Line 11: Change `enabled: false` to `enabled: true`:
```typescript
{ id: 'graveyard', label: 'Graveyard', enabled: true },
```

Then create `components/tabs/GraveyardTab.tsx`:
```typescript
export default function GraveyardTab() {
  const killedFeatures = [
    {
      name: 'Gamification streaks',
      version: 'v2',
      reason: 'Felt manipulative. Habits shouldn\'t need extrinsic rewards.',
    },
    // Add more...
  ]

  return (
    <div className="space-y-6">
      {killedFeatures.map((feature) => (
        <div key={feature.name} className="glass-card p-6">
          <h3 className="font-semibold mb-2">{feature.name}</h3>
          <p className="text-sm opacity-70">({feature.version})</p>
          <p className="mt-2 italic">"{feature.reason}"</p>
        </div>
      ))}
    </div>
  )
}
```

## 4. Customize Colors

**File:** `tailwind.config.js`

```javascript
colors: {
  // Change these to match your brand
  ink: {
    950: '#0a0a0f',  // Darkest background
    900: '#12121a',  // Dark text
    800: '#1a1a24',  // Cards
  },
  bronze: {
    600: '#c17d3a',  // Primary accent
    700: '#a5632c',  // Hover state
  },
}
```

## 5. Adjust Motion

**File:** `lib/animations.ts`

```typescript
export const springs = {
  gentle: { stiffness: 300, damping: 30, mass: 1 },  // Slower, smoother
  snappy: { stiffness: 340, damping: 28, mass: 0.9 }, // Faster, crisp
}

// Make motion slower:
gentle: { stiffness: 250, damping: 35, mass: 1.2 }

// Make motion faster:
snappy: { stiffness: 400, damping: 25, mass: 0.8 }
```

## 6. Update Metadata (SEO)

**File:** `app/layout.tsx`

```typescript
export const metadata: Metadata = {
  title: 'Your Name — Title',
  description: 'Your description',
  keywords: ['keyword1', 'keyword2'],
  // Add OpenGraph image:
  openGraph: {
    images: ['/og-image.png'],
  },
}
```

## 7. Add Google Analytics (Optional)

**File:** `app/layout.tsx`

Add before closing `</head>`:
```typescript
<Script
  src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
  strategy="afterInteractive"
/>
<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX');
  `}
</Script>
```

## 8. Testing Checklist

Before deploying:

- [ ] All personal info updated (name, email, links)
- [ ] FitFlow content reflects your actual projects
- [ ] Screenshots added to `/public`
- [ ] Social links work
- [ ] Tested on mobile (responsive)
- [ ] Tested with keyboard navigation
- [ ] Tested in dark mode
- [ ] All 7 quality gates pass (see README)

## 9. Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Follow prompts, then visit your live site
```

---

**Need help?** All component files are heavily commented. Look for `// Update this` markers.
