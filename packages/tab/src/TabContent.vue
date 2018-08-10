<template>
  <transition :name="transition">
    <div v-show="isActive"
         class="tab-pane"
         :class="{ 'is-active': isActive }">
      <slot></slot>
    </div>
  </transition>
</template>
<script>
export default {
  name: 'k-tab-content',
  props: {
    icon: String,
    selected: Boolean,
    disabled: Boolean,
    title: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      isActive: false,
      transition: 'fade'
    }
  },
  beforeCreate () {
    this.isTabPane = true
  },
  methods: {
    onActivated () {
      this.isActive = true
    },
    deActivated () {
      this.isActive = false
    }
  }
}
</script>
