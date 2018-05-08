<template>
  <div class="k-info" :class="infoClass">
    <h4 v-if="showTitle" class="k-info-boxhead">{{ title }}</h4>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'k-info',
  props: {
    mode: {
      default: 'success',
      type: String
    },
    title: {
      default: '',
      type: String
    },
    radius: {
      default: 'none',
      type: [Number, String]
    }
  },
  computed: {
    infoClass () {
      const classAry = []
      if (this.radius !== 'none') {
        classAry.push(`radius${this.radius}px`)
      }
      classAry.push(`k-info__${this.mode}`)
      return classAry
    },
    showTitle () {
      return this.title !== ''
    }
  }
}
</script>
