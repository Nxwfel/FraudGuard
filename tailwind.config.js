/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'background': "url('./background.jpg')",
        'background2': "url('./background2.jpg')",
        'background3': "url('./background3.jpg')",
      },

      fontFamily:{
        textfont : ['Poppins', 'serif'],
        textfont2 : ['Bebas Neue', 'serif'],
      },
    },
  },
  plugins: [],
}

