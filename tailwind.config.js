/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'BR-sonoma': ["BR-sonoma", "sans-serif"],
        'BR-sonoma-semi-bold': ["BR-sonoma-semi-bold", "sans-serif"],
        'BR-sonoma-medium': ["BR-sonoma-medium", "sans-serif"],
        'BR-sonoma-bold': ["BR-sonoma-bold", "sans-serif"],
      },
    },
  },
  plugins: [],
}
