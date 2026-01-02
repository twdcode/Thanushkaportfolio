# Portfolio Content Management Guide

## 📖 Overview

Your portfolio has been converted into a **template-based system**. You no longer need to edit HTML code. All content is managed through simple TypeScript files located in the `/content` folder.

---

## 📁 Content Structure

```
/content/
  ├── portfolio.ts                     # Homepage content (hero, navigation, journal, etc.)
  ├── about-me.ts                      # About page content (bio, experience, skills)
  ├── case-studies.ts                  # List of all case studies for homepage
  └── all-case-studies.ts              # Complete case study details (centralized)
```

---

## 🎯 How to Update Your Portfolio

### 1. **Update Homepage Content**

Edit `/content/portfolio.ts` to change:

- **Site name and tagline**
- **Navigation menu links** (Work, About, Resume)
- **Hero section** (badge, headline, description, call-to-action button)
- **Portfolio section headings**
- **Visual snapshots section**
- **Journal articles**
- **Social media links**
- **Footer information**

**Navigation Structure:**

```typescript
"navigation": {
  "links": [
    { "label": "Work", "href": "#/" },                              // Home page
    { "label": "About", "href": "#/about" },                        // About page
    { "label": "Resume", "href": "/assets/resume.pdf", "external": true }  // Opens in new tab
  ]
}
```

**Special Text Formatting:**
- `<gradient>text</gradient>` - Makes text gradient colored
- `<italic>text</italic>` - Makes text italic
- `<underline>text</underline>` - Adds underline effect

---

### 2. **Update About Page Content**

Edit `/content/about-me.ts` to change:

- **Name and role**
- **Video manifesto URL** (hero video)
- **Bio paragraphs**
- **Skills** (strategic and technical)
- **Experience timeline**

**Example:**

```typescript
export const aboutData = {
  name: "Thanushka",
  role: "Lead UX Designer",
  videoManifestoUrl: "/assets/manifesto-loop.mp4",
  bio: [
    "Moving beyond traditional design to Strategic Experience Architecture.",
    "Specializing in high-friction fintech and healthcare environments."
  ],
  skills: {
    strategic: ["Product Strategy", "Design Systems", "RCM Domain"],
    technical: ["Figma", "GenAI Video", "React/Next.js", "Tailwind"]
  },
  experience: [
    {
      company: "HealthRecon Connect",
      role: "Lead UX Designer",
      period: "2024 - Present",
      description: "Leading AI automation suites and enterprise design systems."
    }
  ]
};
```

**To add your video:**
1. Place your video file in `/public/assets/manifesto-loop.mp4`
2. The video will auto-play, loop, and be muted
3. Supported format: MP4

---

### 3. **Add or Update Case Studies on Homepage**

Edit `/content/case-studies.ts` to update the case study cards that appear on the homepage:

- Add new case studies
- Update existing ones
- Change which one is "featured" (large card)
- Modify tags, descriptions, and images

**Important Notes:**
- Set `"featured": true` for ONE case study to make it the large card
- The `slug` must match the slug in `/content/all-case-studies.ts`
- Use `"layout": "large"` for featured, `"layout": "small"` for others

---

### 4. **Create or Update Case Study Detail Pages**

Edit `/content/all-case-studies.ts` to manage complete case study content.

**To add a new case study:**

1. Add a new object to the `allCaseStudies` array
2. Ensure the `slug` matches the link in `case-studies.ts`
3. Fill in all sections following the existing structure

**Available Section Types:**
- **outcomes** - Large metric cards for showing results
- **business-challenge** - Context, risk, and goal statement
- **team-leadership** - Your role, squad, and culture transformation
- **research-findings** - Methodology and key findings
- **design-decisions** - Solution overview and key decisions
- **reflection** - Strategic learning and leadership growth
- **text** - Heading and paragraph content
- **image** - Full-width image with optional caption
- **two-column** - Two side-by-side columns with bullet points

---

### 5. **Update Images**

You have two options for images:

**Option A - Use placeholder service (temporary):**
```typescript
"url": "https://placehold.co/1000x600/0a0a0a/00F0FF?text=Your+Text"
```

**Option B - Use real images:**
1. Upload your image to an image hosting service (Imgur, Cloudinary, etc.)
2. Copy the direct image URL
3. Paste into the TypeScript file

```typescript
"url": "https://your-hosting-service.com/your-image.jpg"
```

**Option C - Upload to public folder:**
1. Place images in `/public/assets/` folder
2. Reference them as `/assets/your-image.jpg`

---

### 6. **Add Journal Articles**

Edit the `journal.articles` array in `/content/portfolio.ts`:

```typescript
export const portfolioContent = {
  "journal": {
    "articles": [
      {
        "category": "Article Category",
        "title": "Article Title",
        "description": "Brief description of the article",
        "readTime": "05 min read",
        "link": "#"
      }
    ]
  }
};
```

---

### 7. **Update Social Media Links**

Edit the `social` section in `/content/portfolio.ts`:

```typescript
export const portfolioContent = {
  "social": {
    "linkedin": "https://linkedin.com/in/yourprofile",
    "github": "https://github.com/yourprofile",
    "twitter": "https://twitter.com/yourprofile"
  }
};
```

---

## 🎨 Global Design System

All visual styling is controlled in `/styles/globals.css`. The design maintains consistency across all pages through:

- **Colors**: Deep Obsidian (#050505) with Cyan (#00F0FF) and Purple (#7000FF) accents
- **Typography**: Inter and Syne fonts with consistent sizes
- **Glassmorphism**: backdrop-blur effects with subtle borders
- **Effects**: Hover animations, transitions, and ambient orbs

**You don't need to edit CSS** unless you want to change the overall design theme.

---

## 🧭 Navigation & Routing

The portfolio uses hash-based routing:

- **Home**: `#/` or just `/`
- **About**: `#/about`
- **Case Study**: `#/case-study/{slug}` (e.g., `#/case-study/denial-automation`)
- **Resume**: Opens `/assets/resume.pdf` in new tab

**To add your resume:**
1. Place your PDF in `/public/assets/resume.pdf`
2. The navigation will automatically link to it

---

## ✅ Quick Checklist: Adding a New Case Study

1. ✏️ Add card entry to `/content/case-studies.ts`
2. 📄 Add complete details to `/content/all-case-studies.ts` array
3. 🖼️ Add all images (hero, screenshots, etc.)
4. 🔗 Ensure `slug` matches in both files
5. 💾 Save all files
6. ✨ Preview your portfolio!

---

## 🚀 Future Migration to Sanity.io CMS

Your portfolio is structured for easy migration to Sanity.io. See `/SANITY-MIGRATION-GUIDE.md` for detailed instructions. This will allow you to:

- Edit content through a visual admin panel
- Upload images directly through the interface
- Publish changes with one click
- No file editing at all

---

## 📞 Need Help?

If you need assistance:
1. Check the examples in the existing TypeScript files
2. Make sure your TypeScript syntax is valid (no missing commas, brackets, etc.)
3. Test one small change at a time
4. Use a JSON validator if needed: https://jsonlint.com/

---

**Remember:** This is YOUR portfolio system. The templates handle all the design and layout—you just provide the content!