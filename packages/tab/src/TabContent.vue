<template>
  <div class="k-tabContent">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'k-tabContent',
  props: {
    title: {
      default: '',
      type: String
    }
  }
}
</script>
