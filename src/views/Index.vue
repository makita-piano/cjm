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
        <script async defer crossorigin="anonymous" src="https://connect.facebook.net/ja_JP/sdk.js#xfbml=1&version=v8.0&appId=160626627849426&autoLogAppEvents=1" nonce="jmR8QvEF"></script>

        <!-- Facebook -->
        <div id="fb-root"></div>
        <div class="fb-page" data-href="https://www.facebook.com/pages/category/Music-Lessons---Instruction-School/Cjm-Tokyo-%E7%A5%9E%E5%AE%AE%E3%81%AE%E6%9D%9C%E9%9F%B3%E6%A5%BD%E9%99%A2-103707088022777/" data-tabs="timeline" data-width="" data-height="" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><blockquote cite="https://www.facebook.com/pages/category/Music-Lessons---Instruction-School/Cjm-Tokyo-%E7%A5%9E%E5%AE%AE%E3%81%AE%E6%9D%9C%E9%9F%B3%E6%A5%BD%E9%99%A2-103707088022777/" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/pages/category/Music-Lessons---Instruction-School/Cjm-Tokyo-%E7%A5%9E%E5%AE%AE%E3%81%AE%E6%9D%9C%E9%9F%B3%E6%A5%BD%E9%99%A2-103707088022777/">Cjm Tokyo 神宮の杜音楽院</a></blockquote></div>
        <script async defer crossorigin="anonymous" src="https://connect.facebook.net/ja_JP/sdk.js#xfbml=1&version=v8.0&appId=160626627849426&autoLogAppEvents=1" nonce="jmR8QvEF"></script>

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
