<template>
  <div class="k-tab" :class="tabClass">
    <!--Tab项-->
    <div class="k-tab-labels">
      <div class="k-tab-label" @click="switchTab" v-for="(item, index) in components" :key="index" :index="index">{{ item.title }}</div>
      <!--移动的滑块-->
      <div class="k-tab__active-bar" :style="{width: activeBarWidth,transform: activeBarTransfer}"></div>
    </div>
    <div class="k-tabcontent__wrapper">
      <slot></slot>
    </div>
  </div>
</template>

<script>
// import { hasClass, addClass, removeClassToSelectors, getAttribute, show } from 'src/utils/EasyDom'
import EasyQuery from 'src/utils/EasyQuery'
export default {
  name: 'k-tab',
  props: {
    // 模式 closeable、default、flat Design(扁平化风格)、card选项卡式风格、border-card卡片化风格
    mode: {
      default: 'flat',
      type: String
    },
    // 指明当前Tab选项卡的索引
    currentIndex: {
      default: 0,
      type: Number
    },
    // Tab项位置 top、right、bottom、left
    tabPosition: {
      default: 'top',
      type: String
    }
  },
  data () {
    return {
      activeBarWidth: 0,
      activeBarTransfer: 0,
      components: [],
      tabContentArray: [],
      tabTagArray: [],
      activeIndex: this.currentIndex
    }
  },
  computed: {
    tabClass () {
      return `k-tab__${this.mode}`
    }
  },
  mounted () {
    // 获取所有的Tab项但此时dom尚未准备完毕
    this.getTabs()
    // 等待dom准备完毕
    this.$nextTick(() => {
      this.domReady()
      // 确定第一个激活状态的tab
      const firstTab = this.getActiveTag()
      // 增加样式
      // addClass(firstTab, 'k-tab__active')
      EasyQuery.use(firstTab).addClass('k-tab__active')
      // 设置滑块宽度
      this.setActiveBarWidth(firstTab.offsetWidth)
      // 设置滑块偏移量
      this.setActiveBarTransfer(firstTab.offsetLeft)
      // 显示默认的内容
      this.showActiveContent()
    })
  },
  methods: {
    // 排除掉非k-tabContent的组件
    filterTabs () {
      return this.$children.filter(item => item.$options._componentTag === 'k-tabContent')
    },
    getTabs () {
      this.filterTabs().forEach(item => {
        this.components.push({
          title: item.title
        })
      })
    },
    // 获取所有的待操作的dom
    domReady () {
      // 获取所有的tab标签
      this.tabTagArray = this.$el.querySelectorAll('.k-tab-label')
      // 获取所有的tab内容
      this.tabContentArray = this.$el.querySelectorAll('.k-tabContent')
    },
    // 获取激活状态的标签
    getActiveTag () {
      return this.tabTagArray[this.activeIndex]
    },
    // 获取激活状态的内容
    getActiveContent () {
      return this.tabContentArray[this.activeIndex]
    },
    // 显示激活的Tab内容
    showActiveContent () {
      // show(this.tabContentArray[this.activeIndex])
      EasyQuery.use(this.tabContentArray[this.activeIndex]).show()
    },
    // 切换标签
    switchTab (e) {
      const currentTarget = e.target
      // 若当前选项已处于激活状态
      // if (hasClass(currentTarget, 'k-tab__active')) {
      //   return false
      // }
      if (EasyQuery.use(currentTarget).hasClass('k-tab__active')) {
        return false
      }
      // 设置当前索引
      // this.activeIndex = getAttribute(currentTarget, 'index')
      this.activeIndex = EasyQuery.use(currentTarget).getAttribute('index')
      // 把选项卡中所有的激活状态移除
      // removeClassToSelectors(this.tabTagArray, 'k-tab__active')
      EasyQuery.use(this.tabTagArray).removeClass('k-tab__active')
      // addClass(currentTarget, 'k-tab__active')
      EasyQuery.use(currentTarget).addClass('k-tab__active')
      // 设置滑块宽度
      this.setActiveBarWidth(currentTarget.offsetWidth)
      // 设置滑块偏移量
      this.setActiveBarTransfer(currentTarget.offsetLeft)
      // 显示对应索引的内容
      this.switchContent()
    },
    /**
     * 设置滑块宽度
     */
    setActiveBarWidth (barWidth) {
      this.activeBarWidth = `${barWidth}px`
    },
    /**
     * 设置滑块偏移量
     */
    setActiveBarTransfer (distance) {
      this.activeBarTransfer = `translateX(${distance}px)`
    },
    // 切换内容
    switchContent () {
      this.tabContentArray.forEach(item => { item.style.display = 'none' })
      this.showActiveContent()
    }
  }
}
</script>
