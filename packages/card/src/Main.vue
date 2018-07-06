<template>
    <div class="k-card" :class="cardClass" >
        <div class="k-card-title" v-if="hasTitle">
            <h2>{{ title }}</h2>
        </div>
        <div class="k-card-title" v-else>
            <slot name="cardTitle"></slot>
        </div>
        <div class="k-card-body">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
  name: 'k-card',
  data () {
    return {
      hasShadow: this.shadow
    }
  },
  props: {
    // 卡片标题
    title: {
      type: String,
      default: ''
    },
    // 自定义的样式
    custormClass: {
      type: String,
      default: ''
    },
    shadow: {
      type: Boolean | String,
      default: true
    }
  },
  computed: {
    hasTitle () {
      return this.$slots.cardTitle === undefined
    },
    cardClass () {
      let ary = []
      ary.push(this.custormClass)
      if (this.shadow === true) {
        ary.push('common-box-shadow')
      }
      return ary
    }
  }
}
</script>
