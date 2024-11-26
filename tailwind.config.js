module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        customBlue: "#ABC8DE",
        customLigterBlue: "#e8eff6",
        customDarkBlue: "#829cae",
        customGreen: "#B5C0AC",
        customDarkGreen: "#363e30",
        customPink: "#e1d7d0",
        customBeige: "#EBEFEE",
      },
      fontFamily: {
        comfortaa: ["ComfortaaLightFont", "sans-serif"],
        comfortaaBold: ["ComfortaaBoldFont", "sans-serif"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
