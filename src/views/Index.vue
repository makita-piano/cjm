<template>
  <v-content>
    <div class="col-12">
      <img src="tekitou.png" width="100%" height="300px" style="margin-bottom: 2rem" alt="piano">
    </div>
    <div id="main-content" class="grid col-12">
      <div class="col-12" style="margin-bottom: 2rem">
      CJM Tokyo 神宮の杜音楽院は、東京藝術大学卒業などの一流の学歴と留学経験を持つ、国内最高レベルの権威あるクラシック音楽家による、ピアノレッスンを中心とした音楽教育を行なっております。<br>
個人レッスンのみならず、音楽理論やソルフェージュのクラス、上級者のための演奏法講座、海外より招聘する世界クラスの音楽家による特別レッスンなど、広く展開していきます。<br>
<br>
東京都心および新宿・渋谷をはじめとする主要ターミナル駅に近く、複数駅から徒歩圏内の立地で、広く国内外のみなさまの受講をサポートいたします。また、2台のグランドピアノを有し、自然な響きを考えた快適な空間をご提供いたします。
      </div>
      <h2 class="col-12">News</h2>
      <ul v-for="e in news" v-bind:key="e.contents">
        <li class="grid" style="padding: .5rem 1rem">
          <div style="display: inline">
            2000年10月5日（月）
          </div>
          <div class="oshirase_tag" style="display: inline">
            お知らせ
          </div>
          <div class="col-12">
            音楽院のパンフレットを公開しました！
          </div>
        </li>
      </ul>
      <div class="col-12 color-blue" style="text-align: right;margin-bottom: 2rem">
        <RouterLink to="/news">過去のNewsはこちらから</RouterLink>
      </div>
      <h2 class="col-12">Links</h2>
      <div class="col-12" style="margin: .5rem 0 2rem 0;text-align: center">
        <iframe loading="lazy" src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fpages%2Fcategory%2FMusic-Lessons---Instruction-School%2FCjm-Tokyo-%25E7%25A5%259E%25E5%25AE%25AE%25E3%2581%25AE%25E6%259D%259C%25E9%259F%25B3%25E6%25A5%25BD%25E9%2599%25A2-103707088022777%2F%22%20data-tabs%3D%22timeline%22%20data-width%3D%22%22%20data-height%3D%22%22%20data-small-header%3D%22false%22%20data-adapt-container-width%3D%22true%22%20data-hide-cover%3D%22false%22%20data-show-facepile%3D%22true%22%3E%3Cblockquote%20cite%3D%22https%3A%2F%2Fwww.facebook.com%2Fpages%2Fcategory%2FMusic-Lessons---Instruction-School%2FCjm-Tokyo-%25E7%25A5%259E%25E5%25AE%25AE%25E3%2581%25AE%25E6%259D%259C%25E9%259F%25B3%25E6%25A5%25BD%25E9%2599%25A2-103707088022777%2F&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=160626627849426" width="340" height="500" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>
      </div>
    </div>
  </v-content>
</template>

<script>
  import axios from 'axios'
  import moment from "moment";

  export default {

    data () {
      return {
        news: undefined,
      }
    },

    mounted(){
      const title = "神宮の杜音楽院"
      const description = "xxx "
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
        .get(process.env.VUE_APP_MICROCMS_URL + "/news?fields=image,tag,contents,publish_at&limit=2",{
          headers: { "X-API-KEY": process.env.VUE_APP_MICROCMS_KEY},
          data: {}
      })
        .then(v => {
          this.news = v.data.contents;
      });
    },

    methods: {
      date_formated: function(date) {
        return moment(date).format("YYYY.MM.DD");
      }
    }
  }
</script>
