<template>
  <span class="dropdown">
    <slot></slot>
    <transition name="fade">
      <div class="popper-dropdown" ref="popper" v-show="isShow" :style="popperStyle">
        <div class="dropdown-content">
          <slot name="content"><div v-text="content"></div></slot>
        </div>
        <div class="popover-arrow" x-arrow></div>
      </div>
    </transition>
  </span>
</template>
<script>
import PopperMixin from 'src/mixins/PopupMixin'
export default {
  name: 'k-dropdown',
  mixins: [PopperMixin],
  props: {
    title: {
      type: String,
      default: ''
    },
    // hover:鼠标滑过显示 | click:鼠标点击显示 | custorm:自定义显示
    trigger: {
      type: String,
      default: 'click'
    },
    width: {
      type: Number
    },
    placement: {
      type: String,
      default: 'bottom'
    },
    visible: Boolean
  },
  watch: {
    isShow (newVal) {
      if (!newVal) {
        // isShow = false
        this.popperTimer = setTimeout(() => {
          // 当隐藏的时候 销毁destroy
          this.popper.destroy()
          this.popper = null
        }, 0)
      }
    },
    visible (newVal) {
      console.log(newVal)
      // 如果trigger触发方式为custorm 且visible的值为true的话
      // 显示dropdown
      if (newVal) {
        this.createInstance()
        this.showPopper()
      } else {
        // 否则隐藏dropdown
        this.isShow = false
      }
    }
  },
  methods: {
    // 增加延迟
    hidePopper () {
      this.isShow = false
    }
  },
  computed: {
    popperStyle () {
      if (this.width && this.width !== 276) {
        return { width: `${this.width}px`, maxWidth: 'none' }
      }
      return null
    }
  },
  mounted () {
    // 若VISIBLE为true的话
    // 显示dropdown
    if (this.visible) {
      this.createInstance()
      this.showPopper()
    }
    // 监听dropdown-menu-item的点击事件
    // 隐藏下拉菜单
    this.$on('menu-item-click', (params) => {
      params.event.stopPropagation()
      // 隐藏下拉菜单
      this.isShow = false
    })
  }
}
</script>
