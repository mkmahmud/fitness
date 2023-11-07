/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      bebasNeue: ["Bebas Neue", "sans-serif"],
      poppins: ["Poppins", "sans-serif"],
      roboto: ["Roboto", "sans-serif"],
    },
    colors: {
      main: "#ff4d37",
      blackGray: "#212025",
      sky: "#f7fdff",
      white: "#FFFFFF",
      black: "#000000",

      //
      red: "#ff1313",
      gray: "#c4c4c4",
      orange: "#f04e3c",
      whiteGray: "#ededed",
      blue: "#112957",
      whiteGray: "#e9f0f4",
      borderColor: "#e5e6e9",
      lightGreen: "#90EE90",
    },
    fontSize: {
      xs: "0.75rem", // 12 pixels - Extra small font size
      sm: "0.875rem", // 14 pixels - Small font size
      base: "1rem", // 16 pixels - Default font size
      lg: "1.125rem", // 18 pixels - Large font size
      xl: "1.25rem", // 20 pixels - Extra large font size
      large: "1.5rem", // 24 pixels - 2x large font size
      extraLarge: "2rem", //
    },
    extend: {},
  },
  plugins: [],
};
