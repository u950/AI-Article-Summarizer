/** @type {import('tailwindcss').Config} */
export default {
  content: [
    '+./index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily:{
        satoshi: ["Sathosi", "san-serif"],
        inter: ["Inter", "san-serif"],
      }
    },
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer')
  ],
}

