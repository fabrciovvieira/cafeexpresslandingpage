/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    backgroundImage: {
      'bgHero': "url('/bgfinalteste.png')",
      'menuBg': "url('/menubg.png')",
      'feedBackBg': "url('/feebbackBg.png')",
      'logoCafe': "url('/logoCafe.png')",
      'bgFoto1': "url('/foto1.png')",
      'bgFoto2': "url('/foto2.png')",
      'lastBg': "url('/lastBg.png')",
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
        background2: "##FFF2E4",
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

