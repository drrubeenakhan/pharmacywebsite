# Golf Links IDA Pharmacy - Vercel Optimized

## Overview
This is the Golf Links IDA Pharmacy website, optimized for Vercel deployment following the Vite Performance Playbook. The app achieves high Lighthouse scores through optimized font loading, proper caching headers, and a streamlined build process.

## Project Structure
```
.
├── client/                    # Frontend application
│   ├── src/
│   │   ├── components/ui/    # Reusable UI components
│   │   ├── App.tsx           # Main application component
│   │   ├── entry-client.tsx  # Client entry point (hydration)
│   │   ├── entry-server.tsx  # Server entry point (SSR)
│   │   └── index.css         # Tailwind CSS styles
│   └── index.html            # Optimized HTML template
├── shared/                    # Shared types
│   └── types.ts              # TypeScript interfaces
├── vite.config.ts            # Vite client config
├── vite.config.ssr.ts        # Vite SSR config
├── tailwind.config.ts        # Tailwind configuration
├── vercel.json               # Vercel deployment config
├── build-static.sh           # Production build script
└── package.json              # Dependencies
```

## Performance Optimizations Applied

### Font Loading (CLS = 0)
- Uses `display=optional` for zero layout shift
- Preconnects to Google Fonts origin
- Uses print media trick for non-blocking load

### Meta Tags & SEO
- Complete Open Graph and Twitter Card meta tags
- Schema.org JSON-LD for local business
- Proper canonical URLs
- robots.txt and sitemap.xml generation

### Caching Headers (vercel.json)
- 1-year immutable cache for static assets
- Proper cache headers for images, JS, and CSS

### Build Optimizations
- Single bundle (no code splitting for instant navigation)
- CSS not split (single file)
- esbuild minification
- ES2020 target for modern browsers

## Development Commands

```bash
# Development server
npm run dev

# Production build
npm run build

# Preview production build
npm run preview
```

## Deployment to Vercel

1. Connect the repository to Vercel
2. Vercel will auto-detect settings from vercel.json
3. Build command: `npm run build:client`
4. Output directory: `dist/public`

## Target Performance

- Lighthouse Desktop: 99/100
- Lighthouse Mobile: 87-90/100
- CLS: 0
- LCP: <2.5s mobile, <1.5s desktop

## Recent Changes
- November 25, 2025: Desktop Hero Section Background Enhancement
  - Added colorful handprints background image to hero section (desktop only)
  - Implemented fixed parallax background with `background-attachment: fixed`
  - Added subtle gradient scrim overlay for text readability
  - Background uses proper z-index layering with pointer-events: none
  - Responsive desktop scaling for widths: 1024px, 1280px, 1440px, 1680px, 1920px, 2560px
  - Mobile styling unchanged - background only appears at lg: (1024px+) breakpoint

- November 2024: Optimized for Vercel deployment using Vite Performance Playbook
  - Migrated from CDN Tailwind to proper Tailwind build
  - Added optimized HTML template with proper meta tags
  - Added vercel.json with caching headers
  - Restructured project for better organization
