/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
       fontFamily:{
        'roboto': ['Roboto','sans-serif'],
        'arima': ['Arima', 'sans-serif'],
       },
       screens: {
        'custom': '83.5rem',
      },
    },
  },
  plugins: [],
}

