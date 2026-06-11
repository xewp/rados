/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: '#D4A017',
          light: '#E8B82A',
          dark: '#B8860B',
          amber: '#C8790A',
        },
        charcoal: {
          DEFAULT: '#1B1B1B',
          light: '#2D2D2D',
          medium: '#3A3A3A',
        },
        lechon: {
          brown: '#6B3E26',
          dark: '#4A2B19',
          light: '#8B5233',
        },
        cream: {
          DEFAULT: '#F7F2E9',
          dark: '#EDE5D5',
          light: '#FDFAF4',
        },
        papaya: '#6D8A3A',
      },
      fontFamily: {
        cinzel: ['Cinzel', 'serif'],
        poppins: ['Poppins', 'sans-serif'],
        oswald: ['Oswald', 'sans-serif'],
      },
      backgroundImage: {
        'grain': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E\")",
      },
      boxShadow: {
        'warm-sm': '0 2px 8px rgba(107, 62, 38, 0.12)',
        'warm': '0 4px 20px rgba(107, 62, 38, 0.15)',
        'warm-lg': '0 8px 40px rgba(107, 62, 38, 0.2)',
        'warm-xl': '0 16px 60px rgba(107, 62, 38, 0.25)',
        'gold': '0 4px 20px rgba(212, 160, 23, 0.3)',
        'gold-lg': '0 8px 40px rgba(212, 160, 23, 0.4)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'pulse-gold': 'pulseGold 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        pulseGold: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(212, 160, 23, 0.4)' },
          '50%': { boxShadow: '0 0 0 12px rgba(212, 160, 23, 0)' },
        },
      },
    },
  },
  plugins: [],
}
