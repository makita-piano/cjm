<template>
  <header>
    <div class="grid display-none-mobile">
      <div class="col-4">
        <NuxtLink to="/">
          <nuxt-img src="/img/cjm.png" height="60px" style="padding: 2rem .3rem 2rem 1.5rem" alt="cjm-logo" />
        </NuxtLink>
      </div>
      <div class="grid col-8">
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
            <NuxtLink to="/rental">
              スタジオ貸出
            </NuxtLink>
          </li>
          <li class="col-middle" style="text-align: center">
            <NuxtLink to="/access">
              アクセス
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
            <NuxtLink to="/rental">
              スタジオ貸出
            </NuxtLink>
          </li>
          <li class="menu-item" v-on:click="menuShow">
            <NuxtLink to="/access">
              アクセス
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
          <nuxt-img src="/img/cjm.png" height="100" style="height: 50px;background-color: white;padding: 1.5rem;vertical-align: middle;box-sizing: content-box" alt="piano" />
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
    <div v-if="isMenuShow" style="padding: 5rem"></div>
  </header>
</template>

<script>
  export default {
    name: 'global_header',

    data() {
      return {
        isMenuShow: false
      }
    },

    methods: {
      menuShow: function() {
        this.isMenuShow = !this.isMenuShow;
      }
    },
    computed: {
      menuText: function() {
        if(this.isMenuShow){
          return "close";
        }else{
          return "menu";
        }
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
