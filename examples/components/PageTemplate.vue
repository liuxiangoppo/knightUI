<template>
  <div>
    <header class="header">
      <section class="container">
        <div class="navLeft">
          <h2>慧停车前端开发组件库-KUI</h2>
        </div>
        <div class="navRight"></div>
      </section>
    </header>
    <div class="body">
      <div class="bodyInner">
        <aside class="sideMenu">
              <ul>
                <li>
                  <router-link to="/install">安装</router-link>
                </li>
                <li>
                  <router-link to="/quickstart">快速开始</router-link>
                </li>
                <li>
                  <router-link to="">更新日志</router-link>
                </li>
                <li>
                  <router-link to="">浏览器兼容</router-link>
                </li>
                <li>
                  <router-link to="">Components 组件</router-link>
                  <ul>
                    <li>
                      <span class="menuGroup paddingLeft15 grey">BASIC</span>
                      <ul>
                        <li>
                          <router-link to="/button" class="menuItem paddingLeft30 opacity75">Button 按钮</router-link>
                        </li>
                        <li>
                          <router-link to="/grid" class="menuItem paddingLeft30 opacity75">Grid 栅格化系统</router-link>
                        </li>
                        <li>
                          <router-link to="/transition" class="menuItem paddingLeft30 opacity75">Transition 过渡动画</router-link>
                        </li>
                        <li>
                          <router-link to="/style" class="menuItem paddingLeft30 opacity75">Class 辅助工具类</router-link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <span class="menuGroup paddingLeft15 grey">NAVIGATION</span>
                      <ul>
                        <li><router-link to="/affix" class="menuItem paddingLeft30 opacity75">Affix 图钉</router-link></li>
                        <li><router-link to="/scrollto" class="menuItem paddingLeft30 opacity75">ScrollTo 滚动工具</router-link></li>
                        <li><router-link to="/breadcrumb" class="menuItem paddingLeft30 opacity75">Breadcrumb 面包屑导航</router-link></li>
                        <li><router-link to="/dropdown" class="menuItem paddingLeft30 opacity75">Dropdown 下拉菜单</router-link></li>
                        <li><router-link to="/pagination" class="menuItem paddingLeft30 opacity75">Pagination 分页</router-link></li>
                        <li><router-link to="/step" class="menuItem paddingLeft30 opacity75">Steps 步骤条</router-link></li>
                        <li><router-link to="/tab" class="menuItem paddingLeft30 opacity75">Tabs 选项卡</router-link></li>
                        <li><router-link to="/menu" class="menuItem paddingLeft30 opacity75">Menu 导航菜单</router-link></li>
                        <li><router-link to="/tree" class="menuItem paddingLeft30 opacity75">Tree 树状列表</router-link></li>
                      </ul>
                    </li>
                    <li>
                      <span class="menuGroup paddingLeft15 grey">VIEW</span>
                      <ul>
                        <li><router-link to="/badge" class="menuItem paddingLeft30 opacity75">Badge 徽章</router-link></li>
                        <li><router-link to="/alert" class="menuItem paddingLeft30 opacity75">Alert 警告框</router-link></li>
                        <li><router-link to="/aside" class="menuItem paddingLeft30 opacity75">Aside 侧边模态框</router-link></li>
                        <li><router-link to="/collapse" class="menuItem paddingLeft30 opacity75">Collapse 折叠面板</router-link></li>
                        <li><router-link to="/card" class="menuItem paddingLeft30 opacity75">Card 卡片</router-link></li>
                        <li><router-link to="/modal" class="menuItem paddingLeft30 opacity75">Modal 模态框</router-link></li>
                        <li><router-link to="/notification" class="menuItem paddingLeft30 opacity75">Notify 通知</router-link></li>
                        <li><router-link to="/tag" class="menuItem paddingLeft30 opacity75">Tag 标签</router-link></li>
                        <li><router-link to="/progress" class="menuItem paddingLeft30 opacity75">Progress 进度条</router-link></li>
                        <li><router-link to="/popover" class="menuItem paddingLeft30 opacity75">Popover 气泡弹出框</router-link></li>
                        <li><router-link to="/popconfirm" class="menuItem paddingLeft30 opacity75">Popconfirm 气泡确认框</router-link></li>
                        <li><router-link to="/tip" class="menuItem paddingLeft30 opacity75">Tip 文字提示</router-link></li>
                        <li><router-link to="/message" class="menuItem paddingLeft30 opacity75">Message 消息</router-link></li>
                        <li><router-link to="/timeline" class="menuItem paddingLeft30 opacity75">TimeLine 时间线</router-link></li>
                        <li><router-link to="/table" class="menuItem paddingLeft30 opacity75">Table 表格</router-link></li>
                      </ul>
                    </li>
                    <li>
                      <span class="menuGroup paddingLeft15 grey">FORM</span>
                      <ul>
                        <li><router-link to="/form" class="menuItem paddingLeft30 opacity75">Form 表单</router-link></li>
                        <li><router-link to="/input" class="menuItem paddingLeft30 opacity75">Input 文本</router-link></li>
                        <li><router-link to="" class="menuItem paddingLeft30 opacity75">InputNumber 数字输入框</router-link></li>
                        <li><router-link to="/radio" class="menuItem paddingLeft30 opacity75">Radio 单选框</router-link></li>
                        <li><router-link to="/upload" class="menuItem paddingLeft30 opacity75">Upload 文件上传</router-link></li>
                        <li><router-link to="/checkbox" class="menuItem paddingLeft30 opacity75">Checkbox 复选框</router-link></li>
                        <li><router-link to="/select" class="menuItem paddingLeft30 opacity75">Select 选择框</router-link></li>
                        <li><router-link to="" class="menuItem paddingLeft30 opacity75">Switch 开关</router-link></li>
                        <li><router-link to="" class="menuItem paddingLeft30 opacity75">DataPicker 日期选择</router-link></li>
                      </ul>
                    </li>
                    <li>
                      <span class="menuGroup paddingLeft15 grey">Example</span>
                      <ul>
                        <li><router-link to="/table" class="menuItem paddingLeft30 opacity75">综合示例</router-link></li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </aside>
        <div class="bodyContent">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less">
.header {
  background-color: #3c81df;

  .container {
    position: relative;
    min-height: 50px;
    align-items: stretch;
    display: flex;

    .navLeft {
      flex-basis: 0;
      flex-grow: 1;
      flex-shrink: 0;
      justify-content: flex-start;
      overflow: hidden;
      overflow-x: auto;
      white-space: nowrap;
      color: #fff;
    }
  }
}
.body {
  background-color: #fff;

  .bodyInner {
    position: relative;
    min-height: 50px;
    padding:20px 0;
    display:flex;
    flex-flow:row;

    .sideMenu {
      border-right: 1px solid #e9e9e9;
      min-width:220px;
      padding-top: 20px;
      ul>li {
        position: relative;
      }
      ul>li>a {
        color: #3c81df;
        text-decoration: none;
        cursor: pointer;
      }
      ul>li>span {
        color: #000;
      }
      ul>li>a,span{
        font-size:14px;
        padding: 12px 0 12px 0;
        display: block;
        position: relative;
      }
    }
    .bodyContent {
      flex: 1;
      padding: 0 20px;
      overflow: hidden;
    }
  }
}
.menuItem {
  cursor: pointer;
  color: #3f536e !important;
  &:hover {
    background-color: #f5f5f5;
  }
}
@media screen and (min-width: 980px) {
  .container,.bodyInner {
    margin: 0 auto;
    max-width: 1000px;
  }
}

@media screen and (min-width: 1180px) {
  .container,.bodyInner {
    max-width: 1200px;
  }
}
.paddingLeft30 {
  padding-left: 30px !important;
}
.paddingLeft15 {
  padding-left: 15px !important;
}
.grey {
  color: #7a7a7a !important;
}
.opacity75 {
  opacity: 1;
}
.menuGroup {
  margin-top: 20px;
  opacity: 0.5;
}
</style>
