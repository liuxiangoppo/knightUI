<template>
  <page-template>
    <div class="content-inner">
      <router-view></router-view>
    </div>
  </page-template>
</template>

<script>
import PageTemplate from 'examples/components/PageTemplate'

export default {
  name: 'App',
  components: {
    PageTemplate
  }
}
</script>

<style lang="less">
.content-inner {
  // padding: 10px;
  background: #FFF;
}
</style>
