<template>
  <button v-if="!isText" type="button" class="k-button" :class="btnClass">
      <slot></slot>
  </button>
  <a v-else class="k-button" :class="btnClass">
    <slot></slot>
  </a>
</template>

<script>
export default {
  name: 'kButton',
  props: {
    // 模式: default、primary、success、info、warning、danger
    mode: {
      default: 'default',
      type: String
    },
    // 是否带有背景色
    outLined: {
      default: false,
      type: Boolean
    },
    // 圆角:0、3、5、7、10、circle
    radius: {
      default: '0',
      type: String
    },
    // 尺寸:large、normal、small、extraSmall、block
    sizing: {
      default: 'normal',
      type: String
    }
  },
  computed: {
    btnClass () {
      const ary = []
      const that = this
      let mode = that.mode === '' ? 'k-button-default' : `k-button-${this.mode}`
      if (!this.outLined) {
        mode += '__hasBg'
      }
      ary.push(mode)
      ary.push(that.radius === 'circle' ? 'k-button-radius__circle' : `k-button-radius${that.radius}`)
      ary.push(`k-button-sizing__${that.sizing}`)
      return ary.join(' ')
    },
    isButtonGroup () {
      return this.$parent.$options._componentTag === 'k-button-group'
    },
    isText () {
      return this.mode === 'text'
    }
  }
}
</script>
