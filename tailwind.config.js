/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      primaryColor: "#ffffff",
      blackColor: "#000000",
      baseSecondary: "#E11D48",
      secondaryColor: "#BE123C",
      blueColor: "#8B5CF6",
    },
  },
  plugins: [require("daisyui")],
};
