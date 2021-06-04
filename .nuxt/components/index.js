import { wrapFunctional } from './utils'

export { default as Footer } from '../../components/Footer.vue'
export { default as Header } from '../../components/Header.vue'

export const LazyFooter = import('../../components/Footer.vue' /* webpackChunkName: "components/footer" */).then(c => wrapFunctional(c.default || c))
export const LazyHeader = import('../../components/Header.vue' /* webpackChunkName: "components/header" */).then(c => wrapFunctional(c.default || c))
