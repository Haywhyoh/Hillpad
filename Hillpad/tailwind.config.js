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
      '2xs': '414px',
      ...defaultTheme.screens,
    },
    colors: {
      
      'white': '#FFFFFF',
      'orange': '#FF5757',
      'nav_black': '#454056',
      'black': '#1f1b2d',
      'light_black': '#666276',
      'green': '#07c98b',
      'light': '#FF5757',
      'deep_blue': '#5d3cf2',
      'yellow': '#fdbc31',
      'grey': 'rgba(67, 89, 113)',
      'navy_blue': '#1F1B2D',
      'blue': '#3B5998',
      'red': '#FF0000',
      'border_white': '#efecf3',
      
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
    width: {
      '65': '16.5rem',
      '50': '12.5rem',
      '70': '17.0rem',
      '73': '18.3rem',
      '74': '18.5rem',
      '76': '19rem',
      '78': '20rem',
      '84': '21.5rem',
      '100': '30rem',
      '110': '38rem',
      '88': '23rem',
      '54p': '54%', 
      '98': '26rem',
      'card': '19.1rem',
    },
    height:{
      'card':'440.56px',
      'card2':'480px',
      'imgHeight': '199.73px',
    },
    screens: {
      '2xl': '1440px',
      '3xl': '1560px',
    },
    maxWidth: {
      '8xl': '1440px',
      '9xl': '1560px',
      'full': '1320px',  
    },
    bottom: {
      '68': '18rem',
    }
  },
  plugins: [require("tw-elements/dist/plugin.cjs")],
}
}