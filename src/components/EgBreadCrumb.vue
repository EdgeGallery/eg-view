<template>
  <div
    class="bread-crumb"
  >
    <el-breadcrumb separator=">">
      <el-breadcrumb-item
        v-for="item in data"
        :key="item.name"
        :to="item.path"
      >
        {{ item.name }}
      </el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>

export default {
  name: 'eg-bread-crumb',
  components: {},
  data () {
    return {
    }
  },
  props: {
    data: {
      type: Array,
      default: () => []
    }
  },
  computed: {},
  watch: {},
  methods: {
  },
  created () {
  },
  mounted () {
  },
  beforeCreate () {},
  beforeMount () {},
  beforeUpdate () {},
  updated () {},
  beforeDestroy () {},
  destroyed () {},
  activated () {}
}
</script>
<style lang='less' scoped>
  .bread-crumb {
    padding: 0 56px;
  }
</style>
