/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        comic: ['"Bangers"', 'cursive'],
        orbit: ['"Orbitron"', 'sans-serif'],
      },
      keyframes: {
        zoom: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
        },
      },
      animation: {
        zoom: 'zoom 3s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}
