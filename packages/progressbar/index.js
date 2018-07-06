import Process from './src/Main'

Process.install = function (Vue) {
  Vue.component(Process.name, Process)
}

export default Process
