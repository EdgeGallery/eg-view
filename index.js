import BgBreadCrumb from './src/components/BgBreadCrumb'
import Banner from './src/components/Banner'
import _Vue from 'vue'

BgBreadCrumb.install = Vue => {
  if (!Vue) {
    window.Vue = Vue = _Vue
  }
  Vue.component(BgBreadCrumb.name, BgBreadCrumb)
}

Banner.install = Vue => {
  if (!Vue) {
    window.Vue = Vue = _Vue
  }
  Vue.component(Banner.name, Banner)
}

export default {
  BgBreadCrumb,
  Banner
}
