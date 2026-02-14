import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOHeadProps {
    title: string;
    description: string;
    canonical?: string;
    ogType?: string;
}

const BASE_URL = 'https://golflinkspharmacy.ca';

/**
 * SEOHead: Updates document head with per-page SEO metadata.
 * In a Vite SPA without SSR, this is the standard approach for unique
 * title/description per route. For full SSR support, migrate to react-helmet-async.
 */
export default function SEOHead({ title, description, canonical, ogType = 'website' }: SEOHeadProps) {
    const { pathname } = useLocation();
    const canonicalUrl = canonical || `${BASE_URL}${pathname}`;

    useEffect(() => {
        // Title
        document.title = title;

        // Meta description
        let metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
            metaDesc.setAttribute('content', description);
        }

        // Canonical
        let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
        if (link) {
            link.href = canonicalUrl;
        }

        // OG tags
        const ogUpdates: Record<string, string> = {
            'og:title': title,
            'og:description': description,
            'og:url': canonicalUrl,
            'og:type': ogType,
            'twitter:title': title,
            'twitter:description': description,
            'twitter:url': canonicalUrl,
        };

        Object.entries(ogUpdates).forEach(([property, content]) => {
            let meta = document.querySelector(`meta[property="${property}"]`);
            if (meta) {
                meta.setAttribute('content', content);
            }
        });
    }, [title, description, canonicalUrl, ogType]);

    return null;
}
