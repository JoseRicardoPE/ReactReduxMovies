const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      lato: ["Lato", "sans-serif"],
    },
    extend: {
      colors: {
        "gray": "#F5F0F0",
      },
    },
  },
  plugins: [],
}
