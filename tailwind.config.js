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
      spacing: {
        "1px": "1px",
        "4px": "4px",
        "9px": "9px",
      },
      maxWidth: {
        container: "1074px",
        "522px": "522px",
      },
      height: {
        "364px": "364px",
        "267px": "267px",
      },
      width: {
        "522px": "522px",
      },
      borderRadius: {
        0.25: "0.25rem",
      },
      boxShadow: {
        "bottom-border": "0 2px 0 0 rgb(209,213,219)",
      },
      screens: {
        sm: { max: "375px" },
        md: { max: "767px" },
        lg: { max: "1074px" },
      },
    },
  },
  plugins: [],
};
