// 表头
import EasyQuery from 'src/utils/EasyQuery.js'
export default {
  name: 'TableHeader',
  props: {
    // 列数组
    columns: Array,
    mergeCols: Array,
    // 是否带有复选框
    checkable: Boolean,
    // 是否显示行索引
    showIndex: Boolean,
    // 这个暂时不知道
    state: {
      type: Object,
      default () { }
    },
    isReverse: {
      type: Boolean,
      default: false
    }
  },
  // 获取对应的列
  computed: {
    /**
     * 应该根据isReverse的值
     * 将cols反转
     */
    cols () {
      const cols = this.$parent.columns
      if (this.isReverse && EasyQuery.isArrayLike(cols)) {
        let array = []
        cols.forEach(item => {
          array.push(item)
        })
        return array.reverse()
      }
      return this.$parent.columns
    }
  },
  methods: {
    handleToggleSelectAll (isCheck) {
      this.$parent.handleToggleSelectAll(isCheck)
    }
  },
  created () {
  // Todo
  },
  render (h) {// eslint-disable-line
    const state = this.state
    const checked = this.$parent.isCheckAll()
    let cols = this.cols
    // 如果isReverse为true的话
    if (this.isReverse) {
      Array.prototype.slice.call(cols)
    }
    // 如果配置项中带有复选框
    return (
      <thead>
        {
          this._l(cols, (tr, trIndex) => {
            if (this.isReverse) {
              tr = Array.prototype.slice.call(tr).reverse()
            }
            return (
              <tr>
                {
                  this.checkable && trIndex === 0 && !this.isReverse ? <th rowspan={cols.length}><k-checkbox checked={checked} onChange={value => this.handleToggleSelectAll(value)} /></th> : ''
                }
                {
                  this.showIndex && trIndex === 0 && !this.isReverse ? <th rowspan={cols.length}>#</th> : ''
                }
                {
                  this._l(tr, (th, thIndex) => {
                    let classes = 'sortable '
                    // 如果th有传递的className 则拼接到一起。
                    if (th.className) {
                      classes += th.className
                    }
                    let sorterEl = ''
                    let sortClass = 'sort'
                    if (th.sorter) {
                      if (state.sortKey === th.field && state.reverse) {
                        sortClass = 'sortdesc'
                      } else if (state.sortKey === th.field && !state.reverse) {
                        sortClass = 'sortasc'
                      }
                      sorterEl = <span class={`sort-trigger ${sortClass}`}><i class={`k-icon icon-desc`}>&#xe657;</i><i class={`k-icon icon-asc`}>&#xe7a6;</i></span>
                    }
                    return (
                      <th colspan={th.colspan} rowspan={th.rowspan} class={classes} onClick={this.$parent.handleToggleSort.bind(this, th)}><span>{th.title}</span>{sorterEl}</th>
                    )
                  })
                }
              </tr>
            )
          })
        }
      </thead>
    )
  }
}
