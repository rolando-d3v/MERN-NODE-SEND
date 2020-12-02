module.exports = {
  purge: ["./components/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class',
  important: true,
  theme: {
    extend: {
      // fontFamily: {
      //   sans: ["Oswald", "sans-serif"],
      // },
      colors: {
        "verde-x": "#17e9d7",

        azul: {
          100: "#f5f5f5",
          200: "#42424242",
          300: "#18202e",
          400: "#bdbdbd",
          500: "#9e9e9e",
          600: "#757575",
          700: "#616161",

          800: "#10131a",
          900: "#0c0a20",
        },
      },
      fontSize: {
        "31xl": "9rem",
      },
      height: {
        68: "17rem",
        72: "18rem",
        90: "25em",
      },
      width: {
        65: "17rem",
        66: "18rem",
        67: "19rem",
        68: "20rem",
        69: "21rem",
        70: "22rem",
        71: "23rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
