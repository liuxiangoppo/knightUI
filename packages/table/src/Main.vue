<template>
<div>
  <div class="k-datatable-wrapper" style="overflow: hidden; position: relative;" :style="{width: `${width}px`, height: `${height}px`}">
    <div class="data-table-container">
      <!--固定表头-->
      <!--如果没有为表格设置高度的话 就不显示固定表头-->
      <div class="data-table-header" ref="header" v-if="height" :style="{width: `${width}px`}">
        <table class="data-table" :class="{'is-bordered': bordered, 'is-striped': striped, 'is-narrow': narrow}">
          <colgroup>
            <col v-for="(col, index) in cols" :key="index" :width="col">
          </colgroup>
          <table-header :state="state" :checkable="checkable" :showIndex="showIndex"></table-header>
        </table>
      </div>
      <!--表主体内容-->
      <div class="data-table-main" ref="dataTableMain" :style="mainStyle" @scroll="handleBodyScrollTop"><!-- :style="mainStyle"-->
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
    </div>
    <!--冻结左侧-->
    <div class="table-frozen-left" v-show="isFrozen" :style="{width: `${leftFrozenColumnsWidth}px`}">
      <div class="data-table-header" v-if="height" :style="{width: `${width}px`}">
        <table class="data-table" :class="{'is-bordered': bordered, 'is-striped': striped, 'is-narrow': narrow}">
          <colgroup>
            <col v-for="(col, index) in cols" :key="index" :width="col">
          </colgroup>
          <table-header :state="state" :checkable="checkable" :showIndex="showIndex"></table-header>
        </table>
      </div>
      <div class="data-table-body-outer" :style="{width: `${leftFrozenColumnsWidth}px`, height: `${tableBodyheight}px`, overflow: 'hidden'}">
        <div class="data-table-main" ref="frozenLeftTableBody" :style="{width: `${leftFrozenColumnsWidth}px`, height: `${tableBodyheight}px`, overflowY: 'hidden', overflowX: 'hidden', marginRight: '-20px', paddingRight: '20px'}">
          <table class="data-table" :class="{'is-bordered': bordered, 'is-striped': striped, 'is-narrow': narrow}">
            <colgroup>
              <col v-for="(col, index) in cols" :key="index" :width="col">
            </colgroup>
            <template v-if="!height">
              <table-header :state="state" :checkable="checkable" :showIndex="showIndex"></table-header>
            </template>
            <table-body :state="state" :checkable="checkable" :data="showData" :showIndex="showIndex"></table-body>
          </table>
        </div>
      </div>
    </div>
    <!--冻结右侧列-->
    <div class="table-frozen-right" v-show="isRightFrozen" :style="{width: `${rightFrozenColumnWidth}px`, height: `${height}px`}">
      <div class="data-table-header" v-if="height" :style="{width: `${rightFrozenColumnWidth}px`}">
        <table class="data-table" :class="{'is-bordered': bordered, 'is-striped': striped, 'is-narrow': narrow}">
          <colgroup>
            <col v-for="(col, index) in cols" :key="index" :width="col">
          </colgroup>
          <table-header :state="state" :checkable="checkable" :showIndex="showIndex"></table-header>
        </table>
      </div>
      <div class="data-table-main" ref="rightFrozenTableBody" :style="{width: `${rightFrozenColumnWidth}px`, height: `${tableBodyheight}px`, overflowY: 'hidden', overflowX: 'hidden', background: 'red'}">
        <table class="data-table" :class="{'is-bordered': bordered, 'is-striped': striped, 'is-narrow': narrow}">
            <colgroup>
              <col v-for="(col, index) in cols" :key="index" :width="col">
            </colgroup>
            <template v-if="!height">
              <table-header :state="state" :checkable="checkable" :showIndex="showIndex"></table-header>
            </template>
            <table-body :state="state" :checkable="checkable" :data="showData" :showIndex="showIndex"></table-body>
          </table>
      </div>
    </div>
  </div>
  <!--分页-->
  <k-pagination :total="totalCnt" align="right" :change="handlePageChange" :pageSizeChange="handlePageSizeChange" v-if="totalCnt"></k-pagination>
</div>
</template>
<script>
import { sortBy } from 'lodash'
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
    // 表格宽度 用于设置表格整体的宽度 如果该值为空 则自动延伸到父元素的边界。
    width: Number,
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
    // 表格列数组
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
      selected: [],
      isTable: true,
      interData: [],
      showData: [],
      columnFields: [],
      frozenColumns: [],
      isFrozen: false,
      // 左侧固定列的宽度
      leftFrozenColumnsWidth: 0,
      // 表格高度
      headerHeight: 0,
      // 表格主体高度
      tableBodyheight: 0,
      // 右侧冻结列-操作列
      rightFrozenColumns: [],
      rightFrozenColumnWidth: 0,
      isRightFrozen: false
    }
  },
  computed: {
    // 主体表格的样式
    mainStyle () {
      let mainStyle = this.height ? { height: `${this.tableBodyheight}px`, overflowX: 'auto', overflowY: 'auto' } : {}
      if (this.width) {
        mainStyle.width = `${this.width}px`
      }
      return mainStyle
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
    /**
     * 监控冻结列的值
     * 如果有值 则说明当前的表格有部分列需要冻结
     */
    frozenColumns (newVal) {
      if (newVal.length > 0) {
        this.isFrozen = true
      }
    },
    /**
     * 监听cols的值 并计算出冻结列的宽度
     */
    cols (newVal) {
      // 获取所有冻结列的个数(不包含右侧需要冻结的列)
      let frozenColumnSize = this.frozenColumns.length
      // 如果配置项中有复选框
      if (this.checkable) {
        // 则要固定的列数要+1
        frozenColumnSize += 1
      }
      // 如果配置项中有索引行的显示
      if (this.showIndex) {
        // 则要固定的列数要+1
        frozenColumnSize += 1
      }
      // 声明冻结列的宽度
      let frozenWidth = 0
      // 根据cols计算冻结列的最终宽度。
      this.cols.forEach((item, index) => {
        if (index < frozenColumnSize) {
          frozenWidth += item
        }
      })
      // 赋值保存
      this.leftFrozenColumnsWidth = frozenWidth
    },
    /**
     * 监听rightFrozenColumns的值
     */
    rightFrozenColumns (newVal) {
      if (newVal) {
        let rightFrozenColumn = newVal[0]
        this.isRightFrozen = true
        if (rightFrozenColumn.width) {
          this.rightFrozenColumnWidth = rightFrozenColumn.width
        }
      }
    }
  },
  methods: {
    /**
     * 监听表格主体的滚动事件 并设置左侧表格主体的scrollTop值 使之同步滚动。
     */
    handleBodyScrollTop (event) {
      // 目的是为了防止触发mac浏览器左右翻页功能
      event.stopPropagation()
      this.$refs.frozenLeftTableBody.querySelector('.data-table').style.transform = 'translateY(' + (-event.target.scrollTop) + 'px)'
      this.$refs.rightFrozenTableBody.querySelector('.data-table').style.transform = 'translateY(' + (-event.target.scrollTop) + 'px)'
      this.$refs.header.querySelector('.data-table').style.transform = 'translateX(' + (-event.target.scrollLeft) + 'px)'
    },
    leftFrozenTableScroll (event) {
      // this.handleBodyScrollTop(event)
    },
    // 计算列宽
    calcColumnWidth () {
      // 如果this.checkable为true
      // 说明用户的配置是带有复选框的 需要额外计算40像素
      if (this.checkable) {
        this.cols.push(40)
      }
      // 如果this.showIndex为true
      // 说明用户的配置是需要显示索引的 需要额外计算40像素
      if (this.showIndex) {
        this.cols.push(40)
      }
      this.columnFields.forEach((column) => {
        if (column.width) {
          this.cols.push(column.width)
        }
      })
    },
    /**
     * 处理排序
     */
    handleToggleSort (column) {
      if (!column.sorter || !column.field) {
        return false
      }
      this.state.sortKey = column.field
      this.state.reverse = !this.state.reverse
      if (EasyQuery.isFunction(column.sorter) || column.sorter === 'custom') {
        this.interData = sortBy(this.interData, column.field)
        if (this.state.reverse) this.interData.reverse()
      }
      this.handleTableChange()
    },
    /**
     * 处理页数切换
     */
    handlePageSizeChange (current, pageSize) {
      this.state.pagination.pageSize = pageSize
      this.handleTableChange()
    },
    /**
     * 处理页码切换
     */
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
            } else if (col.isFrozen === 'right') {
              // 右侧冻结
              this.rightFrozenColumns.push(col)
            }
          })
        } else {
          if (row.isFrozen === true) {
            this.frozenColumns.push(row)
          } else if (row.isFrozen === 'right') {
            // 右侧冻结
            this.rightFrozenColumns.push(row)
          }
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
    // 计算列宽
    this.calcColumnWidth()
    this.handleReorganizeData()
    this.$nextTick(() => {
      if (this.$refs.header) {
        const headHeight = this.headerHeight = this.$refs.header.clientHeight
        this.tableBodyheight = this.height - headHeight
      }
      // this.$refs.frozenLeftTableBody.addEventListener('scroll', (event) => {
      //   this.$refs.dataTableMain.querySelector('.data-table').style.transform = 'translateY(' + (-event.target.scrollTop) + 'px)'
      // })
    })
  }
}
</script>
