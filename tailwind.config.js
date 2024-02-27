/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        "gray-black": "#1b1d1f",
        "primary-50": "#edeff6",
        lightsteelblue: "rgba(185, 191, 212, 0)",
        darkslategray: "#313131",
        "c-black-20": "#6e6e6e",
        silver: "rgba(196, 196, 196, 0.15)",
        black: "#000",
        fuchsia: "#f139ea",
        mediumslateblue: "#5347db",
        firebrick: "#c00000",
        turquoise: "#04d5bd",
        "color-1": "#f8f7f9",
        gray1: "#1e1e1e",
        slateblue: "#6441a5",
        whitesmoke: "rgba(248, 247, 249, 0.75)",
      },
      spacing: {},
      fontFamily: {
        "header-heading-4": "'Public Sans'",
        poppins: "Poppins",
        inter: "Inter",
        oswald: "Oswald",
      },
      borderRadius: {
        "31xl": "50px",
        "2xl": "21px",
        "12xs": "1px",
        "15xl": "34px",
      },
    },
    fontSize: {
      xs: "12px",
      "5xl": "24px",
      lgi: "19px",
      "2xl": "21px",
      "46xl": "65px",
      "20xl": "39px",
      "33xl": "52px",
      "6xl-7": "25.7px",
      xl: "20px",
      base: "16px",
      "mid-1": "17.1px",
      "41xl": "60px",
      "17xl": "36px",
      "29xl": "48px",
      "9xl": "28px",
      "3xl": "22px",
      lg: "18px",
      "47xl": "66px",
      "21xl": "40px",
      "34xl": "53px",
      inherit: "inherit",
    },
    screens: {
      mq1525: {
        raw: "screen and (max-width: 1525px)",
      },
      mq1225: {
        raw: "screen and (max-width: 1225px)",
      },
      mq850: {
        raw: "screen and (max-width: 850px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
