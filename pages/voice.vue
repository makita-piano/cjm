<template>
  <v-main>
    <div id="main-content" class="grid-center col-12">
      <div class="grid col-9_sm-12">
        <h2 class="col-12" style="font-weight: bold">生徒さんからの声</h2>
        <div v-for="e in voices" v-bind:key="e.name" class="grid" style="padding: .5rem 1rem">
          <h3>{{e.name}}</h3>
          <div class="col-12">
            <p>
              {{e.text}}
            </p>
          </div>
        </div>
      </div>
    </div>
  </v-main>
</template>

<script>
  export default {
    layout: 'default',
    head() {
      return {
        title: "生徒さんからの声｜神宮の杜音楽院",
        meta: [
          { hid: 'description', name: 'description', content: 'CJM Tokyo 神宮の杜音楽院は、東京藝術大学卒業などの一流の学歴と留学経験を持つ、国内最高レベルの権威あるクラシック音楽家による、ピアノレッスンを中心とした音楽教育を行なっております。個人レッスンのみならず、音楽理論やソルフェージュのクラス、上級者のための演奏法講座、海外より招聘する世界クラスの音楽家による特別レッスンなど、広く展開していきます。' },
          { hid: 'og:description', property: 'og:description', content: 'CJM Tokyo 神宮の杜音楽院は、東京藝術大学卒業などの一流の学歴と留学経験を持つ、国内最高レベルの権威あるクラシック音楽家による、ピアノレッスンを中心とした音楽教育を行なっております。個人レッスンのみならず、音楽理論やソルフェージュのクラス、上級者のための演奏法講座、海外より招聘する世界クラスの音楽家による特別レッスンなど、広く展開していきます。' },
          { hid: 'og:title', property: 'og:title', content: '生徒さんからの声｜神宮の杜音楽院' }
        ]
      }
    },
    data () {
      return {
        voices: undefined,
      }
    },
    created(){
      axios
        .get(process.env.VUE_APP_MICROCMS_URL + "/voices?filters=text[exists]&fields=text,name",{
          headers: { "X-API-KEY": process.env.VUE_APP_MICROCMS_KEY},
          data: {}
      })
        .then(v => {
          this.voices = v.data.contents;
      });
    },
  }
</script>

<style scoped>

</style>
