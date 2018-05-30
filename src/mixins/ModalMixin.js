/**
 * ModalMixin
 * 用于Modal以及MessageBox的混合开发。
 * 因为实际开发过程中发现两者的dom结构以及方法函数具有比较高的一致性
 * 为了方便后期维护 特地使用Vue的Mixin进行开发。
 */
import TweenMax from 'gsap/TweenMax'

export default {
    props: {
        // 是否开启遮罩层
        cover: {
            default: true,
            type: Boolean
        },
        // 标题
        title: {
            default: '标题',
            type: String
        }
    },
    methods: {
        // 初始化遮罩层
        initCoverDiv() {
            // Todo
        },
        // 动画Enter事件
        animateEnter() {
            // Todo
        },
        // 动画Leave事件
        animateLeave() {
            // Todo
        }
    }
}