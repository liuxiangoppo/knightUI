<template>
  <span class="k-scrollTo" :class="{ 'scroll-top': isPreset }" v-show="!isPreset" @click="scrollTo">
    <slot><span class="icon"><i class="fa" :class="[iconClass]"></i></span></slot>
  </span>
</template>

<script>
import jump from 'jump.js'
import EasyQuery from 'src/utils/EasyQuery'
export default {
  name: 'k-scrollTo',
  props: {
    target: String,
    offset: {
      type: Number,
      default: 500
    },
    duration: {
      type: Number,
      default: 500
    },
    distance: Number
  },
  data () {
    return {
      isShow: true
    }
  },
  watch: {
    // 监听isPreset的值 如果为true的话
    // 将isShow设置为true
    isPreset: function (newVal) {
      console.log(newVal)
      if (newVal) {
        this.isShow = false
      }
    }
  },
  computed: {
    targetEl () {
      if (this.target === 'top') {
        return document.body
      } else if (this.distance) {
        return this.distance
      }
      return this.target
    },
    isPreset () {
      if (this.target === 'top' || this.target === 'bottom') {
        // this.isShow = false
        return true
      }
      return false
    },
    iconClass () {
      if (this.target === 'bottom') {
        return 'fa-arrow-down'
      }
      return 'fa-arrow-up'
    }
  },
  methods: {
    handleScroll () {
      console.log('...')
      this.isShow = EasyQuery.use(window).getScroll(true) > this.offset
    },
    scrollTo () {
      jump(this.targetEl, {
        duration: this.duration
      })
    }
  },
  mounted () {
    if (this.isPreset) {
      window.addEventListener('scroll', this.handleScroll)
    }
  },
  beforeDestroy () {
    if (this.isPreset) {
      window.removeEventListener('scroll', this.handleScroll)
    }
  }
}
</script>
