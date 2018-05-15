import Vue from 'Vue'
import Main from './src/Main.vue'
import PopupManager from 'src/utils/PopupManager'
const NotifyConstructor = Vue.extend(Main)
// 回调组件列表
const NotifyInstances = []

const constantTop = 10
// 获取Notify通知框的top值
const getNotifyTop = (position) => {
  // 根据position筛选出在Instances数组中与参数position一致的实例
  // 根据筛选出的实例数组 计算出元素的top值或是bottom值。
  let notifyTop = constantTop
  if (NotifyInstances.length === 0) {
    return notifyTop
  }
  const chooseInstances = NotifyInstances.filter(item => {
    return item.position === position
  })
  chooseInstances.forEach(item => {
    notifyTop += constantTop + item.$el.offsetHeight
  })
  return notifyTop
}

let seed = 0
const Notify = (options) => {
  options = options || {}
  // 当前实例的id
  const id = 'k-notify_' + seed++
  // 关闭时的回调函数
  const userOnClose = options.onClose
  // 定义Message关闭时的方法
  options.onClose = function () {
    Notify.close(id, userOnClose)
  }
  // 创建实例
  const component = new NotifyConstructor({
    data: options
  }).$mount()
  // 设置id 方便后面追踪
  component.id = id
  component.visible = true
  document.body.appendChild(component.$el)
  // 设置zIndex以及top值
  component.$el.style.zIndex = PopupManager.nextZIndex()
  // 根据位置以及实例个数计算当前实例的所处位置
  if (options.position === 'topRight' || options.position === 'topLeft') {
    component.$el.style.top = getNotifyTop(options.position) + 'px'
  } else {
    component.$el.style.bottom = getNotifyTop(options.position) + 'px'
  }
  NotifyInstances.push(component)
  return component
}

/**
 * 根据id获取对应的组件 并对组件进行关闭后的回调处理
 * 注意:当前组件关闭之后 之后的组件要进行位置偏移。
 * @param {*} id 当前组件的id
 * @param {*} userOnClose 用户自定义的关闭之后的回调
 */
Notify.close = (id, userOnClose) => {
  const instance = NotifyInstances.filter(item => {
    return item.id === id
  })[0]
  const index = NotifyInstances.indexOf(instance)
  if (!instance) {
    return false
  }
  // 如果有回调函数的话
  if (typeof userOnClose === 'function') {
    userOnClose(instance)
  }
  NotifyInstances.splice(index, 1)
  const position = instance.position
  const removedHeight = instance.$el.offsetHeight
  NotifyInstances.forEach(item => {
    if (item.position === position) {
      if (item.position === 'topRight' || item.position === 'topLeft') {
        item.$el.style.top = parseInt(item.$el.style.top, 10) - removedHeight - 10 + 'px'
      } else {
        item.$el.style.bottom = parseInt(item.$el.style.bottom, 10) - removedHeight - 10 + 'px'
      }
    }
  })
}

Notify.closeAll = () => {
  // 关闭全部
}

export default Notify
