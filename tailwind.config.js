/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark': '#1e1e1e',
      },
      aspectRatio: {
        'banner': '3.5 / 1'
      },
      fontFamily: {
        title: ['Josefin Sans', 'sans-serif'],
        body: ['Cardo', 'serif'],
        brand: ['MoonTime']
      }
    }
  },
  plugins: [],
}
