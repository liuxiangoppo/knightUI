<script>
export default {
  name: 'myDemo',
  data () {
    return {
      count: 1
    }
  },
  render: function (createElement, context) {
    console.log(createElement)
    const that = this
    // 创建a标签 并设置对应的属性
    return createElement('span', { class: 'haha',
      on: {
        click: function () {
          console.log(this)
          that.count++
          alert(that.count)
        }
      }
    }, '测试')
  },
  props: {
    demo: {
      default: 0,
      type: Number
    }
  }
}
</script>
