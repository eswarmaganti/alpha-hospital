const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gray: colors.warmGray,
        sky: colors.sky,
        cyan: colors.cyan,
        primary: "#fb8500",
        secondary: "#ca6702",
        primaryDark: "#b35f00",
      },
    },
    fontFamily: {
      sans: ["Inter"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
