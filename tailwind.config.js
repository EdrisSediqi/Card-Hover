/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      colors: {
        SoftBlue: 'hsl(215, 51%, 70%)',
        Cyan:'hsl(178, 100%, 50%)',
        VeryDarkBlue: 'hsl(217, 54%, 11%)',
        DarkBlue: 'hsl(216, 50%, 16%)',
        limeDarkBlue: 'hsl(215, 32%, 27%)',
        White: 'hsl(0, 0%, 100%)',
      },
      fontFamily: {
        sans: ['Outfit', 'san-serif']
      },
    },
  },
  plugins: [],
}

