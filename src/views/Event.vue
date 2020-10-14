<template>
  <v-content>
    <div class="col-12">
        <div class="title">
            ディスコグラフィー
        </div>
        <div class="ancher">
            <RouterLink to="/">
                トップページ
            </RouterLink>
            > ディスコグラフィ
        </div>
    </div>
    <div class="grid disco margin-bottom-1" v-for="e in disco" v-bind:key="e.title">
      <div class="grid-center col-4_sm-12">
          <div class="grid col-12_sm-9">
              <a v-bind:href="e.url" target="_blank">
                  <img v-bind:src="e.image.url">
              </a>
          </div>
          <div class="grid col-12">
              <div class="col-12 disco-main-title">
                  {{e.title}}
              </div>
              <div class="col-12 disco-sub-title">
                  {{e.sub_title}}
              </div>
              <div class="col-12 disco-year">
                  {{date_formated(e.release_date)}}
              </div>
          </div>
      </div>
    </div>
  </v-content>
</template>

<script>
  import axios from 'axios'
  import moment from "moment"

  export default {

    data () {
      return {
        disco: undefined,
      }
    },

    mounted(){
      const title = "Discography | 加々見 茉耶"
      const description = "加々見 茉耶 official pageのディスコグラフィーです。兵庫県生まれ。5歳よりピアノを始める。 兵庫県立西宮高等学校音楽科を卒業し、東京藝術大学音楽学部器楽科ピアノ専攻に入学。第1回 ロザリオ・マルチアーノ国際ピアノコンクール（ウィーン）第2位。併せてシューベルト賞を受賞。"
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
        .get("https://klavier.microcms.io/api/v1/m_disco?fields=title,sub_title,url,release_date,image",{
          headers: { "X-API-KEY": process.env.VUE_APP_MICROCMS_KEY},
          data: {}
      })
        .then(v => {
          this.disco = v.data.contents;
      });
    },

    methods: {
      date_formated: function(date) {
        return moment(date).format("YYYY.MM.DD");
      }
    }
  }
</script>
