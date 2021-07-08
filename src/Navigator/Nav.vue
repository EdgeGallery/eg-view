<!--
  -  Copyright 2021 Huawei Technologies Co., Ltd.
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
  <el-menu
    default-active="0"
    class="el-menu-vertical-demo"
    :default-openeds='["1", "2"]'
    :router="true">
    <el-menu-item index="0">
      <template slot="title">
        <span class="font-Bold">简介</span>
      </template>
    </el-menu-item>
    <el-submenu index="1">
      <template slot="title">
        <span class="font-Bold">开发指南</span>
      </template>
      <el-menu-item index="1-1">安装</el-menu-item>
      <el-menu-item index="1-2">快速上手</el-menu-item>
      <el-menu-item index="1-3">国际化</el-menu-item>
    </el-submenu>
    <el-submenu index="2">
      <template slot="title">
        <span class="font-Bold">组件</span>
      </template>
      <el-menu-item index="2-1">界面主题样式</el-menu-item>
      <el-menu-item index="2-2">横幅广告</el-menu-item>
      <el-menu-item index="2-3">面包屑</el-menu-item>
      <el-menu-item index="2-4">模态框</el-menu-item>
      <el-menu-item index="2-5">表格</el-menu-item>
      <el-menu-item index="2-6">底部组件</el-menu-item>
    </el-submenu>
  </el-menu>
</template>

<style scoped>
  .font-Bold{
    font-weight: Bold;
  }
</style>
