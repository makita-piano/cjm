<template>
  <v-main>
    <div class="grid col-12" style="padding: 0 .5rem">
      <div class="grid-center col-12">
        <div class="col-12" style="max-width: 1024px">
          <iframe class="map-iframe" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.8350080051373!2d139.7015805146509!3d35.68106438758973!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188cc7a7d0e6af%3A0x8036edad5e659d1a!2z44CSMTUxLTAwNTEg5p2x5Lqs6YO95riL6LC35Yy65Y2D6aeE44Kx6LC377yU5LiB55uu77yS77yZ!5e0!3m2!1sja!2sjp!4v1612921227300!5m2!1sja!2sjp" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0" width="100%"></iframe>
        </div>
        <div class="grid-center col-12">
          <div class="col-12" style="max-width: 1024px">
            <p>TEL：070-8362-6593</p>
            <p>〒151-0051 東京都渋谷区千駄ケ谷４丁目２９</p>
            <p><a href="https://goo.gl/maps/QvCMnoB5JtU8HupG8" target="_blank" class="text-underline">Google Map</a></p>
          </div>
        </div>
      </div>
      <div class="col-12">
        <h2>主要駅からの時間</h2>
        <ul style="list-style-type: disc;margin-left: 1.5rem">
          <li><p>代々木駅　徒歩4分（JR山手線　JR中央総武線各駅停車　都営地下鉄大江戸線）</p></li>
          <li><p>北参道駅　徒歩4分（東京メトロ副都心線）</p></li>
          <li><p>南新宿駅　徒歩9分（小田急小田原線）</p></li>
          <li><p>各線 新宿駅　新宿三丁目駅　バスタ新宿etc.より　徒歩10－15分程度</p></li>
        </ul>
      </div>
      <div class="col-12" style="margin-bottom: 2rem">
        <h2>最寄りの駐車場</h2>
        <ul style="list-style-type: disc;margin-left: 1.5rem">
          <li><p><a href="https://www.shutoko-sv.jp/parking/car/?id=1427725411-820339&pca=3" target="_blank" style="text-decoration: underline">千駄ヶ谷駐車場</a></p></li>
          <li><p><a href="https://mapfan.com/spots/SCAQQ,F66K,L2Y" target="_blank" style="text-decoration: underline">パークステーション千駄ヶ谷第５駐車場</a></p></li>
        </ul>
        <p style="margin-top: .5rem">など</p>
      </div>
    </div>
  </v-main>
</template>

<script>
  export default {
    name: "access",
    layout: 'default',

    head() {
      return {
        title: "アクセス｜神宮の杜音楽院",
        meta: [
          { hid: 'description', name: 'description', content: '神宮の杜音楽院のアクセス情報です。CJM Tokyo 神宮の杜音楽院は、東京藝術大学卒業などの一流の学歴と留学経験を持つ、国内最高レベルの権威あるクラシック音楽家による、ピアノレッスンを中心とした音楽教育を行なっております。個人レッスンのみならず、音楽理論やソルフェージュのクラス、上級者のための演奏法講座、海外より招聘する世界クラスの音楽家による特別レッスンなど、広く展開していきます。' },
          { hid: 'og:description', property: 'og:description', content: '神宮の杜音楽院のアクセス情報です。CJM Tokyo 神宮の杜音楽院は、東京藝術大学卒業などの一流の学歴と留学経験を持つ、国内最高レベルの権威あるクラシック音楽家による、ピアノレッスンを中心とした音楽教育を行なっております。個人レッスンのみならず、音楽理論やソルフェージュのクラス、上級者のための演奏法講座、海外より招聘する世界クラスの音楽家による特別レッスンなど、広く展開していきます。' },
          { hid: 'og:title', property: 'og:title', content: 'アクセス｜神宮の杜音楽院' }
        ]
      }
    }
  }
</script>

<style scoped>
  @media screen and (max-width: 768px) {
    .map-iframe {
      height: 375px;
    }
  }

  @media screen and (min-width: 769px) {
    .map-iframe {
      height: 520px;
    }
  }
</style>