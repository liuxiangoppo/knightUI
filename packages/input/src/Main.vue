<template>
  <div class="k-input-wrap" :class="wrapperClass">
    <template v-if="inputType === 'text' || inputType === 'password'">
      <input class="k-input__inner"
        :type="inputType"
        value=""
        :id="inputId"
        :name="inputName"
        :placeholder="placeholder"
        :disabled="disabled"
      />
      <span class="k-input-icon" v-show="showIcon">
        <slot name="inputIcon"></slot>
      </span>
    </template>
    <template v-else>
      <textarea class="k-input__textarea"
        value=""
        :id="inputId"
        :name="inputName"
        :placeholder="placeholder"
        :cols="cols"
        :rows="rows"
        :disabled="disabled"
      ></textarea>
    </template>
  </div>
</template>

<script>
export default {
  name: 'k-input',
  props: {
    inputName: String,
    inputId: String,
    placeholder: String,
    inputType: {
      type: String,
      default: 'text'
    },
    rows: Number,
    cols: Number,
    type: {
      type: String,
      default: 'primary'
    },
    // 禁用input
    disabled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    wrapperClass () {
      const ary = []
      // 如果组件被设置了disabled
      // 就不要设置任何type让其控制外观了。
      if (this.disabled) {
        ary.push('is-disabled')
      } else {
        ary.push(`is-${this.type}`)
      }
      return ary
    },
    showIcon () {
      return this.$slots.inputIcon !== undefined
    }
  }
}
</script>
