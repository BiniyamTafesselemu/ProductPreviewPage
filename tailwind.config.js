/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors:{
        'custom-cream': "hsl(30, 38%, 92%)",
        'cyan': "hsl(158, 36%, 37%)",
        'darkblue': " hsl(212, 21%, 14%)"
      },
      fontFamily: {
        fraunces: ['Fraunces', 'serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      }, 
    },
  },
  plugins: [],
}

