// NavMenu 布局
import KMenu from 'packages/menu'
import KMenuNavItem from 'packages/menu-nav-item'
import KMenuSub from 'packages/menusub'
// 徽章
import KBadge from 'packages/badge'
// 面包屑
import KBreadCrumb from 'packages/breadcrumb'
import KBreadCrumbItem from 'packages/breadcrumb-item'
// Grid栅格系统
import KGrid from 'packages/grid'
import KRow from 'packages/row'
import KCol from 'packages/col'
// Button按钮
import KButton from 'packages/button'
import KButtonGroup from 'packages/buttongroup'
// 面板
import KPanel from 'packages/panel'
import KPanelHead from 'packages/panelhead'
import KPanelBody from 'packages/panelbody'
// Icon图标
import KIcon from 'packages/icon'
// Tab面板
import KTab from 'packages/tab'
import KTabContent from 'packages/tabcontent'
// Info信息框
import KInfo from 'packages/info'
// Message
import KMessage from 'packages/message'
import KTip from 'packages/tips'
import KNotification from 'packages/notification'
// KModal 模态框
import KModal from 'packages/modal'
// 信息盒子
import KMessageBox from 'packages/messagebox'
const components = [
    // 导航菜单
    KMenu,
    KMenuNavItem,
    KMenuSub,
    // 徽章
    KBadge,
    // 面包屑
    KBreadCrumb,
    KBreadCrumbItem,
    // 栅格化系统
    KGrid,
    KRow,
    KCol,
    // 按钮
    KButton,
    KButtonGroup,
    // 面板
    KPanel,
    KPanelHead,
    KPanelBody,
    // 图标
    KIcon,
    // Tab选项卡
    KTab,
    KTabContent,
    // 信息框
    KInfo,
    // 模态框
    KModal
]

const install = function (Vue) {
    if (install.installed) return
    components.map(component => Vue.component(component.name, component))
    Vue.prototype.$KTip = KTip.installTip
    Vue.prototype.$KMessage = KMessage
    Vue.prototype.$KNotify = KNotification
    Vue.prototype.$KMessageBox = KMessageBox
}

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
}

export default {
    install,
    // NavMenu 布局
    KMenu,
    KMenuNavItem,
    KMenuSub,
    // 徽章
    KBadge,
    // 面包屑
    KBreadCrumb,
    KBreadCrumbItem,
    // 栅格化系统
    KGrid,
    KRow,
    KCol,
    // 按钮
    KButton,
    KButtonGroup,
    // 面板
    KPanel,
    // 图标
    KIcon,
    // Tab面板
    KTab,
    KTabContent,
    // 信息框
    KInfo,
    KModal
}