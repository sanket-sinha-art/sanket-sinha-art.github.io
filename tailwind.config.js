module.exports = {
  purge: [
    '*.html',
    '*/**.{html,css,js}'
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'body': '#212121',
        'selected-text': '#63B9FF',
        'theme': '#90CAF9',
        'nav': '#8899A6',
        'secondary': '#A9A9A9',
        'badge': '#3F3F51',
        'input-border': '#565666',
        'input': '#2A2A35'
      },
      fontFamily: {
        'nunito': ["'Nunito'", 'sans-serif']
      }
    },
  },
  variants: {
    extend: {},
  },

}
