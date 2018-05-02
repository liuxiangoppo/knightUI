import Badge from './src/Main'

Badge.install = function (Vue) {
  Vue.component(Badge.name, Badge)
}

export default Badge
