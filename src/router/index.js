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
import Router from 'vue-router'
import InstallInstru from '@/pages/InstallInstru'
import QuikStartInstru from '@/pages/QuikStartInstru'
import InternationalizationInstru from '@/pages/InternationalizationInstru'
import ThemeInstru from '@/pages/ThemeInstru'
import BannerInstru from '@/pages/BannerInstru'
import BreadcrumbInstru from '@/pages/BreadcrumbInstru'
import ModalDialogInstru from '@/pages/ModalDialogInstru'
import TableInstru from '@/pages/TableInstru'
import FooterInstru from '@/pages/FooterInstru'
import OverviewInstru from '@/pages/OverviewInstru'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'OverviewInstru',
      component: OverviewInstru
    },
    {
      path: '/0',
      name: 'OverviewInstru',
      component: OverviewInstru
    }, {
      path: '/1-1',
      name: 'InstallInstru',
      component: InstallInstru
    }, {
      path: '/1-2',
      name: 'QuikStartInstru',
      component: QuikStartInstru
    },
    {
      path: '/1-3',
      name: 'InternationalizationInstru',
      component: InternationalizationInstru
    }, {
      path: '/2-1',
      name: 'ThemeInstru',
      component: ThemeInstru
    },
    {
      path: '/2-2',
      name: 'BannerInstru',
      component: BannerInstru
    }, {
      path: '/2-3',
      name: 'BreadcrumbInstru',
      component: BreadcrumbInstru
    },
    {
      path: '/2-4',
      name: 'ModalDialogInstru',
      component: ModalDialogInstru
    }, {
      path: '/2-5',
      name: 'TableInstru',
      component: TableInstru
    }, {
      path: '/2-6',
      name: 'FooterInstru',
      component: FooterInstru
    }
  ]
})
