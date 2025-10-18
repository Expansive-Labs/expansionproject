# Deployment Guide

## Vercel Deployment

This project is optimized for deployment on Vercel with Node.js 22.x.

### Node.js Version Configuration

**Important**: Vercel must use Node.js 22.x as Node.js 18.x was discontinued on August 31, 2025.

The Node.js version is configured in three places:
1. `package.json` - `"engines": { "node": "22.x" }`
2. `.nvmrc` - Contains `22`
3. `vercel.json` - Build configuration

### Vercel Project Settings

If you see the error: **"Node.js 18.x is discontinued since August 31, 2025. Please upgrade to create new builds."**

**Fix via Vercel Dashboard**:
1. Go to your project settings: https://vercel.com/[your-team]/[your-project]/settings
2. Navigate to "General" → "Node.js Version"
3. Select **22.x** from the dropdown
4. Click "Save"
5. Redeploy your project

**Fix via `vercel.json`** (Already configured):
The `vercel.json` file includes build configuration that should automatically use Node.js 22.x.

### Pre-Deployment Checklist

Before deploying, ensure:

- [ ] All environment variables are set in Vercel dashboard
- [ ] Node.js version is set to 22.x in project settings
- [ ] Build succeeds locally: `npm run build`
- [ ] Sitemap is generated: `npm run generate-sitemap` (runs automatically on `postbuild`)
- [ ] Lint passes: `npm run lint`
- [ ] No sensitive data in committed files

### Environment Variables

Set these in Vercel Dashboard → Settings → Environment Variables:

**Firebase (Client-side) - Required**:
- `NEXT_PUBLIC_FIREBASE_API`
- `NEXT_PUBLIC_FIREBASE_DOMAIN`
- `NEXT_PUBLIC_FIREBASE_DATABASE_URL`
- `NEXT_PUBLIC_FIREBASE_PROJECT`
- `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET`
- `NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID`
- `NEXT_PUBLIC_FIREBASE_APP_ID`
- `NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID`

**Firebase Admin (Server-side) - Required**:
- `FIREBASE_PRIVATE_KEY` - Use quotes and preserve newlines: `"-----BEGIN PRIVATE KEY-----\n..."`
- `API_KEY`
- `AUTH_DOMAIN`
- `DATABASE_URL`
- `PROJECT_ID`
- `STORAGE_BUCKET`
- `MESSAGING_SENDER_ID`
- `APP_ID`
- `MEASUREMENT_ID`

**Email & Analytics - Required**:
- `RESEND_API_KEY`
- `FROM_EMAIL`
- `BAND_EMAIL`
- `GOOGLE_ANALYTICS`

### Build Configuration

The build process:
1. `npm install` - Install dependencies
2. `next build` - Build Next.js application
3. `npm run postbuild` - Automatically generates sitemap.xml

Build output:
- Static pages: Pre-rendered at build time
- API routes: Serverless functions
- Images: Optimized on-demand

### Performance Monitoring

After deployment:

1. **Vercel Web Analytics**:
   - Navigate to: https://vercel.com/[your-team]/[your-project]/analytics
   - Track visitors, page views, and bounce rate in real-time
   - Monitor traffic sources and top performing pages
   - View geographic distribution of visitors
   - **Note**: Data appears after first visitors (allow 30 seconds for initial tracking)
   - **Enabled**: ✅ `@vercel/analytics` installed and configured in `layout.jsx`

2. **Vercel Speed Insights**:
   - Navigate to: https://vercel.com/[your-team]/[your-project]/speed-insights
   - Monitor Real Experience Score (RES)
   - Track Core Web Vitals: LCP, FCP, CLS, INP, TTFB
   - Target: RES >90
   - **Enabled**: ✅ `@vercel/speed-insights` installed and configured

3. **Google Analytics**:
   - Configured via `GOOGLE_ANALYTICS` environment variable
   - Track custom events, conversions, and user flows
   - Access: https://analytics.google.com
   - **Enabled**: ✅ Configured in `layout.jsx`

4. **Firebase Analytics**:
   - Client-side analytics for detailed user behavior
   - Access Firebase Console for session data and user properties
   - **Enabled**: ✅ Configured in `firebaseConfig.js`

5. **Google Lighthouse**:
   ```bash
   # Run Lighthouse on deployed URL
   npx lighthouse https://www.expansionprojectmusic.com --view
   ```

### Deployment Commands

```bash
# Deploy to production (main branch)
git push origin main

# Deploy preview (feature branch)
git push origin feature-branch

# Force redeploy
# Via Vercel dashboard: Deployments → ⋯ → Redeploy
```

### Rollback

To rollback to a previous deployment:
1. Go to Vercel Dashboard → Deployments
2. Find the stable deployment
3. Click ⋯ → "Promote to Production"

### Custom Domain

1. Vercel Dashboard → Settings → Domains
2. Add custom domain: `expansionprojectmusic.com`
3. Configure DNS records as instructed by Vercel
4. Wait for SSL certificate provisioning (~5 minutes)

### Troubleshooting

**Build Fails**:
- Check build logs in Vercel dashboard
- Verify all environment variables are set
- Test build locally: `npm run build`

**Node.js Version Error**:
- Update Node.js version in Vercel project settings to 22.x
- Verify `.nvmrc` contains `22`
- Verify `package.json` engines specifies `"node": "22.x"`

**Environment Variables Not Working**:
- Ensure variable names match exactly (case-sensitive)
- For multi-line values (like `FIREBASE_PRIVATE_KEY`), use quotes
- Redeploy after changing environment variables

**Images Not Loading**:
- Check image paths are correct (case-sensitive)
- Verify images exist in `/public/images/`
- Check browser console for errors

**Performance Issues**:
- Review `PERFORMANCE_OPTIMIZATIONS.md`
- Check Vercel Speed Insights for specific bottlenecks
- Verify caching headers are being applied

**Analytics Not Tracking**:
- Verify `@vercel/analytics` is installed: `npm list @vercel/analytics`
- Check that `<Analytics />` component is in `layout.jsx`
- Allow 30 seconds after first page visit for data to appear
- Check browser console for errors
- Verify no ad blockers are interfering with tracking
- Check Vercel project is on a plan that includes Analytics

### Post-Deployment Tasks

1. **Verify Web Analytics**:
   - Visit your deployed site
   - Wait 30 seconds for tracking to initialize
   - Check Vercel Dashboard → Analytics
   - Confirm visitor count increments
   - Navigate between pages to test page view tracking

2. **Submit Sitemap to Google**:
   ```
   https://www.google.com/ping?sitemap=https://www.expansionprojectmusic.com/sitemap.xml
   ```

3. **Test Contact Form**:
   - Submit test message
   - Verify email delivery via Resend dashboard

4. **Test Firebase Analytics**:
   - Visit site
   - Check Firebase console for activity
   - Verify events are being tracked

5. **Monitor Performance**:
   - Check Vercel Speed Insights for RES score
   - Check Vercel Web Analytics for visitor data
   - Run Lighthouse audit
   - Monitor metrics over first 7 days
   - Set up alerts for performance degradation

### CI/CD

Currently using Vercel's automatic Git integration:
- `main` branch → Production
- Feature branches → Preview deployments

To add GitHub Actions (optional):
```yaml
# .github/workflows/vercel.yml
name: Vercel Production Deployment
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          vercel-project-id: ${{ secrets.PROJECT_ID }}
          vercel-args: '--prod'
```

## Local Testing of Production Build

```bash
# Build production bundle
npm run build

# Start production server locally
npm start

# Access at http://localhost:3000
```

## Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Deployment](https://nextjs.org/docs/deployment)
- [Vercel Speed Insights](https://vercel.com/docs/speed-insights)
