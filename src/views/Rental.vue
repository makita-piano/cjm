<template>
  <v-content>
<div class="col-12">
            <div class="title">
                プロフィール
            </div>
            <div class="ancher">
        <RouterLink to="/">
            トップページ
        </RouterLink>
                > プロフィール
            </div>
        </div>
        <div class="grid col-12 profile">
            <div class="col-12" style="text-align: center">
                <img id="top-jpg" src="kagamimaya.jpg" style="padding: 1rem;width: 100%;box-sizing: border-box">
            </div>
            <div class="col-12" style="text-align: center;font-weight: bold;font-size: 1.3rem;margin-top: 2rem">
                加々見 茉耶
            </div>
            <div class="col-12" style="text-align: center;font-weight: bold">
                かがみ まや
            </div>
            <div class="col-12 text" style="margin-top: 2rem;padding: 1rem;margin-bottom: 2rem">
            兵庫県生まれ。5歳よりピアノを始める。 兵庫県立西宮高等学校音楽科を卒業し、東京藝術大学音楽学部器楽科ピアノ専攻に入学。<br>
第1回 ロザリオ・マルチアーノ国際ピアノコンクール（ウィーン）第2位。併せてシューベルト賞を受賞。 2011年、東京国際芸術協会主催の海外音楽大学派遣オーディションに合格し、渡航費・受講費全額免除でモスクワ音楽院のセミナーを受講。2014年、イタリア・イモラ音楽院の夏期講習会にてディプロマ取得。第2回イモラ国際ピアノアワード本選会にて奨学金を得る。東京藝術大学を卒業後、 2015年よりイタリア在住。第23回ペトロフピアノコンクール第1位。第23回 ジュリオ・ロスピリオージピアノコンクール第1位。優勝の褒賞として、イタリア国内で12のリサイタルをおこなう。メキシコ州立交響楽団の指揮者で芸術監督であるエンリケ・バティス氏に認められ、メキシコ州立交響楽団とプロコフィエフのピアノ協奏曲第2番を演奏。その模様は地元メディアにも取り上げられた。<br>
これまでに、兵庫県立西宮高等学校オーケストラ、姫路交響楽団、Orchestra dell Concentus Musicus Patavinus、神戸フィルハーモニック、メキシコ州立交響楽団等と共演。芸大アーツイン丸の内、Casa Menotti 音楽フェスティバル、San Giacomo 音楽フェスティバル招聘アーティスト。在ドイツ日本大使館をはじめ、日本・ヨーロッパの各地各都市を中心にソロリサイタル出演多数。NPO法人イエローエンジェル奨学金を得てイモラ音楽院に在学し、レオニード・マルガリウス氏に師事。2019年イタリア最高位のディプロマを取得し卒業。
            </div>
        </div>
  </v-content>
</template>

<script>
  export default {
    mounted(){
      const title = "Profile | 加々見 茉耶"
      const description = "加々見 茉耶(かがみ まや)　兵庫県生まれ。5歳よりピアノを始める。 兵庫県立西宮高等学校音楽科を卒業し、東京藝術大学音楽学部器楽科ピアノ専攻に入学。第1回 ロザリオ・マルチアーノ国際ピアノコンクール（ウィーン）第2位。併せてシューベルト賞を受賞。"
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
