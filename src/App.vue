<template>
  <div id="app">
    <!-- <h1>黑马头条</h1> -->
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  created() {
    // console.log(this)
  },
  data() {
    return {}
  }
}
</script>

<style scoped lang="less">
.box {
  font-size: 80px;
}
</style>
