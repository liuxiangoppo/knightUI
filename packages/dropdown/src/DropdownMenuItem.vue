<template>
  <li class="k-dropdown-menu-item">
    <a class="dropdown-menu-item-inner" :class="custormClass" @click="handleItemClick">
      <slot></slot>
    </a>
  </li>
</template>

<script>
import Emitter from 'src/mixins/Emitter.js'
export default {
  name: 'dropdown-menu-item',
  mixins: [Emitter],
  props: {
    // 自定义样式
    custormClass: {
      type: String,
      default: ''
    },
    // 路由跳转
    to: {
      type: String,
      default: ''
    },
    // 指令
    command: {
      type: String,
      default: ''
    }
  },
  methods: {
    handleItemClick (e) {
      // this.$emit('click', null)
      // this.dispatch('k-dropdown', 'menu-item-click', {
      //   event: e,
      //   to: this.to
      // })
      this.$emit('click', e)
      this.$router.push(this.to)
    }
  }
}
</script>
