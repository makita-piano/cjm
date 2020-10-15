<template>
  <div id="app">
    <global-header />
    <transition name="router-transition">
      <router-view/>
    </transition>
    <global-footer />
  </div>
</template>

<script>
import GlobalHeader from './components/GlobalHeader'
import GlobalFooter from './components/GlobalFooter'
import 'whatwg-fetch'

if (window.fetch === undefined) {
  window.fetch = fetch;
}

export default {
  components: {
    GlobalHeader,
    GlobalFooter
  }
};
</script>

<style>
.router-transition-enter-active {
animation: fadeIn 1s;
}
@keyframes fadeIn {
from {
transform: translateY(-10px);
opacity: 0.3;
}
to {
transform: translateY(0);
opacity: 1;
}
}
</style>
