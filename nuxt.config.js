require('dotenv').config();
const { VUE_APP_MICROCMS_KEY,VUE_APP_MICROCMS_URL } = process.env;

export default {
  mode: 'universal',
  head: {
    title: '神宮の杜音楽院',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0, user-scalable=yes' },
      { hid: 'description', name: 'description', content: '神宮の杜音楽院' },
      { hid: 'og:site_name', property: 'og:site_name', content: '神宮の杜音楽院' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:title', property: 'og:title', content: '神宮の杜音楽院' },
      { hid: 'og:description', property: 'og:description', content: '神宮の杜音楽院' },
      { hid: 'og:image', property: 'og:image', content: 'https://cjmtokyo.com/.png' },
      { hid: 'twitter:card', property: 'twitter:card', content: 'summary_large_image' },
      { hid: 'twitter:site', property: 'twitter:site', content: '@cjmtokyo' }
    ],
    script: [
      { src: "https://connect.facebook.net/ja_JP/sdk.js#xfbml=1&version=v8.0&appId=160626627849426&autoLogAppEvents=1", nonce: "jmR8QvEF", crossorigin: "anonymous" }
    ],
    link: [
      {
        rel: "stylesheet", href: "https://cdnjs.cloudflare.com/ajax/libs/gridlex/2.3.1/gridlex.min.css"
      },
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" }
    ]
  },
  env: {
    VUE_APP_MICROCMS_KEY,
    VUE_APP_MICROCMS_URL
  },
  buildModules: [
    '@nuxtjs/vuetify',
  ],
  vuetify: {
    customVariables: ['~/assets/css/variables.scss'],
    treeShake: true
  },
  modules: ['@nuxtjs/sitemap'],
  sitemap: {
    path: '/sitemap.xml',
    hostname: 'https://cjmtokyo.com'
  },
  plugins: [{ src: '~plugins/ga.js', mode: 'client' }],
  router: {
    extendRoutes (routes, resolve) {
    routes.push({
      name: '404error',
      path: '*',
      component: resolve('~/pages/notfound.vue')
     })
   }
 },
}
