/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow:{
        '3xl': '0 0 20px rgba(0, 0, 0, 0.2)',
      }
    },
  },
  plugins: [],
}