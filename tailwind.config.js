/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'hero-background': "url('/src/assets/images/runze-shi-unsplash.jpg')",
      }

    },
  },
  plugins: [],
}

