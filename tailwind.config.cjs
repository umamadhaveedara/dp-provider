/** @type {import('tailwindcss').Config}*/
const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {
      colors: {
        'headertextbg': '#778bdf',
        'logobg':'#eef8fe',
        'labelcolor':'#425670',
        'loginbtn':'#30bed1',
        'linkcolor':'#1eb9cd',
        'bordercolor':'#cdc5c5'
      },
      spacing: {
        '79': '38.3rem',
      },
      fontFamily: {
        Satoshi: ['Satoshi'],
      },
    },
  },

  plugins: [],
};

module.exports = config;
