/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'odysen-bg': '#08091E',
        'odysen-fg': '#fff',
        'odysen-subtext': '#767676',
        'odysen-accent': '#1ED78D',
      },
    },
  },
  plugins: [],
}