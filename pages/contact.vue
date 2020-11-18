<template>
  <v-main style="text-align: center">
    <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfbcRGqyt_6icT9sAepFQ-DLD4ki6mI7R_zjVR_K3pX6daYjg/viewform?embedded=true" class="iframe margin-top-5-mobile" frameborder="0" marginheight="0" marginwidth="0">読み込んでいます…</iframe>
  </v-main>
</template>

<script>
  export default {
    name: "contact",
    layout: 'default',
    
    head() {
      return {
        title: "お問い合わせ｜神宮の杜音楽院",
        meta: [
          { hid: 'description', name: 'description', content: '神宮の杜音楽院のお問合せページです' },
          { hid: 'og:description', property: 'og:description', content: '神宮の杜音楽院のお問合せページです' },
          { hid: 'og:title', property: 'og:title', content: 'お問い合わせ｜神宮の杜音楽院' },
          { hid: 'og:url', property: 'og:url', content: 'https://xxx.page'}
        ]
      }
    }
  }
</script>