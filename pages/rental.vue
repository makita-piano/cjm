<template>
  <v-main>
    <div class="col-12">
      <img src="~assets/img/CJM_studio.png" width="100%" height="auto" alt="piano">
    </div>
    <div class="grid-center col-12" style="padding: 2rem 0 1rem 0;background-color: #fef7e7;font-size: 1.2rem;text-align: center">
      <div class="grid col-9_sm-10">
        <div class="col-3_sm-6" style="margin-bottom: 1rem">
          <a href="#c1">料金</a>
        </div>
        <div class="col-3_sm-6" style="margin-bottom: 1rem">
          <a href="#c2">設備</a>
        </div>
        <div class="col-3_sm-6" style="margin-bottom: 1rem">
          <a href="#c3">禁止事項</a>
        </div>
        <div class="col-3_sm-6" style="margin-bottom: 1rem">
          <a href="#c4">スタジオ予約</a>
        </div>
      </div>
    </div>
    <div id="main-content" class="grid-center col-12">
      <div class="grid col-9_sm-12">
        <div class="col-12" style="margin: 1rem 0 2rem 0;font-size: 1.2rem">
  CJM Tokyo 神宮の杜音楽院では、スタジオ貸出を行なっております。個人の練習や室内楽の合わせなどはもちろん、録音・録画スタジオとしてもご利用いただけます。オンライン審査のための演奏収録、コンクール直前の練習など、様々な用途にぜひお使いください。
        </div>
        <h2 id="c1" class="col-12">料金</h2>
        <h3 class="col-12">利用料金　<span style="font-size: 1rem"><br class="display-none-pc">※1時間あたり / YAMAHA C3型 グランドピアノ 使用可能</span></h3>
        <ul class="col-12 pre_list" style="margin-bottom: 3rem">
          <li>・平日 午前（9:00-13:00）　	￥2,000</li>
          <li>・平日 午後（13:00-17:00）　	￥2,500</li>
          <li>・平日 夜間（17:00-23:00）　	￥3,000</li><br>
          <li>・土日祝日 （終日）　	￥3,000</li>
        </ul>
        <h3 class="col-12">オプション　<span style="font-size: 1rem">※１時間あたり</span></h3>
        <ul class="col-12" style="margin-bottom: 3rem">
          <li>・スタインウェイ使用料　￥1,000</li>
        </ul>

        <h3 class="col-12">会員特典　<span style="font-size: 1rem">※オプション料金には適用されません。　</span></h3>
        <ul class="col-12">
          <li>・スタジオ利用料　20%OFF</li>
        </ul>

        <h2 id="c2" class="col-12" style="margin-top: 5rem">設備</h2>
        <ul class="col-12 pre_list">
       
          <li>・Steinway & Sons D-274型 フルコンサートグランドピアノ （ドイツ・ハンブルク1996年製造　オプション料金の対象となります）</li>
          <li>・YAMAHA C3型 グランドピアノ</li>
          <li>・2.5人掛け本革ソファ</li>
          <li>・4人掛けのテーブルおよび椅子</li>
          <li>・ピアノ椅子　3脚</li>
          <li>・自立譜面台　3本</li>
          <br>
          <li>・自動加湿器、自動除湿器、冷暖房完備</li>
          <li>・スタジオ入口前に洗面所がございます</li>
          <br>
          <li>・オプションとして録画、録音用の機材の貸し出しもいたします。詳細はお問い合わせください。</li>
        </ul>

        <h2 id="c3" class="col-12" style="margin-top: 5rem">禁止事項</h2>
        <ul class="col-12 pre_list" style="margin-bottom: .5rem">
          <li>・建物および施設内での喫煙</li>
          <li>・無断で空調を設定すること</li>
          <li>・音楽以外の目的での使用</li>
          <li>・窓、扉を開けての演奏</li>
        </ul>

        <ul class="col-12 pre_list">
          <li>※スタジオ利用は、音楽院のレッスンや音楽院講師の利用等がない、空き時間に限られます。状況により、空き時間が変わる可能性がございますことを、ご了承ください。</li>
          <li>※レッスンとしてのご利用をご検討の方はご相談ください。</li>
          <li>※飲食は可能ですが、ゴミはお持ち帰りください。</li>
        </ul>

        <h2 id="c4" class="col-12" style="margin-top: 5rem">スタジオ予約</h2>
        <div class="col-12 color-blue" style="margin-bottom: 2rem">
          <RouterLink to="/contact">スタジオのご予約はこちらから</RouterLink>
        </div>
      </div>
    </div>
  </v-main>
</template>

<script>
  export default {
    name: "rental",
    layout: 'default',
    
    head() {
      return {
        title: "スタジオ貸出｜神宮の杜音楽院",
        meta: [
          { hid: 'description', name: 'description', content: '神宮の杜音楽院のスタジオ貸出ページです。CJM Tokyo 神宮の杜音楽院は、東京藝術大学卒業などの一流の学歴と留学経験を持つ、国内最高レベルの権威あるクラシック音楽家による、ピアノレッスンを中心とした音楽教育を行なっております。個人レッスンのみならず、音楽理論やソルフェージュのクラス、上級者のための演奏法講座、海外より招聘する世界クラスの音楽家による特別レッスンなど、広く展開していきます。' },
          { hid: 'og:description', property: 'og:description', content: '神宮の杜音楽院のスタジオ貸出ページです。CJM Tokyo 神宮の杜音楽院は、東京藝術大学卒業などの一流の学歴と留学経験を持つ、国内最高レベルの権威あるクラシック音楽家による、ピアノレッスンを中心とした音楽教育を行なっております。個人レッスンのみならず、音楽理論やソルフェージュのクラス、上級者のための演奏法講座、海外より招聘する世界クラスの音楽家による特別レッスンなど、広く展開していきます。' },
          { hid: 'og:title', property: 'og:title', content: 'スタジオ貸出｜神宮の杜音楽院' }
        ]
      }
    }
  }
</script>
