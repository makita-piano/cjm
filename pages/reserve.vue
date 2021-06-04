<template>
  <v-main>
    <div class="col-12">
      <nuxt-img src="/img/CJM_yoyaku.png" width="1024" class="width-100" style="margin-bottom: 2rem" alt="CJM_yoyaku" />
    </div>
    <div id="main-content" class="grid-center col-12">
      <div class="grid col-9_sm-12">
        <h2 class="col-12">レッスン・スタジオ貸出予約</h2>
        <div class="col-12">
          <p>
            レッスン予約・スタジオ利用予約は下記より可能です。
          </p>
        </div>
        <ul class="col-12">
          <li><p>スタジオ利用の場合は、「スタジオ利用」メニューを選択してください。</p></li>
          <li><p>レッスン予約の場合は、該当するレッスンメニューを選択してください。</p></li>
          <li><p>メニュー選択後、カレンダーの白い部分が予約可能です。</p></li>
          <li><p>メニューに記載がない予約等につきましては、直接メールにてお問い合わせください。</p></li>
        </ul>
        <div class="col-12" style="margin-top: 1rem">
          <iframe type="text/html" frameborder="0" width="100%" height="1000px" src="//airrsv.net/ykpianoforte/calendar/embed/" ></iframe>
        </div>
      </div>
    </div>
  </v-main>
</template>

<script>
  export default {
    head() {
      return {
        title: "予約フォーム｜神宮の杜音楽院",
        meta: [
          { hid: 'description', name: 'description', content: '神宮の杜音楽院の予約フォームです。CJM Tokyo 神宮の杜音楽院は、東京藝術大学卒業などの一流の学歴と留学経験を持つ、国内最高レベルの権威あるクラシック音楽家による、ピアノレッスンを中心とした音楽教育を行なっております。個人レッスンのみならず、音楽理論やソルフェージュのクラス、上級者のための演奏法講座、海外より招聘する世界クラスの音楽家による特別レッスンなど、広く展開していきます。' },
          { hid: 'og:description', property: 'og:description', content: '神宮の杜音楽院の予約フォームです。CJM Tokyo 神宮の杜音楽院は、東京藝術大学卒業などの一流の学歴と留学経験を持つ、国内最高レベルの権威あるクラシック音楽家による、ピアノレッスンを中心とした音楽教育を行なっております。個人レッスンのみならず、音楽理論やソルフェージュのクラス、上級者のための演奏法講座、海外より招聘する世界クラスの音楽家による特別レッスンなど、広く展開していきます。' },
          { hid: 'og:title', property: 'og:title', content: '予約フォーム｜神宮の杜音楽院' }
        ]
      }
    }
  }
</script>
