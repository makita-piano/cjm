<template>
  <v-content>
    <div class="col-12">
      <img src="tekitou.png" width="100%" height="300px" style="margin-bottom: 2rem" alt="piano">
    </div>
    <div class="grid-center col-12">
      <div class="grid col-9_sm-10" style="text-align: center">
        <div class="col-3_sm-6">
          <a href="#c1">料金</a>
        </div>
        <div class="col-3_sm-6">
          <a href="#c2">設備</a>
        </div>
        <div class="col-3_sm-6">
          <a href="#c3">禁止事項</a>
        </div>
        <div class="col-3_sm-6">
          <a href="#c4">スタジオ予約</a>
        </div>
      </div>
    </div>
    <div class="grid col-12" style="padding: 1rem">
      <div class="col-12" style="margin-bottom: 2rem">
        CJMはあああああああああああああああああああああああああああああああああああああああああああああああああああ
        ああああああああああああああああああああああああああああああああああああああああああああああああああああああ
        あああああああああああああああああああああああああああああああああああああああああああああああああああああ
        あああああああああああああああああああああああああああああああああああああああああああああああああああああ<br>
        あああああああああああああああああああああああああああああああああああああああああああああああああああああ
        あああああああああああああああああああああああああああああああああああああああああああああああああああああ
      </div>
      <h2 id="#c1" class="col-12">料金</h2>
      <h3 class="col-12">利用料金　<span style="font-size: .8rem">※１時間あたり／あああああああああ</span></h3>
      <ul class="col-12" style="font-size: .8rem">
        <li>平日ああああああああああああああああああ　￥2,000</li>
        <li>平日ああああああああああああああああああ　￥3,000</li>
        <li>平日ああああああああああああああああああ　￥3,000</li><br>
        <li>土日祝ああああああああああああああああああ　￥3,000</li>
      </ul>
      <h3 class="col-12">オプション　<span style="font-size: .8rem">※１時間あたり</span></h3>
      <ul class="col-12" style="font-size: .8rem">
        <li>スタインウェイ使用料　￥1,000</li>
      </ul>
      
      <h3 class="col-12">会員特典　<span style="font-size: .8rem">※あああ</span></h3>
      <ul class="col-12" style="font-size: .8rem">
        <li>スタジオ利用料　20%OFF</li>
      </ul>
      
      <h2 id="#c2" class="col-12">設備</h2>
      <ul class="col-12" style="font-size: .8rem">
        <li>ああああああああああああああああああ</li>
        <li>ああああああああああああああああああ</li>
        <li>ああああああああああああああああああ</li>
        <li>ああああああああああああああああああ</li>
      </ul>
      
      <h2 id="#c3" class="col-12">禁止事項</h2>
      <ul class="col-12" style="font-size: .8rem">
        <li>ああああああああああああああああああ</li>
        <li>ああああああああああああああああああ</li>
        <li>ああああああああああああああああああ</li>
      </ul>
      
      <ul class="col-12" style="font-size: .8rem">
        <li>ああああああああああああああああああ</li>
        <li>ああああああああああああああああああ</li>
      </ul>
      
      <h2 id="#c4" class="col-12">スタジオ予約</h2>
      <div class="col-12" style="margin-bottom: 2rem;font-size: .8rem">
        <a href="/">スタジオの予約はこちらから</a>
      </div>
      
      
      
      
      <div class="col-12" style="margin-bottom: 2rem;font-size: .8rem">
        CJMはあああああああああああああああああああああああああああああああああああああああああああああああああああ
        ああああああああああああああああああああああああああああああああああああああああああああああああああああああ
        あああああああああああああああああああああああああああああああああああああああああああああああああああああ
        あああああああああああああああああああああああああああああああああああああああああああああああああああああ<br>
        あああああああああああああああああああああああああああああああああああああああああああああああああああああ
        あああああああああああああああああああああああああああああああああああああああああああああああああああああ
      </div>
      <h2 class="col-12">利便性を考えた立地と充実の設備</h2>
      <div class="col-12" style="margin-bottom: 2rem;font-size: .8rem">
        CJMはあああああああああああああああああああああああああああああああああああああああああああああああああああ
        ああああああああああああああああああああああああああああああああああああああああああああああああああああああ
        あああああああああああああああああああああああああああああああああああああああああああああああああああああ
        あああああああああああああああああああああああああああああああああああああああああああああああああああああ<br>
        あああああああああああああああああああああああああああああああああああああああああああああああああああああ
        あああああああああああああああああああああああああああああああああああああああああああああああああああああ
      </div>
      
      <div class="col-12" style="margin-bottom: 2rem;font-size: .8rem">
        <a href="/">院長「ー」はこちら</a>
      </div>
    </div>
  </v-content>
</template>

<script>
  export default {
    mounted(){
      const title = "スタジオ貸出｜神宮の杜音楽院"
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