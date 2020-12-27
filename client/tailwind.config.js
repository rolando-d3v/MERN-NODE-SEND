const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./pages/**/*.js', './components/**/*.js'],
  darkMode: 'class',
  theme: {
    extend: {
      // fontFamily: {
      //   sans: ["Oswald", "sans-serif"],
      // },
      colors: {
          rose: colors.rose,
          pink: colors.pink,
          orange: colors.orange,
          cyan: colors.cyan,
          fuchsia: colors.fuchsia,
          purple: colors.purple,
          violet: colors.violet,
          indigo: colors.indigo,
          lightBlue: colors.lightBlue,
          teal: colors.teal,
          emerald: colors.emerald,
          lime: colors.lime,
          amber: colors.amber,
          green: colors.green,
          red: colors.red,
  
          warmGray: colors.warmGray,
          trueGray: colors.trueGray,
          coolGray: colors.coolGray,
          blueGray: colors.blueGray,
          gray: colors.gray,

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
