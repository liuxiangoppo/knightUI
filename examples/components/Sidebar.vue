<template>
  <div class="k-sidebar k-sidebar__normal" role="sidebar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'kSidebar',
  mounted () {
    // Todo
  }
}
</script>

<style lang="less">
.k-sidebar {
    width: 250px;
    height: 100%;
    position: fixed;
    top: 50px;
    bottom: 0px;
    background-color: #33485c;
    overflow: auto;
}
</style>
