<template>
  <v-content>

  </v-content>
</template>

<script>
  import axios from 'axios'
  import moment from "moment";

  export default {

    data () {
      return {
        info: undefined,
      }
    },

    mounted(){
      const title = "加々見 茉耶 official page"
      const description = "加々見 茉耶(かがみ まや)の公式ページ。ピアニスト。兵庫県生まれ。5歳よりピアノを始める。 兵庫県立西宮高等学校音楽科を卒業し、東京藝術大学音楽学部器楽科ピアノ専攻に入学。第1回 ロザリオ・マルチアーノ国際ピアノコンクール（ウィーン）第2位。併せてシューベルト賞を受賞。 "
      document.title = title
      document.querySelector("meta[property='og:title']")
      　.setAttribute('content', title)
      document.querySelector("meta[name='description']")
      　.setAttribute('content', description)
      document.querySelector("meta[property='og:description']")
      　.setAttribute('content', description)
    },

    created(){
      axios
        .get("https://klavier.microcms.io/api/v1/m_info?fields=title,texts,release_date&limit=2",{
          headers: { "X-API-KEY": process.env.VUE_APP_MICROCMS_KEY},
          data: {}
      })
        .then(v => {
          this.info = v.data.contents;
      });
    },

    methods: {
      date_formated: function(date) {
        return moment(date).format("YYYY.MM.DD");
      }
    }
  }
</script>
