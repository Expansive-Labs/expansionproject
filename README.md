
## Expansion Project's Official Website Application
https://www.expansionprojectmusic.com/

### Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Available Scripts

```bash
npm run dev              # Start development server
npm run build            # Build for production
npm start                # Start production server
npm run lint             # Run ESLint
npm run generate-sitemap # Generate sitemap.xml
npm run build:analyze    # Analyze bundle size
```

### Environment Variables

Create a `.env.local` file with:

```env
# Google Analytics
GOOGLE_ANALYTICS=""

# Firebase Server-side (for API routes)
FIREBASE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----"
API_KEY=""
AUTH_DOMAIN=""
DATABASE_URL=""
PROJECT_ID=""
STORAGE_BUCKET=""
MESSAGING_SENDER_ID=""
APP_ID=""
MEASUREMENT_ID=""

# Firebase Client-side (Public)
NEXT_PUBLIC_FIREBASE_API=""
NEXT_PUBLIC_FIREBASE_DOMAIN=""
NEXT_PUBLIC_FIREBASE_DATABASE_URL=""
NEXT_PUBLIC_FIREBASE_PROJECT=""
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=""
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=""
NEXT_PUBLIC_FIREBASE_APP_ID=""
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=""

# Email (Resend)
RESEND_API_KEY=""
FROM_EMAIL=""
BAND_EMAIL=""
```

### Analytics & Monitoring

This project includes:
- **Vercel Web Analytics** - Track visitors, page views, bounce rate
- **Vercel Speed Insights** - Monitor Core Web Vitals and RES score
- **Google Analytics** - Custom event tracking
- **Firebase Analytics** - User behavior analytics

### Tech Stack

- Next.js 14 (App Router)
- React 18.3
- TailwindCSS 3.3.3
- Firebase (Database + Analytics)
- Vercel Analytics & Speed Insights
- Framer Motion (Animations)

### Documentation

See `CLAUDE.md` for detailed architecture and development guidelines.
