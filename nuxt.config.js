export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: 'Arcádia Cosméticos Naturais',
    htmlAttrs: {
      lang: 'pt-br'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Cosméticos naturais, artesanais e veganos, para corpo, rosto e cabelo. Compre online.'
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#587f14' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [{ src: '~/plugins/vue-lazyload', ssr: false }],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
    '@aceforth/nuxt-optimized-images'
  ],
  optimizedImages: {
    optimizeImages: true
  },
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    'vue-scrollto/nuxt'
  ],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  },
  generate: {
    routes() {
      const productRoutes = []
      for (let i = 1; i <= 18; i++) {
        productRoutes.push(`/loja/produtos/${i}`)
      }
      return productRoutes
    }
  }
}
