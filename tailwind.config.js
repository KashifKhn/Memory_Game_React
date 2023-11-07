/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'orange-dark': '#FF6D00',
        'orange-light': '#FFBB89'
      },
      fontFamily: {
        Creepy: ['Creepy', 'sans'],
        Lunacy: ['Lunacy', 'sans']
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-6deg)' },
          '50%': { transform: 'rotate(6deg)' },
        },
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}

