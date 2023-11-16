/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        '4366': '43.667%',
        '3766': '37.667%'
      }
    },
  },
  plugins: [],
}