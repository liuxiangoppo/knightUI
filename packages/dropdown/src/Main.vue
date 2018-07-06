<template>
  <span class="dropdown">
    <slot></slot>
    <transition name="fade">
      <div class="popover popper-dropdown" ref="popper" v-show="isShow" :style="popperStyle">
        <div class="popover-content dropdown-content">
          <slot name="content"><div v-text="content"></div></slot>
        </div>
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
    }
  },
  methods: {
    // add delay
    hidePopper (cb) {
      if (this.trigger !== 'hover') {
        this.isShow = false
      }
      this.timer = setTimeout(() => {
        this.isShow = false
        this.popperTimer = setTimeout(() => {
          // destroy popper when hide
          this.popper.destroy()
          this.popper = null

          if (cb && typeof cb === 'function') {
            cb()
          }
        }, 300)
      }, 300)
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
    // 监听dropdown-menu-item的点击事件
    // 监听到 就隐藏popper
    this.$on('menu-item-click', (params) => {
      params.event.stopPropagation()
      this.hidePopper(() => {
        // 如果点击的dropdown-menu-item组件有to属性
        // 则根据to的属性值 进行路由跳转
        if (params.to) {
          this.$router.push(params.to)
        }
      })
    })
  }
}
</script>
