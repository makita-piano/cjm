<template>
  <v-content>
    <div class="col-12">
      <img src="CJM_yoyaku.png" width="100%" height="auto" style="margin-bottom: 2rem" alt="piano">
    </div>
    <div id="main-content" class="grid col-12">
      <h1 class="col-12">レッスン予約・スタジオ貸出予約</h1>
      <div class="col-12" style="">
        レッスン予約・スタジオ利用予約は下記より可能です。
      </div>
      <ul class="col-12" style="font-size: .8rem">
        <li>スタジオ利用の場合は、「スタジオ利用」メニューを選択してください。</li>
        <li>レッスン予約の場合は、該当するレッスンメニューを選択してください。</li>
        <li>メニュー選択後、カレンダーの白い部分が予約可能です。</li>
        <li>メニューに記載がない予約等につきましては、直接メールにてお問い合わせください。</li>
      </ul>
      <div class="col-12" style="text-align: center;margin-top: 1rem">
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeA-ijwyzTbh6PIgyZnjH_pq68dXvEK3GOtOJxKFcsIB4EDvg/viewform?embedded=true" width="100%" max-width: "640" height="600" frameborder="0" marginheight="0" marginwidth="0">読み込んでいます…</iframe>
      </div>
    </div>
  </v-content>
</template>

<script>
  export default {
    mounted(){
      const title = "予約フォーム｜神宮の杜音楽院"
      const description = "xxx "
      document.title = title
      document.querySelector("meta[property='og:title']")
      　.setAttribute('content', title)
      document.querySelector("meta[name='description']")
      　.setAttribute('content', description)
      document.querySelector("meta[property='og:description']")
      　.setAttribute('content', description)
    }
  }
</script>
