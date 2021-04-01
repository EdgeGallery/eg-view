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
  <div>
    <eg-banner :image-url="bannerImageUrl"/>
    <h2/>
    <el-button
      type="primary"
      @click="handleEnterInnerPage"
    >
      点击进入内部页面
    </el-button>
  </div>
</template>

<script>
import EgBanner from '../components/EgBanner'
export default {
  components: { EgBanner },
  data () {
    return {
      bannerImageUrl: 'images/静态横幅.png'
    }
  },
  methods: {
    handleEnterInnerPage () {
      this.$router.push('/innerPage')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
