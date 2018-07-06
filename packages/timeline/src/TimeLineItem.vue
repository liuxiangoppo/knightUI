<template>
  <div class="timeline-item has-left-border" :class="typeClass">
    <div class="timeline-icon" v-if="hasIconSlot">
      <!-- <i class="k-icon" :class="iconClass"></i> -->
      <slot name="iconSlot"></slot>
    </div>
    <div class="timeline-item-main">
      <div class="timeline-item-date">{{ date }}</div>
      <div class="timeline-item-content">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
import EasyQuery from 'src/utils/EasyQuery.js'
export default {
  name: 'timeline-item',
  data () {
    return {
      // 判断是否是最后一个 如果是最后一个的话 就隐藏左侧的border
      isLast: false
    }
  },
  props: {
    icon: {
      type: String,
      default: ''
    },
    date: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: ''
    }
  },
  computed: {
    iconClass () {
      return this.icon ? `${this.icon}` : null
    },
    typeClass () {
      let ary = []
      if (this.type) {
        ary.push(`is-${this.type}`)
      }
      return ary
    },
    hasIconSlot () {
      return this.$slots.iconSlot !== undefined
    }
  },
  methods: {
    removeLeftBorder () {
      EasyQuery.use(this.$el).removeClass('has-left-border')
    }
  }
}
</script>
