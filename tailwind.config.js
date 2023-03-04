/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'OpenSans': ['Open Sans', 'sans-serif']
        
      },
      colors: {
        'mc-red' :'#FC5A5A',
        'mc-creme':'#FFF9F9',
        'mc-green':'#6BB4BB',
        'mc-blue':'#003554',
        'mc-black1':'#18181B',
        'mc-blue2':'#1F2A40',

       }
    },
    
      
  },
  plugins: [],
};
