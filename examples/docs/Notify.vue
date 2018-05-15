<template>
  <section>
      <h1>Notify 通知</h1>
      <hr/>
      <k-info title="信息">
          哈哈哈哈哈
      </k-info>
      <k-button @click="demo1">右上</k-button>
      <k-button @click="demo2">左上</k-button>
      <k-button @click="demo3">右下</k-button>
      <k-button @click="demo4">左下</k-button>
  </section>
</template>

<script>
export default {
  name: 'notify-demo',
  methods: {
    demo1 () {
      this.$KNotify({
        title: '标题',
        message: '这是一条短信~'
      })
    },
    demo2 () {
      this.$KNotify({
        title: '标题',
        message: '这是一条短信~',
        position: 'topLeft',
        time: 0
      })
    },
    demo3 () {
      this.$KNotify({
        title: '标题',
        message: '这是一条短信~',
        position: 'bottomRight'
      })
    },
    demo4 () {
      this.$KNotify({
        title: '标题',
        message: '这是一条短信~',
        position: 'bottomLeft'
      })
    }
  }
}
</script>
