import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _6e2f1570 = () => interopDefault(import('../pages/contact.vue' /* webpackChunkName: "pages/contact" */))
const _eddb4a7c = () => interopDefault(import('../pages/event.vue' /* webpackChunkName: "pages/event" */))
const _205c4340 = () => interopDefault(import('../pages/lesson.vue' /* webpackChunkName: "pages/lesson" */))
const _fe8c114a = () => interopDefault(import('../pages/news.vue' /* webpackChunkName: "pages/news" */))
const _2cf638f9 = () => interopDefault(import('../pages/philosophy.vue' /* webpackChunkName: "pages/philosophy" */))
const _20d585a8 = () => interopDefault(import('../pages/rental.vue' /* webpackChunkName: "pages/rental" */))
const _6977afe4 = () => interopDefault(import('../pages/reserve.vue' /* webpackChunkName: "pages/reserve" */))
const _571134fa = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/contact",
    component: _6e2f1570,
    name: "contact"
  }, {
    path: "/event",
    component: _eddb4a7c,
    name: "event"
  }, {
    path: "/lesson",
    component: _205c4340,
    name: "lesson"
  }, {
    path: "/news",
    component: _fe8c114a,
    name: "news"
  }, {
    path: "/philosophy",
    component: _2cf638f9,
    name: "philosophy"
  }, {
    path: "/rental",
    component: _20d585a8,
    name: "rental"
  }, {
    path: "/reserve",
    component: _6977afe4,
    name: "reserve"
  }, {
    path: "/",
    component: _571134fa,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
