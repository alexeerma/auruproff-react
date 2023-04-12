/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
      extend: {
        colors: {
          primary: "#A9824A",
          secondary: "#EDE8E5",
          conferehele: "#E7DCCD",
          navtrans: "rgba(169, 130, 74, 0.7)",
          dimWhite: "rgba(255, 255, 255, 0.7)",
          dimBlue: "rgba(9, 151, 124, 0.1)",
        },
        fontFamily: {
          poppins: ["Poppins", "sans-serif"],
          displayfair: ["Playfair Display", "serif"],
          nunito: ["Nunito Sans", "sans-serif"],
        },
      },
      screens: {
        xs: "480px",
        ss: "620px",
        sm: "768px",
        md: "1080px",
        lg: "1200px",
        xl: "1700px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/avaleht.png')",
      },
    },
    plugins: [],
  };