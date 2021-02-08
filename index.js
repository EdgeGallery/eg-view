import BgBreadCrumb from './src/components/BgBreadCrumb'
import _Vue from 'vue'

BgBreadCrumb.install = Vue => {
  if (!Vue) {
    window.Vue = Vue = _Vue
  }
  Vue.component(BgBreadCrumb.name, BgBreadCrumb)
}

export default BgBreadCrumb
