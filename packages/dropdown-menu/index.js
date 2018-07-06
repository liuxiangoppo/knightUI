import DropdownMenu from '../dropdown/src/DropdownMenu.vue'

DropdownMenu.install = function (Vue) {
  Vue.component(DropdownMenu.name, DropdownMenu)
}

export default DropdownMenu
