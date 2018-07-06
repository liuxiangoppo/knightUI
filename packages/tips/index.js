import Tip from './src/Main'

Tip.install = function (Vue) {
  Vue.component(Tip.name, Tip)
}

export default Tip
