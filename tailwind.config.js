/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Elevated from basic slate/gray - richer, more nuanced
        ink: {
          950: '#0a0a0f',
          900: '#12121a',
          800: '#1a1a24',
          700: '#25252f',
        },
        canvas: {
          50: '#fafafc',
          100: '#f4f4f7',
          200: '#e8e8ed',
        },
        // Accent: warm amber → cooler bronze for sophistication
        bronze: {
          600: '#c17d3a',
          700: '#a5632c',
          500: '#d4934f',
        },
        // Semantic (keep clean)
        emerald: {
          500: '#10b981',
        },
        blue: {
          500: '#3b82f6',
        },
      },
      fontFamily: {
        // Primary: Replace Inter with something distinctive but still refined
        // Using system fonts that feel more human, less corporate
        sans: [
          'SF Pro Display',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'sans-serif',
        ],
        // Monospace for version numbers, code snippets
        mono: [
          'JetBrains Mono',
          'Fira Code',
          'Menlo',
          'Monaco',
          'Courier New',
          'monospace',
        ],
      },
      letterSpacing: {
        tighter: '-0.02em',
        tight: '-0.01em',
        normal: '0',
        wide: '0.02em',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.5s ease-out forwards',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        glowPulse: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'soft-xl': '0 8px 32px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.08)',
        'soft-2xl': '0 16px 48px rgba(0, 0, 0, 0.16), 0 2px 4px rgba(0, 0, 0, 0.08)',
        'inner-glow': 'inset 0 1px 1px rgba(255, 255, 255, 0.1)',
      },
    },
  },
  plugins: [],
}
