import Tag from './src/Main'

Tag.install = function (Vue) {
  Vue.component(Tag.name, Tag)
}

export default Tag
