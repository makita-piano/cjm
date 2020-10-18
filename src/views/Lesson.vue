<template>
  <v-content>
    <div class="col-12">
      <img src="CJM_lesson.png" width="100%" height="auto" style="margin-bottom: 2rem" alt="piano">
    </div>
    <div class="grid-center col-12">
      <div class="grid col-9_sm-10" style="text-align: center">
        <div class="col-2_sm-4" style="margin-bottom: 1rem">
          <a href="#c1">レッスン内容</a>
        </div>
        <div class="col-2_sm-4" style="margin-bottom: 1rem">
          <a href="#c2">講師紹介</a>
        </div>
        <div class="col-2_sm-4" style="margin-bottom: 1rem">
          <a href="#c3">料金</a>
        </div>
        <div class="col-2_sm-4" style="margin-bottom: 1rem">
          <a href="#c4">合格実績</a>
        </div>
        <div class="col-2_sm-4" style="margin-bottom: 1rem">
          <a href="#c5">受賞実績</a>
        </div>
        <div class="col-2_sm-4" style="margin-bottom: 1rem">
          <a href="#c6">レッスン予約</a>
        </div>
      </div>
    </div>
        
    <div class="grid col-12" style="padding: 1rem">
      <h2 id="c1" class="col-12">レッスン内容</h2>
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
      <h2 id="c2" class="col-12">講師紹介</h2>
      <div class="grid col-12" style="margin-bottom: 2rem">
        <div class="grid-center col-3_sm-6" style="margin-bottom: 2rem">
          <div class="col-12_sm-10" style="text-align: center">
            <img src="kikuti_yusuke.png" width="80%" height="auto" style="" alt="piano" class="padding-0-1-mobile">
          </div>
          <div class="col-12" style="text-align: center">
            院長　菊地　裕介
          </div>
        </div>
        <div class="grid-center col-3_sm-6" style="margin-bottom: 2rem">
          <div class="col-12_sm-10" style="text-align: center">
            <img src="kagami_maya.png" width="80%" height="auto" style="" alt="piano" class="padding-0-1-mobile">
          </div>
          <div class="col-12" style="text-align: center">
            副院長　加々見　茉耶
          </div>
        </div>
        <div class="grid-center col-3_sm-6" style="margin-bottom: 2rem">
          <div class="col-12_sm-10" style="text-align: center">
            <img src="kuroiwa.png" width="80%" height="auto" style="" alt="piano" class="padding-0-1-mobile">
          </div>
          <div class="col-12" style="text-align: center">
            講師　黒岩　航紀
          </div>
        </div>
      </div>
      <h2 id="c3" class="col-12">料金</h2>
      <h3 class="col-12">単発レッスン</h3>
      <ul class="col-12" style="font-size: .8rem">
        <li>ピアノ個人レッスン （院長 : 菊地裕介レッスン　1時間〜／1回） 　	￥20,000〜</li>
        <li>ピアノ個人レッスン （副院長 ： 加々見茉耶レッスン　30分〜／1回） 　	￥7,000〜</li>
        <li>ソルフェージュ&音楽理論 （3名までのグループ　60分以上）	￥7,000〜</li>
      </ul>
      
      <h3 class="col-12">月額会員コース（要入会金）</h3>
      <ul class="col-12" style="font-size: .8rem">
        <li>入会金　￥30,000<br>※※2020年中のご入会の方は、入会金全額免除	（追加レッスン、スタジオ練習利用料等の割引、ほか各種特典あり）</li>
        <li>月額レッスン料金	   ￥9,900  （プレピアノコース 満3歳以下）  〜</li>
      </ul>
        
      <div class="col-12" style="margin-bottom: 2rem;font-size: .8rem">
      その他、長時間のレッスンや、院長・菊地裕介と副院長・加々見茉耶のダブルレッスンシステムをはじめ、ニーズにご対応できるさまざまなコースをご用意しております。
小さなお子様からプロフェッショナルを目指す方、ピアノ愛好家の方まで、幅広くレッスンいたします。（音大・音高受験生対応可）
詳しくはお問い合わせください。
      </div>
      
      <h2 id="c4" class="col-12">合格実績</h2>
      <div class="col-12" style="margin-bottom: 2rem;font-size: .8rem">
        準備中
      </div>
      
      <h2 id="c5" class="col-12">受賞実績</h2>
      <div class="col-12" style="margin-bottom: 2rem;font-size: .8rem">
        準備中
      </div>
      
      <h2 id="c6" class="col-12">レッスン予約</h2>
      <div class="col-12" style="margin-bottom: 2rem;font-size: .8rem">
        <a class="color-blue" href="/">レッスンの予約はこちらから</a>
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