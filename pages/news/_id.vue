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
          {{date_formated(news.published_at)}}
        </div>
        <div class="col-12 news-contents" v-html="news.contents" style="padding: 1rem 0"></div>
      </div>
    </div>
  </v-main>
</template>

<script>
  import axios from 'axios'
  import moment from "moment"

  export default {
    name: "news-id",
    
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
    }
  }
</script>
