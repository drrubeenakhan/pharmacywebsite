#!/bin/bash
set -e

echo "Starting production build..."

# 1. Clean previous builds
echo "Cleaning previous builds..."
rm -rf dist dist-ssr

# 2. Build client-side bundle
echo "Building client bundle..."
npx vite build

# 3. Generate robots.txt
echo "Generating robots.txt..."
cat > dist/public/robots.txt << 'EOF'
User-agent: *
Allow: /

Sitemap: https://golflinkspharmacy.ca/sitemap.xml
EOF

# 4. Generate sitemap
echo "Generating sitemap..."
cat > dist/public/sitemap.xml << 'EOF'
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://golflinkspharmacy.ca/</loc>
    <lastmod>2024-01-01</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://golflinkspharmacy.ca/services</loc>
    <lastmod>2024-01-01</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://golflinkspharmacy.ca/resources</loc>
    <lastmod>2024-01-01</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://golflinkspharmacy.ca/contact</loc>
    <lastmod>2024-01-01</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
</urlset>
EOF

echo "Build complete! Output in dist/public/"
