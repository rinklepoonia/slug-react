/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
       colors: {
        "light-white": "#f5f5f5",
        "light-green": "#00FF66",
        grey: "#A0BCE0",
        "light-red": "#E07575",
        "off-blue": "#3E8BBE",
        blue: "#02428D",
        "light-grey": "#676767",
        "pale-grey":"#EFEFEF",
        
      },
       lineHeight: {
        120:"120%",
        100: "100%",
        142: "142%",
        133: "133%",
        126: "126%",
        155:"155%",
      },
    },
  },
  plugins: [],
}