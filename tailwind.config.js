/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    backgroundImage: {
      'bgHero': "url('./src/assets/bgfinalteste.png')",
      'menuBg': "url('./src/assets/menubg.png')",
      'feedBackBg': "url('./src/assets/feebbackBg.png')",
      'logoCafe': "url('./src/assets/logoCafe.png')",
      'bgFoto1': "url('./src/assets/foto1.png')",
      'bgFoto2': "url('./src/assets/foto2.png')",
      'lastBg': "url('./src/assets/lastBg.png')",
    },
    screens: {
      'phone2': {'max': '380px'},
      'phone': {'max': '900px'},
      'ipad': {'max': '768px'},
      'tablet800': {'max': '830px'},
      'tablet': {'max': '1024px'},
      'laptop': {'max': '1100px'},
      'desktop': {'max': '1280px'},
    },
    extend: {
      colors: {
        background: "#DFCCB6",
        fontColours: "#422218",
      },
      fontFamily: {
        Cormorant: ['Cormorant', 'serif'],
        raleway: ['raleway', 'serif'],
      },
    },
  },
  plugins: [],
}

