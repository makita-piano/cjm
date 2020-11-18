import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _2c521d28 = () => interopDefault(import('../pages/Contact.vue' /* webpackChunkName: "pages/Contact" */))
const _00847aa2 = () => interopDefault(import('../pages/Event.vue' /* webpackChunkName: "pages/Event" */))
const _205c4340 = () => interopDefault(import('../pages/lesson.vue' /* webpackChunkName: "pages/lesson" */))
const _f6d7490a = () => interopDefault(import('../pages/News.vue' /* webpackChunkName: "pages/News" */))
const _1d85f5ce = () => interopDefault(import('../pages/Philosophy.vue' /* webpackChunkName: "pages/Philosophy" */))
const _6667194c = () => interopDefault(import('../pages/Rental.vue' /* webpackChunkName: "pages/Rental" */))
const _663d5078 = () => interopDefault(import('../pages/Reserve.vue' /* webpackChunkName: "pages/Reserve" */))
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
    path: "/Contact",
    component: _2c521d28,
    name: "Contact"
  }, {
    path: "/Event",
    component: _00847aa2,
    name: "Event"
  }, {
    path: "/lesson",
    component: _205c4340,
    name: "lesson"
  }, {
    path: "/News",
    component: _f6d7490a,
    name: "News"
  }, {
    path: "/Philosophy",
    component: _1d85f5ce,
    name: "Philosophy"
  }, {
    path: "/Rental",
    component: _6667194c,
    name: "Rental"
  }, {
    path: "/Reserve",
    component: _663d5078,
    name: "Reserve"
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
