import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.tsx',
    ],

    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#0e3253',
                    light: '#1e4a75',
                    dark: '#071f35',
                },
                secondary: {
                    DEFAULT: '#d8b17e',
                    light: '#e6caa0',
                    dark: '#c29855',
                },
                light: '#f7f7f7',
                dark: '#121212',
                gray: {
                    custom: '#535353',
                },
            },
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
                heading: ['Playfair Display', 'serif'],
                body: ['Montserrat', 'sans-serif'],
            },
            transitionProperty: {
                'height': 'height',
                'spacing': 'margin, padding',
            },
            animation: {
                'fade-in': 'fadeIn 0.8s ease forwards',
                'slide-right': 'slideInRight 0.8s ease forwards',
                'slide-left': 'slideInLeft 0.8s ease forwards',
                'spin-slow': 'spin 3s linear infinite',
            },
            keyframes: {
                fadeIn: {
                    from: { opacity: 0, transform: 'translateY(20px)' },
                    to: { opacity: 1, transform: 'translateY(0)' },
                },
                slideInRight: {
                    from: { opacity: 0, transform: 'translateX(30px)' },
                    to: { opacity: 1, transform: 'translateX(0)' },
                },
                slideInLeft: {
                    from: { opacity: 0, transform: 'translateX(-30px)' },
                    to: { opacity: 1, transform: 'translateX(0)' },
                }
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'hero-pattern': "linear-gradient(to right, rgba(14, 50, 83, 0.8), rgba(14, 50, 83, 0.4))",
            },
            boxShadow: {
                'custom': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
                'custom-lg': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
            }
        },
    },

    plugins: [forms],
};
