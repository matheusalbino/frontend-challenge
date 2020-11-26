const plugin = require('tailwindcss/plugin');

module.exports = {
  purge: ['./src/**/*.tsx', './src/**/*.css'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: '320px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    colors: {
      transparent: 'transparent',
      white: '#ffffff',
      black: '#000000',
      primary: {
        default: '#2f0708',
        light: '#e11924',
        medium: '#752e32',
      },
    },
    extend: {
      backgroundOpacity: {
        10: '0.1',
      },
      backgroundPosition: {
        'center-top': 'center top',
      },
    },
  },
  variants: [
    'responsive',
    'group-hover',
    'group-focus',
    'focus-within',
    'first',
    'last',
    'odd',
    'even',
    'hover',
    'focus',
    'active',
    'visited',
    'disabled',
  ],
  plugins: [
    plugin(({ addComponents, theme }) => {
      const container = {
        '.container': {
          maxWidth: theme('screens.xl'),
          margin: '0 auto',
        },
      };

      const containerMediaQueries = {
        [`@media (max-width: ${theme('screens.xl')})`]: {
          '.container': {
            padding: `0 ${theme('padding.4')}`,
          },
        },
      };

      addComponents([container, containerMediaQueries]);
    }),
  ],
};
