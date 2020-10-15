<template>
  <v-content>
    <div class="col-12">
      <img src="tekitou.png" width="100%" height="300px" style="margin-bottom: 2rem" alt="piano">
    </div>
    <div class="grid col-12 index-content" style="padding: 0 1rem">
      <div class="col-12" style="margin-bottom: 2rem">
        CJMはあああああああああああああああああああああああああああああああああああああああああああああああああああ
        ああああああああああああああああああああああああああああああああああああああああああああああああああああああ
        あああああああああああああああああああああああああああああああああああああああああああああああああああああ
        あああああああああああああああああああああああああああああああああああああああああああああああああああああ<br>
        あああああああああああああああああああああああああああああああああああああああああああああああああああああ
        あああああああああああああああああああああああああああああああああああああああああああああああああああああ
      </div>
      <h2 class="col-12">News</h2>
      <ul>
        <li class="grid">
          <div>
            2000年10月5日（月）
          </div>
          <div style="padding: .1rem;background-color: #ccc;border: 1px solid #999;border-radius: .3rem;font-size: .8rem">
            お知らせ
          </div>
          <div class="col-12">
            音楽院のパンフレットを公開しました！
          </div>
        </li>
        <li class="grid">
          <div>
            2000年10月5日（月）
          </div>
          <div style="padding: .1rem;background-color: #ccc;border: 1px solid #999;border-radius: .3rem;font-size: .8rem">
            お知らせ
          </div>
          <div class="col-12">
            音楽院のパンフレットを公開しました！
          </div>
        </li>
        <li class="grid">
          <div>
            2000年10月5日（月）
          </div>
          <div style="padding: .1rem;background-color: #ccc;border: 1px solid #999;border-radius: .3rem;font-size: .8rem">
            お知らせ
          </div>
          <div class="col-12">
            音楽院のパンフレットを公開しました！
          </div>
        </li>
      </ul>
      <div class="col-12" style="text-align: right;margin-bottom: 2rem">
        過去のNewsはこちらから
      </div>
      <h2 class="col-12">Links</h2>
      <div class="col-12" style="margin-bottom: 2rem">
        <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fpages%2Fcategory%2FMusic-Lessons---Instruction-School%2FCjm-Tokyo-%25E7%25A5%259E%25E5%25AE%25AE%25E3%2581%25AE%25E6%259D%259C%25E9%259F%25B3%25E6%25A5%25BD%25E9%2599%25A2-103707088022777%2F%22%20data-tabs%3D%22timeline%22%20data-width%3D%22%22%20data-height%3D%22%22%20data-small-header%3D%22false%22%20data-adapt-container-width%3D%22true%22%20data-hide-cover%3D%22false%22%20data-show-facepile%3D%22true%22%3E%3Cblockquote%20cite%3D%22https%3A%2F%2Fwww.facebook.com%2Fpages%2Fcategory%2FMusic-Lessons---Instruction-School%2FCjm-Tokyo-%25E7%25A5%259E%25E5%25AE%25AE%25E3%2581%25AE%25E6%259D%259C%25E9%259F%25B3%25E6%25A5%25BD%25E9%2599%25A2-103707088022777%2F&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=160626627849426" width="340" height="500" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>
      </div>
    </div>
  </v-content>
</template>

<script async defer crossorigin="anonymous" src="https://connect.facebook.net/ja_JP/sdk.js#xfbml=1&version=v8.0&appId=160626627849426&autoLogAppEvents=1" nonce="jmR8QvEF"></script>
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
