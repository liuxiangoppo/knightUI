export default {
  name: 'TableHeader',
  props: {
    columns: Array,
    checkable: Boolean,
    showIndex: Boolean,
    state: {
      type: Object,
      default () {}
    }
  },
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
  // mounted() {
  //   console.log(this.$parent.columns);
  // },
  render (h) {// eslint-disable-line
    const state = this.state
    const checked = this.$parent.isCheckAll()
    return (
      <thead>
        <tr>
          {
            this.checkable ? <th><checkbox checked={checked} change={value => this.handleToggleSelectAll(value)}/></th> : ''
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
        </tr>
      </thead>
    )
  }
}
