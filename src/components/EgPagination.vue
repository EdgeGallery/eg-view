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
  <div class="pagination">
    <el-pagination
      background
      class="floatRight"
      @size-change="sizeChange"
      @current-change="currentChange"
      :page-sizes="pageSizes"
      layout="total, sizes, prev, pager, next, jumper"
      :current-page="pageNum"
      :page-size="pageSize"
      :total="total"
    />
  </div>
</template>

<script>

export default {
  components: {},
  data () {
    return {
    }
  },
  props: {
    total: {
      required: false,
      default: 0,
      type: Number
    },
    pageSize: {
      required: false,
      default: 10,
      type: Number
    },
    pageSizes: {
      required: false,
      default: () => [10, 20, 30],
      type: Array
    },
    pageNum: {
      required: false,
      default: 1,
      type: Number
    }
  },
  computed: {
  },
  methods: {
    sizeChange (val) {
      this.$emit('sizeChange', val)
    },
    currentChange (val) {
      this.$emit('currentChange', val)
    }
  }
}
</script>
<style lang='less' scoped>
  .floatRight {
    float: right;
  }
</style>
