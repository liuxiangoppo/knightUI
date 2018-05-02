<script>
export default {
  name: 'k-menu-group-item',
  props: {
    disabled: {
      default: false,
      type: Boolean
    }
  },
  data: function () {
    return {
      paddingLeft: 14
    }
  },
  render (h) {
    return h('li', {
      class: 'k-menu-item'
    }, [this.renderItem(h), this.$slots.default])
  },
  methods: {
    renderItem (h) {
      const $slots = this.$slots
      // console.log(this.paddingStyle)
      return h('a', {
        class: this.menuItemCls,
        style: this.paddingStyle
      }, $slots.title)
    }
  },
  computed: {
    menuItemCls () {
      return this.disabled ? 'k-menu_text_disabled' : 'k-menu_text'
    },
    paddingStyle () {
      let padding = 14
      let parent = this.$parent
      console.log(parent)
      while (parent && parent.$options._componentTag === 'k-menu-sub') {
        padding += 14
        parent = parent.$parent
      }
      return { paddingLeft: padding + 'px' }
    }
  }
}
</script>
