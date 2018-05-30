<template>
  <i class="k-icon" :class="iconClass" :style="iconStyle">
    <slot></slot>
  </i>
</template>

<script>
export default {
  name: 'k-icon',
  props: {
    type: {
      default: '',
      type: String
    },
    size: {
      default: 13,
      type: Number
    },
    color: {
      default: '',
      type: String
    }
  },
  computed: {
    iconClass () {
      return this.type
    },
    iconStyle () {
      return {
        fontSize: `${this.size}px`,
        color: this.color,
        display: 'inline-block',
        marginRight: '5px'
      }
    }
  }
}
</script>
