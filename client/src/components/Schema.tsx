import { useEffect } from 'react';

export interface SchemaProps {
    data: Record<string, any>;
    scriptId?: string;
}

/**
 * Schema: Injects a JSON-LD schema script into the document head.
 * Cleans up on unmount.
 */
export default function Schema({ data, scriptId = 'json-ld-schema' }: SchemaProps) {
    useEffect(() => {
        if (!data) return;

        // Create specific ID for this schema instance to allow multiple schemas per page
        const id = scriptId;

        let script = document.getElementById(id) as HTMLScriptElement;
        if (!script) {
            script = document.createElement('script');
            script.id = id;
            script.type = 'application/ld+json';
            document.head.appendChild(script);
        }

        // Ensure context is set
        const schema = {
            '@context': 'https://schema.org',
            ...data
        };

        script.text = JSON.stringify(schema);

        return () => {
            const existing = document.getElementById(id);
            if (existing) {
                existing.remove();
            }
        };
    }, [data, scriptId]);

    return null;
}
