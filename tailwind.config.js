/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './src/**/*.{html,js,jsx,ts,tsx}', // Caminho para seus arquivos
    ],
    theme: {
      extend: {
        fontFamily: {
          sans: ['Poppins', 'sans-serif'],
        },
        colors: {
          primary: '#333333',  // cor primária
          secondary: '#3D3D3D', // cor secundária
        },
      },
    },
    plugins: [],
  }
  