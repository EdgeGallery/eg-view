<template>
  <div class="pagination">
    <el-pagination
      background
      class="floatRight"
      @size-change="sizeChange"
      @current-change="currentChange"
      :page-sizes="pageSizes"
      layout="total, sizes, prev, pager, next, jumper"
      :current-page.sync="pageNum"
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
    pageNum: {
      required: false,
      default: 1,
      type: Number
    }
  },
  computed: {
    pageSizes () {
      let arr = []
      for (let i = 1; i < 4; i++) {
        let size = i * this.pageSize
        arr.push(size)
      }
      return arr
    }
  },
  methods: {
    sizeChange (val) {
      this.$emit('sizeChange', val)
    },
    currentChange (val) {
      this.$emit('currentChange', val)
    }
  },
  created () {
  },
  mounted () {
  },
  beforeCreate () {},
  beforeUpdate () {},
  updated () {},
  beforeDestroy () {},
  destroyed () {},
  activated () {}
}
</script>
<style lang='less' scoped>
  .floatRight {
    float: right;
  }
</style>
