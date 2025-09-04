/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#FFFFFF",
        black: "#000000",
        red: "#ED685C",
        gray: {
          0: "#E0E5EE",
          1: "#ADB8C8",
          2: "#91A0B6",
          3: "#78787A",
          4: "#262626",
          5: "#242424",
          6: "#C4C4C4",
        },
        primary: {
          light: "#04BF9429",
          dark: "#04BF94",
        },
        bg: {
          light: "#CFEDE6",
          dark: "#8CDECB",
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
