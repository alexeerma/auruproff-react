/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
      extend: {
        colors: {
          primary: "#183efa",
          secondary: "#ededed",
          conferehele: "#E7DCCD",
          blockhele: "rgba(230,235,255,255)",
          navtrans: "rgba(24, 62, 250, 0.6)",
          dimWhite: "rgba(255, 255, 255, 0.7)",
          dimBlue: "rgba(9, 151, 124, 0.1)",
          fblue: "#183EFAF0",
          colblue: '#183EFA24',
        },
        
        fontFamily: {
          poppins: ["Poppins", "sans-serif"],
          
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
        "hero-pattern": "url('/src/assets/Slide1.png')",
        "contact-pattern": "url('/src/assets/A_taustagraafika.jpeg')",
        "tgraafika": "url('src/assets/graafika2.png')",
        "vali-bg" : "url('src/assets/Siselahendused-aur.jpg')",
        "surv-bg" : "url('src/assets/valilahendused.jpg')",
      },
    },
    plugins: [],
  };