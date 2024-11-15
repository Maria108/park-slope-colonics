module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        customBlue: "#ABC8DE",
        customDarkBlue: "#637382",
        customGreen: "#B5C0AC",
        customDarkGreen: "#363e30",
        customPink: "#e1d7d0",
        customBeige: "#EBEFEE",
      },
      fontFamily: {
        comfortaa: ["ComfortaaLightFont", "sans-serif"], // Fallback to sans-serif
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/line-clamp")],
}
