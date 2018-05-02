<template>
  <li class="k-menu-item">
    <span v-if="isDisabled" :class="menuItemCls" :style="paddingStyle">
      <slot></slot>
      <i v-if="isParent" class="k-menu-item_arrow k-icon" :class="arrowDirection">&#xe72a;</i>
    </span>
    <a v-else :class="menuItemCls" href="javascript:void(0);" :style="paddingStyle" @click="toggle">
      <slot></slot>
      <i v-if="isParent" class="k-menu-item_arrow k-icon" :class="arrowDirection">&#xe72a;</i>
    </a>
    <ul class="k-menu-submenu" v-show="open" v-if="isParent">
        <k-menu-item v-for="(item, index) in menu.menus" :key="index" :menu="item">
          <span>{{ item.name }}</span>
        </k-menu-item>
    </ul>
  </li>
</template>

<script>
export default {
  name: 'k-menu-item',
  props: ['menu'],
  data: function () {
    return {
      open: false,
      paddingLeft: 14
    }
  },
  computed: {
    isParent () {
      return this.menu.menus && this.menu.menus.length
    },
    arrowDirection () {
      return this.open ? 'arrow_direction_bottom' : 'arrow_direction_left'
    },
    paddingStyle () {
      return {
        'padding-left': this.menu.level * this.paddingLeft + 'px'
      }
    },
    isDisabled () {
      return this.menu.disabled
    },
    menuItemCls () {
      return this.menu.disabled ? 'k-menu_text_disabled' : 'k-menu_text'
    }
  },
  methods: {
    toggle () {
      if (this.menu.menus && this.menu.menus.length) {
        if (this.open === true) {
          this.open = false
        } else {
          this.open = true
        }
      }
    }
  }
}
</script>
