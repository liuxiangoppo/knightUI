<template>
  <header class="k-header" role="header">
    <slot></slot>
  </header>
</template>

<script>
export default {
  name: 'kHeader'
}
</script>

<style lang="less">
.k-header {
    width: 100%;
    height: 50px;
    background-color: #2a3b4c;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 1001;
}
</style>
