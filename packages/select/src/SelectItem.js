import { guid } from 'src/utils/utils.js'
export default {
  name: 'k-select-option',
  props: {
    value: [String, Number],
    label: String,
    disabled: false
  },
  data () {
    return {
      selectItem: {}
    }
  },
  created () {
    // Todo
    this.selectItem = {
      optionVal: this.value,
      optionText: this.label,
      optionId: guid(),
      isDisabled: this.disabled
    }
  },
  mounted () {
    this.$parent.options.push(this.selectItem)
  },
  render (h) {
    return null
  }
}
