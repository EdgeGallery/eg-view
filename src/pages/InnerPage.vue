<template>
  <div>
    <eg-bread-crumb :data="crumbData" />
    <el-button type="primary">点击打开对话框</el-button>
  </div>
</template>

<script>
import EgBreadCrumb from '../components/EgBreadCrumb'
export default {
  components: { EgBreadCrumb },
  data () {
    return {
      crumbData: [{
        name: '首页',
        path: '/'
      }, {
        name: '内部页',
        path: '/innerPage'
      }]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
