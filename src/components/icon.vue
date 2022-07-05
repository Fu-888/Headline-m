<template>
  <i :class="['toutiao', `toutiao-${icon}`]"></i>
</template>

<script>
// 封装图标组件
export default {
  name: 'icon',
  props: {
    icon: {
      type: String
    }
  },
  created() {
    // console.log(this.icon)
  }
}
</script>

<style></style>
