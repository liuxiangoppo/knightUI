<template>
  <div class="k-checkbox-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'k-checkbox-group',
  provide () {
    return {
      checkboxGroup: this
    }
  },
  data () {
    return {
      chooseVals: []
    }
  },
  props: {
    min: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: 0
    },
    value: {}
  },
  computed: {
    minCount () {
      if (this.min > 0) {
        return this.min
      }
      return 0
    },
    maxCount () {
      if (this.max !== 0 && this.max > this.minCount) {
        return this.max
      } else {
        return this.$children.length
      }
    },
    // 是否允许再选值
    isAllowChoose () {
      if (this.chooseVals.length + 1 < this.minCount) {
        return false
      }
      if (this.chooseVals.length + 1 > this.maxCount) {
        return false
      }
      return true
    }
  },
  methods: {
    chooseItem (data) {
      if (!data.checked) {
        // 取消了选中状态
        this.chooseVals.splice(this.chooseVals.indexOf(data.chooseVal), 1)
      } else if (!this.chooseVals.includes(data.chooseVal)) {
        this.chooseVals.push(data.chooseVal)
      }
      this.$emit('input', this.chooseVals)
    }
  },
  watch: {
    value (newVal) {
      // Todo
    }
  }
}
</script>
