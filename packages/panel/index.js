import KPanel from './src/Main'

KPanel.install = function (Vue) {
  Vue.component(KPanel.name, KPanel)
}

export default KPanel
