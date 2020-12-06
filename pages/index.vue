<template>
  <v-main>
    <div class="col-12">
      <img src="~assets/img/CJM_Top.png" width="100%" style="margin-bottom: 2rem" alt="piano">
    </div>
    <div id="main-content" class="grid-center col-12">
      <div class="grid col-9_sm-12">
        <div class="col-12" style="margin-bottom: 2rem;font-size: 1.2rem">
  CJM Tokyo 神宮の杜音楽院は、東京藝術大学卒業などの一流の学歴と留学経験を持つ、国内最高レベルの権威あるクラシック音楽家による、ピアノレッスンを中心とした音楽教育を行なっております。<br>個人レッスンのみならず、音楽理論やソルフェージュのクラス、上級者のための演奏法講座、海外より招聘する世界クラスの音楽家による特別レッスンなど、広く展開していきます。<br><br>東京都心および新宿・渋谷をはじめとする主要ターミナル駅に近く、複数駅から徒歩圏内の立地で、広く国内外のみなさまの受講をサポートいたします。また、2台のグランドピアノを有し、自然な響きを考えた快適な空間をご提供いたします。
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
              {{e.title}}
            </div>
          </li>
        </ul>
        <!--
        <div class="col-12 color-blue" style="text-align: right;margin-bottom: 2rem">
          <NuxtLink to="/news">過去のNewsはこちらから</NuxtLink>
        </div>
        -->
        <h2 class="col-12">Links</h2>
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
          { hid: 'description', name: 'description', content: 'CJM Tokyo 神宮の杜音楽院は、東京藝術大学卒業などの一流の学歴と留学経験を持つ、国内最高レベルの権威あるクラシック音楽家による、ピアノレッスンを中心とした音楽教育を行なっております。個人レッスンのみならず、音楽理論やソルフェージュのクラス、上級者のための演奏法講座、海外より招聘する世界クラスの音楽家による特別レッスンなど、広く展開していきます。' },
          { hid: 'og:description', property: 'og:description', content: 'CJM Tokyo 神宮の杜音楽院は、東京藝術大学卒業などの一流の学歴と留学経験を持つ、国内最高レベルの権威あるクラシック音楽家による、ピアノレッスンを中心とした音楽教育を行なっております。個人レッスンのみならず、音楽理論やソルフェージュのクラス、上級者のための演奏法講座、海外より招聘する世界クラスの音楽家による特別レッスンなど、広く展開していきます。' },
          { hid: 'og:title', property: 'og:title', content: '神宮の杜音楽院' }
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
        .get(process.env.VUE_APP_MICROCMS_URL + "/news?filters=publish_at[exists]&fields=publish_at,tag,title,title_url&orders=-publish_at&limit=3",{
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
