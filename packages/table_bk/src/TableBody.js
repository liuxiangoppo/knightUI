export default {
  name: 'TableBody',
  props: {
    columns: Array,
    data: Array,
    checkable: Boolean,
    showIndex: Boolean,
    state: {
      type: Object,
      default () {}
    }
    // singleSelection: {
    //   type: Boolean,
    //   default: false
    // }
  },
  data () {
    return {
      rows: []
    }
  },
  computed: {
    cols () {
      return this.$parent.columnFields
    }
  },
  watch: {
    data (newVal) {
      this.rows = newVal
    }
  },
  methods: {
    handleToggleSelect (row, isSelect, index) {
      this.$parent.handleSelectedChange(row, isSelect, index)
    }
  },
  created () {
    // Todo
  },
  render (h) {// eslint-disable-line
    const pagination = this.state.pagination
    const selectedRowKeys = this.state.selectedRowKeys
    const rowKey = this.$parent.rowKey
    return (
      <tbody>
        {
          this._l(this.rows, (row, $index) => {
            const key = row[rowKey] ? row[rowKey] : `${pagination.current}-${$index}`
            const checked = selectedRowKeys.indexOf(key) >= 0
            return (
              <tr>
                {
                  // this.checkable ? <th><checkbox checked={checked} key={key} change={value => this.handleToggleSelect(row, value, $index)}/></th> : ''
                  this.checkable ? <th><k-checkbox checked={checked} input-id={key} input-name={key} onChange={value => this.handleToggleSelect(row, value, $index)}></k-checkbox></th> : ''
                }
                {
                  this.showIndex ? <th>{$index + 1}</th> : ''
                }
                {this._l(this.cols, (column, cellIndex) => {
                  if (!column.visible) return null
                  return (
                    <td key={`${$index}${cellIndex}`} class={column.className}>
                      {column.renderCell.call(this._renderProxy, h, { row, column, $index, store: this.store, _self: this.context || this.$parent.$vnode.context })}
                    </td>
                  )
                })}
              </tr>
            )
          })
        }
      </tbody>
    )
  }
}
