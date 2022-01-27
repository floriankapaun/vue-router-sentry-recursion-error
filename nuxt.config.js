export default {
  head: {
    title: 'vue-router-sentry-recursion-error',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/router',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/router'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/sentry'
  ],

  sentry: {
    disabled: false,
    dsn: process.env.SENTRY_DSN ?? '',
    tracesSampleRate: 1.0,
    vueOptions: {
        tracing: true,
        tracingOptions: {
            hooks: ['mount', 'update'],
            timeout: 2000,
            trackComponents: true,
        },
    },
},
}