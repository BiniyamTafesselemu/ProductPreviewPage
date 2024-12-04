/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors:{
        'custom-cream': "hsl(30, 38%, 92%)"
      }
    },
  },
  plugins: [],
}

