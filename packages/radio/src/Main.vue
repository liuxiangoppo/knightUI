<template>
  <label class="k-radio-wrap">
      <input class="k-radio" type="radio" :name="inputName" :id="inputId" :value="inputValue"/>
      <span class="k-radio-input"></span><span class="k-radio-message">{{ label }}</span>
  </label>
</template>

<script>
export default {
  name: 'k-radio',
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
    inputValue: {
      type: String,
      default: ''
    }
  }
}
</script>
