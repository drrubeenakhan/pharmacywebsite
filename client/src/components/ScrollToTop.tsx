import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * ScrollToTop: Scrolls the page to the top whenever the route changes.
 * Without this, clicking a link to a new page would keep the scroll
 * position from the previous page.
 */
export default function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [pathname]);

    return null;
}
