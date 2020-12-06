import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _6e2f1570 = () => interopDefault(import('../pages/contact.vue' /* webpackChunkName: "pages/contact" */))
const _eddb4a7c = () => interopDefault(import('../pages/event.vue' /* webpackChunkName: "pages/event" */))
const _205c4340 = () => interopDefault(import('../pages/lesson.vue' /* webpackChunkName: "pages/lesson" */))
const _56c84d9e = () => interopDefault(import('../pages/news/index.vue' /* webpackChunkName: "pages/news/index" */))
const _b442a1d2 = () => interopDefault(import('../pages/notfound.vue' /* webpackChunkName: "pages/notfound" */))
const _2cf638f9 = () => interopDefault(import('../pages/philosophy.vue' /* webpackChunkName: "pages/philosophy" */))
const _20d585a8 = () => interopDefault(import('../pages/rental.vue' /* webpackChunkName: "pages/rental" */))
const _6977afe4 = () => interopDefault(import('../pages/reserve.vue' /* webpackChunkName: "pages/reserve" */))
const _a6adc0f4 = () => interopDefault(import('../pages/news/_id.vue' /* webpackChunkName: "pages/news/_id" */))
const _571134fa = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _0b9c138e = () => interopDefault(import('~/pages/notfound.vue' /* webpackChunkName: "" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
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
    component: _56c84d9e,
    name: "news"
  }, {
    path: "/notfound",
    component: _b442a1d2,
    name: "notfound"
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
    path: "/news/:id",
    component: _a6adc0f4,
    name: "news-id"
  }, {
    path: "/",
    component: _571134fa,
    name: "index"
  }, {
    path: "*",
    component: _0b9c138e,
    name: "404error"
  }],

  fallback: false
}

export function createRouter () {
  const router = new Router(routerOptions)
  const resolve = router.resolve.bind(router)

  // encodeURI(decodeURI()) ~> support both encoded and non-encoded urls
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = encodeURI(decodeURI(to))
    }
    return resolve(to, current, append)
  }

  return router
}
