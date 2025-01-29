import '../css/app.css';
import './bootstrap';

import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createRoot, hydrateRoot } from 'react-dom/client';
import { CSSTransition, SwitchTransition } from 'react-transition-group';

const appName = import.meta.env.VITE_APP_NAME || 'Pelican Custom Joinery';

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
    },
    progress: {
        color: '#1B2B5B',
        showSpinner: true,
    },
});
