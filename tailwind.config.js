/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgEscuro: '#000000',
        cardEscuro: '#0a0a0a',
        bordaEscura: '#262626',
        roseDestaque: '#e11d48',
        brancoDestaque: '#f4f4f5',
      }
    },
  },
  plugins: [],
}