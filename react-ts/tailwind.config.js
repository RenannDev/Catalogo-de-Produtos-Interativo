/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        'cor-fundo': '#fefae0',
        'cor-texto': '#283618',
        destaques: '#bc6c25',
        'cor-elementos': '#dda15e',
        'cor-leve-texto': '#606c38',
      },
      gridTemplateColumns: {
        '2fr-1fr': '2fr 1fr',
      },
    },
  },
  plugins: [],
}

