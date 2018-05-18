<template>
  <k-container without="none">
    <k-header>
      <logo></logo>
    </k-header>
    <k-sidebar>
      <k-menu :menus="data"></k-menu>
    </k-sidebar>
    <div class="mainContent">
      <div class="contentInner">
        <slot></slot>
      </div>
    </div>
  </k-container>
</template>

<script>
import KContainer from './Container'
import KHeader from './Header'
import KFooter from './Footer'
import KSidebar from './Sidebar'
import Logo from './Logo'
import KMenu from 'packages/menu'
import menuJson from 'examples/assets/menu.json'

export default {
  name: 'pageTemplate',
  data: function () {
    return {
      data: menuJson
    }
  },
  components: {
    KContainer, KHeader, KSidebar, KFooter, KMenu, Logo
  },
  mounted () {
    // Todo
  }
}
</script>

<style lang="less">
.mainContent {
  margin-left: 250px;
  padding: 50px 10px;
  .contentInner {
    background:#FFF;
  }
}
</style>
