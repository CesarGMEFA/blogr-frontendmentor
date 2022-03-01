module.exports = {
  content: [
    './index.html',
  ],
  theme: {
    fontFamily: {
      Overpass: ['Overpass', 'sans-serif'],
      Ubuntu: ['Ubuntu', 'sans-serif']
    },
    extend: {
      colors: {
        CTAtext: 'hsl(356, 100%, 66%)',
        CTAhover: 'hsl(355, 100%, 74%)',
        headings: 'hsl(208, 49%, 24%)',
        neutral: {
          white: 'hsl(0, 0%, 100%)',
          'footer-text': 'hsl(240, 2%, 79%)',
          darkGrayish: 'hsl(207, 13%, 34%)',
          darkBlack: 'hsl(240, 10%, 16%)',
        },
        gradient: {
          veryLightRed: 'hsl(13, 100%, 72%)',
          lightRed: 'hsl(353, 100%, 62%)',
          veryDarkGrayBlue: 'hsl(237, 17%, 21%)',
          veryDarkDesaturatedBlue: 'hsl(237, 23%, 32%)',
        },
      }
    },
  },
  plugins: [],
}
