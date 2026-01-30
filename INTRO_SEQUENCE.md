# USRR Intro Sequence Documentation

## Overview

A premium, institutional entry experience that frames the February 16th narrative before revealing the main USRR landing page.

## Design Philosophy

**Institutional. Cinematic. Calm. Intentional. Trustworthy.**

The intro feels like entering a high-level financial briefing system — not a flashy marketing site. It establishes credibility and slows the user down to absorb the narrative significance.

## User Experience Flow

### Stage 0: Initial Load (0–1s)
- Screen loads with near-black/charcoal background
- Soft grain texture visible
- Subtle gold light bloom emanates from center
- Creates "entering a system" feeling

### Stage 1: Line 1 (1–1.8s)
```
A MARKET SIGNAL
```
- Small, uppercase, gold text
- Smooth fade-in with slight upward motion
- Letter-spaced for gravitas

### Stage 2: Line 2 (1.8–2.6s)
```
FEBRUARY 16TH
```
- Large, bold, white text (5xl–8xl responsive)
- Smooth fade-in with slight upward motion
- Primary narrative anchor

### Stage 3: Line 3 (2.6–3.4s)
```
A shift in financial narrative begins.
```
- Medium, light gray text
- Smooth fade-in with slight upward motion
- Sets macro-driven tone

### Stage 4: Coin Reveal (3.4–4.9s)
- USRR gold coin fades in (1.5s duration)
- Starts at 95% scale, grows to 100%
- Subtle metallic highlight sweep across surface
- Soft gold glow beneath coin
- Ceremonial, not flashy

### Stage 5: Narrative Bridge (4.9–5.9s)
```
United States Ripple Reserve (USRR) reflects market anticipation 
around the convergence of U.S. financial infrastructure and 
blockchain settlement layers.
```
- Gray text, medium size
- Concise institutional framing
- Establishes credibility

### Stage 6: Call to Action (5.9s+)
- "Enter USRR" button appears
- Gold gradient background
- Subtle shine effect on hover
- Clicking transitions to main site

## Technical Implementation

### Component Structure
```
components/IntroSequence.tsx
```
- Self-contained React component
- Manages 7 sequential stages via state
- Uses setTimeout for precise timing control
- Full-screen fixed overlay (z-50)

### Integration
```typescript
app/page.tsx
```
- Conditionally renders intro vs. main site
- Checks sessionStorage on mount
- Smooth opacity transition between states

### Session Management
```javascript
sessionStorage.setItem('usrr_intro_complete', 'true')
```
- Intro shows only once per browser session
- Closing tab = intro resets
- Refreshing page = skips intro

### Styling Approach
- **Tailwind CSS** for all styling
- **No JavaScript animations** (CSS transitions only)
- Grain texture overlay via CSS
- Radial gradients for gold bloom effect

## Timing Breakdown

| Stage | Duration | Cumulative | Element |
|-------|----------|------------|---------|
| 0 | 1000ms | 1s | Initial state |
| 1 | 800ms | 1.8s | "A MARKET SIGNAL" |
| 2 | 800ms | 2.6s | "FEBRUARY 16TH" |
| 3 | 800ms | 3.4s | "A shift..." |
| 4 | 1200ms | 4.6s | Coin reveal |
| 5 | 1000ms | 5.6s | Narrative bridge |
| 6 | - | 5.6s+ | Button visible |

**Total sequence (before interaction): ~5.6 seconds**

## Design Constraints (What's NOT Included)

❌ **No sound** — Silent by design  
❌ **No video** — Static imagery only  
❌ **No countdown timers** — Not hype-driven  
❌ **No hype language** — Institutional tone throughout  
❌ **No emojis** — Professional presentation  
❌ **No auto-skip** — User must click to proceed  
❌ **No loading bars** — Narrative-driven, not technical  

## Key CSS Techniques

### Grain Texture Overlay
```css
.grain-overlay::before {
  background-image: url("data:image/svg+xml,...");
  opacity: 0.03;
}
```

### Radial Gold Bloom
```javascript
background: 'radial-gradient(circle, rgba(234, 179, 8, 0.08) 0%, transparent 70%)'
filter: 'blur(60px)'
```

### Smooth Transitions
```css
transition-all duration-1000
opacity-100 translate-y-0  /* Visible state */
opacity-0 translate-y-4     /* Hidden state (below) */
```

### Metallic Highlight Sweep
```css
bg-gradient-to-r from-transparent via-gold-400/20 to-transparent
translate-x-full            /* End position */
-translate-x-full           /* Start position */
transition-all duration-[2000ms]
```

## Responsive Behavior

### Mobile (< 768px)
- Smaller text sizes
- Coin: 192px × 192px (w-48 h-48)
- Horizontal padding: 24px (px-6)

### Tablet (768px – 1024px)
- Medium text sizes
- Coin: 256px × 256px (w-64 h-64)

### Desktop (> 1024px)
- Full text sizes
- Coin: 320px × 320px (w-80 h-80)
- February 16th: text-8xl

## Testing the Intro

### Force Intro to Show Again
Open browser console:
```javascript
sessionStorage.removeItem('usrr_intro_complete')
```
Refresh page.

### Skip Intro Permanently (Development)
```javascript
sessionStorage.setItem('usrr_intro_complete', 'true')
```

### Adjust Timing (Development)
Edit `components/IntroSequence.tsx`:
```typescript
const timings = [
  1000,  // Initial delay
  800,   // Line 1
  800,   // Line 2
  800,   // Line 3
  1200,  // Coin reveal
  1000,  // Narrative bridge
  0      // Button
]
```

## Accessibility Considerations

- All text is readable and high contrast
- No flashing or rapid animations
- Button is keyboard accessible
- Semantic HTML structure
- No auto-advancing (user-controlled)

## Performance

- Component lazy-loads via dynamic import (if needed)
- No external dependencies beyond Next.js/React
- CSS-only animations (GPU accelerated)
- Single image load (coin.png)
- Minimal JavaScript execution

## Production Checklist

✅ Grain texture renders correctly  
✅ Gold bloom visible but subtle  
✅ Text sequence timing feels natural  
✅ Coin image loads and displays  
✅ Metallic highlight sweep completes  
✅ Button hover effect works  
✅ SessionStorage persists correctly  
✅ Transition to main site is smooth  
✅ Mobile responsive behavior verified  

## Future Enhancements (Optional)

- **Analytics tracking**: Log intro completion rate
- **A/B testing**: Test different copy variations
- **Skip button**: Allow power users to bypass (bottom corner)
- **Localization**: Support multiple languages
- **Prefers-reduced-motion**: Respect OS accessibility settings

---

**This intro sets the tone. It's not about flashiness — it's about intentionality and institutional credibility.**
