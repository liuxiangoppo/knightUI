<template>
  <ul class="k-breadcrumb-nav">
      <slot></slot>
  </ul>
</template>

<script>
export default {
  name: 'kBreadcrumb',
  props: {
    separator: {
      default: '/',
      type: String
    }
  },
  mounted () {
    const components = this.$children
    components.forEach((item, i) => {
      if (i !== components.length - 1) {
        item.setSeparator(this.separator)
      }
    })
  }
}
</script>
