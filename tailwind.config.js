/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#FFFFFF",
        black: "#000000",
        grey: {
          0: "#E0E5EE",
          1: "#ADB8C8",
          2: "#91A0B6",
          3: "#78787A",
          4: "#262626",
          5: "#242424",
          6: "#C4C4C4",
        },
        primary: {
          hero: "#04BF9429",
          text: "#04BF94",
        },
        secondary: {
          bg: "",
        },
      },
      fontFamily: {
        sans: [
          "Poppins",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
      },
      fontSize: {
        xs: ["14px", "20px"],
        s: ["14px", "24px"],
        sm: "16px",
        base: ["16px", "24px"],
        m: "18px",
        md: "24px",
        lg: "32px",
        xl: "48px",
      },
    },
  },
  plugins: [],
};
