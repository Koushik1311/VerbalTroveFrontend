/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        Quote: ['Barriecito', 'cursive'],
        QuoteC: ['Cardo', 'serif'],
        Author: ['Lora', 'serif'],
        roboto: ['Roboto', 'sans-serif']
      }
    },
  },
  plugins: [],
}

