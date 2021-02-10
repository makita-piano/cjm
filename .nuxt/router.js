import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _2e963209 = () => interopDefault(import('../pages/access.vue' /* webpackChunkName: "pages/access" */))
const _326da76a = () => interopDefault(import('../pages/contact.vue' /* webpackChunkName: "pages/contact" */))
const _aaaa12f6 = () => interopDefault(import('../pages/event.vue' /* webpackChunkName: "pages/event" */))
const _31d71fdd = () => interopDefault(import('../pages/lesson.vue' /* webpackChunkName: "pages/lesson" */))
const _401993bb = () => interopDefault(import('../pages/news/index.vue' /* webpackChunkName: "pages/news/index" */))
const _4414d874 = () => interopDefault(import('../pages/notfound.vue' /* webpackChunkName: "pages/notfound" */))
const _16477f16 = () => interopDefault(import('../pages/philosophy.vue' /* webpackChunkName: "pages/philosophy" */))
const _011019c9 = () => interopDefault(import('../pages/rental.vue' /* webpackChunkName: "pages/rental" */))
const _f14f3232 = () => interopDefault(import('../pages/reserve.vue' /* webpackChunkName: "pages/reserve" */))
const _4adf48e3 = () => interopDefault(import('../pages/news/_id.vue' /* webpackChunkName: "pages/news/_id" */))
const _78a9d0bd = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
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
    path: "/access",
    component: _2e963209,
    name: "access"
  }, {
    path: "/contact",
    component: _326da76a,
    name: "contact"
  }, {
    path: "/event",
    component: _aaaa12f6,
    name: "event"
  }, {
    path: "/lesson",
    component: _31d71fdd,
    name: "lesson"
  }, {
    path: "/news",
    component: _401993bb,
    name: "news"
  }, {
    path: "/notfound",
    component: _4414d874,
    name: "notfound"
  }, {
    path: "/philosophy",
    component: _16477f16,
    name: "philosophy"
  }, {
    path: "/rental",
    component: _011019c9,
    name: "rental"
  }, {
    path: "/reserve",
    component: _f14f3232,
    name: "reserve"
  }, {
    path: "/news/:id",
    component: _4adf48e3,
    name: "news-id"
  }, {
    path: "/",
    component: _78a9d0bd,
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
