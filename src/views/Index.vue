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
          <div style="width: 12rem">
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
          <div style="width: 12rem">
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
          <div style="width: 12rem">
            2000年10月5日（月）
          </div>
          <div class="col" style="padding: .1rem;background-color: #ccc;border: 1px solid #999;border-radius: .3rem;font-size: .8rem">
            お知らせ
          </div>
          <div class="col-12">
            音楽院のパンフレットを公開しました！
          </div>
        </li>
      </ul>
      <div class="col-12" style="text-align: right">
        過去のNewsはこちらから
      </div>
      <h2 class="col-12">Links</h2>
      <div class="col-12">
        <!-- Facebook -->
        <div id="fb-root"></div>
        <div class="fb-page" data-href="https://www.facebook.com/ptna.enc/" data-tabs="timeline" data-width="256" data-height="600" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true">
          <blockquote cite="https://www.facebook.com/ptna.enc/" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/ptna.enc/">ピティナ・ピアノ曲事典</a></blockquote>
        </div>
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
