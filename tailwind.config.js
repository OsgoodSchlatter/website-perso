/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
  zIndex: {
    1: 1,
    2: 2,
    modal: 70,
    popover: 80,
    tooltip: 90,
  },
};
