<template>
  <v-content>
    <div class="col-12">
      <img src="tekitou.png" width="100%" height="300px" style="margin-bottom: 2rem" alt="piano">
    </div>
    <div class="grid col-12" style="padding: 1rem">
      <h2 class="col-12">レッスン内容</h2>
      <div class="grid col-12" style="margin-bottom: 2rem;font-size: .8rem">
        <div class="col-12" style="padding: 1rem 0">
          <p>個人レッスン</p>
          <p>あああ</p>
        </div>
        <div class="col-12" style="padding: 1rem 0">
          <p>ソルフェージュ・音楽理論</p>
          <p>あああ</p>
        </div>
        <div class="col-12" style="padding: 1rem 0">
          <p>プレピアノコース</p>
          <p>あああ</p>
        </div>
        <div class="col-12" style="padding: 1rem 0">
          <p>オンライン非同期・同期</p>
          <p>あああ</p>
        </div>
      </div>
      <h2 class="col-12">講師紹介</h2>
      <div class="grid col-12" style="margin-bottom: 2rem">
        <div class="grid-center col-3_sm-12">
          <div class="col-12_sm-6">
            <img src="tekitou.png" width="100%" height="100px" style="" alt="piano">
          </div>
          <div class="col-12">
            院長　菊地　裕介
          </div>
        </div>
        <div class="grid-center col-3_sm-12">
          <div class="col-12_sm-6">
            <img src="tekitou.png" width="100%" height="100px" style="" alt="piano">
          </div>
          <div class="col-12">
            副院長　加々見　茉耶
          </div>
        </div>
        <div class="grid-center col-3_sm-12">
          <div class="col-12_sm-6">
            <img src="tekitou.png" width="100%" height="100px" style="" alt="piano">
          </div>
          <div class="col-12">
            講師　黒岩　航紀
          </div>
        </div>
      </div>
      <h2 class="col-12">料金</h2>
      <h3 class="col-12">単発レッスン</h3>
      <ul class="col-12" style="font-size: .8rem">
        <li>ピアノああああああああああああああああああ　￥20,000~ </li>
        <li>ピアノああああああああああああああああああ　￥7,000~ </li>
        <li>ピアノああああああああああああああああああ　￥7,000~ </li>
      </ul>
      
      <h3 class="col-12">月額会員コース</h3>
      <ul class="col-12" style="font-size: .8rem">
        <li>入会金　￥30,000<br>※2020年中のー　 </li>
        <li>月額レッスン料金ー</li>
      </ul>
        
      <div class="col-12" style="margin-bottom: 2rem;font-size: .8rem">
        その他あああああああああああああああああああああああああああああああああああああああああああああああああああ
        ああああああああああああああああああああああああああああああああああああああああああああああああああああああ
        あああああああああああああああああああああああああああああああああああああああああああああああああああああ
        あああああああああああああああああああああああああああああああああああああああああああああああああああああ<br>
        あああああああああああああああああああああああああああああああああああああああああああああああああああああ
        あああああああああああああああああああああああああああああああああああああああああああああああああああああ
      </div>
      
      <h3 class="col-12">合格実績</h3>
      <div class="col-12" style="margin-bottom: 2rem;font-size: .8rem">
        準備中
      </div>
      
      <h3 class="col-12">受賞実績</h3>
      <div class="col-12" style="margin-bottom: 2rem;font-size: .8rem">
        準備中
      </div>
      
      <h3 class="col-12">レッスン予約</h3>
      <div class="col-12" style="margin-bottom: 2rem;font-size: .8rem">
        <a href="/">レッスンの予約はこちらから</a>
      </div>
    </div>
  </v-content>
</template>

<script>
  export default {
    mounted(){
      const title = "レッスン｜神宮の杜音楽院"
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