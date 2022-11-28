const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {
      colors: {
        primary: "#212121",
        secondary: "#313131",
        background: "#101010",
        accent: "#53aedd",
        text: "#eeeeee"
      },
    },
  },

  plugins: [],
};

module.exports = config;
