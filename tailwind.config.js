/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      padding: {
        DEFAULT: "2rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "7rem",
      },
    },
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      red: "#E54040",
      green: "#25A764",
      gray: "#E5E7EB",
      blue: "#0A68F4",
      black: "#000000",
      "gray-dark": "#929396"
    },
    extend: {},
  },
  plugins: [],
};
