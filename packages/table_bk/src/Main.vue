<template>
  <div class="data-table-container">
    <slot></slot>
    <!--固定表头-->
    <!--如果没有为表格设置高度的话 就不显示固定表头-->
    <div class="data-table-header" ref="header" v-if="height">
      <table class="data-table" :class="{'is-bordered': bordered, 'is-striped': striped, 'is-narrow': narrow}">
        <colgroup>
          <col v-for="(col, index) in cols" :key="index" :width="col">
        </colgroup>
        <table-header :data="showData" :showIndex="showIndex"></table-header>
      </table>
    </div>
    <!--表内容-->
    <div class="data-table-main" :style="mainStyle">
      <table class="data-table" :class="{'is-bordered': bordered, 'is-striped': striped, 'is-narrow': narrow}">
        <colgroup>
          <col v-for="(col, index) in cols" :key="index" :width="col">
        </colgroup>
        <template v-if="!height">
          <table-header :state="state" :checkable="checkable" :showIndex="showIndex"></table-header>
        </template>
        <!--是否放到state里  这个暂时有待商榷-->
        <table-body :state="state" :checkable="checkable" :data="showData" :showIndex="showIndex"></table-body>
      </table>
    </div>
    <!--分页-->
    <k-pagination :total="totalCnt" align="right" :change="handlePageChange" :pageSizeChange="handlePageSizeChange" v-if="totalCnt"></k-pagination>
  </div>
</template>
<script>
import sortBy from 'lodash/sortBy'
import EasyQuery from 'src/utils/EasyQuery.js'
import TableHeader from './TableHeader.js'
import TableBody from './TableBody.js'
// 分页
import KPagination from './../../pagination/src/Pagination.js'
export default {
  components: { TableHeader, TableBody, KPagination },
  name: 'k-table',
  props: {
    // 数据源
    data: Array,
    change: {
      type: Function,
      default () {}
    },
    // 表格高度 设置该属性的时候 会自动固定表头
    height: Number,
    // 是否带有复选框
    checkable: {
      type: Boolean,
      default: false
    },
    // 是否显示行索引
    showIndex: Boolean,
    // 分页组件的配置
    pagination: {},
    // 选中或取消选中某一行时的回调
    onSelectChange: {
      type: Function,
      default () {}
    },
    onSelectAll: {
      type: Function,
      default () {}
    },
    // 表格行的key,用于checkbox的选择
    rowKey: String,
    // 控制表格是否显示边框
    bordered: Boolean,
    // 控制表格是否显示斑马线
    striped: Boolean,
    // 是否行高变窄 (这个暂时不知道好不好使。)
    narrow: Boolean,
    singleSelection: {
      type: Boolean,
      default: false
    },
    // 用于标明那些表头需要合并
    // 值格式:[{field: '', rowspan: 3, colspan: 1},{...}]
    mergeTh: [],
    // 用于标明那些表格需要合并
    // 值格式:[{field: '', rowspan: 3, colspan: 1},{...}]
    mergeTd: [],
    columns: Array
  },
  data () {
    return {
      // 数据状态
      state: {
        sortKey: '',
        reverse: '',
        pagination: { current: 1 },
        selectedRows: [],
        selectedRowKeys: []
      },
      cols: [],
      // columns: [],
      mergeThs: [],
      mergeTds: [],
      selected: [],
      isTable: true,
      interData: [],
      showData: [],
      columnFields: [],
      frozenColumns: []
    }
  },
  computed: {
    mainStyle () {
      return this.height ? { height: `${this.height}px`, overflow: 'scroll' } : null
    },
    totalCnt () {
      const total = this.pagination && this.pagination.total ? this.pagination.total : 0
      return total
    }
  },
  watch: {
    data (val) {
      // 将data数据赋给interData
      this.interData = val
      this.handleReorganizeData()
    },
    frozenColumns (newVal) {
      // if (newVal.length > 0) {
      //   this.is
      // }
    }
  },
  methods: {
    // 计算列宽
    calcColumnWidth () {
      let width = this.$el.offsetWidth
      let length = this.columnFields.length
      // 如果this.checkable为true
      // 说明用户的配置是带有复选框的 需要额外计算40像素
      if (this.checkable) {
        width -= 40
        this.cols.push(40)
      }
      // 如果this.showIndex为true
      // 说明用户的配置是需要显示索引的 需要额外计算40像素
      if (this.showIndex) {
        width -= 40
        this.cols.push(40)
      }
      // 如果有部分列用户设置了列宽
      // 则需要减掉这些列宽再重新计算。
      this.columnFields.forEach((column) => {
        if (column.width) {
          width -= column.width
          length -= 1
        }
      })
      // 重新计算剩下的列所能计算的平均宽度
      const avgWidth = Math.floor(width / length)
      // 最终将平均列宽赋给剩下的列
      this.columnFields.forEach((column) => {
        if (column.width) {
          this.cols.push(column.width)
        } else {
          this.height ? this.cols.push(avgWidth) : this.cols.push('')
        }
      })
    },
    // 排序处理
    handleToggleSort (column) {
      if (!column.sorter || !column.field) {
        return false
      }
      // debugger
      this.state.sortKey = column.field
      this.state.reverse = !this.state.reverse
      if (EasyQuery.isFunction(column.sorter) || column.sorter === 'custom') {
        this.interData = sortBy(this.interData, column.field)
        console.log(this.interData)
        if (this.state.reverse) this.interData.reverse()
      }
      this.handleTableChange()
    },
    // 页数切换回调
    handlePageSizeChange (current, pageSize) {
      this.state.pagination.pageSize = pageSize
      this.handleTableChange()
    },
    handlePageChange (current) {
      this.state.pagination.current = current
      const onPageChange = this.state.pagination.change
      if (onPageChange && EasyQuery.isFunction(onPageChange)) {
        onPageChange(current)
      }
      this.handleTableChange()
    },
    handleInitTable () {},
    handleTableChange () {
      this.change(this.state)
      this.handleReorganizeData()
    },
    handleReorganizeData () {
      if (this.state.pagination.total) {
        const current = this.state.pagination.current || 1
        const pageSize = this.state.pagination.pageSize || 10
        if (this.interData.length <= pageSize) {
          this.showData = this.interData
        } else {
          const start = (current - 1) * pageSize
          const end = parseInt(start, 10) + parseInt(pageSize, 10)
          this.showData = this.interData.slice(start, end)
        }
      } else {
        this.showData = this.interData
      }
    },
    /**
     * 表格的复选框的change事件
     */
    handleSelectedChange (row, isSelect, index) {
      // 判断当前行是否有rowkey
      let key = row[this.rowKey]
      if (!key) {
        const currentPage = this.state.pagination.current
        key = `${currentPage}-${index}`
      }
      // isExist标明当前key是否已存在已选中的行中。
      const isExist = this.state.selectedRowKeys.indexOf(key) >= 0
      // 已被选中且不在已选行中
      if (isSelect && !isExist) {
        this.state.selectedRowKeys.push(key)
        this.state.selectedRows.push(row)
      }
      // 未被选中且已在已选行的数组中
      if (!isSelect && isExist) {
        const selectedIndex = this.state.selectedRowKeys.indexOf(key)
        this.state.selectedRows.splice(selectedIndex, 1)
        this.state.selectedRowKeys.splice(selectedIndex, 1)
      }
      this.onSelectChange(this.state.selectedRowKeys, this.state.selectedRows)
    },
    handleToggleSelectAll (isCheck) {
      const currentPage = this.state.pagination.current
      if (isCheck) {
        this.showData.forEach((row, index) => {
          const key = row[this.rowKey] ? row[this.rowKey] : `${currentPage}-${index}`
          const isExist = this.state.selectedRowKeys.indexOf(key) >= 0
          if (!isExist) {
            this.state.selectedRowKeys.push(key)
            this.state.selectedRows.push(row)
          }
        })
      } else {
        this.showData.forEach((row, index) => {
          const key = row[this.rowKey] ? row[this.rowKey] : `${currentPage}-${index}`
          const selectedIndex = this.state.selectedRowKeys.indexOf(key)
          if (selectedIndex >= 0) {
            this.state.selectedRows.splice(selectedIndex, 1)
            this.state.selectedRowKeys.splice(selectedIndex, 1)
          }
        })
      }
      this.onSelectChange(this.state.selectedRowKeys, this.state.selectedRows)
    },
    isCheckAll () {
      const currentPage = this.state.pagination.current
      const checkedAll = this.showData.some((row, index) => {
        const key = row[this.rowKey] ? row[this.rowKey] : `${currentPage}-${index}`
        return this.state.selectedRowKeys.indexOf(key) < 0
      })
      return !checkedAll
    },
    handleRefresh () {
      this.state = {
        sortKey: '',
        reverse: '',
        selectedRows: [],
        selectedRowKeys: []
      }
      if (this.pagination) {
        this.state.pagination = this.pagination
      } else {
        this.state.pagination = { current: 1 }
      }
      this.interData = this.data
      this.handleTableChange()
    },
    /**
     * 获取需要冻结的列
     * 如果columns是一维数组 即[{},{},{}]如此格式。 则过滤isFrozen为true的列
     * 如果是多维数组 说明当前配置项是一个多表头的表格。 需要依次获取isFrozen为true的列.
     */
    findFrozenColumns () {
      const columns = this.columns
      columns.find((row, index) => {
        // todo
        if (row instanceof Array) {
          // 多维数组
          row.forEach((col, index) => {
            if (col.isFrozen === true) {
              this.frozenColumns.push(col)
            }
          })
        } else {
          this.frozenColumns.push(row)
        }
      })
    }
  },
  created () {
    this.interData = this.data
    if (this.pagination) {
      this.state.pagination = this.pagination
    }
    // 过滤带有field的column
    const columns = this.columns
    // 过滤到有field的column
    columns.forEach(row => {
      row.forEach(col => {
        if (col.field !== '' && col.field !== undefined) {
          // 处理当前列是否可见
          if (col.visible === undefined || col.visible === true) {
            col.visible = true
          } else {
            col.visible = false
          }
          // 新增表格的渲染方法
          col.renderCell = (h, {row, column}) => {
            // 如果column列本身有render函数的定义
            // 则调用该函数并生成对应的内容返回。
            if (column.render && typeof column.render === 'function') {
              return column.render(h, {row, column})
            } else {
              return row[column.field]
            }
          }
          this.columnFields.push(col)
        }
      })
    })
    // 找出需要冻结得列
    this.findFrozenColumns()
  },
  mounted () {
    this.calcColumnWidth()
    this.handleReorganizeData()
  }
}
</script>
