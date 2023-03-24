/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sequelLight: ["sequel-light"],
        sequelBold: ["sequel-bold"],
      },
    },
  },
  plugins: [],
};
