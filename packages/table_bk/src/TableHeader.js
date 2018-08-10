// 表头
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
    }
  },
  // 获取对应的列
  computed: {
    cols () {
      return this.$parent.columns
    }
  },
  methods: {
    handleToggleSelectAll (isCheck) {
      this.$parent.handleToggleSelectAll(isCheck)
    }
  },
  created () {
    // console.log(this.checkable)
    // let defaultCols = null
    // let rowspan = 0
    // if (this.cols[0] instanceof Array) {
    //   defaultCols = this.cols[0]
    //   rowspan = this.cols.length
    // } else {
    //   defaultCols = this.cols
    // }
    // console.log(defaultCols)
    // if (this.checkable === true) {
    //   defaultCols.splice(0, 0, {
    //     columnType: 'check',
    //     colspan: 1,
    //     rowspan: rowspan
    //   })
    // }
  },
  render (h) {// eslint-disable-line
    const state = this.state
    const checked = this.$parent.isCheckAll()
    // 如果配置项中带有复选框
    return (
      <thead>
        {
          this._l(this.cols, (tr, trIndex) => {
            return (
              <tr>
                {
                  this.checkable && trIndex === 0 ? <th rowspan={this.cols.length}><k-checkbox checked={checked} onChange={value => this.handleToggleSelectAll(value)} /></th> : ''
                }
                {
                  this.showIndex && trIndex === 0 ? <th rowspan={this.cols.length}>#</th> : ''
                }
                {
                  this._l(tr, (th, thIndex) => {
                    const classes = 'sortable ' + th.className
                    // if (th.className) {
                    //   classes += th.className
                    // }
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
        {/* <tr>
          {
            this.checkable ? <th><k-checkbox checked={checked} onChange={value => this.handleToggleSelectAll(value)}/></th> : ''
          }
          {
            this.showIndex ? <th>#</th> : ''
          }
          {
            this._l(this.cols, (column, cellIndex) => {
              if (!column.visible) return null
              const classes = 'sortable'
              let sorterEl = ''
              let sortClass = 'sort'
              if (column.sorter) {
                if (state.sortKey === column.field && state.reverse) {
                  sortClass = 'sortdesc'
                } else if (state.sortKey === column.field && !state.reverse) {
                  sortClass = 'sortasc'
                }
                sorterEl = <span class={`sort-trigger ${sortClass}`}><i class={`k-icon icon-${sortClass}`}></i></span>
              }
              return (
                <th key={cellIndex}
                  class={classes}
                  onClick={this.$parent.handleToggleSort.bind(this, column)}>
                  <span>{column.label}</span>
                  {sorterEl}
                </th>
              )
            })
          }
        </tr> */}
      </thead>
    )
  }
}
