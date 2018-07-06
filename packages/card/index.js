import Card from './src/Main.vue'

Card.install = function (Vue) {
  Vue.component(Card.name, Card)
}

export default Card
