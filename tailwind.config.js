module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        noto: ["Noto Serif JP", "serif"],
        nunito: ["Nunito Sans", "sans"],
      },
      screens: {
        xxs: "320px",
        xs: "480px",
      },
      fontSize: {
        xxs: "0.625rem",
      },
    },
  },
  plugins: [],
};
