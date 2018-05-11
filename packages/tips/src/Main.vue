<template>
  <div id="knight-tip__div" class="k-tip" :class="tipClass" v-if="isShow" :style="tipStyle">
    <div v-if="allowUseHTML" class="k-tip__inner" v-html="content"></div>
    <div v-else class="k-tip__inner">
      {{ content }}
    </div>
    <div class="k-tip-arrow" :style="arrowStyleObject"></div>
  </div>
</template>

<script>
export default {
  name: 'k-tip',
  data () {
    return {
      isShow: true,
      time: 3000,
      content: '',
      direction: 'right',
      background: 'red',
      color: '#fff',
      arrowStyleObject: '',
      // 允许是否使用HTML
      allowUseHTML: false
    }
  },
  beforeMount () {
    // 在Mount事件执行之前 判断页面是否已经有该div存在 如果有 就清除掉。
    const node = document.querySelector('#knight-tip__div')
    if (node && node.parentNode) {
      node.parentNode.removeChild(node)
    }
  },
  computed: {
    top () {
      switch (this.direction) {
        case 'top':
          return (this.rect.top - 12) + 'px'
        case 'bottom':
          return (this.rect.top + 12) + 'px'
        case 'left':
          return (this.rect.top + this.rect.height / 2) + 'px'
        case 'right':
          return (this.rect.top + this.rect.height / 2) + 'px'
      }
    },
    left () {
      switch (this.direction) {
        case 'top':
          return (this.rect.left + this.rect.width / 2) + 'px'
        case 'bottom':
          return (this.rect.left + this.rect.width / 2) + 'px'
        case 'left':
          return (this.rect.left - 12) + 'px'
        case 'right':
          return (this.rect.left + this.rect.width + 12) + 'px'
      }
    },
    tipStyle () {
      return {
        backgroundColor: this.background,
        color: this.color,
        top: this.top,
        left: this.left
      }
    },
    tipClass () {
      return `k-tip-direction__${this.direction}`
    }
  },
  mounted () {
    this.initColor()
    this.hidden()
  },
  methods: {
    initColor () {
      switch (this.direction.toLowerCase()) {
        case 'left':
          this.arrowStyleObject = {
            borderLeftColor: this.background
          }
          break
        case 'right':
          this.arrowStyleObject = {
            borderRightColor: this.background
          }
          break
        case 'top':
          this.arrowStyleObject = {
            borderTopColor: this.background
          }
          break
        case 'bottom':
          this.arrowStyleObject = {
            borderBottomColor: this.background
          }
          break
      }
    },
    hidden () {
      const that = this
      window.setTimeout(function () {
        that.isShow = false
      }, this.time)
    }
  }
}
</script>
