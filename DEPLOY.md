# Deployment Guide for USRR Landing Page

## Quick Start - Deploy to Netlify in 3 Steps

### Step 1: Install Dependencies and Build

```bash
cd /Users/luke.adlam/ussr
npm install
npm run build
```

This creates an optimized static site in the `out` folder.

### Step 2: Deploy to Netlify

#### Option A: Netlify CLI (Fastest)

```bash
# Install Netlify CLI globally (one-time setup)
npm install -g netlify-cli

# Login to Netlify
netlify login

# Deploy to production
netlify deploy --prod --dir=out
```

#### Option B: Drag & Drop (No CLI Required)

1. After running `npm run build`, locate the `out` folder
2. Go to [https://app.netlify.com/drop](https://app.netlify.com/drop)
3. Drag the entire `out` folder onto the page
4. Your site is live!

#### Option C: Connect Git Repository

1. Push code to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial USRR landing page"
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. Log in to [Netlify](https://app.netlify.com)
3. Click "Add new site" → "Import an existing project"
4. Choose GitHub and select your repository
5. Configure build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `out`
   - **Node version:** 18
6. Click "Deploy site"

### Step 3: Configure Custom Domain (Optional)

1. In Netlify dashboard, go to "Domain settings"
2. Click "Add custom domain"
3. Follow DNS configuration instructions
4. Enable HTTPS (automatic with Netlify)

## Pre-Deployment Checklist

Before deploying, update these placeholders:

### 1. Contract Address
File: `app/page.tsx`

```typescript
// Find and replace:
const contractAddress = 'XXXX...XXXX'
// With your actual Solana contract address:
const contractAddress = 'YOUR_ACTUAL_SOLANA_ADDRESS'
```

### 2. Token Supply
File: `app/page.tsx`

```typescript
// Find "TBD" in Token Information section and update:
<div className="text-3xl font-bold">
  1,000,000,000 // Replace with actual supply
</div>
```

### 3. DexScreener Embed (After Launch)
File: `app/page.tsx`

Replace the placeholder section with:

```typescript
<iframe
  src="https://dexscreener.com/solana/YOUR_PAIR_ADDRESS?embed=1&theme=dark"
  className="w-full h-full border-0"
  title="DexScreener Chart"
/>
```

## Verify Deployment

After deployment, check:

- [ ] All images load correctly (coin.png, handshake.jpeg)
- [ ] Contract address copy button works
- [ ] All sections display properly on mobile
- [ ] Animations are smooth
- [ ] No console errors in browser DevTools
- [ ] Meta tags and title display correctly

## Troubleshooting

### Build Fails

```bash
# Clear cache and reinstall
rm -rf node_modules .next out
npm install
npm run build
```

### Images Not Loading

Ensure images are in `/public` folder:
- `/public/coin.png`
- `/public/handshake.jpeg`

### TypeScript Errors

```bash
# Check for type errors
npm run lint
```

## Environment Variables

This project doesn't require environment variables for basic deployment. All configuration is in the code.

## Performance Optimization

Already implemented:
- Static site generation
- Image optimization
- Code splitting
- Minimal dependencies
- CSS purging via Tailwind

## Monitoring

After deployment, monitor:
- **Netlify Analytics** (built-in)
- **Google Analytics** (add to `app/layout.tsx` if needed)
- **Core Web Vitals** via Lighthouse

## Updates and Redeployment

To update the live site:

```bash
# Make your changes
# Then rebuild and redeploy
npm run build
netlify deploy --prod --dir=out
```

Or if using Git integration, simply push to your repository:

```bash
git add .
git commit -m "Update contract address"
git push
```

Netlify will automatically rebuild and deploy.

## Custom Domain SSL

Netlify automatically provisions SSL certificates for:
- `*.netlify.app` domains (instant)
- Custom domains (automatic via Let's Encrypt)

No configuration needed.

## Cost

- **Netlify Free Tier:** Sufficient for most launches
  - 100GB bandwidth/month
  - 300 build minutes/month
  - Unlimited sites
  - HTTPS included

## Support

- **Netlify Docs:** https://docs.netlify.com
- **Next.js Deployment:** https://nextjs.org/docs/deployment
- **Community:** Netlify Discord / Forums

---

**Your USRR landing page is production-ready. Deploy with confidence.**
