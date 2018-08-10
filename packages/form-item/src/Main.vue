<template>
  <div class="k-form-item" :class="isInLine">
    <!--如果标签位置值为top的话-->
    <template v-if="isTop">
      <label class="label" :for="labelFor">{{ labelName }}</label>
      <div class="k-form-item__content">
        <slot></slot>
      </div>
    </template>
    <!--反之-->
    <template v-else>
      <label class="label k-label-inline" :for="labelFor" :style="{width: labelWidth, textAlign: textAlign}">{{ labelName }}</label>
      <div class="k-form-item__content" :style="groupContentStyle">
        <slot></slot>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: 'k-form-item',
  inject: ['$form'],
  props: {
    // 描述标签指向
    labelFor: String,
    // 标签名称
    labelName: String
  },
  data () {
    return {
      labelPosition: this.$form.labelPosition,
      labelWidth: this.$form.labelWidth,
      isInLine: this.$form.inline
    }
  },
  computed: {
    isTop () {
      return this.$form.labelPosition === 'top'
    },
    textAlign () {
      if (this.$form.labelPosition === 'top' || this.$form.labelPosition === 'left') {
        return 'left'
      }
      return 'right'
    },
    groupContentStyle () {
      let marginLeft = this.labelWidth
      // 如果k-form组件inline属性为true的话 就取消掉marginLeft.
      if (this.isInLine) {
        marginLeft = 'auto'
      }
      return {
        marginLeft: marginLeft
      }
    }
  }
}
</script>
