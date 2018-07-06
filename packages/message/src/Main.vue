<template>
  <transition name="k-message-fade">
    <div class="k-message radius3px common-box-shadow" :class="messageClass" v-show="visible" @mouseenter="clearTimer" @mouseleave="startTimer">
      <p v-if="!allowUseHTML">{{ content }}</p>
      <p v-else v-html="content"></p>
      <div class="message-closeable" v-show="!closed" @click="close">×</div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'k-message',
  data () {
    return {
      // 是否关闭
      closed: false,
      // 延时n秒消失
      time: 3000,
      // 内容
      content: '',
      // 皮肤
      type: '',
      // 允许是否使用HTML
      allowUseHTML: false,
      // 计时器
      timer: null,
      // 关闭事件
      onClose: null,
      // 是否显示隐藏
      visible: false
    }
  },
  watch: {
    closed (newVal) {
      if (newVal) {
        this.visible = false
        this.$el.addEventListener('transitionend', this.destroyElement)
      }
    }
  },
  computed: {
    messageClass () {
      let ary = []
      if (this.type !== '') {
        ary.push(`is-${this.type}`)
      }
      return ary
    }
  },
  mounted () {
    this.startTimer()
    document.addEventListener('keydown', this.keydown)
  },
  beforeDestroy () {
    document.removeEventListener('keydown', this.keydown)
  },
  methods: {
    // 销毁元素
    destroyElement () {
      this.$el.removeEventListener('transitionend', this.destroyElement)
      this.$destroy(true)
      this.$el.parentNode.removeChild(this.$el)
    },
    keydown (e) {
      if (e.keyCode === 27) { // esc关闭消息
        if (!this.closed) {
          this.close()
        }
      }
    },
    startTimer () {
      // 延时N秒 若元素还在的话 就销毁它
      if (this.time > 0) {
        this.timer = setTimeout(() => {
          if (!this.closed) {
            this.close()
          }
        }, this.time)
      }
    },
    close () {
      this.closed = true
      if (typeof this.onClose === 'function') {
        // 如果this.onClose的类型判断为function的话 说明用户添加了关闭时的回调函数
        // 将当前实例this传递给该回调
        this.onClose(this)
      }
    },
    clearTimer () {
      window.clearTimeout(this.timer)
    }
  }
}
</script>
