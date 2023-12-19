//tailwinfd uses this file to convert those that you have wriiten in html to convert into css


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {


    fontSize: {
      mammoth: '8rem'
    },
    extend: {
      colors:{
        primary: '#FF6363',
        secondary: {
          100: '#E2E2D5',
          200: '#888883'
        }
      }
    },

    fontFamily: {
      body: ['Nunito']
    }
  },
  plugins: [],
}