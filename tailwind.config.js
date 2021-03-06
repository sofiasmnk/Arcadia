/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        body: ['"Source Sans Pro"', 'sans-serif']
      },
      colors: {
        green: '#587F14',
        'green-light': '#A8BC85',
        'green-lighter': '#E9F0DC',
        brown: '#603813',
        'brown-light': '#CBC3AF',
        'brown-lighter': '#EDE9E4'
      }
    }
  },
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js'
    ]
  }
}
