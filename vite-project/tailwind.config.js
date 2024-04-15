/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily:{
      main: ["Silkscreen", 'sans-serif']
    },
   
    
    extend: {
        colors: {
          primary: '#00FF75',
          secondary: '#CCFF00',
          'bg-900' : '#09090b',
          'bg-800': '#353535'
        },
      }
    
  },
  plugins: [],
}

