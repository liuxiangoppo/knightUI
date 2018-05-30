<template>
  <k-container without="none">
    <k-header>
      <logo></logo>
    </k-header>
    <k-sidebar>
      <k-menu :collapse="false" background-color="#33485c" text-color="#fff" active-text-color="red">
            <k-menu-nav-item title="安装"></k-menu-nav-item>
            <k-menu-nav-item title="快速开始"></k-menu-nav-item>
            <k-menu-nav-item title="更新日志"></k-menu-nav-item>
            <k-menu-sub>
                <span slot="title">BASIC 基础组件</span>
                <k-menu-nav-item title="Layout 布局" custormClass="menuItemClass"></k-menu-nav-item>
                <k-menu-nav-item title="Button 按钮" custormClass="menuItemClass"></k-menu-nav-item>
                <k-menu-nav-item title="Icon 图标" custormClass="menuItemClass"></k-menu-nav-item>
                <!-- <k-menu-sub>
                    <span slot="title">实时监控</span>
                    <k-menu-nav-item title="商停监控"></k-menu-nav-item>
                    <k-menu-nav-item title="路侧监控"></k-menu-nav-item>
                </k-menu-sub> -->
            </k-menu-sub>
            <k-menu-sub>
                <span slot="title">NAVIGATION 导航</span>
                <k-menu-nav-item title="Affix 固钉" custormClass="menuItemClass"></k-menu-nav-item>
                <k-menu-nav-item title="ScrollTo 滚动工具" custormClass="menuItemClass"></k-menu-nav-item>
                <k-menu-nav-item title="Breadcrumb 面包屑导航" custormClass="menuItemClass"></k-menu-nav-item>
                <k-menu-nav-item title="Dropdown 下拉菜单" custormClass="menuItemClass"></k-menu-nav-item>
                <k-menu-nav-item title="Pagination 分页" custormClass="menuItemClass"></k-menu-nav-item>
                <k-menu-nav-item title="Steps 步骤条" custormClass="menuItemClass"></k-menu-nav-item>
                <k-menu-nav-item title="Tabs 选项卡" custormClass="menuItemClass"></k-menu-nav-item>
            </k-menu-sub>
            <k-menu-sub>
                <span slot="title">VIEW 视图</span>
                <k-menu-nav-item title="Alert 警告框" custormClass="menuItemClass"></k-menu-nav-item>
                <k-menu-nav-item title="Aside 侧边模态框" custormClass="menuItemClass"></k-menu-nav-item>
                <k-menu-nav-item title="Collapse 折叠面板" custormClass="menuItemClass"></k-menu-nav-item>
                <k-menu-nav-item title="Modal 模态框" custormClass="menuItemClass"></k-menu-nav-item>
                <k-menu-nav-item title="Notify 通知" custormClass="menuItemClass"></k-menu-nav-item>
                <k-menu-nav-item title="Tag 标签" custormClass="menuItemClass"></k-menu-nav-item>
                <k-menu-nav-item title="Progress 进度条" custormClass="menuItemClass"></k-menu-nav-item>
                <k-menu-nav-item title="Popover 气泡弹出框" custormClass="menuItemClass"></k-menu-nav-item>
                <k-menu-nav-item title="Popconfirm 气泡确认框" custormClass="menuItemClass"></k-menu-nav-item>
                <k-menu-nav-item title="Tooltip 文字提示" custormClass="menuItemClass"></k-menu-nav-item>
                <k-menu-nav-item title="TimeLine 时间线" custormClass="menuItemClass"></k-menu-nav-item>
                <k-menu-nav-item title="Table 表格" custormClass="menuItemClass"></k-menu-nav-item>
            </k-menu-sub>
            <k-menu-sub>
                <span slot="title">FORM 表单</span>
                <k-menu-nav-item title="Form 表单" custormClass="menuItemClass"></k-menu-nav-item>
                <k-menu-nav-item title="InputNumber 数字输入框" custormClass="menuItemClass"></k-menu-nav-item>
                <k-menu-nav-item title="Radio 单选框" custormClass="menuItemClass"></k-menu-nav-item>
                <k-menu-nav-item title="Checkbox 复选框" custormClass="menuItemClass"></k-menu-nav-item>
                <k-menu-nav-item title="Switch 开关" custormClass="menuItemClass"></k-menu-nav-item>
                <k-menu-nav-item title="DataPicker 日期选择" custormClass="menuItemClass"></k-menu-nav-item>
            </k-menu-sub>
        </k-menu>
    </k-sidebar>
    <div class="mainContent">
      <div class="contentInner">
        <slot></slot>
      </div>
    </div>
  </k-container>
</template>

<script>
import KContainer from './Container'
import KHeader from './Header'
import KFooter from './Footer'
import KSidebar from './Sidebar'
import Logo from './Logo'
import KMenu from 'packages/menu'
import menuJson from 'examples/assets/menu.json'

export default {
  name: 'pageTemplate',
  data: function () {
    return {
      data: menuJson
    }
  },
  components: {
    KContainer, KHeader, KSidebar, KFooter, KMenu, Logo
  },
  mounted () {
    // Todo
    console.log(this)
  }
}
</script>

<style lang="less">
.mainContent {
  margin-left: 250px;
  padding: 50px 10px;
  .contentInner {
    background:#FFF;
  }
}
.menuItemClass {
  background-color: #2a3b4c;
  border-bottom: 1px solid #2f4355;

  &:hover {
    background-color: red;
  }
}
</style>
