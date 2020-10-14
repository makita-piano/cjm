<template>
  <v-content>
    <div class="col-12">
      <div class="title">
          お知らせ
      </div>
      <div class="ancher">
          <RouterLink to="/">
              トップページ
          </RouterLink>
          > お知らせ
      </div>
    </div>
    <div style="padding: 2rem .5rem 1rem;background-color: #eee">
      <ul class="information" v-for="e in info" v-bind:key="e.title">
        <li>
          <div class="col-12">{{date_formated(e.release_date)}}</div>
          <div class="grid col-12">
            <div class="col-12">{{e.title}}</div>
          </div>
          <div v-html="e.texts" style="padding-left: 2rem;">
          </div>
        </li>
      </ul>
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
      const title = "Information | 加々見 茉耶"
      const description = "加々見 茉耶 official pageのお知らせ一覧です。兵庫県生まれ。5歳よりピアノを始める。 兵庫県立西宮高等学校音楽科を卒業し、東京藝術大学音楽学部器楽科ピアノ専攻に入学。第1回 ロザリオ・マルチアーノ国際ピアノコンクール（ウィーン）第2位。併せてシューベルト賞を受賞。"
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
        .get("https://klavier.microcms.io/api/v1/m_info?fields=title,texts,release_date",{
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
