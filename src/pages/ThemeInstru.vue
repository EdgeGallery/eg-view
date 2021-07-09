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
  <div class="">
  <h2>界面主题样式</h2>
  <p>基于Element UI主题，提供了一套EdgeGallery风格的主题样式</p>
  <h3>使用方法</h3>
  <SampleArea>
    <template v-slot:demo-source>
      <el-button
        type="primary"
      >
        带主题色的按钮
      </el-button>
    </template>
    <template v-slot:meta-desc>
      <div>
        <p>在项目的main.js文件中添加如下代码：</p>
      </div>
    </template>
    <template v-slot:codes>
      <pre>import &#39;./assets/style/element-variables.scss&#39;</pre>
    </template>
  </SampleArea>
  </div>
</template>

<script>
import SampleArea from './componentsForInstru/SampleArea'
export default{
  components: {SampleArea}
}
</script>
