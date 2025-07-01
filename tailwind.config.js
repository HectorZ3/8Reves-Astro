export default {
  content: ["./src/**/*.{astro,html,js,ts}"],
  safelist: ["footer", "bubbles", "bubble"],
  theme: {
    extend: {
      colors: {
        utng: "#6CC7AE"
      },
      fontFamily: {
        sans: ['"Montserrat Variable"', "sans-serif"]
      }
    }
  },
  plugins: [],
};
