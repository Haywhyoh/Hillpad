/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xs': '360px',
      ...defaultTheme.screens,
    },
    colors: {
      
      white: '#FFFFFF',
      'orange': '#FF5757',
      'text_black': '#1f1b2d',
      'light_black': '#666276',
      'green': '#07c98b',
      'light': '#FF5757',
      'deep_blue': '#5d3cf2',
      'yellow': '#fdbc31',
      'grey': 'rgba(255, 255, 255, .65)',
      'navy_blue': '#1F1B2D',
    },
    container: {
      center: true,
      padding: '2rem'
    },
    fontFamily: {
      'sans': ['"Noto Sans"', 'sans-serif', ...defaultTheme.fontFamily.sans],
      'body': ['"Noto Sans"']
    },
    backgroundImage: {
      'purple-gradient': "url('/src/assets/images/blur-gradient.svg')",
    },
    extend: {
      dropShadow: {
        '3xl': ' 0px 7px 29px 0px rgba(100, 100, 111, 0.2) '
    },
    screens: {
      '2xl': '1440px',
      '3xl': '1560px',
    },
    maxWidth: {
      '8xl': '1440px',
      '9xl': '1560px',
    }
  },
  plugins: [],
}
}