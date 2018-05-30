import KMessageBox from './src/Main'

KMessageBox.install = function (Vue) {
  Vue.component(KMessageBox.name, KMessageBox)
}

export default KMessageBox
