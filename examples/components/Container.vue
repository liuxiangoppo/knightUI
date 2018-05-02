<template>
  <div class="k-container">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'kContainer',
  props: {
    // Todo
  },
  mounted () {
    // Todo
  }
}
</script>

<style lang="less">
.k-container {
  width: 100%;
  min-width: 500px;
  height: 100%;
  min-height: 500px;
  position: relative;
  background-color: #FFFFFF;
  overflow-y: auto;
}
</style>
