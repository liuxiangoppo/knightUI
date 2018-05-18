<template>
  <transition
     v-on:enter="enter"
     v-on:leave="leave">
      <div class="k-modal" v-show="visible" @click.self="closeModal">
        <div class="k-modal-dialog">
            <!--内容-->
            <div class="k-modal-content" :style="modalContentStyle">
                <div v-if="hasModalHeader" class="k-modal-header">
                    <slot name="modalHeader"></slot>
                </div>
                <div v-else class="k-modal-header">
                    <h4 class="k-modal-title">
                        {{ title }}
                    </h4>
                </div>
                <!--内容区域-->
                <div class="k-modal-body">
                    <slot></slot>
                </div>
                <!--footer-->
                <div v-if="hasModalFooter" class="k-modal-footer k-modal-footer__right">
                    <slot name="modalFooter"></slot>
                </div>
                <div v-else class="k-modal-footer k-modal-footer__right">
                    <k-button @click="closeModal">取消</k-button>
                    <k-button>确定</k-button>
                </div>
            </div>
        </div>
    </div>
  </transition>
</template>

<script>
import EasyQuery from 'src/utils/EasyQuery'
import PopupManager from 'src/utils/PopupManager'
import TweenMax from 'gsap/TweenMax'
import KButton from 'packages/button'
export default {
  name: 'k-modal',
  props: {
    // 是否开启遮罩层
    cover: {
      default: true,
      type: Boolean
    },
    // 标题
    title: {
      default: '标题',
      type: String
    },
    // 是否显示
    visible: {
      default: false,
      type: Boolean
    },
    // 宽度
    width: {
      default: 500,
      type: Number
    },
    top: {
      default: 100,
      type: Number
    },
    fullScreen: {
      default: false,
      type: Boolean
    }
  },
  data () {
    return {
      $coverDiv: null
    }
  },
  components: {
    KButton
  },
  computed: {
    hasModalHeader () {
      return this.$slots.modalHeader !== undefined
    },
    modalStyle () {
      return {
        zIndex: PopupManager.nextZIndex(),
        width: this.width + 'px',
        top: this.top + 'px'
      }
    },
    // k-modal-content样式
    modalContentStyle () {
      return {
        width: this.width + 'px',
        top: this.top + 'px'
      }
    },
    // k-modal-header样式
    modalHeaderClass () {
      return ''
    },
    hasModalFooter () {
      // 判断名称为footer的slot是否存在
      // 如果存在 则显示slot的内容
      // 同时隐藏掉原先默认的footer
      return this.$slots.modalFooter !== undefined
    }
  },
  watch: {
    // 观察cover属性 若为true则显示遮罩层
    cover (newVal) {
      // 如果cover为true且visible为true时 初始化遮罩层
      if (newVal && this.visible) {
        this.initCoverDiv()
      }
    },
    visible (newVal) {
      if (newVal) {
        this.showModal()
      } else {
        this.closeModal()
      }
    },
    fullScreen (newVal) {
    //   if (newVal) {
    //     EasyQuery.use(this.$el.querySelector('.k-modal-content')).width(document.body.offsetWidth).heigh(document.body.offsetHeight)
    //   }
    }
  },
  mounted () {
    // 创建遮罩层
    // this.insertCoverDiv()
    // 获取$el元素为其设置zIndex值并赋值id
    // EasyQuery.use(this.$el).style({
    //   zIndex: PopupManager.nextZIndex()
    // })
    // // 将$el添加到body中
    // EasyQuery.use(document.body).append(this.$el)
    // TweenMax.to(this.$el, 0.5, {opacity: 1})
  },
  methods: {
    /**
     * 创建遮罩层
     */
    initCoverDiv () {
      // 将元素设置为遮罩层,为其设置样式并赋值id
      this.$coverDiv = EasyQuery
        .use(document.createElement('div'))
        .addClass('k-modal-cover')
      // 将元素插入到body中
      EasyQuery.use(document.body).append(this.$coverDiv.getSelectors()[0])
      // 设置coverDiv的透明度在0.3s内变为0.3
      TweenMax.to(this.$coverDiv.getSelectors()[0], 0.5, {opacity: 0.3})
    },
    // 关闭模态框
    closeModal () {
      console.log('closeModal')
      // 配合.sync使用.
      this.$emit('update:visible', false)
      if (this.cover && this.$coverDiv !== null) {
        this.$coverDiv.hide()
      }
      this.$emit('close', null)
    },
    showModal () {
      if (this.cover && this.$coverDiv !== null) {
        this.$coverDiv.show()
      }
      this.$emit('open', null)
    },
    enter (el, done) {
      TweenMax.to(el, 0.3, {opacity: 1, onComplete: done})
    },
    leave (el, done) {
      TweenMax.to(el, 0.3, {opacity: 0,
        onComplete: done})
    }
  }
}
</script>
