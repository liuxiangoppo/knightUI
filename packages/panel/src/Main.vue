<template>
  <div class="k-panel" :class="panelClass">
    <div v-if="hasHeader" class="k-panelheader">
      <!--标题-->
      <div v-if="hasTitle" class="k-panel-title pull-left">
        <slot name="title"></slot>
      </div>
      <!--扩展 位于标题部分右侧-->
      <div v-if="hasExtra" class="k-panel-extra pull-right">
        <slot name="extra"></slot>
      </div>
    </div>
    <!--面板内容-->
    <div class="k-panelbody">
      <!--默认分发内容-->
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'kPanel',
  props: {
    mode: {
      default: 'default',
      type: String
    }
  },
  computed: {
    hasHeader () {
      return this.$slots.title !== undefined || this.$slots.extra !== undefined
    },
    hasTitle () {
      return this.$slots.title !== undefined
    },
    hasExtra () {
      return this.$slots.extra !== undefined
    },
    panelClass () {
      return `k-panel-${this.mode}`
    }
  }
}
</script>
