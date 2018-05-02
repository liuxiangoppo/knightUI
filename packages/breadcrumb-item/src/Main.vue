<template>
  <li class="k-breadcrumb-nav-item k-breadcrumb-nav-item__normal" :class="isActive">
      <span class="text" v-on:click="direct"><slot></slot></span>
      <span v-show="!isLast" class="separator">{{ separator }}</span>
  </li>
</template>

<script>
export default {
  name: 'kBreadcrumbItem',
  data: function () {
    return {
      separator: '/',
      isLast: true
    }
  },
  props: {
    // 激活样式
    activeClass: {
      default: '',
      type: String
    },
    mode: {
      default: '',
      type: String
    },
    to: {
      default: '',
      type: String
    },
    href: {
      default: '',
      type: String
    }
  },
  computed: {
    isActive () {
      return this.isLast ? 'k-breadcrumb-nav-item__active' : 'k-breadcrumb-nav-item__normal'
    }
  },
  methods: {
    setSeparator (separator) {
      this.separator = separator
      this.isLast = false
    },
    direct () {
      if (this.isLast) {
        return false
      }
      // 路由跳转
      this.$router.push(this.to)
      // if (this.mode === 'router') {
      //   this.$router.push(this.to)
      // } else {
      //   window.location.href = this.to
      // }
    }
  }
}
</script>
