import '../css/app.css';
import './bootstrap';

import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createRoot, hydrateRoot } from 'react-dom/client';
import { CSSTransition, SwitchTransition } from 'react-transition-group';

const appName = import.meta.env.VITE_APP_NAME || 'Pelican Custom Joinery';

// Helper function to handle anchor links
const handleAnchorLinks = () => {
    document.addEventListener('click', (e) => {
        // Check if clicked element or any of its parents is an anchor link
        const findAnchorLink = (element: HTMLElement | null): HTMLAnchorElement | null => {
            if (!element || element === document.body) return null;
            if (element.tagName === 'A' && element.getAttribute('href')?.includes('#')) return element as HTMLAnchorElement;
            return findAnchorLink(element.parentElement);
        };

        const anchorLink = findAnchorLink(e.target as HTMLElement);
        if (!anchorLink) return;

        const href = anchorLink.getAttribute('href');
        if (!href || !href.includes('#')) return;

        // Check if link is a same-page anchor
        const currentPath = window.location.pathname;
        const linkPath = href.split('#')[0] || '/';
        const anchor = href.split('#')[1];

        if (
            (currentPath === linkPath || 
            (currentPath === '/' && (linkPath === '/' || linkPath === '')) ||
            (currentPath.endsWith('/') && linkPath === currentPath.slice(0, -1)) ||
            (!currentPath.endsWith('/') && linkPath === currentPath + '/'))
            && anchor
        ) {
            // Prevent default action
            e.preventDefault();

            // Find the element
            const element = document.getElementById(anchor);
            if (element) {
                // Update URL
                window.history.pushState({}, '', href);
                
                // Scroll to element
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
};

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.tsx`,
            import.meta.glob('./Pages/**/*.tsx'),
        ),
    setup({ el, App, props }) {
        const PageWrapper = ({ children }: { children: React.ReactNode }) => (
            <div className="page-wrapper">
                <SwitchTransition mode="out-in">
                    <CSSTransition
                        key={props.initialPage.url}
                        timeout={500}
                        classNames="page-transition"
                        unmountOnExit
                    >
                        <div className="page">
                            {children}
                        </div>
                    </CSSTransition>
                </SwitchTransition>
            </div>
        );

        const EnhancedApp = () => (
            <PageWrapper>
                <App {...props} />
            </PageWrapper>
        );

        if (import.meta.env.SSR) {
            hydrateRoot(el, <EnhancedApp />);
            return;
        }

        createRoot(el).render(<EnhancedApp />);
        
        // Add event listener for anchor links
        handleAnchorLinks();
    },
    progress: {
        color: '#1B2B5B',
        showSpinner: true,
    },
});
