<!--
  -  Copyright 2020 Huawei Technologies Co., Ltd.
  -
  -  Licensed under the Apache License, Version 2.0 (the "License");
  -  you may not use this file except in compliance with the License.
  -  You may obtain a copy of the License at
  -
  -      http://www.apache.org/licenses/LICENSE-2.0
  -
  -  Unless required by applicable law or agreed to in writing, software
  -  distributed under the License is distributed on an "AS IS" BASIS,
  -  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  -  See the License for the specific language governing permissions and
  -  limitations under the License.
  -->

<template>
  <div class="headerComp">
    <el-row
      :gutter="10"
    >
      <el-col
        :lg="6"
        :md="6"
        :sm="14"
        :xs="13"
      >
        <div class="nav-logo">
          <img
            src="../../assets/images/logo.png"
            class="curp"
            @click="jumpToEdge"
            alt
          >
        </div>
      </el-col>
      <el-col
        :lg="12"
        :md="12"
        class="nav-list"
      >
		<!-- 响应式-PC端菜单项 -->
        <div />
      </el-col>
      <el-col
        :lg="6"
        :md="6"
        :sm="10"
        :xs="11"
      >
		<!-- 右侧功能区 -->
        <div class="nav-tabs" />
      </el-col>
    </el-row>
    <!-- 响应式-移动端菜单项 -->
    <el-collapse-transition>
      <div
        v-show="menu_small"
        id="menu-div"
        class="main-sidebar-small"
      />
    </el-collapse-transition>
  </div>
</template>

<script>
export default {
  name: 'HeaderComp',
  data () {
    return {
      language: 'cn',
      list: [
        {
          labelEn: 'App Warehouse',
          labelCn: '应用仓库',
          route: '/index',
          pageId: '2.1.1',
          display: true,
          link: '',
          index: '1'
        },
        {
          labelEn: 'Docs',
          labelCn: '文档',
          route: '/docs',
          pageId: '2.1.2',
          display: true,
          link: '',
          index: '2'
        },
        {
          labelEn: 'My App',
          labelCn: '我的应用',
          route: '/myapp',
          pageId: '2.1.4',
          display: true,
          link: '',
          index: '3'
        },
        {
          labelEn: 'App Share',
          labelCn: '应用共享',
          route: '/apppromote',
          pageId: '2.1.6',
          display: true,
          link: '',
          index: '5',
          children: [
            {
              labelEn: 'App promote',
              labelCn: '应用推送',
              route: '/apppromotion',
              pageId: '2.1.6.1',
              display: true,
              link: '',
              index: '5.1'
            }, {
              labelEn: 'External App Management',
              labelCn: '外部应用仓库管理',
              route: '/apppromote',
              pageId: '2.1.6.2',
              display: true,
              link: '',
              index: '5.2'
            }, {
              labelEn: 'Message Center',
              labelCn: '消息中心',
              route: '/msgCenter',
              pageId: '2.1.6.3',
              display: true,
              link: '',
              index: '5.3'
            }, {
              labelEn: 'Operation Analyse',
              labelCn: '操作分析',
              route: '/operationAnalyse',
              pageId: '2.1.6.4',
              display: true,
              link: '',
              index: '5.4'
            }
          ]
        }
      ],
      isActive: 0,
      activeIndex: '',
      fromPath: '',
      userName: '',
      loginPage: '',
      ifGuest: true,
      menu_small: false,
      seen: false,
      unReadMsgCount: 0,
      isCheckAllMsg: false
    }
  },
  methods: {
    jumpToEdge () {
      this.$router.push('/')
    }
  }
}
</script>

<style lang='less' >
.headerComp {
  height: 65px;
  color: white;
  background: #282b33;
  position: fixed;
  z-index: 9999;
  width: 100%;
  .nav-logo {
    height: 65px;
    line-height: 65px;
    padding-left: 25px;
    img {
      height: 65px;
    }
  }
  @media only screen and (max-width: 991px){
    .nav-tabs{
      font-size: 16px;
    }
    .nav-logo{
      img{
        height: 50px;
        margin: 5px 0 0 0;
      }
    }
  }
  @media screen and (max-width: 767px){
    .nav-logo{
      img{
      height: 35px;
      margin: 15px 0 0 0;
      padding-bottom: 15px;
      }
    }
    .nav-tabs{
      font-size: 12px;
    }
  }
  @media screen and (max-width: 385px) {
    .nav-logo{
      img{
        height: 30px;
      }
    }
    .nav-tabs{
      padding-right: 1px;
    }
  }
}
</style>
