import Vue from 'vue'
import Main from './src/Main'
import PopupManager from 'src/utils/PopupManager'
const MessageConstructor = Vue.extend(Main)
const instances = []
let seed = 1

const Message = (options) => {
  options = options || {}
  // 创建id
  const id = 'k-message_' + seed++
  // 关闭时的回调函数
  const userOnClose = options.onClose

  // 定义Message关闭时的方法
  options.onClose = function () {
    Message.close(id, userOnClose)
  }
  // 声明组件实例并进行mount事件调用
  const component = new MessageConstructor({
    data: options
  }).$mount()
  component.id = id
  component.visible = true
  component.$el.style.zIndex = PopupManager.nextZIndex()
  document.body.appendChild(component.$el)
  instances.push(component)

  return component
}

// 关闭指定的Message
Message.close = (id, userOnClose) => {
  instances.forEach((item, i) => {
    if (item.id === id) {
      if (typeof userOnClose === 'function') {
        userOnClose(item)
      }
      instances.splice(i, 1)
    }
  })
}

// 关闭全部Message
Message.closeAll = () => {
  instances.forEach(item => {
    item.close()
  })
}

export default Message
