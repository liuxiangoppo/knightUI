<template>
  <transition name="k-notify-fade">
    <div class="k-notify"  v-show="visible" :class="notifyClass">
      <h3 v-show="hasTitle" class="k-notify-title">{{ title }}</h3>
      <p class="k-notify-content">
        {{ message }}
      </p>
      <div class="notify-closeable" v-show="!closed" @click="close">×</div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'k-notify',
  data () {
    return {
      // 是否显示
      visible: false,
      // 标题
      title: '',
      // 信息内容
      message: '',
      // 是否允许使用HTML
      allowUseHTML: false,
      // 皮肤
      type: '',
      // 图标样式
      iconClass: '',
      // 自定义class样式
      custormClass: '',
      // 时长
      time: 3000,
      // 位置
      position: 'topRight',
      // 显示关闭按钮
      showClose: false,
      // onClose事件
      onClose: null,
      // onClick点击事件
      onClick: null,
      // 偏移
      offset: 0,
      // closed状态
      closed: false
    }
  },
  computed: {
    hasTitle () {
      return this.title !== ''
    },
    notifyClass () {
      let ary = []
      ary.push(`k-notify-position__${this.position}`)
      if (this.type !== '') {
        ary.push(`is-${this.type}`)
      }
      return ary
    }
  },
  watch: {
    closed (newVal) {
      // 如果closed为true
      // 隐藏dom
      // 并监听transitionend事件 销毁元素
      if (newVal) {
        this.visible = false
        this.$el.addEventListener('transitionend', this.destroyElement)
      }
    }
  },
  methods: {
    close () {
      this.closed = true
      if (typeof this.onClose === 'function') {
        this.onClose(this)
      }
    },
    // 销毁元素
    destroyElement () {
      this.$el.removeEventListener('transitionend', this.destroyElement)
      this.$destroy(true)
      this.$el.parentNode.removeChild(this.$el)
    },
    startTimer () {
      if (this.time > 0) {
        this.timer = setTimeout(() => {
          if (!this.closed) {
            this.close()
          }
        }, this.time)
      }
    },
    keydown (e) {
      if (e.keyCode === 27) { // esc关闭消息
        if (!this.closed) {
          this.close()
        }
      }
    }
  },
  mounted () {
    this.startTimer()
    document.addEventListener('keydown', this.keydown)
  },
  beforeDestroy () {
    document.removeEventListener('keydown', this.keydown)
  }
}
</script>
