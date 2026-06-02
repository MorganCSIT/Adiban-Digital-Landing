/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: {
          bg:             '#F8F8F8',
          surface1:       '#FFFFFF',
          surface2:       '#F2F2F2',
          heading:        '#0A0A0A',   // near-black, never pure
          text:           '#525252',   // zinc-600
          muted:          '#A3A3A3',   // zinc-400
          accent:         '#0077A8',   // desaturated teal
          'accent-subtle':'#EAF5FB',
          border:         '#E5E5E5',   // zinc-200
        },
      },
      fontFamily: {
        heading: ['Outfit', 'sans-serif'],
        body:    ['DM Sans', 'sans-serif'],
        mono:    ['JetBrains Mono', 'ui-monospace', 'monospace'],
      },

      // Soft Structuralism shadow system — diffused, never harsh
      boxShadow: {
        'soft-xs': '0 2px 8px -1px rgba(0,0,0,0.05)',
        'soft-sm': '0 4px 16px -2px rgba(0,0,0,0.06), 0 1px 4px -1px rgba(0,0,0,0.04)',
        'soft-md': '0 12px 32px -4px rgba(0,0,0,0.07), 0 2px 8px -2px rgba(0,0,0,0.04)',
        'soft-lg': '0 24px 56px -8px rgba(0,0,0,0.08), 0 4px 12px -3px rgba(0,0,0,0.04)',
        'soft-xl': '0 40px 80px -12px rgba(0,0,0,0.09), 0 8px 20px -4px rgba(0,0,0,0.05)',
        'inner-highlight': 'inset 0 1px 0 rgba(255,255,255,0.9)',
        'accent-glow':     '0 8px 32px -4px rgba(0,119,168,0.18)',
      },

      backgroundImage: {
        'grid-fine':
          "linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px)",
      },
      backgroundSize: {
        'grid-fine': '40px 40px',
      },

      borderRadius: {
        'squircle':    '2rem',
        'squircle-in': '1.625rem', // calc(2rem - 6px)
      },

      transitionTimingFunction: {
        // Soft-skill mandated spring cubic-bezier
        'spring': 'cubic-bezier(0.32, 0.72, 0, 1)',
        'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      transitionDuration: {
        '600': '600ms',
        '700': '700ms',
        '800': '800ms',
        '900': '900ms',
      },

      animation: {
        'pulse-dot':  'pulseDot 2s ease-in-out infinite',
        'float':      'float 7s ease-in-out infinite',
        'fade-up':    'fadeUp 0.8s cubic-bezier(0.32, 0.72, 0, 1) forwards',
        'fade-in':    'fadeIn 0.6s cubic-bezier(0.32, 0.72, 0, 1) forwards',
      },
      keyframes: {
        pulseDot: {
          '0%,100%': { opacity: '1',   transform: 'scale(1)' },
          '50%':     { opacity: '0.4', transform: 'scale(0.8)' },
        },
        float: {
          '0%,100%': { transform: 'translateY(0px)' },
          '50%':     { transform: 'translateY(-10px)' },
        },
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(20px)', filter: 'blur(6px)' },
          '100%': { opacity: '1', transform: 'translateY(0)',    filter: 'blur(0px)' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },

      typography: (theme) => ({
        DEFAULT: {
          css: {
            '--tw-prose-body':          theme('colors.brand.text'),
            '--tw-prose-headings':      theme('colors.brand.heading'),
            '--tw-prose-links':         theme('colors.brand.accent'),
            '--tw-prose-bold':          theme('colors.brand.heading'),
            '--tw-prose-counters':      theme('colors.brand.muted'),
            '--tw-prose-bullets':       theme('colors.brand.accent'),
            '--tw-prose-hr':            theme('colors.brand.border'),
            '--tw-prose-quotes':        theme('colors.brand.heading'),
            '--tw-prose-quote-borders': theme('colors.brand.accent'),
            '--tw-prose-code':          theme('colors.brand.accent'),
            '--tw-prose-pre-bg':        theme('colors.brand.surface2'),
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
