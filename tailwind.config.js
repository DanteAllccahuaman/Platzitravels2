/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{html,js}"],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage:{
        'bali': "url('../img/bali.jpg')",
        'chicago': "url('../img/chicago.jpg')",
        'europe': "url('../img/.jpg')",
        'iceland': "url('../img/iceland.jpg')",
        'la': "url('../img/LA.jpg')",
        'miami': "url('../img/miami.jpg')",
        'new_york': "url('../img/new_york.jpg')",
        'norway': "url('../img/norway.jpg')",
        'sanFrancisco': "url('../img/sanFrancisco.jpg')",
        'sanFranciscoDesktop': "url('../img/sanFranciscoDesktop.jpg')",
        'seattle': "url('../img/seattle.jpg')",
        'switzerland': "url('../img/switzerland.jpg')",
        'sydney': "url('../img/sydney.jpg')",
        'yosemite': "url('../img/yosemite.jpg')"
      },

      backgroundColor: theme => ({
        ...theme('colors'),
        'primary': '#CC2D4A',
        'secondary': '#8FA206',
        'terciary': '#61AEC9'
      }
      ),

      textColor:{
        'primary': '#CC2D4A',
        'secondary': '#8FA206',
        'terciary': '#61AEC9'
      },

      fontFamily:{
        Monstserrat: ['Monstserrat', 'sans-serif']
      }
    },
  },

  variants:{
    width: ["responsive", "hover", "focus"],
    extend:{},
  },

  plugins: [],
}