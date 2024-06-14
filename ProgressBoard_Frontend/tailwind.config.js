/** @type {import('tailwindcss').Config} */
export default {
  darkMode : 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      fontFamily:{
        'poppins' : ['Poppins' , 'sans-serif']
      },
      colors:{
        primary : '#aa0f44',
        // primary : '#24689c',
        secondary : '#f4f4f5',
        background : '#F0F8FF',
        text : '#1a1a1a',
        text2 : '#FFFFFF',
        card:'#F9F6EE',

        dark : {
          background : '#1a1a1a',
          secondary : '#2c2c2c',
          text : '#F0F8FF',
          text2 : '#000',
          card : '#343434'
        }
      }
    },
  },
  variants :{
    extend:{
      backgroundColor:['dark'],
      textColor : ['dark']
    }
  },
  plugins: [],
}
