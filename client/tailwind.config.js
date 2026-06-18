/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        display: ['4.5rem', { lineHeight: '1.05', letterSpacing: '-0.03em', fontWeight: '800' }],
        'display-sm': ['3.5rem', { lineHeight: '1.08', letterSpacing: '-0.025em', fontWeight: '800' }],
      },
      colors: {
        primary: {
          50: '#eef2ff',
          100: '#e0e7ff',
          200: '#c7d2fe',
          300: '#a5b4fc',
          400: '#818cf8',
          500: '#6366f1',
          600: '#4f46e5',
          700: '#4338ca',
          800: '#3730a3',
          900: '#312e81',
        },
        accent: {
          400: '#f472b6',
          500: '#ec4899',
          600: '#db2777',
        },
        surface: {
          DEFAULT: '#ffffff',
          muted: '#f8fafc',
          elevated: '#ffffff',
        },
        border: {
          DEFAULT: '#e2e8f0',
          subtle: '#f1f5f9',
        },
        text: {
          DEFAULT: '#0f172a',
          muted: '#64748b',
          subtle: '#94a3b8',
        },
      },
      boxShadow: {
        soft: '0 2px 40px -12px rgba(15, 23, 42, 0.08)',
        'soft-lg': '0 12px 48px -12px rgba(15, 23, 42, 0.12)',
        glow: '0 0 48px -8px rgba(79, 70, 229, 0.35)',
        'glow-lg': '0 0 80px -12px rgba(79, 70, 229, 0.45)',
        'glow-sm': '0 0 24px -4px rgba(79, 70, 229, 0.2)',
        'glow-accent': '0 0 40px -8px rgba(236, 72, 153, 0.35)',
        card: '0 1px 2px rgba(15, 23, 42, 0.04), 0 4px 20px rgba(15, 23, 42, 0.04)',
        'card-hover': '0 8px 16px rgba(15, 23, 42, 0.06), 0 20px 48px rgba(79, 70, 229, 0.12)',
        premium: '0 0 0 1px rgba(255,255,255,0.08), 0 24px 48px -12px rgba(79, 70, 229, 0.18)',
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'float-delayed': 'float 7s ease-in-out 1s infinite',
        'pulse-soft': 'pulse-soft 5s ease-in-out infinite',
        shimmer: 'shimmer 2.5s ease-in-out infinite',
        'gradient-shift': 'gradient-shift 8s ease infinite',
        'spin-slow': 'spin 3s linear infinite',
        aurora: 'aurora 12s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        'pulse-soft': {
          '0%, 100%': { opacity: 0.45, transform: 'scale(1)' },
          '50%': { opacity: 0.75, transform: 'scale(1.06)' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        aurora: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '33%': { transform: 'translate(30px, -20px) scale(1.05)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.95)' },
        },
      },
      transitionTimingFunction: {
        smooth: 'cubic-bezier(0.22, 1, 0.36, 1)',
        bounce: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
    },
  },
  plugins: [],
}
