/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'kvb': {
          'primary': '#8B5CF6',    // Violet principal
          'secondary': '#7C3AED',  // Version plus foncée
          'dark': '#6D28D9',      // Version très foncée pour le footer
          'gray': '#F3F4F6',      // Gris clair pour les fonds
          'light': '#A78BFA',     // Version plus claire pour les accents
        }
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(to right, #8B5CF6, #7C3AED)',
        'gradient-hover': 'linear-gradient(to right, #7C3AED, #6D28D9)',
      },
      animation: {
        'float': 'float 15s ease-in-out infinite',
        'pulse-shadow': 'pulse 2s infinite',
      },
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
      },
      transformStyle: {
        'preserve-3d': 'preserve-3d',
      }
    },
  },
  plugins: [],
};