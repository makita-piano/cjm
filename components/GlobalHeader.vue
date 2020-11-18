<template>

  <header>
    <div class="grid display-none-mobile">
      <div class="col-4">
        <NuxtLink to="/">
          <img src="cjm.png" width="auto" height="60px" style="padding: 1rem .3rem 1rem 1.5rem;margin: 2rem 0;vertical-align: middle;box-sizing: content-box" alt="piano">
        </NuxtLink>
      </div>
      <div class="grid col-8" style="padding: 0 1rem">
        <ul class="grid col-12">
          <li class="col-middle" style="text-align: center">
            <NuxtLink to="/philosophy">
              理念・特長
            </NuxtLink>
          </li>
          <li class="col-middle" style="text-align: center">
            <NuxtLink to="/lesson">
              レッスン
            </NuxtLink>
          </li>
          <li class="col-middle" style="text-align: center">
            <NuxtLink to="/event">
              講座・イベント
            </NuxtLink>
          </li>
          <li class="col-middle" style="text-align: center">
            <NuxtLink to="/rental">
              スタジオ貸出
            </NuxtLink>
          </li>
          <li class="col-middle" style="text-align: center">
            <NuxtLink to="/contact">
              お問い合わせ
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
    <nav class="grid menu-container display-none-pc">
      <transition name="trans_slide">
        <ul class="menu" v-if="isMenuShow">
          <li class="menu-item" v-on:click="menuShow">
            <NuxtLink to="/philosophy">
              理念・特長
            </NuxtLink>
          </li>
          <li class="menu-item" v-on:click="menuShow">
            <NuxtLink to="/lesson">
              レッスン
            </NuxtLink>
          </li>
          <li class="menu-item" v-on:click="menuShow">
            <NuxtLink to="/event">
              講座・イベント
            </NuxtLink>
          </li>
          <li class="menu-item" v-on:click="menuShow">
            <NuxtLink to="/rental">
              スタジオ貸出
            </NuxtLink>
          </li>
          <li class="menu-item" v-on:click="menuShow">
            <NuxtLink to="/contact">
              お問い合わせ
            </NuxtLink>
          </li>
        </ul>
      </transition>
      <div>
        <NuxtLink to="/" id="home" style="z-index: 9999">
          <img src="cjm.png" width="70%" height="auto" style="background-color: white;border-radius: 3rem;padding: .3rem;margin: 1.5rem 0 .5rem .2rem;vertical-align: middle;box-sizing: content-box" alt="piano">
        </NuxtLink>
      </div>
      <div class="menu-trigger" v-on:click="menuShow" v-bind:class='{active: isMenuShow}'>
        <div>
          <span></span>
          <span></span>
          <span></span>
          <span class="menu-text">{{menuText}}</span>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
  export default {
    name: 'global_header',
    
    data() {
      return {
        menuText: "menu",
        isMenuShow: false
      }
    },
    
    methods: {
      menuShow: function() {
        this.isMenuShow = !this.isMenuShow;
      }
    }
  }
</script>

<style>
.trans_slide-enter-active, .trans_slide-leave-active {
    transition: opacity .5s;
}
.trans_slide-enter, .trans_slide-leave-to {
    opacity: 0;
}
</style>
