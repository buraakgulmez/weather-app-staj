/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  purge: ["./public/index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  content: [],
  theme: {
    extend: {
      colors: {
        blue: {
          light: "#8FB2F5",
        },
        gray: {
          900: "#13131A",
          800: "#16161F",
          700: "#1C1C27",
          600: "#13131A",
          500: "#3B3B54",
          400: "#7F7F98",
          300: "#13131A",
          200: "#BFBFD4",
          100: "#FAFAFA",
        },
      },
      backgroundImage: {
        primary: "url('assets/images/background.png')",
        detail: "url('assets/images/detail-background.png')",
      },
      fontSize: {
        s: "0.813rem",
      },
    },
  },
  plugins: [],
};
