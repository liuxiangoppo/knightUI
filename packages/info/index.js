import KInfo from './src/Main'

KInfo.install = function (Vue) {
  Vue.component(KInfo.name, KInfo)
}

export default KInfo
