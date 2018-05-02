<template>
  <li class="k-menu-item">
    <span v-if="isDisabled" :class="menuItemCls">
      <slot></slot>
      <i v-if="isParent" class="k-menu-item_arrow icon iconfont">&#xe72a;</i>
    </span>
    <a v-else :class="menuItemCls" href="javascript:void(0);">
      <slot></slot>
      <i v-if="isParent" class="k-menu-item_arrow icon iconfont">&#xe72a;</i>
    </a>
  </li>
</template>

<script>
export default {
  name: 'k-menu-group-item',
  props: {
    disabled: {
      default: true,
      type: Boolean
    }
  },
  computed: {
    isDisabled () {
      return this.disabled
    },
    menuItemCls () {
      return this.disabled ? 'k-menu_text_disabled' : 'k-menu_text'
    }
  },
  mounted (createElement) {
    console.log(createElement)
    // console.log(this.$slots.default)
  }
}
</script>
