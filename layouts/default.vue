<template>
  <v-main>
    <div id="body" class="page-contents">
      <Header />
      <div>
        <nuxt :key="$route.fullPath"></nuxt>
      </div>
    </div>
    <Footer />
  </v-main>
</template>

<script>
  import '@/assets/css/reset.css'
  import '@/assets/css/common.css'

  export default {
    computed: {
      currentPageForCanonical() {
        return this.$route.path.slice(1)
      }
    },
    head() {
      return {
        link: [
          {
            rel: 'canonical',
            href: `https://cjmtokyo.com/${this.currentPageForCanonical}`
          }
        ]
      }
    }
  }
</script>
