<template>
  <v-content>
    <div class="col-12">
      <img src="tekitou.png" width="100%" height="300px" style="margin-bottom: 2rem" alt="piano">
    </div>
    <h2 class="col-12">音楽指導の社会的使命とは</h2>
    <div class="col-12" style="margin-bottom: 2rem">
      CJMはあああああああああああああああああああああああああああああああああああああああああああああああああああ
      ああああああああああああああああああああああああああああああああああああああああああああああああああああああ
      あああああああああああああああああああああああああああああああああああああああああああああああああああああ
      あああああああああああああああああああああああああああああああああああああああああああああああああああああ<br>
      あああああああああああああああああああああああああああああああああああああああああああああああああああああ
      あああああああああああああああああああああああああああああああああああああああああああああああああああああ
    </div>
    
  </v-content>
</template>

<script>
  export default {
    mounted(){
      const title = "理念・特長｜神宮の杜音楽院"
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