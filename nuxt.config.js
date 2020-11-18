require('dotenv').config();
const { VUE_APP_MICROCMS_KEY,VUE_APP_MICROCMS_URL } = process.env;

export default {
  head: {
    title: 'title',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'description' }
    ]
  },
  env: {
    VUE_APP_MICROCMS_KEY,
    VUE_APP_MICROCMS_URL
  },
  buildModules: [
    '@nuxtjs/vuetify',
  ]
}