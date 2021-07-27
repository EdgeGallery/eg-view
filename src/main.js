/*
 *  Copyright 2021 Huawei Technologies Co., Ltd.
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */

import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import routes from './route.config'
import ElementUI from 'element-ui'
import hljs from 'highlight.js'
import DemoBlock from './pages/components/DemoBlock'
import SideNav from './pages/components/SideNav'
import FooterNav from './pages/components/FooterNav'
import 'highlight.js/styles/color-brewer.css'

import './pages/demo-styles/index.scss'
import './pages/assets/styles/common.scss'

import './assets/style/element-variables.scss'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(VueRouter)
Vue.component('demo-block', DemoBlock)
Vue.component('side-nav', SideNav)
Vue.component('footer-nav', FooterNav)

const router = new VueRouter({
  mode: 'hash',
  base: __dirname,
  routes
})

router.afterEach(route => {
  // https://github.com/highlightjs/highlight.js/issues/909#issuecomment-131686186
  Vue.nextTick(() => {
    const blocks = document.querySelectorAll('pre code:not(.hljs)')
    Array.prototype.forEach.call(blocks, hljs.highlightBlock)
  })
  document.title = 'EgView'
  // ga('send', 'event', 'PageView', route.name)
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
