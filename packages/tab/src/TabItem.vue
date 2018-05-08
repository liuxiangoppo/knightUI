<template>
  <div class="k-tab-label">
    <a class="k-tab-item">
      <slot></slot>
    </a>
  </div>
</template>

<script>
export default {
  name: 'k-tabItem',
  props: {
    index: {
      default: 0,
      type: Number
    }
  }
}
</script>
