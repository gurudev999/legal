const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  darkMode: ['class'],
  content: [],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f1f7ff',
          100: '#e0eefe',
          200: '#bedafa',
          300: '#95c0f7',
          400: '#4f97ef',
          500: '#1f6fde',
          600: '#0f51bb',
          700: '#0d4198',
          800: '#0e3577',
          900: '#0c2d61',
        },
      },
      fontFamily: {
        sans: ['Inter', ...fontFamily.sans],
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
