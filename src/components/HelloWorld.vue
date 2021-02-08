<template>
  <div class="hello">
    <eg-bread-crumb :data="crumbData" />
    <eg-banner />
  </div>
</template>

<script>
import EgBanner from './EgBanner'
import EgBreadCrumb from './EgBreadCrumb'
export default {
  components: { EgBreadCrumb, EgBanner },
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
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
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
