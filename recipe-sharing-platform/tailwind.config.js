/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",                // <-- Add this
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"          // <-- Add this as ALX expects
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};