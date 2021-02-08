<template>
  <div class="hello">
    <bg-bread-crumb :data="crumbData" />
  </div>
</template>

<script>
import BgBreadCrumb from './BGBreadCrumb'
export default {
  components: { BgBreadCrumb },
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
