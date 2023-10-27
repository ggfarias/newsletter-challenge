/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-navy': '#242742',
        'pale-navy': '#36384D',
        'vermellion': '#FF6155',
        
      },
    },
  },
  plugins: [],
}

