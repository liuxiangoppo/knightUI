<template>
  <div class="k-menu">
    <ul class="nav" v-if="hasJson">
      <menu-item v-for="(menu, index) in menus" :key="index" :menu="menu">
        <span>{{ menu.name }}</span>
      </menu-item>
    </ul>
    <!--判断menus属性是否有值 若为undefined 则使用插销生成组件-->
    <ul class="nav" v-else>
      <slot></slot>
    </ul>
  </div>
</template>

<script>
import MenuItem from './MenuItem'

export default {
  name: 'kNavMenu',
  props: [ 'menus' ],
  components: {
    MenuItem
  },
  computed: {
    hasJson () {
      return this.menus !== 'undefined'
    }
  }
}
</script>
