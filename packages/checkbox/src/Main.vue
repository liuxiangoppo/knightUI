<template>
  <label class="k-checkbox-wrap" :class="checkboxClass">
      <input class="k-checkbox" type="checkbox" :checked="isChecked" :name="inputName" :id="inputId" @change="change" :value="value" :disabled="isDisabled"/>
      <span class="k-checkbox-input">
        <!-- <i class="k-icon" style="font-size: 5px !important;">&#xe60e;</i> -->
      </span>
      <span class="k-checkbox-message" :class="{'is-label': hasLabel}">{{ label }}</span>
  </label>
</template>

<script>
import Emitter from 'src/mixins/Emitter.js'
export default {
  name: 'k-checkbox',
  mixins: [Emitter],
  data () {
    return {
      isChecked: this.checked,
      isDisabled: this.disabled
    }
  },
  props: {
    inputName: {
      type: String,
      default: ''
    },
    inputId: {
      type: String,
      default: ''
    },
    label: {
      type: String,
      default: ''
    },
    // 标注复选框的选中状态
    checked: {
      type: Boolean,
      default: false
    },
    // checkbox的VALUE值
    value: String | Number | Boolean,
    // 是否被禁用
    disabled: {
      type: Boolean | String,
      default: false
    }
  },
  methods: {
    change (event) {
      this.isChecked = !this.isChecked
      if (this.hasGroup) {
        if (this.checkboxGroup.isAllowChoose && this.isChecked) {
          this.checkboxGroup.chooseItem({
            chooseVal: this.value,
            checked: this.isChecked
          })
        } else if (!this.isChecked) {
          this.checkboxGroup.chooseItem({
            chooseVal: this.value,
            checked: this.isChecked
          })
        } else {
          this.isChecked = false
        }
      }
      this.$emit('change', this.isChecked)
    }
  },
  watch: {
    checked (newVal) {
      this.isChecked = newVal
    },
    disabled (newVal) {
      this.isDisabled = newVal
    }
  },
  computed: {
    checkboxClass () {
      if (this.disabled) {
        return 'is-disabled'
      }
    },
    checkboxGroup () {
      let parent = this.$parent
      while (parent) {
        if (parent.$options._componentTag !== 'k-checkbox-group') {
          parent = parent.$parent
        } else {
          return parent
        }
      }
      return undefined
    },
    hasGroup () {
      return this.checkboxGroup !== undefined
    },
    hasLabel () {
      return this.label !== ''
    }
  }
}
</script>
