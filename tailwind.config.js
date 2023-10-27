/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')


export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      fontFamily: {
        'sans': ['"Proxima Nova"', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'dark-navy': '#242742',
        'pale-navy': '#36384D',
        'vermellion': '#FF6155',

      },
    },
  },
  plugins: [],
}

