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
      tertiary: 'Merriweather',
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
        'backImg': "url('./assets/bgImg.jpg')", // Ensure the correct path to your image
        'aboutImg':"url('./assets/ex.jpg')"
      },

      colors: {
        primary: '#808080',
        accent: '#B809C3',
        grayMiddle: '#0a0a0a', 
        white: '#FFFFFF',
        green:'[#009e66]'     
      },
    },
  },
  plugins: [],
}
