/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        fraunces: ["Fraunces", "serif"],
      },
      colors: {
        "dark-grayish-blue": "#6c7289",
        "dark-cyan": "#3c8067",
      },
      letterSpacing: {
        1: ".25em",
      },
    },
  },
  plugins: [],
};
