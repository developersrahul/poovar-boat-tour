import animate from 'tailwindcss-animate';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        border: 'hsl(var(--border, 214.3 31.8% 91.4%))',
        input: 'hsl(var(--input, 214.3 31.8% 91.4%))',
        ring: 'hsl(var(--ring, 222.2 84% 4.9%))',
        background: 'hsl(var(--background, 0 0% 100%))',
        foreground: 'hsl(var(--foreground, 222.2 84% 4.9%))',
        primary: {
          DEFAULT: 'hsl(var(--primary, 222.2 47.4% 11.2%))',
          foreground: 'hsl(var(--primary-foreground, 210 40% 98%))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary, 210 40% 96.1%))',
          foreground: 'hsl(var(--secondary-foreground, 222.2 47.4% 11.2%))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive, 0 84.2% 60.2%))',
          foreground: 'hsl(var(--destructive-foreground, 210 40% 98%))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted, 210 40% 96.1%))',
          foreground: 'hsl(var(--muted-foreground, 215.4 16.3% 46.9%))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent, 210 40% 96.1%))',
          foreground: 'hsl(var(--accent-foreground, 222.2 47.4% 11.2%))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover, 0 0% 100%))',
          foreground: 'hsl(var(--popover-foreground, 222.2 84% 4.9%))',
        },
        card: {
          DEFAULT: 'hsl(var(--card, 0 0% 100%))',
          foreground: 'hsl(var(--card-foreground, 222.2 84% 4.9%))',
        },
        sage: {
          frame: '#adc2a9',
          pill: '#e3e8e1',
          soft: '#f4f7f3',
          muted: '#6c7a6b',
          50: '#f4f7f3',
          100: '#e3e8e1',
          200: '#cbd7c4',
          700: '#596654',
          800: '#3d4a37',
        },
        forest: {
          950: '#0a160c',
          900: '#122616',
          850: '#162d1b',
          800: '#1b3b22',
          700: '#264f2f',
          600: '#335f3a',
          500: '#44784d',
          400: '#61996b',
        },
        emerald: {
          400: '#34d399',
          500: '#10b981',
          600: '#059669',
          700: '#047857',
          800: '#065f46',
        },
        neera: {
          navy: '#06192e',
          'navy-deep': '#04101e',
          'navy-light': '#0c2744',
          bronze: '#b19d7f',
          'bronze-hover': '#9e8a6d',
          'bronze-light': '#c9b79b',
          'bronze-soft': '#f2ede4',
          sand: '#f5f3ef',
          'sand-dark': '#ede8e1',
          charcoal: '#0d0d0d',
          muted: '#6b7280',
        },
        gold: {
          500: '#c5a880',
          400: '#d4b993',
          300: '#e2cca8',
          100: '#f5efe6',
          50: '#faf7f2',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        display: ['"El Messiri"', '"El Messin"', 'sans-serif'],
        marcellus: ['"El Messiri"', '"El Messin"', 'sans-serif'],
        serif: ['"El Messiri"', '"El Messin"', 'sans-serif'],
        'el-messiri': ['"El Messiri"', '"El Messin"', 'sans-serif'],
      },
      letterSpacing: {
        'tighter-display': '-0.03em',
        'tight-display': '-0.015em',
        'snug-display': '0em',
        'wider-tag': '0.12em',
        'widest-tag': '0.2em',
      },
      borderRadius: {
        lg: 'var(--radius, 0.5rem)',
        md: 'calc(var(--radius, 0.5rem) - 2px)',
        sm: 'calc(var(--radius, 0.5rem) - 4px)',
        '2xl': '16px',
        '3xl': '24px',
        '4xl': '32px',
        '5xl': '40px',
      },
      boxShadow: {
        'hero-glass': '0 30px 60px -15px rgba(0, 0, 0, 0.55)',
        'canvas': '0 25px 70px rgba(12, 28, 15, 0.38)',
        'zoom-card': '0 10px 30px rgba(0, 0, 0, 0.12)',
      }
    },
  },
  plugins: [animate],
};
