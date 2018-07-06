<template>
    <transition name="fade">
        <div class="k-alert" v-show="visible" :class="alertClass">
            <slot></slot>
            <div class="k-alert-closable" v-show="closable" @click="closeAlert">
                <i class="k-icon icon-cancel"></i>
            </div>
        </div>
    </transition>
</template>

<script>
export default {
  name: 'k-alert',
  props: {
    // 类型
    type: {
      type: String,
      default: ''
    },
    // 标题
    title: {
      type: String,
      default: ''
    },
    // 显示关闭按钮
    closable: {
      type: Boolean,
      default: true
    },
    // 关闭回调
    onClose: {
      type: Function,
      default () {}
    }
  },
  data () {
    return {
      visible: true
    }
  },
  computed: {
    alertClass () {
      return `k-alert-${this.type}`
    },
    showTitle () {
      return this.title !== ''
    }
  },
  methods: {
    closeAlert () {
      this.visible = false
      this.onClose()
      setTimeout(() => {
        this.$el.remove()
        this.$destroy()
      }, 100)
    }
  }
}
</script>
