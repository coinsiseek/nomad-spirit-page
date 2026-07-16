import type { Config } from 'tailwindcss';

const config: Config = {
    darkMode: 'class',
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['var(--font-inter)', 'sans-serif'],
                display: ['var(--font-bebas)', 'sans-serif'],
            },
            colors: {
                brand: {
                    black: '#0a0a0a',
                    red: '#c8102e',
                    redHover: '#a00d25',
                    white: '#f5f5f0',
                    charcoal: '#121212',
                    card: '#161616',
                    border: '#2a2a2a',
                    textSecondary: '#a0a0a5',
                }
            },
            backdropBlur: {
                xs: '2px',
            },
            backgroundColor: {
                'glass': 'rgba(30, 30, 40, 0.6)',
            },
            borderColor: {
                'glass': 'rgba(255, 255, 255, 0.1)',
            }
        },
    },
    plugins: [],
};

export default config;