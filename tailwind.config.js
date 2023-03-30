/** @type {import('tailwindcss').Config} */
module.exports = {
  mode:"jit",
  content: ["./pages/*.{html,js,jsx}",
  "./components/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {},
  },
  plugins: [require("tailwind-scrollbar-hide")],
}
