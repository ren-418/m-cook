const { background } = require('storybook/internal/theming');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      background: "#F4F4F4",
      primary: {
        500: "#17A68E",
        600: "#128572"
      },
      neutral: {
        white: "#FFFFFF",
        100: "#EBECED",
        black: "#000000",
      }
    },
    fontSize: {
      headline:{
        1: ['32px', { lineHeight: '40px' }],
        2: ['28px', { lineHeight: '32px' }]
      },
      body: ['16px', { lineHeight: '20px' }],
    }
  },
  plugins: [],
}
