<template>
  <div class="k-select" :id="selectId">
    <slot></slot>
    <div class="k-select-main is-primary" ref="selectMain" @click="clickHandler">
        <div class="k-select-inner">
            <span>{{ selectText }}</span>
        </div>
        <div class="k-select-icon" ref="selectIcon">
            <i class="k-icon icon-drapdown"></i>
        </div>
    </div>
    <transition name="fade">
      <!--select-dropdown-->
      <div class="select-dropdown" ref="popper" v-show="isShow">
        <div class="dropdown-content">
          <div class="k-select-option"
           v-for="(item, index) in options"
           :key="index"
           @click.stop="chooseHandler($event, item.isDisabled)"
           :optionVal="item.optionVal"
           :optionText="item.optionText"
           :optionId="item.optionId"
           :class="{'is-choose': isChoose(item.optionId), 'is-disabled': item.isDisabled}">
            <span>{{ item.optionText }}</span>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import Emitter from 'src/mixins/Emitter.js'
import EasyQuery from 'src/utils/EasyQuery.js'
import { catIn, guid } from 'src/utils/utils.js'
import Popper from 'popper.js'

export default {
  name: 'k-select',
  mixins: [Emitter],
  props: {
    placeholder: {
      type: String,
      default: '请选择'
    },
    value: {
      type: String | Number,
      default: ''
    },
    trigger: {
      type: String,
      default: 'click'
    },
    width: {
      type: Number,
      default: 150
    },
    placement: {
      type: String,
      default: 'bottom'
    },
    disabled: false
  },
  data () {
    return {
      chooseText: '',
      chooseId: '',
      options: [],
      coverDiv: null,
      selectId: guid(),
      popper: null,
      isShow: false
    }
  },
  computed: {
    selectText () {
      if (this.chooseText === '') {
        return this.placeholder
      }
      return this.chooseText
    }
  },
  mounted () {
    // 根据v-model的初始值 设置select组件的默认选项。
    this.options.forEach(option => {
      if (option.optionVal === this.value) {
        this.chooseId = option.optionId
        this.chooseText = option.optionText
      }
    })
    document.addEventListener('click', this.hide, false)
  },
  watch: {
    isShow (newVal) {
      // 如果isShow为true且popper不为空
      // 则调用update方法重新定位popper的位置
      if (newVal && this.popper) {
        this.popper.update()
      }
    },
    value (newVal) {
      console.log('the choose :' + newVal)
    }
  },
  methods: {
    createInstance () {
      if (this.popper) {
        this.popper.update()
        return
      }
      const placement = 'bottom'
      const reference = this.reference = this.reference || this.$el.children[0]
      const popperEl = this.$refs.popper
      const options = {
        placement
      }
      this.popper = new Popper(reference, popperEl, options)
    },
    clickHandler (e) {
      if (this.isShow) {
        this.hidePopper()
      } else {
        this.showPopper()
      }
    },
    hidePopper () {
      this.isShow = false
    },
    showPopper () {
      if (this.popper === null) {
        this.createInstance()
      }
      this.isShow = true
    },
    hide (e) {
      if (!catIn(e.target, this.$el)) {
        this.hidePopper()
      }
    },
    isChoose (optionId) {
      return this.chooseId === optionId
    },
    // createCover () {
    //   this.coverDiv = document.createElement('div')
    //   this.coverDiv.style.position = 'fixed'
    //   this.coverDiv.style.zIndex = this.currentZindex - 1
    //   this.coverDiv.style.width = '100%'
    //   this.coverDiv.style.height = '100%'
    //   this.coverDiv.style.top = 0
    //   this.coverDiv.style.left = 0
    //   document.body.appendChild(this.coverDiv)

    //   this.coverDiv.addEventListener('click', () => {
    //     this.isShow = false
    //   }, false)
    // },
    chooseHandler (e, isDisabled) {
      // 如果被禁用 则不能点击
      if (isDisabled) {
        return false
      }
      const currentOption = EasyQuery.use(e.currentTarget)
      this.hidePopper()
      const optionVal = currentOption.getAttribute('optionVal')
      const optionText = currentOption.getAttribute('optionText')
      const optionId = currentOption.getAttribute('optionid')
      // 将选中的optionId放到chooseIds中。
      this.chooseId = optionId
      this.updateVal(optionVal, optionText)
      // 暴露事件
      this.$emit('select-change', {
        value: optionVal,
        text: optionText
      })
    },
    updateVal (val, text) {
      this.chooseText = text
      this.$emit('input', val)
    }
  }
}
</script>
