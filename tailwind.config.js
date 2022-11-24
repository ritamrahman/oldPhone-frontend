/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      primaryColor: "#ffffff",
      baseSecondary: "#E11D48",
      secondaryColor: "#BE123C",
    },
  },
  plugins: [require("daisyui")],
};
