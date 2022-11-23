/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'CardH':['Public Sans', "sans-serif"],
      },
      colors:{
        // para:'#005249'
        baseC:'#00AB55'
      }
    },
  },
  plugins: [require("daisyui")],
}