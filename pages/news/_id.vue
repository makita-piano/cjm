<template>
  <v-main>
    <div v-if="!news" style="padding: 1rem">
      <h1>Page Not Found</h1>
      <h2>お探しのページが見つかりません</h2>
      <p>
  URLに間違いないか確認し、再度アクセスを試してください。
      </p>
    </div>
    <div v-else id="main-content" class="grid-center col-12">
      <div class="grid col-9_sm-12">
        <h2 class="col-12">
          {{ news.title }}
        </h2>
        <div class="col-12" style="text-align: right;color: #999">
          {{date_formated(news.publishedAt)}}
        </div>
        <div class="col-12 news-contents" v-html="news.contents" style="padding: 1rem 0"></div>
      </div>
    </div>
  </v-main>
</template>

<script>
  import axios from 'axios'
  import moment from "moment"
  import Notfound from '../notfound'

  export default {
    name: "news-id",
    layout: 'default',
    
    head() {
      if(this.news) {
        return {
          title: this.news.title + "｜神宮の杜音楽院",
          meta: [
            { hid: 'description', name: 'description', content: this.news.description },
            { hid: 'og:description', property: 'og:description', content: this.news.description },
            { hid: 'og:title', property: 'og:title', content: this.news.title + '｜神宮の杜音楽院' }
          ]
        }
      }
    },

    data () {
      return {
        description: "",
      }
    },
    //filters=publish_at[exists]&
    async asyncData({ params }) {
      const { data } = await axios.get(
        process.env.VUE_APP_MICROCMS_URL + `/news/${params.id}`,
        {
          headers: { "X-API-KEY": process.env.VUE_APP_MICROCMS_KEY }
        }
      ).catch(function (error){
        return "";
      });
      return {
        news: data,
      };
    },

    methods: {
      date_formated: function(date) {
        moment.locale("ja");
        return moment(date).format("YYYY年MM月DD日（ddd）");
      }
    },
    components: {
      Notfound
    }
  }
</script>

<style>
  .loader,
  .loader:after {
    border-radius: 50%;
    width: 10em;
    height: 10em;
  }
  .loader {
    margin: 60px auto;
    font-size: 10px;
    position: relative;
    text-indent: -9999em;
    border-top: 1.1em solid #999;
    border-right: 1.1em solid #999;
    border-bottom: 1.1em solid #999;
    border-left: 1.1em solid #ffffff;
    -webkit-transform: translateZ(0);
    -ms-transform: translateZ(0);
    transform: translateZ(0);
    -webkit-animation: load8 1.1s infinite linear;
    animation: load8 1.1s infinite linear;
  }
  @-webkit-keyframes load8 {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  @keyframes load8 {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
</style>
