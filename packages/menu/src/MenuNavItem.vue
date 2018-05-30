<template>
  <li class="k-menu-item">
    <a v-if="hasTitleSlot" @mouseover="onMouseOver" @mouseout="onMouseOut" :class="menuItemCls" :style="menuItemStyle"><slot></slot></a>
    <a v-else  @mouseover="onMouseOver" @mouseout="onMouseOut" :class="menuItemCls" :style="menuItemStyle">{{ menuTitle }}</a>
  </li>
</template>

<script>
import EasyQuery from 'src/utils/EasyQuery'
export default {
  name: 'k-menu-nav-item',
  data () {
    return {
      hasPaddingLeft: true,
      textColor: '#000000',
      activeTextColor: '#e74c3c',
      activeBackColor: '#e5e9f2'
    }
  },
  inject: [ 'rootMenu' ],
  props: {
    disabled: {
      default: false,
      type: Boolean
    },
    title: {
      default: '',
      type: String
    },
    // 自定义样式
    custormClass: {
      default: '',
      type: String
    }
  },
  computed: {
    menuItemCls () {
      const ary = []
      ary.push(this.disabled ? 'k-menu_text_disabled' : 'k-menu_text')
      if (this.custormClass !== '') {
        ary.push(this.custormClass)
      }
      return ary
    },
    menuTitle () {
      return this.title
    },
    hasTitleSlot () {
      return this.$slots.default !== undefined
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
    onMouseOver (e) {
      // 若当前的菜单项被禁止掉 则什么都不做
      if (this.disabled) {
        return false
      }
      // 如果有自定义的样式 则什么都不做
      if (this.custormClass !== '') {
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
      // 如果有自定义的样式 则什么都不做
      if (this.custormClass !== '') {
        return false
      }
      EasyQuery.use(e.currentTarget).style({
        color: this.textColor,
        backgroundColor: 'transparent'
      })
    },
    // 初始化事件监听
    init () {
      const rootMenu = this.rootMenu
      this.open = rootMenu.open
      this.mode = rootMenu.mode
      this.textColor = rootMenu.textColor
      this.activeTextColor = rootMenu.activeTextColor
      this.activeBackColor = rootMenu.activeBackColor
    }
  }
}
</script>
