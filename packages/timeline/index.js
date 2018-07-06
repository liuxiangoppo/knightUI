import KTimeLine from './src/Main'

KTimeLine.install = function (Vue) {
  Vue.component(KTimeLine.name, KTimeLine)
}

export default KTimeLine
