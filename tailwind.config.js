/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'home': "url('/src/assets/background.png')",
        'home2': "url('/src/assets/bg-Home2.png')",
        'home3': "url('/src/assets/bg-home3.jpg')",
        'home4': "url('/src/assets/bg-Home4.png')",
        'custom-gradient': 'linear-gradient(270deg, #295C7A -1.04%, #0072B5 100%)',
      },
      colors: {
        'skin-tone': '#F6E4D7',
        'custom-gold': '#D0A144',
        'custom-blue': '#295C7A',
        'custom-dark-blue': '#252B42',
      },
    },
  },
  plugins: [],
}

