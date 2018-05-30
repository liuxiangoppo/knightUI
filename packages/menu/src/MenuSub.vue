<template>
  <li class="k-menu-item">
    <a class="k-menu_text" :style="menuItemStyle" @click="toggle" @mouseover="onMouseOver" @mouseout="onMouseOut">
      <slot name="title"></slot>
      <i v-if="showArrow" class="k-menu-item_arrow k-icon" :class="arrowDirection">&#xe72a;</i>
    </a>
    <transition name="k-menusub">
      <ul class="k-menu-submenu" v-show="open">
        <slot></slot>
      </ul>
    </transition>
  </li>
</template>

<script>
// import EventBus from 'src/utils/EventBus'
import EasyQuery from 'src/utils/EasyQuery'
export default {
  name: 'k-menu-sub',
  data () {
    return {
      open: false,
      hasPaddingLeft: true,
      // 字体颜色
      textColor: '#000000',
      activeTextColor: '#e74c3c',
      activeBackColor: '#e5e9f2'
    }
  },
  inject: [ 'rootMenu' ],
  computed: {
    showArrow () {
      // 显示收缩/展开箭头
      return this.$slots.default.length > 0
    },
    arrowDirection () {
      return this.open ? 'arrow_direction_bottom' : 'arrow_direction_left'
    },
    paddingLeft () {
      let padding = 15
      let parent = this.$parent
      while (parent && parent.$options._componentTag !== 'k-menu') {
        if (parent.$options._componentTag === 'k-menu-sub') {
          padding += 15
        }
        parent = parent.$parent
      }
      return padding
    },
    menuItemStyle () {
      const menuStyle = {
        color: this.textColor
      }
      if (this.hasPaddingLeft) {
        return Object.assign({
          paddingLeft: this.paddingLeft + 'px'
        }, menuStyle)
      } else {
        return menuStyle
      }
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    toggle () {
      if (this.$slots.default.length > 0) {
        if (this.open === true) {
          this.open = false
        } else {
          this.open = true
        }
      }
    },
    onMouseOver (e) {
      // 若当前的菜单项被禁止掉
      if (this.disabled) {
        return false
      }
      if (this.activeTextColor !== '') {
        EasyQuery.use(e.currentTarget).style({
          color: this.activeTextColor,
          backgroundColor: this.activeBackColor
        })
      }
    },
    onMouseOut (e) {
      EasyQuery.use(e.currentTarget).style({
        color: this.textColor,
        backgroundColor: 'transparent'
      })
    },
    init () {
      const rootMenu = this.rootMenu
      console.log(rootMenu.collapse)
      this.open = rootMenu.collapse
      this.mode = rootMenu.mode
      this.textColor = rootMenu.textColor
      this.activeTextColor = rootMenu.activeTextColor
      this.activeBackColor = rootMenu.activeBackColor
    }
    // onCollapse () {
    //   EventBus.on('collapse', (data) => {
    //     if (data.collapse) {
    //       this.open = true
    //     }
    //   })
    // },
    // onMode () {
    //   EventBus.on('mode', (data) => {
    //     if (data.mode === 'horizontal') {
    //       this.hasPaddingLeft = false
    //     }
    //   })
    // },
    // onTextColor () {
    //   EventBus.on('textColor', (data) => {
    //     this.textColor = data.textColor
    //   })
    // },
    // onActiveTextColor () {
    //   EventBus.on('activeTextColor', (data) => {
    //     this.activeTextColor = data.activeTextColor
    //   })
    // },
    // onActiveBackColor () {
    //   EventBus.on('activeBackColor', (data) => {
    //     this.activeBackColor = data.activeBackColor
    //   })
    // }
  }
}
</script>
