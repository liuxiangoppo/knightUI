<template>
  <section>
      <h1>Modal 模态框</h1>
      <hr/>
      <k-button @click="demo1">点我显示模态框</k-button>
      <k-button @click="demo2">点我关闭模态框</k-button>
      <k-button @click="demo3">不显示遮罩层</k-button>
      <k-button @click="demo3">将宽度设置为700</k-button>
      <k-button>充满全屏</k-button>
      <k-button>按住模态框标题区域进行拖拽</k-button>
      <k-button>是否允许通过点击遮罩层关闭模态框</k-button>
      <k-button>是否允许通过按下ESC关闭模态框</k-button>
      <k-button>是否显示关闭按钮</k-button>
      <k-button>关闭后的回调函数</k-button>
      <k-button>打开前的回调函数</k-button>
      <k-info>模态框只实现了部分功能,时间有限,需要对下一个组件进行开发,等待后续进行统一调整。</k-info>
      <k-modal @close="sayHi" :visible.sync="visible" :cover="cover" :width="width" :top="top" title="我是标题" :fullScreen="fullScreen">
          <k-panel mode="warning">
            <template slot="title">
                <p class="white-text">标题</p>
            </template>
            <p>我是内容</p>
          </k-panel>
          <!-- <h2 slot="modalHeader">我是标题</h2> -->
      </k-modal>
  </section>
</template>

<script>
import TweenMax from 'gsap/TweenMax'
export default {
  name: 'modal-demo',
  data () {
    return {
      visible: false,
      cover: false,
      width: 700,
      top: 200,
      show: false,
      fullScreen: true
    }
  },
  methods: {
    animate () {
      if (this.show === true) {
        this.show = false
      } else {
        this.show = true
      }
    },
    beforeEnter (el) {
      // Todo
      // EasyQuery.use(el).style({
      //   opacity: 0
      // })
    },
    enter (el) {
      // Todo
      console.log('enter')
      TweenMax.to(el, 3, {opacity: 1})
    },
    afterEnter (el) {
      // ...
    },
    enterCancelled (el) {
      // Todo
    },
    beforeLeave (el) {
      // Todo
    },
    leave (el) {
      console.log('leave')
      TweenMax.to(el, 3, {opacity: 0})
    },
    afterLeave (el) {
      // ...
    },
    // leaveCancelled 只用于 v-show 中
    leaveCancelled (el) {
      // ...
    },
    demo1 () {
      this.visible = true
      this.cover = true
    },
    demo2 () {
      this.visible = false
    },
    demo3 () {
      this.visible = true
      this.cover = false
    },
    demo4 () {
      this.visible = true
      this.cover = true
      this.width = 700
    },
    sayHi () {
      console.log('hello world')
    }
  }
}
</script>

<style>
#demo {
    width: 100px;
    height: 100px;

    background: red;
    opacity: 0;
}
</style>
