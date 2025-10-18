# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the official website for Expansion Project, a Philadelphia jazz fusion band. The site is built with Next.js 14, React 18.3, and TailwindCSS, optimized for SEO and performance with a focus on modular architecture.

**Live Site**: https://www.expansionprojectmusic.com/

## Development Commands

### Setup
```bash
npm install
```

### Development
```bash
npm run dev        # Start development server at http://localhost:3000
```

### Build & Deploy
```bash
npm run build      # Production build
npm start          # Start production server
npm run lint       # Run ESLint
```

### Utilities
```bash
npm run generate-sitemap    # Generate sitemap.xml from static pages and blog posts
```

## Environment Variables

Required environment variables (see README.md for complete list):

**Firebase (Client-side)**:
- `NEXT_PUBLIC_FIREBASE_API`
- `NEXT_PUBLIC_FIREBASE_DOMAIN`
- `NEXT_PUBLIC_FIREBASE_DATABASE_URL`
- `NEXT_PUBLIC_FIREBASE_PROJECT`
- `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET`
- `NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID`
- `NEXT_PUBLIC_FIREBASE_APP_ID`
- `NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID`

**Firebase Admin SDK (Server-side API routes)**:
- `FIREBASE_PRIVATE_KEY`
- `API_KEY`, `AUTH_DOMAIN`, `DATABASE_URL`, `PROJECT_ID`, `STORAGE_BUCKET`, `MESSAGING_SENDER_ID`, `APP_ID`, `MEASUREMENT_ID`

**Email & Analytics**:
- `RESEND_API_KEY` - For contact form emails
- `FROM_EMAIL`, `BAND_EMAIL` - Email configuration
- `GOOGLE_ANALYTICS` - Google Analytics ID

## Architecture

### Tech Stack
- **Framework**: Next.js 14 (App Router)
- **UI**: React 18.3, TailwindCSS 3.3.3
- **Animations**: Framer Motion, react-type-animation, react-scroll-parallax
- **Data**: Firebase (Realtime Database + Analytics), SWR for client-side caching
- **Content**: Markdown with gray-matter for blog posts
- **Email**: Resend API
- **Analytics**: Vercel Web Analytics, Vercel Speed Insights, Google Analytics
- **Deployment**: Vercel (Node.js 22.x)

### Project Structure

```
src/
├── app/
│   ├── components/          # React components
│   │   ├── HeroSection.jsx
│   │   ├── Navbar.jsx
│   │   ├── AboutSection.jsx
│   │   ├── ProjectsSection.jsx
│   │   ├── MerchCarousel.jsx
│   │   ├── EmailSection.jsx
│   │   ├── Footer.jsx
│   │   └── ...
│   ├── api/                 # API routes
│   │   ├── send/route.js    # Contact form (Resend API + captcha)
│   │   ├── blogPosts/route.js  # Blog post data
│   │   └── views/           # View counter endpoints
│   ├── blog/                # Blog pages
│   ├── firebaseConfig.js    # Firebase client initialization
│   ├── services/            # Service layer (counter, etc.)
│   ├── utils/               # Utility functions
│   ├── layout.jsx           # Root layout with SEO metadata
│   └── page.jsx             # Homepage
├── content/
│   └── blog-posts/          # Markdown blog posts (numbered: 0-*.md, 1-*.md, etc.)
├── lib/
│   └── performance.js       # Performance utilities
└── components/              # Shared components
```

### Key Architectural Patterns

**1. SEO-First Design**
- Comprehensive metadata in `src/app/layout.jsx` including OpenGraph, Twitter cards, and JSON-LD structured data (MusicGroup, Event, Album schemas)
- Dynamic sitemap generation via `scripts/generate-sitemap.js`
- Extensive keyword optimization targeting jazz fusion, Philadelphia music scene, band names, tour dates

**2. Modular Component Architecture**
- Homepage (`src/app/page.jsx`) assembles sections: HeroSection → AchievementsSection → AboutSection → ProjectsSection → MerchCarousel → EmailSection
- All wrapped in ClientParallaxProvider for scroll animations
- Components live in `src/app/components/`

**3. Content Management**
- Blog posts stored as numbered markdown files in `src/content/blog-posts/` (format: `N-slug-name.md`)
- Parsed with gray-matter for frontmatter
- API route `/api/blogPosts` reads, sorts by numeric prefix (descending), and serves posts
- Dynamic blog pages at `/blog/[id]`

**4. API Routes**
- `/api/send` - Contact form with Resend email service and captcha verification
- `/api/blogPosts` - Serves blog post data (with optional `?id=` parameter for single post)
- `/api/views/[slug]` - View counter using Firebase

**5. Firebase Integration**
- Client-side config in `src/app/firebaseConfig.js`
- Analytics only initialized client-side (`typeof window !== "undefined"`)
- Realtime Database for view counters and other dynamic data
- Firebase Admin SDK used in server-side API routes

**6. Performance Optimizations**
- Image optimization: AVIF/WebP formats, responsive device sizes
- Compression enabled
- Security headers (X-Frame-Options, CSP, etc.) in `next.config.js`
- Dynamic imports for components where appropriate
- Speed Insights via `@vercel/speed-insights` for Core Web Vitals monitoring
- Web Analytics via `@vercel/analytics` for visitor tracking and page views

**7. Styling & Theming**
- TailwindCSS with custom theme tokens
- Dark mode support via `next-themes` (class-based)
- Custom colors: silver (#C0C0C0), primary (purple), secondary (blue)
- Dark mode background: #121212

**8. Redirects**
- `/shows`, `/tour` → `/#tour`
- `/music` → `/`

## Development Guidelines

### Modular Feature System
Per the PRD in `.cursor/rules/expansionproject-website-rules.mdc`, this project prioritizes a modular feature system. While the architecture has evolved, maintain these principles:
- Keep components self-contained and reusable
- Use dynamic imports for performance-critical modules
- Target ≤15 KB per major component/module
- Leverage SWR for data fetching patterns

### SEO Best Practices
- Always add metadata (title, description, keywords) for new pages
- Include JSON-LD structured data for events, products, or music-related content
- Use semantic HTML with proper heading hierarchy
- Add alt text for all images
- Maintain sitemap by running `npm run generate-sitemap` after adding pages/blog posts

### Styling Standards
- Use Tailwind utility classes exclusively
- Reference custom theme tokens from `tailwind.config.js`
- Animate with Framer Motion for page transitions and effects
- Ensure responsive design across all breakpoints

### Content & Data
- Blog posts must follow naming: `N-slug-name.md` where N is numeric (higher = newer)
- Use gray-matter frontmatter for metadata
- Firebase data accessed via `src/app/firebaseConfig.js` (client) or Firebase Admin SDK (server)
- SWR for client-side data fetching and caching

### Testing & Quality
- Run `npm run lint` before committing
- Target Lighthouse scores ≥90 for Performance, Accessibility, SEO
- Test contact form with captcha verification
- Verify Firebase connections for analytics and view counters

## Performance Optimization

This project has been optimized for Vercel Real Experience Score (RES). See `PERFORMANCE_OPTIMIZATIONS.md` for detailed documentation.

**Key Optimizations**:
- Hero image uses `priority` and `fetchPriority="high"` props
- Custom fonts preloaded in `layout.jsx`
- Framer Motion and react-icons package imports optimized
- Aggressive caching configured in `vercel.json`
- Image optimization: AVIF/WebP formats, responsive sizing
- Production builds remove console logs

**Performance Targets**:
- RES Score: >90
- LCP: <2.5s
- FCP: <1.8s
- CLS: <0.1 (achieved: 0.01)
- INP: <200ms (achieved: 80ms)

**Alternative Components**:
- `OptimizedHeroSection.jsx` - Reduced animation complexity for faster FCP (use if needed)

## Important Notes

- **Node Version**: This project requires Node.js 22.x (specified in `package.json` and `.nvmrc`)
- **Vercel Configuration**: Node.js version enforced via `vercel.json`
- **Raw Loader**: Webpack configured to load `.md` files via `raw-loader`
- **Contact Form**: Requires captcha verification (`captchaVerified` must be true)
- **Blog Post Ordering**: Posts sorted by numeric prefix in descending order (newest first)
- **Security**: Security headers configured in `next.config.js`, avoid committing sensitive env vars
- **Image Priority**: Hero image and navbar logo have `priority` prop for optimal LCP

## Target Audience & Keywords

**Primary Keywords**: jazz fusion bands Philadelphia, funk fusion trio, Philadelphia live music, jazz fusion concerts near me, bands like Snarky Puppy, bands like Tauk, progressive fusion bands

**User Personas**:
1. **Fans** - Discover music, shows, merch, updates
2. **Band/Admins** - Post tour dates, content, news
3. **Developers** - Implement features rapidly with modular architecture
