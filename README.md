# USRR - United States Ripple Reserve

A professional, institutional-grade landing page for the USRR narrative token built with Next.js, TypeScript, and Tailwind CSS.

## Overview

USRR is a narrative-driven digital asset reflecting market sentiment around the convergence of U.S. financial infrastructure and blockchain settlement layers. This landing page provides a premium, credible presentation of the project with a focus on institutional aesthetics.

## Features

- 🎬 **Premium Intro Sequence** - Cinematic entry experience with February 16th narrative framing
- ✨ Premium institutional design with subtle animations
- 🎨 Custom gradient backgrounds with grain texture overlay
- 📱 Fully responsive design
- ⚡ Built on Next.js 14 with TypeScript
- 🎯 Optimized for static export (Netlify deployment)
- 🔒 Professional copy and disclaimers
- 💾 Session storage to show intro only once per session

## Site Structure

### Intro Sequence (New!)

A premium, institutional entry experience that:
- Displays sequential narrative copy about February 16th
- Reveals the USRR gold coin with subtle metallic effects
- Features an "Enter USRR" button to access the main site
- Stores completion in sessionStorage (only shows once per session)
- Can be reset by clearing browser session storage

### Main Landing Page Sections

1. **Hero Section** - USRR seal, headline, February 16th reference
2. **February 16th Market Signal** - Handshake image and narrative
3. **About/Narrative Section** - Core story with coin close-up
4. **Token Information** - Chain, symbol, supply details
5. **Contract Address** - Copy-to-clipboard functionality
6. **How to Buy** - 3-step guide
7. **DexScreener Section** - Chart embed placeholder
8. **Official Bio** - Institutional description
9. **Footer** - Disclaimers and legal copy

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Deployment to Netlify

### Method 1: Netlify CLI (Recommended)

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Build the project
npm run build

# Deploy to Netlify
netlify deploy --prod --dir=out
```

### Method 2: GitHub Integration

1. Push your code to GitHub
2. Log in to [Netlify](https://netlify.com)
3. Click "New site from Git"
4. Connect your GitHub repository
5. Configure build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `out`
6. Click "Deploy site"

### Method 3: Drag and Drop

```bash
# Build the static site
npm run build

# The `out` folder contains your static site
# Drag and drop the `out` folder to Netlify's dashboard
```

## Customization

### Update Contract Address

Edit `/app/page.tsx`:

```typescript
const contractAddress = 'YOUR_SOLANA_CONTRACT_ADDRESS_HERE'
```

### Update Token Supply

Edit the Token Information section in `/app/page.tsx`:

```typescript
<div className="text-3xl font-bold">
  1,000,000,000 // Update with actual supply
</div>
```

### Add DexScreener Embed

Replace the placeholder in the DexScreener section:

```typescript
<iframe
  src="https://dexscreener.com/solana/YOUR_PAIR_ADDRESS?embed=1&theme=dark"
  className="w-full h-full"
/>
```

## Image Requirements

Place these images in the `/public` folder:

- `coin.png` - USRR gold seal/coin (primary brand mark)
- `handshake.jpeg` - Institutional handshake image

Current images are already in place.

## Tech Stack

- **Framework:** Next.js 14
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Deployment:** Netlify (static export)

## Project Structure

```
ussr/
├── app/
│   ├── globals.css          # Global styles and Tailwind
│   ├── layout.tsx            # Root layout
│   └── page.tsx              # Main landing page
├── public/
│   ├── coin.png              # USRR seal
│   └── handshake.jpeg        # Institutional image
├── next.config.js            # Next.js config (static export)
├── tailwind.config.js        # Tailwind customization
├── netlify.toml              # Netlify deployment config
└── package.json
```

## Performance

- Static site generation for optimal performance
- Image optimization with Next.js Image component
- Minimal dependencies
- Lazy loading and code splitting

## Legal Disclaimers

The landing page includes appropriate disclaimers throughout:

- No financial advice
- Speculative nature of the token
- Risk warnings
- No affiliation claims

## Support

For questions or issues, refer to:

- Next.js Documentation: https://nextjs.org/docs
- Tailwind CSS: https://tailwindcss.com/docs
- Netlify Docs: https://docs.netlify.com

## License

This project is provided as-is for the USRR token launch.

---

**Built with precision for institutional credibility.**
