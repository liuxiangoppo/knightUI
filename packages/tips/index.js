import Vue from 'vue'
import KTip from './src/Main'

KTip.installTip = function (event, opt) {
  const options = opt
  const props = ['top', 'left', 'width', 'height']
  const boundingRect = event.target.getBoundingClientRect()
  let rect = {}
  props.forEach(property => {
    if (property === 'top' || property === 'left') {
      const scroll = property === 'top' ? 'scrollTop' : 'scrollLeft'
      rect[property] = boundingRect[property] + document.body[scroll] + document.documentElement[scroll]
    } else {
      rect[property] = boundingRect[property]
    }
  })
  options.rect = rect
  const Tip = Vue.extend(KTip)
  const component = new Tip({
    data: options
  }).$mount()
  event.target.appendChild(component.$el)
}

// 为了满足另外一种形式的调用
KTip.install = function (_Vue) {
  _Vue.component(KTip.name, KTip)
}

export default KTip
