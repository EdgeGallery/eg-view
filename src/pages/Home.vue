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
