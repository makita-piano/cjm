<template>
  <v-main>
    <div class="col-12">
      <img src="~assets/img/CJM_Top.png" width="100%" alt="CJM_Top">
    </div>
    <div id="main-content" class="grid-center col-12">
      <div class="grid-center col-9_sm-12">
        <div class="grid col-8_sm-12" style="margin-bottom: 2rem;margin-top: 1rem;">
          <div class="grid-center col-6">
            <a class="grid-center col-12" href="http://ykpianoforte.com/event.php" target="_blank">
              <div style="max-width: 250px;border: 1px solid #3D6F04;padding: 1rem;border-radius: 1rem;background: #F6EDD9">
                <img src="~assets/img/bn_event.svg"alt="event">
                講座・イベント
              </div>
            </a>
          </div>
          <div class="grid-center col-6">
            <NuxtLink to="/voices" class="grid-center col-12" >
              <div style="max-width: 250px;border: 1px solid #3D6F04;padding: 1rem;border-radius: 1rem;background: #F6EDD9">
                <img src="~assets/img/bn_voice.svg" alt="voice">
                生徒さんからの声
              </div>
            </NuxtLink>
          </div>
        </div>
        <div class="col-12" style="margin-bottom: 2rem;font-size: 1.2rem">
  代々木、北参道の音楽教室　CJM Tokyo 神宮の杜音楽院（東京都渋谷区千駄ヶ谷 院長:<a href="http://ykpianoforte.com/profile.php">菊地裕介</a>）は、東京藝術大学上位レベル水準の国内外の最高の学歴、コンクール受賞歴等を持つ権威あるクラシック音楽家による、ピアノレッスンを中心とした最高水準の音楽教育を、音楽家を目指すか否かとに関わらず、高い志を持つ皆様に向けてご提供しております。<br>個人レッスンだけではなく、音楽理論やソルフェージュのグループレッスン、音大受験やコンクール準備等を目指す上級者のための演奏法講座、海外より招聘する世界トップクラスの音楽家による特別レッスンなど、広く展開していきます。<br><br>東京都心および新宿・渋谷をはじめとする主要ターミナル駅に近く、複数駅から徒歩圏内の立地で、広く全国よりおいでになるみなさまの受講をサポートいたします。2台のグランドピアノを有し、自然な響きを考えた快適な防音スタジオ (天井高2500mm 天然木無垢床材）でのレッスンをご提供いたします。
        </div>

        <h2 class="col-12">News</h2>
        <ul>
          <li v-for="e in news" v-bind:key="e.title" class="grid" style="padding: .5rem 1rem">
            <div style="display: inline">
              {{date_formated(e.publish_at)}}
            </div>
            <div class="oshirase_tag" style="display: inline">
              {{e.tag[0]}}
            </div>
            <div class="col-12">
              <a v-if="e.title_url" v-bind:href="e.title_url" style="text-decoration: underline">
                {{e.title}}
              </a>
              <NuxtLink v-else-if="e.description" v-bind:to="'/news/' + e.id" style="text-decoration: underline">{{e.title}}</NuxtLink>
              <p v-else>
                {{e.title}}
              </p>
            </div>
          </li>
        </ul>
        <!--
        <div class="col-12 color-blue" style="text-align: right;margin-bottom: 2rem">
          <NuxtLink to="/news">過去のNewsはこちらから</NuxtLink>
        </div>
        -->
        <h2 class="col-12">Links</h2>
        <div class="grid col-12" style="margin-bottom: 2rem">
          <div class="col-3_sm-6" style="padding: .5rem">
            <a href="http://ykpianoforte.com/index.php" target="_blank">
              <img src="~assets/img/banner_ykpianoforte.jpg" width="100%" style="border: 1px solid #999" alt="banner_ykpianoforte">
            </a>
          </div>
          <div class="col-3_sm-6" style="padding: .5rem">
            <a href="https://store.shopping.yahoo.co.jp/en-onlineshop/" target="_blank">
              <img src="~assets/img/banner_onlineshop.jpg" width="100%" style="border: 1px solid #999" alt="banner_onlineshop">
            </a>
          </div>
          <div class="col-3_sm-6" style="padding: .5rem">
            <a href="https://kagamimaya.klavier.page/" target="_blank">
              <img src="~assets/img/banner_mayakagami.jpg" width="100%" style="border: 1px solid #999" alt="banner_mayakagami">
            </a>
          </div>
          <div class="grid col-3_sm-6 social" style="padding: .5rem">
            <div class="grid col-12 twitter" style="position: relative">
              <a href="https://twitter.com/cjmtokyo" target="_blank"  class="grid" style="position: absolute;top:45%">
                <div class="col-1 social-icon" style="transform: translate(0%,-50%)">
                  <img src="~assets/img/twitter_white.png">
                </div>
                <div class="col social-text" style="transform: translate(0%,-50%)">
                  <div class="social-name">@cjmtokyo</div>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div class="col-12" style="margin: .5rem 0 2rem 0;text-align: center">
          <iframe loading="lazy" src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fpages%2Fcategory%2FMusic-Lessons---Instruction-School%2FCjm-Tokyo-%25E7%25A5%259E%25E5%25AE%25AE%25E3%2581%25AE%25E6%259D%259C%25E9%259F%25B3%25E6%25A5%25BD%25E9%2599%25A2-103707088022777%2F%22%20data-tabs%3D%22timeline%22%20data-width%3D%22%22%20data-height%3D%22%22%20data-small-header%3D%22false%22%20data-adapt-container-width%3D%22true%22%20data-hide-cover%3D%22false%22%20data-show-facepile%3D%22true%22%3E%3Cblockquote%20cite%3D%22https%3A%2F%2Fwww.facebook.com%2Fpages%2Fcategory%2FMusic-Lessons---Instruction-School%2FCjm-Tokyo-%25E7%25A5%259E%25E5%25AE%25AE%25E3%2581%25AE%25E6%259D%259C%25E9%259F%25B3%25E6%25A5%25BD%25E9%2599%25A2-103707088022777%2F&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=160626627849426" width="340" height="500" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>
        </div>
      </div>
    </div>
  </v-main>
</template>

<script>
  import axios from 'axios'
  import moment from "moment";

  export default {
    name: "index",
    layout: 'default',

    head() {
      return {
        title: "神宮の杜音楽院",
        meta: [
          { hid: 'description', name: 'description', content: '代々木、北参道の音楽教室　CJM Tokyo 神宮の杜音楽院（東京都渋谷区千駄ヶ谷 院長:菊地裕介）は、東京藝術大学上位レベル水準の国内外の最高の学歴、コンクール受賞歴等を持つ権威あるクラシック音楽家による、ピアノレッスンを中心とした最高水準の音楽教育を、音楽家を目指すか否かとに関わらず、高い志を持つ皆様に向けてご提供しております。<br>個人レッスンだけではなく、音楽理論やソルフェージュのグループレッスン、音大受験やコンクール準備等を目指す上級者のための演奏法講座、海外より招聘する世界トップクラスの音楽家による特別レッスンなど、広く展開していきます。' },
          { hid: 'og:description', property: 'og:description', content: '代々木、北参道の音楽教室　CJM Tokyo 神宮の杜音楽院（東京都渋谷区千駄ヶ谷 院長:菊地裕介）は、東京藝術大学上位レベル水準の国内外の最高の学歴、コンクール受賞歴等を持つ権威あるクラシック音楽家による、ピアノレッスンを中心とした最高水準の音楽教育を、音楽家を目指すか否かとに関わらず、高い志を持つ皆様に向けてご提供しております。<br>個人レッスンだけではなく、音楽理論やソルフェージュのグループレッスン、音大受験やコンクール準備等を目指す上級者のための演奏法講座、海外より招聘する世界トップクラスの音楽家による特別レッスンなど、広く展開していきます。' },
          { hid: 'og:title', property: 'og:title', content: '神宮の杜音楽院' },
          { hid: 'og:url', property: 'og:url', content: 'https://cjmtokyo.com' }
        ]
      }
    },

    data () {
      return {
        news: undefined,
      }
    },

    created(){
      axios
        .get(process.env.VUE_APP_MICROCMS_URL + "/news?filters=publish_at[exists]&fields=id,publish_at,tag,title,title_url,description&orders=-publish_at&limit=3",{
          headers: { "X-API-KEY": process.env.VUE_APP_MICROCMS_KEY},
          data: {}
      })
        .then(v => {
          this.news = v.data.contents;
      });
    },

    methods: {
      date_formated: function(date) {
        moment.locale("ja");
        return moment(date).format("YYYY年MM月DD日（ddd）");
      }
    }
  }
</script>
