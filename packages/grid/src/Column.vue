<template>
  <div class="k-col" :style="columnStyle">
    <slot></slot>
  </div>
</template>

<script>
// import { addClass } from 'src/utils/EasyDom'
import EasyQuery from 'src/utils/EasyQuery'

export default {
  name: 'k-col',
  props: {
    // 跨度
    span: {
      default: 1,
      type: Number
    },
    // 偏移
    offset: {
      default: 0,
      type: Number
    },
    // 超小设备手机
    xs: {
      default: 0,
      type: Number
    },
    // 小型设备平板电脑
    sm: {
      default: 0,
      type: Number
    },
    // 中型设备台式电脑
    md: {
      default: 0,
      type: Number
    },
    // 大型设备台式电脑
    lg: {
      default: 0,
      type: Number
    },
    // 超大型屏幕
    xl: {
      default: 0,
      type: Number
    }
  },
  computed: {
    // 列样式
    columnStyle () {
      return {
        padding: `0 ${this.padding}px 0 ${this.padding}px`
      }
    },
    // 确定栅格个数
    columnCount () {
      let parent = this.$parent
      while (parent && parent.$options._componentTag !== 'k-row') {
        parent = parent.$parent
      }
      return parent ? parent.columnCount : 12
    },
    padding () {
      let parent = this.$parent
      while (parent && parent.$options._componentTag !== 'k-row') {
        parent = parent.$parent
      }
      return parent ? parent.gutter / 2 : 0
    }
  },
  mounted () {
    const that = this
    const $el = that.$el
    const ary = ['span', 'offset', 'xs', 'sm', 'md', 'lg', 'xl']
    ary.forEach(item => {
      const val = this[item]
      if (item === 'span') {
        // addClass($el, `k-col-${val}_${that.columnCount}`)
        EasyQuery.use($el).addClass(`k-col-${val}_${that.columnCount}`)
      } else {
        // addClass($el, `k-col-${item}-${val}_${that.columnCount}`)
        EasyQuery.use($el).addClass(`k-col-${item}-${val}_${that.columnCount}`)
      }
    })
  },
  methods: {
    setColumnCount (count) {
      this.columnCount = count
    },
    setGutter (gutter) {
      this.padding = gutter / 2
    }
  }
}
</script>
