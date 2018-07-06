import Alert from './src/Main'

Alert.install = function (Vue) {
  Vue.component(Alert.name, Alert)
}

export default Alert
