const { background } = require('storybook/internal/theming');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontSize: {
        h1: ['32px', { lineHeight: '40px', letterSpacing: '-1%', fontWeight: 800 }],
        h2: ['28px', { lineHeight: '32px', letterSpacing: '-1%', fontWeight: 600 }],
        h3: ['24px', { lineHeight: '28px', letterSpacing: '-1%', fontWeight: 600 }],
        h4: ['20px', { lineHeight: '24px', letterSpacing: '-1%', fontWeight: 600 }],
        body: ['16px', { lineHeight: '20px', letterSpacing: '-1%', fontWeight: 500 }],
        'body-b': ['16px', { lineHeight: '20px', letterSpacing: '-1%', fontWeight: 800 }],
        small: ['12px', { lineHeight: '15px', letterSpacing: '0%', fontWeight: 500 }],
        'small-b': ['12px', { lineHeight: '15px', letterSpacing: '0%', fontWeight: 800 }],
        'label-s': ['14px', { lineHeight: '20px', letterSpacing: '0%', fontWeight: 600 }],
        'label-m': ['16px', { lineHeight: '20px', letterSpacing: '0%', fontWeight: 600 }],
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
      boxShadow: {
        'card': '0px 0px 4px 1px rgba(0, 0, 0, 0.1), 0px 0px 1px 0px rgba(0, 0, 0, 0.5)',
        'footer': '0px 1px 4px 0px rgba(0,0,0,0.5)',
        'header': '0px -1px 4px 0px rgba(0,0,0,0.5)',
      }
    },
    colors: {
      transparent: "transparent",
      background: "#F4F4F4",
      primary: {
        50: "#E8F6F4",
        100: "#D1EDE8",
        200: "#A2DBD2",
        300: "#74CABB",
        400: "#45B8A5",
        500: "#17A68E",
        600: "#128572",
        700: "#0E6455",
        800: "#094239",
        900: "#05211C"
      },

      neutral: {
        white: "#FFFFFF",
        100: "#EBECED",
        200: "#D7D9DB",
        300: "#C2C6CA",
        400: "#AEB3B8",
        500: "#9AA0A6",
        600: "#7B8085",
        700: "#7B8085",
        800: "#222425",
        black: "#000000",
      },
      positive: {
        50: "#EAFAF1",
        100: "#D5F5E2",
        200: "#ABEBC6",
        300: "#81E0A9",
        400: "#57D68D",
        500: "#2DCC70",
        600: "#24A35A",
        700: "#1B7A43",
        800: "#12522D",
        900: "#092916"
      },
      negative: {
        50: "#FAE6E6",
        100: "#F1B3B3",
        200: "#E88080",
        300: "#DE4D4D",
        400: "#D51A1A",
        500: "#D00000",
        600: "#A60000",
        700: "#7D0000",
        800: "#530000",
        900: "#2A0000"
      },
      warning: {
        50: "#FFF7ED",
        100: "#FFEDD5",
        200: "#FED7AA",
        300: "#FDBA74",
        400: "#FC9947",
        500: "#FC8514",
        600: "#EB6A20",
        700: "#DA6802",
        800: "#7C2D12",
        900: "#581F07"
      },
      info: {
        50: "#F1F3FD",
        100: "#DEE3FB",
        200: "#C5D0F8",
        300: "#9DB2F3",
        400: "#6F8BEB",
        500: "#4A61E3",
        600: "#3946D7",
        700: "#2F34C6",
        800: "#2C2DA1",
        900: "#292B7F"
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
