<template>
  <div class="timeline">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'k-timeline',
  mounted () {
    const ary = []
    this.$children.forEach((item, i) => {
      ary.push(item)
    })
    ary[ary.length - 1].removeLeftBorder()
  }
}
</script>
