import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _2e963209 = () => interopDefault(import('../pages/access.vue' /* webpackChunkName: "pages/access" */))
const _326da76a = () => interopDefault(import('../pages/contact.vue' /* webpackChunkName: "pages/contact" */))
const _31d71fdd = () => interopDefault(import('../pages/lesson.vue' /* webpackChunkName: "pages/lesson" */))
const _401993bb = () => interopDefault(import('../pages/news/index.vue' /* webpackChunkName: "pages/news/index" */))
const _4414d874 = () => interopDefault(import('../pages/notfound.vue' /* webpackChunkName: "pages/notfound" */))
const _16477f16 = () => interopDefault(import('../pages/philosophy.vue' /* webpackChunkName: "pages/philosophy" */))
const _011019c9 = () => interopDefault(import('../pages/rental.vue' /* webpackChunkName: "pages/rental" */))
const _f14f3232 = () => interopDefault(import('../pages/reserve.vue' /* webpackChunkName: "pages/reserve" */))
const _19686ba6 = () => interopDefault(import('../pages/voices.vue' /* webpackChunkName: "pages/voices" */))
const _4adf48e3 = () => interopDefault(import('../pages/news/_id.vue' /* webpackChunkName: "pages/news/_id" */))
const _78a9d0bd = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _0b9c138e = () => interopDefault(import('~/pages/notfound.vue' /* webpackChunkName: "" */))

const emptyFn = () => {}

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
    path: "/voices",
    component: _19686ba6,
    name: "voices"
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

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
