// tailwind.config.js

module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cstm_dark_bg: "#1A1A1A",
        cstm_purple: "#723FEB",
        cstm_blue: "#0052FF",
        cstm_white: "#FCFCFC",
      },
    },
  },
  plugins: [],
};
