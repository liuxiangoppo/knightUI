<template>
  <li class="k-menu-item" @mouseover="onMouseOver" @mouseout="onMouseOut">
    <a class="k-menu_text" :style="menuItemStyle" @click="toggle">
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
      activeBackColor: '#e5e9f2',
      $subMenu: null,
      $menuItemRect: null
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
      if (this.rootMenu.mode === 'horizontal') {
        return padding
      }
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
        color: this.textColor,
        backgroundColor: this.rootMenu.backgroundColor
      }
      if (this.hasPaddingLeft) {
        return Object.assign({
          paddingLeft: this.paddingLeft + 'px'
        }, menuStyle)
      } else {
        return menuStyle
      }
    },
    isFirstLevel () {
      // Todo 判断subMenu级别 是直接在k-menu组件下 还是嵌套在subMenu组件下 不同的级别有不同的操作。
      return this.$parent.$options._componentTag === 'k-menu'
    }
  },
  mounted () {
    this.init()
    document.addEventListener('onscroll', function () {
      // Todo 监听滚动事件 处理subMenu的位置.
    })
  },
  watch: {
    // 监听open值的变化 如果为true的话 获取subMenu的高度 (dom元素在隐藏状态下无法获取其具体高度)
    open (val) {
      if (val && this.rootMenu.mode === 'horizontal') {
        const $el = this.$el
        const $submenu = $el.querySelector('.k-menu-submenu')
        const rect = $el.getBoundingClientRect()
        console.log(rect)
        // 设置$el下的k-menu-submenu元素的样式
        const subMenuHeight = this.$children.length * 40
        let domStyle = {
          position: 'absolute'
        }
        if (this.isFirstLevel) {
          if (document.body.offsetHeight - rect.bottom > subMenuHeight + 2) {
            domStyle = Object.assign({
              top: (rect.height) + 'px'
            }, domStyle)
          } else {
            domStyle = Object.assign({
              top: (0 - subMenuHeight) + 'px'
            }, domStyle)
          }
          EasyQuery.use($submenu).style(domStyle)
        } else {
          // 如果不是第一级的话
          domStyle = Object.assign({
            left: (rect.width) + 'px',
            top: (0 - (this.$children.length - 1) * 40) + 'px'
          }, domStyle)
          // 统一设置样式
          EasyQuery.use($submenu).style(domStyle)
        }
      }
    }
  },
  methods: {
    toggle () {
      // 若mode=horizontal时 则不触发toggle事件
      if (this.rootMenu.mode === 'horizontal') {
        return false
      }
      this.switchOpen()
    },
    onMouseOver (e) {
      // 若当前的菜单项被禁止掉
      if (this.disabled) {
        return false
      }
      if (this.rootMenu.mode === 'horizontal') {
        setTimeout(() => {
          this.switchOpen()
        }, 200)
      }
      // 设置样式
      let domStyle = {}
      if (this.activeTextColor !== '') {
        domStyle = Object.assign({
          color: this.activeTextColor
        }, domStyle)
      }
      if (this.activeBackColor !== '') {
        domStyle = Object.assign({
          backgroundColor: this.activeBackColor
        }, domStyle)
      }
      if (this.activeTextColor !== '') {
        EasyQuery.use(e.currentTarget).style(domStyle)
      }
    },
    onMouseOut (e) {
      if (this.rootMenu.mode === 'horizontal') {
        setTimeout(() => {
          this.switchOpen()
        }, 200)
      }
      let backColor = 'transparent'
      if (this.rootMenu.backgroundColor !== '') {
        backColor = this.rootMenu.backgroundColor
      }
      // 设置样式
      EasyQuery.use(e.currentTarget).style({
        color: this.textColor,
        backgroundColor: backColor
      })
    },
    init () {
      const rootMenu = this.rootMenu
      this.open = rootMenu.collapse
      this.mode = rootMenu.mode
      this.textColor = rootMenu.textColor
      this.activeTextColor = rootMenu.activeTextColor
      this.activeBackColor = rootMenu.activeBackColor
    },
    switchOpen () {
      if (this.$slots.default.length > 0) {
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
