<template>
  <v-main>
    <div class="page-contents">
      <global-header />
      <div id="body">
        <nuxt :key="$route.fullPath"></nuxt>
      </div>
    </div>
    <global-footer />
  </v-main>
</template>

<script>
  import '@/assets/css/common.css'
  import GlobalHeader from '../components/GlobalHeader'
  import GlobalFooter from '../components/GlobalFooter'

  export default {
    components: {
      GlobalHeader,
      GlobalFooter
    },
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

<style>
.page-enter-active {
  animation: fadeIn 1s;
}

@media (min-width: 769px) {
  .page-contents{
    width: 1024px;
    margin: auto;
  }
}

@keyframes fadeIn {
  from {
    transform: translateY(-10px);
    opacity: 0.3;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>
