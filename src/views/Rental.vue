<template>
  <v-content>
    <div class="col-12">
      <img src="CJM_studio.png" width="100%" height="auto" alt="piano">
    </div>
    <div id="main-content" class="grid-center col-12">
      <div class="grid col-9_sm-10" style="text-align: center">
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
    <div class="grid col-12" style="padding: 1rem">
      <div class="col-12" style="margin-bottom: 2rem">
        CJM Tokyo 神宮の杜音楽院では、スタジオ貸出も行なっております。個人の練習や室内楽の合わせなどはもちろん、録音・録画スタジオとしてもご利用いただけます。オンライン審査のための演奏収録、コンクール直前の利用など、様々な用途にぜひお使いください。
      </div>
      <h2 id="c1" class="col-12">料金</h2>
      <h3 class="col-12">利用料金　<span style="font-size: .8rem">※1時間あたり / YAMAHA C3型 グランドピアノ 使用可能</span></h3>
      <ul class="col-12" style="font-size: .8rem">
        <li>平日 午前（9:00-13:00）　	￥2,000</li>
        <li>平日 午後（13:00-17:00）　	￥2,500</li>
        <li>平日 夜間（17:00-23:00）　	￥3,000</li><br>
        <li>土日祝日 （終日）　	￥3,000</li>
      </ul>
      <h3 class="col-12">オプション　<span style="font-size: .8rem">※１時間あたり</span></h3>
      <ul class="col-12" style="font-size: .8rem">
        <li>スタインウェイ使用料　￥1,000</li>
      </ul>
      
      <h3 class="col-12">会員特典　<span style="font-size: .8rem">※オプション料金には適用されません。　</span></h3>
      <ul class="col-12" style="font-size: .8rem">
        <li>スタジオ利用料　20%OFF</li>
      </ul>
      
      <h2 id="c2" class="col-12">設備</h2>
      <ul class="col-12" style="font-size: .8rem">
        <li>Steinway & Sons D-274型 フルコンサートグランドピアノ 　（ドイツ・ハンブルク1996年製造）</li>
        <li>YAMAHA C3型 グランドピアノ</li>
        <li>自立譜面台　1本</li>
        <li>椅子、机等有り</li>
      </ul>
      
      <h2 id="c3" class="col-12">禁止事項</h2>
      <ul class="col-12" style="font-size: .8rem">
        <li>教室及びホールでのご飲食、喫煙</li>
        <li>音楽関係以外の目的での使用</li>
        <li>窓、扉、カーテンを開けての演奏</li>
      </ul>
      
      <ul class="col-12" style="font-size: .8rem">
        <li>※スタジオ利用は、音楽院のレッスンや音楽院講師の利用等が無い、空いている時間に限られます。状況により、空き時間が変わる可能性もありますこと、ご了承ください。</li>
        <li>※レッスンとしてのご利用をご検討の方はご相談ください。</li>
      </ul>
      
      <h2 id="c4" class="col-12">スタジオ予約</h2>
      <div class="col-12 color-blue" style="margin-bottom: 2rem;font-size: .8rem">
        <RouterLink to="/reserve">スタジオの予約はこちらから</RouterLink>
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