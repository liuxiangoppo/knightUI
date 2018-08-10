<template>
  <span class="k-datepicker">
    <!--文本框-->
    <div class="k-input-wrap" ref="inputReference" :style="{ width: calenderInputWidth }">
      <input type="text" class="k-input__inner" :placeholder="placeholder" @click="clickHandler" :value="dateVal"/>
    </div>
    <!--日历部分-->
    <transition name="fade">
      <div class="k-calender-wrapper" ref="popper" v-show="isShow" :style="{marginLeft: calenderMarginLeft, zIndex: currentIndex}">
        <!--日历组件-->
        <k-calender v-model="dateVal" :calender-type="calenderType"></k-calender>
      </div>
    </transition>
  </span>
</template>

<script>
// 日历组件
import KCalender from './Calender.vue'
import { catIn } from 'src/utils/utils.js'
import Popper from 'popper.js'
import PopupManager from 'src/utils/PopupManager.js'
export default {
  name: 'k-datepicker',
  components: {KCalender},
  props: {
    // Todo
    placeholder: {
      type: String,
      default: '请选择日期'
    },
    inputWidth: {
      type: Number,
      default: 150
    },
    // 最小日期
    min: {
      default: '1970-01-01'
    },
    // 最大日期
    max: {
      default: '3016-01-01'
    },
    // 值
    value: {
      type: [String, Array],
      default: ''
    },
    // 范围
    range: {
      type: Boolean,
      default: false
    },
    calenderType: {
      type: String,
      default: 'date'
    }
  },
  data () {
    return {
      // 是否显示日历
      isShow: false,
      // popper的引用
      popper: null,
      // reference的引用
      reference: null,
      // marginLeft
      calenderMarginLeft: '',
      // 选中的日期/值
      chooseDate: '',
      // 日历类型
      calenderPanelType: this.calenderType,
      dateVal: ''
    }
  },
  computed: {
    calenderInputWidth () {
      return this.inputWidth + 'px'
    },
    chooseDateText () {
      if (this.chooseDate === null) {
        return ''
      }
      let valType = typeof this.chooseDate
      if (valType === 'string') {
        return this.chooseDate
      } else if (valType === 'array') {
        return this.chooseDate.join('-')
      }
    },
    currentIndex () {
      return PopupManager.nextZIndex()
    }
  },
  mounted () {
    document.addEventListener('click', this.hide, false)
  },
  watch: {
    isShow (newVal) {
      // 如果isShow为true且popper不为空
      // 则调用update方法重新定位popper的位置
      if (newVal && this.popper) {
        this.popper.update()
        // 设置calender的marginLeft 目的与文本框对齐
        this.calenderMarginLeft = '170px'
      }
    },
    // 监听datepicker的值的变化
    dateVal (newVal) {
      this.$emit('input', newVal)
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
        // 指定当前显示的日期类型
        this.panelType = this.calenderType
        // 显示日历部分
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
    calenderChoose (val) {
      // Todo
      if (val === '') {
        // Todo
      } else if (typeof val === 'string') {
        this.chooseDate = val
      } else if (typeof val === 'object') {
        // Todo
        console.log(val)
      }
    }
  }
}
</script>
