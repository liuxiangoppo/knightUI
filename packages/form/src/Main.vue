<template>
  <form class="k-form" :class="formClass">
    <slot></slot>
  </form>
</template>

<script>
export default {
  name: 'k-form',
  provide () {
    return {
      $form: this
    }
  },
  props: {
    // 标签位置 top|left|right
    labelPosition: {
      type: String,
      default: 'top'
    },
    // 标签宽度
    labelWidth: {
      type: Number | String,
      default: '100px'
    },
    inline: {
      type: Boolean,
      default: false
    },
    rules: Object,
    // 数据模型
    model: Object
  },
  computed: {
    formClass () {
      let ary = []
      if (this.inline) {
        ary.push('k-form__inline')
      }
      return ary
    }
  }
}
</script>
