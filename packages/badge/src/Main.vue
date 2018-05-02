<template>
  <span class="k-badge k-badge__normal" :class="className">
    <slot></slot>
  </span>
</template>

<script>
export default {
  name: 'kBadge',
  props: {
    className: {
      default: '',
      type: String
    }
  }
}
</script>
