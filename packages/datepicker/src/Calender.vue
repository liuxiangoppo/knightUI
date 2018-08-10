<template>
  <div class="k-datepicker-calender">
    <div class="calender-header" v-show="panelType !== 'year'">
        <div class="arrow-left" @click="prevMonthPreview()">
        <i class="k-icon">&#xe8bf;</i>
        </div>
        <div class="year-month-box">
            <div class="year-box" @click="chType('year')">{{ tmpYear | year }}</div> <!-- v-text="tmpYear | year"-->
            <div class="month-box" @click="chType('month')">{{tmpMonth + 1 | month}}</div>
        </div>
        <div class="arrow-right" @click="nextMonthPreview()">
            <i class="k-icon">&#xe65b;</i>
        </div>
    </div>
    <div class="calender-header" v-show="panelType === 'year'">
        <div class="arrow-left" @click="chYearRange(0)">
            <i class="k-icon">&#xe8bf;</i>
        </div>
        <div class="year-range">
            <span v-text="yearList[0]"></span> - <span v-text="yearList[yearList.length - 1]"></span>
        </div>
        <div class="arrow-right" @click="chYearRange(1)">
            <i class="k-icon">&#xe65b;</i>
        </div>
    </div>
    <div class="type-year" v-show="panelType === 'year'">
        <ul class="year-list">
            <li v-for="item in yearList"
                v-text="item"
                :key="item"
                :class="{selected: isSelected('year', item), invalid: validateYear(item)}"
                @click="selectYear(item)">
            </li>
        </ul>
    </div>
    <div class="type-month" v-show="panelType === 'month'">
        <ul class="month-list">
            <li v-for="(item, index) in monthList"
                :key="item"
                :class="{selected: isSelected('month', index), invalid: validateMonth(index)}"
                @click="selectMonth(index)">
                {{item | month}}
            </li>
        </ul>
    </div>
    <div class="type-date" v-show="panelType === 'date'">
        <ul class="weeks">
            <li v-for="item in weekList" :key="item">{{item | week}}</li>
        </ul>
        <ul class="date-list">
            <li v-for="(item, index) in dateList"
                :key="index"
                :class="{preMonth: item.previousMonth, nextMonth: item.nextMonth,
                    invalid: validateDate(item), firstItem: (index % 7) === 0}"
                @click="selectDate(item)">
                <div class="message" :class="{selected: isSelected('date', item)}">
                    <div class="bg"></div><span v-text="item.value"></span>
                </div>
            </li>
        </ul>
    </div>
</div>
</template>
<script>
export default {
  name: 'k-calender',
  props: {
    // 最小日期
    min: {
      default: '1970-01-01'
    },
    // 最大日期
    max: {
      default: '3016-01-01'
    },
    // 值
    value: {
      type: [String, Array],
      default: ''
    },
    // 范围
    range: {
      type: Boolean,
      default: false
    },
    calenderType: {
      type: String,
      default: 'date'
    }
  },
  data () {
    // 初始化时间
    let now = new Date()
    let startDate = null
    let endDate = null
    if (this.range) {
      startDate = this.value[0] ? new Date(this.value[0]) : now
      endDate = this.value[1] ? new Date(this.value[1]) : now
    } else {
      startDate = endDate = this.value ? new Date(this.value) : now
    }
    return {
      // 显示取消
      showCancel: false,
      //
      panelState: false,
      // 根据结束时间 获取年
      year: endDate.getFullYear(),
      // 根据结束时间获取月
      month: endDate.getMonth(),
      // 根据结束时间获取日期
      date: endDate.getDate(),
      tmpYear: endDate.getFullYear(),
      tmpMonth: endDate.getMonth(),
      tmpStartYear: startDate.getFullYear(),
      tmpStartMonth: startDate.getMonth(),
      tmpStartDate: startDate.getDate(),
      tmpEndYear: endDate.getFullYear(),
      tmpEndMonth: endDate.getMonth(),
      tmpEndDate: endDate.getDate(),
      minYear: Number,
      minMonth: Number,
      minDate: Number,
      maxYear: Number,
      maxMonth: Number,
      maxDate: Number,
      yearList: Array.from({length: 12}, (value, index) => new Date().getFullYear() + index),
      // 月份列表
      monthList: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      // 周期列表
      weekList: [0, 1, 2, 3, 4, 5, 6],
      rangeStart: false,
      // 'date'
      panelType: this.calenderType
    }
  },
  computed: {
    dateList () {
      let currentMonthLength = new Date(this.tmpMonth, this.tmpMonth + 1, 0).getDate()
      let dateList = Array.from({ length: currentMonthLength }, (val, index) => {
        return {
          currentMonth: true,
          value: index + 1
        }
      })
      let startDay = new Date(this.tmpYear, this.tmpMonth, 1).getDay()
      let previousMongthLength = new Date(this.tmpYear, this.tmpMonth, 0).getDate()
      for (let i = 0, len = startDay; i < len; i++) {
        dateList = [{previousMonth: true, value: previousMongthLength - i}].concat(dateList)
      }
      for (let i = dateList.length, item = 1; i < 42; i++, item++) {
        dateList[dateList.length] = {nextMonth: true, value: item}
      }
      return dateList
    }
    // chooseDateText () {
    //   if (this.chooseDate === null) {
    //     return ''
    //   }
    //   let valType = typeof this.chooseDate
    //   if (valType === 'string') {
    //     return this.chooseDate
    //   } else if (valType === 'array') {
    //     return this.chooseDate.join('-')
    //   }
    // }
  },
  filters: {
    //
    year: (item) => {
      return item + '年'
    },
    // 格式化周
    week: (item) => {
      return {0: '日', 1: '一', 2: '二', 3: '三', 4: '四', 5: '五', 6: '六'}[item]
    },
    // 格式化月
    month: (item) => {
      return {1: '一', 2: '二', 3: '三', 4: '四', 5: '五', 6: '六', 7: '七', 8: '八', 9: '九', 10: '十', 11: '十一', 12: '十二'}[item] + '月'
    }
  },
  mounted () {
    this.$nextTick(() => {
      let minArr = this.min.split('-')
      this.minYear = Number(minArr[0])
      this.minMonth = Number(minArr[1])
      this.minDate = Number(minArr[2])
      let maxArr = this.max.split('-')
      this.maxYear = Number(maxArr[0])
      this.maxMonth = Number(maxArr[1])
      this.maxDate = Number(maxArr[2])
      if (this.range) {
        if (this.value.length) {
          let rangeStart = this.value[0].split('-')
          let rangeEnd = this.value[1].split('-')
          this.tmpStartYear = Number(rangeStart[0])
          this.tmpStartMonth = Number(rangeStart[1]) - 1
          this.tmpStartDate = Number(rangeStart[2])
          this.tmpEndYear = Number(rangeEnd[0])
          this.tmpEndMonth = Number(rangeEnd[1]) - 1
          this.tmpEndDate = Number(rangeEnd[2])
        } else {
          this.$emit('input', ['', ''])
        }
      }
      if (!this.value) {
        this.$emit('input', '')
      }
    })
    document.addEventListener('click', this.hide, false)
  },
  watch: {
    min (v) {
      let minArr = v.split('-')
      this.minYear = Number(minArr[0])
      this.minMonth = Number(minArr[1])
      this.minDate = Number(minArr[2])
    },
    max (v) {
      let maxArr = v.split('-')
      this.maxYear = Number(maxArr[0])
      this.maxMonth = Number(maxArr[1])
      this.maxDate = Number(maxArr[2])
    },
    range (newVal, oldVal) {
      if (newVal === oldVal) {
        return
      }
      if (newVal && Object.prototype.toString.call(this.value).slice(8, -1) === 'String') {
        this.$emit('input', ['', ''])
      }
      if (!newVal && Object.prototype.toString.call(this.value).slice(8, -1) === 'Array') {
        this.$emit('input', '')
      }
    }
  },
  methods: {
    isSelected (type, item) {
      switch (type) {
        case 'year':
          if (!this.range) {
            return item === this.tmpYear
          }
          return (new Date(item, 0).getTime() >= new Date(this.tmpStartYear, 0).getTime() && new Date(item, 0).getTime() <= new Date(this.tmpEndYear, 0).getTime())
        case 'month':
          if (!this.range) {
            return item === this.tmpMonth && this.year === this.tmpYear
          }
          return (new Date(this.tmpYear, item).getTime() >= new Date(this.tmpStartYear, this.tmpStartMonth).getTime() && new Date(this.tmpYear, item).getTime() <= new Date(this.tmpEndYear, this.tmpEndMonth).getTime())
        case 'date':
          if (!this.range) {
            return this.date === item.value && this.month === this.tmpMonth && item.currentMonth
          }
          let month = this.tmpMonth
          item.previousMonth && month--
          item.nextMonth && month++
          return (new Date(this.tmpYear, month, item.value).getTime() >= new Date(this.tmpStartYear, this.tmpStartMonth, this.tmpStartDate).getTime() && new Date(this.tmpYear, month, item.value).getTime() <= new Date(this.tmpEndYear, this.tmpEndMonth, this.tmpEndDate).getTime())
      }
    },
    chType (type) {
      this.panelType = type
    },
    chYearRange (next) {
      if (next) {
        this.yearList = this.yearList.map((i) => i + 12)
      } else {
        this.yearList = this.yearList.map((i) => i - 12)
      }
    },
    prevMonthPreview () {
      this.tmpMonth = this.tmpMonth === 0 ? 0 : this.tmpMonth - 1
    },
    nextMonthPreview () {
      this.tmpMonth = this.tmpMonth === 11 ? 11 : this.tmpMonth + 1
    },
    // 年份选择的处理事件
    selectYear (year) {
      // 验证格式
      if (this.validateYear(year)) {
        return
      }
      this.tmpYear = year
      // 如果calenderType日历类型为year的话
      if (this.calenderType === 'year') {
        // 将当前日期
        // this.chooseDate = this.tmpYear
        this.$emit('input', year.toString())
        this.$parent.hidePopper()
      } else {
        this.panelType = 'month'
      }
    },
    selectMonth (month) {
      if (this.validateMonth(month)) {
        return
      }
      // 设置临时的month
      this.tmpMonth = month
      // 如果当前日历类型为month的话
      if (this.calenderType === 'month') {
        let chooseMonth = `${this.tmpYear}-${('0' + (this.tmpMonth + 1)).slice(-2)}`
        // this.chooseDate = chooseMonth
        this.$emit('input', chooseMonth)
        this.$parent.hidePopper()
      } else {
        this.panelType = 'date'
      }
    },
    selectDate (date) {
      setTimeout(() => {
        if (this.validateDate(date)) {
          return
        }
        if (date.previousMonth) {
          if (this.tmpMonth === 0) {
            this.year -= 1
            this.tmpYear -= 1
            this.month = this.tmpMonth = 11
          } else {
            this.month = this.tmpMonth - 1
            this.tmpMonth -= 1
          }
        } else if (date.nextMonth) {
          if (this.tmpMonth === 11) {
            this.year += 1
            this.tmpYear += 1
            this.month = this.tmpMonth = 0
          } else {
            this.month = this.tmpMonth + 1
            this.tmpMonth += 1
          }
        }
        if (!this.range) {
          this.year = this.tmpYear
          this.month = this.tmpMonth
          this.date = date.value
          let value = `${this.tmpYear}-${('0' + (this.month + 1)).slice(-2)}-${('0' + this.date).slice(-2)}`
          // 更新v-model的值
          this.$emit('input', value)
          // 将当前选中的日期赋值给chooseDate
          // this.chooseDate = value
          this.panelState = false
          // 隐藏calender部分
          this.$parent.hidePopper()
        } else if (this.range && !this.rangeStart) {
          this.tmpEndYear = this.tmpStartYear = this.tmpYear
          this.tmpEndMonth = this.tmpStartMonth = this.tmpMonth
          this.tmpEndDate = this.tmpStartDate = date.value
          this.rangeStart = true
        } else if (this.range && this.rangeStart) {
          this.tmpEndYear = this.tmpYear
          this.tmpEndMonth = this.tmpMonth
          this.tmpEndDate = date.value
          let d1 = new Date(this.tmpStartYear, this.tmpStartMonth, this.tmpStartDate).getTime()
          let d2 = new Date(this.tmpEndYear, this.tmpEndMonth, this.tmpEndDate).getTime()
          if (d1 > d2) {
            let tmpY = this.tmpEndYear
            let tmpM = this.tmpEndMonth
            let tmpD = this.tmpEndDate
            this.tmpEndYear = this.tmpStartYear
            this.tmpEndMonth = this.tmpStartMonth
            this.tmpEndDate = this.tmpStartDate
            this.tmpStartYear = tmpY
            this.tmpStartMonth = tmpM
            this.tmpStartDate = tmpD
          }
          let RangeStart = `${this.tmpStartYear}-${('0' + (this.tmpStartMonth + 1)).slice(-2)}-${('0' + this.tmpStartDate).slice(-2)}`
          let RangeEnd = `${this.tmpEndYear}-${('0' + (this.tmpEndMonth + 1)).slice(-2)}-${('0' + this.tmpEndDate).slice(-2)}`
          let value = [RangeStart, RangeEnd]
          // 对外暴露date-choose事件.
          this.$emit('input', value)
          this.rangeStart = false
          this.panelState = false
          // 隐藏calender部分
          this.$parent.hidePopper()
        }
      }, 0)
    },
    validateYear (year) {
      if (year > this.maxYear || year < this.minYear) {
        return true
      } else {
        return false
      }
    },
    validateMonth (month) {
      if (new Date(this.tmpYear, month).getTime() >= new Date(this.minYear, this.minMonth - 1).getTime() && new Date(this.tmpYear, month).getTime() <= new Date(this.maxYear, this.maxMonth - 1).getTime()) {
        return false
      }
      return true
    },
    validateDate (date) {
      let mon = this.tmpMonth
      if (date.previousMonth) {
        mon -= 1
      } else if (date.nextMonth) {
        mon += 1
      }
      if (new Date(this.tmpYear, mon, date.value).getTime() >= new Date(this.minYear, this.minMonth - 1, this.minDate).getTime() && new Date(this.tmpYear, mon, date.value).getTime() <= new Date(this.maxYear, this.maxMonth - 1, this.maxDate).getTime()) {
        return false
      }
      return true
    },
    close (e) {
      if (!this.$el.contains(e.target)) {
        this.panelState = false
        this.rangeStart = false
      }
    },
    clear () {
      this.$emit('input', this.range ? ['', ''] : '')
    }
  }
}
</script>
