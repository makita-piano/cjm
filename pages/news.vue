<template>
  <v-main>
    準備中
  </v-main>
</template>

<script>
  export default {
    name: "news",
    layout: 'default',
    
    head() {
      return {
        title: "お知らせ一覧｜神宮の杜音楽院",
        meta: [
          { hid: 'description', name: 'description', content: '神宮の杜音楽院のお知らせ一覧です' },
          { hid: 'og:description', property: 'og:description', content: '神宮の杜音楽院のお知らせ一覧です' },
          { hid: 'og:title', property: 'og:title', content: 'お知らせ一覧｜神宮の杜音楽院' },
          { hid: 'og:url', property: 'og:url', content: 'https://xxx.page'}
        ]
      }
    }
  }
</script>