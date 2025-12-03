/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        // Simple 16 column grid
        16: "repeat(16, minmax(0, 1fr))",
      },
      fontFamily: {
        fatkat: ["Fatkat"],
        sg: ["sg"],
      },
    },
  },
  plugins: [require("daisyui")],
  zIndex: {
    1: 1,
    2: 2,
    modal: 70,
    popover: 80,
    tooltip: 90,
  },
};
