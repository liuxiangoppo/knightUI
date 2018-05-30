import Vue from 'vue'

class EventBus {
    constructor () {
        this.bus = new Vue()
    }
    // 发送事件
    emit (event, args) {
        this.bus.$emit(event, args)
    }
    // 监听事件
    on (event, cb) {
        this.bus.$on(event, cb)
    }
    // 批量发送事件
    // batchEmit (ary) {
    //     ary.forEach(item => {
    //         this.emit(item.event, item.data)
    //     })
    // }
    // 批量监听事件
    // batchOn (ary) {
    //     ary.forEach(item => {
    //         this.on(item.event, item.cb)
    //     })
    // }
}

export default new EventBus()