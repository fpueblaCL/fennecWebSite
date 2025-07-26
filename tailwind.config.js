/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'fennec-black': '#121212',
        'fennec-dark': '#1E1E1E',
        'fennec-gray': '#2D2D2D',
        'fennec-light-gray': '#3D3D3D',
        'fennec-sand': '#D2B48C',
        'fennec-orange': '#FF8C00',
        'fennec-gold': '#DAA520'
      },
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
        'display': ['Montserrat', 'sans-serif']
      }
    },
  },
  plugins: [],
}
