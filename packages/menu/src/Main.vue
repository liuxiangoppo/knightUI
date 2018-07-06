<template>
  <div class="k-menu" :style="menuStyle" :class="menuWrapperClass">
    <!--若是通过json来生成菜单内容 则使用以下dom-->
    <ul class="k-menu-group" v-if="hasJson" :class="menuNavClass">
      <menu-item v-for="(menu, index) in menus" :key="index" :menu="menu">
        <span>{{ menu.name }}</span>
      </menu-item>
    </ul>
    <!--否则使用如下内容-->
    <ul class="k-menu-group" :class="menuNavClass" v-else>
      <slot></slot>
    </ul>
  </div>
</template>

<script>
import MenuItem from './MenuItem'
export default {
  name: 'k-menu',
  props: {
    menus: {
      type: Object,
      default: undefined
    },
    // 模式 horizontal(水平) / vertical(垂直)
    mode: {
      type: String,
      default: 'vertical'
    },
    // 是否水平折叠收起菜单（仅在 mode 为 vertical 时可用）
    collapse: {
      type: Boolean,
      default: false
    },
    // 设置导航菜单背景色
    backgroundColor: {
      type: String,
      default: ''
    },
    // 文本颜色
    textColor: {
      type: String,
      default: ''
    },
    // 激活状态或鼠标滑过的字体颜色
    activeTextColor: {
      type: String,
      default: ''
    },
    // 激活状态或鼠标滑过的背景颜色
    activeBackColor: {
      type: String,
      default: ''
    },
    defaultActive: {
      type: String,
      default: ''
    },
    // 自定义class
    custormClass: {
      type: String,
      default: ''
    }
  },
  // provide / inject 好东西!
  provide () {
    return {
      rootMenu: this
    }
  },
  components: {
    MenuItem
  },
  computed: {
    hasJson () {
      return this.$slots.default === undefined
    },
    menuStyle () {
      return {
        backgroundColor: this.backgroundColor
      }
    },
    menuWrapperClass () {
      return this.custormClass
    },
    menuNavClass () {
      if (this.mode === 'horizontal') {
        return 'k-menu-horizontal'
      } else {
        return ''
      }
    }
  },
  mounted () {
    // this.init()
  }
}
</script>
