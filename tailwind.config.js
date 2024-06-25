/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      primary: 'Open Sans',
      secondary: 'Montserrat',
      tertiary: 'DM Sans',
      familyRob: 'Roboto',
    },
    container: {
      padding: {
        DEFAULT: '15px',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
    },
    extend: {
      backgroundImage: {
        'backImg': "url('./assets/bgImg.jpg')",
        'aboutImg':"url('./assets/ex.jpg')"
      },

      colors: {
      accent: '#B809C3',
      borderOr:'#F56539' ,
},
    },
  },
  plugins: [],
}
