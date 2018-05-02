<template>
  <div class="k-row" :class="rowClassName">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'kRow',
  props: {
    // 定义栅格列的列数 目前支持两种模式 分别为12列以及24列
    columnCount: {
      default: 12,
      type: Number
    },
    // 水槽|间距
    gutter: {
      default: 0,
      type: Number
    },
    // 模式 当值为flex时 采用flex布局进行布局
    mode: {
      default: '',
      type: String
    },
    justify: {
      default: '',
      type: String
    }
  },
  computed: {
    rowClassName () {
      let rowClassName = ''
      if (this.mode === 'flex') {
        rowClassName += 'k-row__flex'
      }
      if (this.justify !== '') {
        rowClassName += ' ' + `k-row-justify__${this.justify}`
      }
      return rowClassName
    }
  }
}
</script>
