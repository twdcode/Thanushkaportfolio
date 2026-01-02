# About Page Implementation Notes

## Overview
The About page follows a "Cinematic Abstract Vision" design aesthetic with dark, immersive, motion-heavy elements.

## Design System

### Color Palette
- **Background**: Deep Obsidian `#050505`
- **Primary Accent**: Cyan `#00F0FF`
- **Secondary Accent**: Purple `#7000FF`
- **Text**: White with varying opacity

### Typography
- **Headers**: Syne font (Experience, Education, etc.)
- **Body**: Inter font for technical descriptions
- **Tracking**: Wide letter-spacing (`tracking-[0.2em]`) for uppercase labels

### Visual Effects
- **Glassmorphism**: `backdrop-blur-2xl` with `bg-white/5` and `border border-white/10`
- **Gradients**: Linear gradients for video overlays and timeline
- **Animations**: Smooth fade-in and slide-up entrance on page load

## Page Structure

### 1. Hero Section (Visual Manifesto)
```typescript
- Full-width video container (aspect-[21/9])
- Auto-play, loop, muted, playsinline
- Gradient overlays (top and bottom) to blend into background
- Glassmorphic badge overlay ("Visual Manifesto / 2025")
- Bio section below video with name, role, and paragraphs
```

**Video Requirements:**
- Format: MP4
- Location: `/public/assets/manifesto-loop.mp4`
- Fallback: Gradient placeholder if video doesn't load
- Poster image: Placeholder image while loading

### 2. Experience Section (Visual Timeline)
```typescript
- Vertical timeline with gradient line (cyan to purple)
- Timeline dots with hover scale animation
- Glassmorphic cards for each experience
- Responsive layout: stacked on mobile, timeline on desktop
```

**Features:**
- Animated timeline dots
- Hover effects on cards
- Company, role, period, and description
- Visual hierarchy with Syne headings

### 3. Skills Section (High-Density Pills)
```typescript
- Two-column grid: Strategic vs Technical
- Pill-style tags with category-specific colors
- Hover effects on each skill tag
```

**Color Coding:**
- Strategic skills: Cyan accent (`cyan-400`)
- Technical skills: Purple accent (`purple-400`)

## Data Structure

The page pulls all content from `/content/about-me.ts`:

```typescript
{
  name: string;
  role: string;
  videoManifestoUrl: string;
  bio: string[];
  skills: {
    strategic: string[];
    technical: string[];
  };
  experience: Array<{
    company: string;
    role: string;
    period: string;
    description: string;
  }>;
}
```

## Routing

- **URL**: `#/about`
- **Component**: `/components/pages/AboutPage.tsx`
- **Navigation**: Header "About" link points to `#/about`

## Key Features

### Scroll Behavior
- Auto-scroll to top on page load
- Smooth transitions between sections

### Animations
- Hero section: Fade-in and slide-up (1.2s ease-out)
- Timeline dots: Scale on hover (1.25x)
- Cards: Background opacity increase on hover
- Skill pills: Background opacity change on hover

### Responsive Design
- Mobile: Stacked layout with hamburger menu
- Desktop: Full timeline with side-by-side content
- Video: Maintains aspect ratio across all screens

## Future Enhancements

### Potential Additions
1. **Education Section**: Similar to Experience with degree, institution, year
2. **Certifications**: Badge-style display with icons
3. **Awards & Recognition**: Timeline or grid layout
4. **Philosophy Section**: Pull-quote style text blocks
5. **Download Resume**: CTA button linking to PDF

### Animation Upgrades
1. Scroll-triggered animations for each section
2. Video scrubbing based on scroll position
3. Parallax effects on background orbs
4. Staggered entrance for timeline items

### Interactive Elements
1. Skill tags filter case studies
2. Clickable experience cards expand for more details
3. Video play/pause controls
4. Dark/light mode toggle

## File References

### Content
- `/content/about-me.ts` - All page content
- `/content/portfolio.ts` - Navigation and site settings

### Components
- `/components/pages/AboutPage.tsx` - Main page component
- `/components/layout/Header.tsx` - Global navigation
- `/components/layout/Footer.tsx` - Footer with social links
- `/components/layout/AmbientOrbs.tsx` - Background animations

### Styling
- `/styles/globals.css` - Global styles and design tokens
- Inline Tailwind classes - Component-specific styling

## Assets Needed

To complete the implementation:

1. **Video File**: `/public/assets/manifesto-loop.mp4`
   - Recommended: 10-30 seconds looping video
   - Resolution: 1920x820 (21:9 aspect ratio)
   - Size: Keep under 5MB for fast loading
   - Content: Abstract motion graphics, work process, or brand identity

2. **Resume PDF**: `/public/assets/resume.pdf`
   - Latest version of your resume
   - Opens in new tab from navigation

3. **Optional Poster Image**: Displayed while video loads
   - Same aspect ratio as video (21:9)

## Migration to Sanity.io

When migrating to Sanity CMS:

1. Create `about` document type in Sanity schema
2. Add fields for all content in `aboutData`
3. Add file upload for video
4. Update `/content/about-me.ts` to fetch from Sanity
5. Template code remains unchanged

---

**Note**: The page is designed to be data-driven. All content updates happen in `/content/about-me.ts` without touching the component code.
