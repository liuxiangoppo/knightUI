import KMenu from './src/Main'

KMenu.install = function (Vue) {
  Vue.component(KMenu.name, KMenu)
}

export default KMenu
