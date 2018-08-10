<style>
    .marginTop10 {
      margin-top: 10px;
    }
    .menu-item {
      padding: 8px 15px !important;
    }
    .menu-item:hover {
      background-color:#eee;
    }
    .paddingLeft10 {
      padding-left: 10px !important;
    }
    .out {
      border-top: 1px solid #eee;
    }
</style>
# Dropdown 下拉菜单
----
## 基本展示

<div class="demo-block">
<template>
 <k-dropdown :width="300">
  <button class="button is-primary is-plain">下拉菜单</button>
  <dropdown-menu slot="content">
    <dropdown-menu-item custorm-class="menu-item" to="/badge">徽章组件</dropdown-menu-item>
    <dropdown-menu-item custorm-class="menu-item" to="/alert">警告框组件</dropdown-menu-item>
    <dropdown-menu-item custorm-class="menu-item" to="/breadcrumb">面包屑导航组件</dropdown-menu-item>
  </dropdown-menu>
 </k-dropdown>
</template>
</div>

::: demo
```html
<style>
.menu-item {
  padding: 8px 15px !important;
}
.menu-item:hover {
  background-color:#eee;
}
.out {
  border-top: 1px solid #eee;
}
</style>
<template>
 <k-dropdown :width="300">
  <button class="button is-primary is-plain">下拉菜单</button>
  <dropdown-menu slot="content">
    <dropdown-menu-item custorm-class="menu-item" to="/badge">徽章组件</dropdown-menu-item>
    <dropdown-menu-item custorm-class="menu-item" to="/alert">警告框组件</dropdown-menu-item>
    <dropdown-menu-item custorm-class="menu-item" to="/breadcrumb">面包屑导航组件</dropdown-menu-item>
  </dropdown-menu>
 </k-dropdown>
</template>

```
:::

## 触发方式
触发方式包含：```hover```、```click```、```以及自定义方式的触发```
<div class="demo-block">
<template>
 <k-dropdown>
  <button class="button is-warning is-plain">通过click方式触发</button>
  <div slot="content">
    <dropdown-menu>
      <dropdown-menu-item custorm-class="menu-item" @click="xiangjiao">香蕉</dropdown-menu-item>
      <dropdown-menu-item custorm-class="menu-item" @click="pingguo">苹果</dropdown-menu-item>
      <dropdown-menu-item custorm-class="menu-item out" @click="caomei">草莓</dropdown-menu-item>
    </dropdown-menu>
  </div>
 </k-dropdown>
 <k-dropdown trigger="hover">
  <button class="button is-info is-plain">通过hover方式触发</button>
  <div slot="content">
    <dropdown-menu>
      <dropdown-menu-item custorm-class="menu-item" @click="xiangjiao">香蕉</dropdown-menu-item>
      <dropdown-menu-item custorm-class="menu-item" @click="pingguo">苹果</dropdown-menu-item>
      <dropdown-menu-item custorm-class="menu-item out" @click="caomei">草莓</dropdown-menu-item>
    </dropdown-menu>
  </div>
 </k-dropdown>
 <k-dropdown :visible="visible">
  <button class="button is-danger is-plain">控制dropdown显示以及隐藏</button>
  <div slot="content">
    <dropdown-menu>
      <dropdown-menu-item custorm-class="menu-item" @click="xiangjiao">香蕉</dropdown-menu-item>
      <dropdown-menu-item custorm-class="menu-item" @click="pingguo">苹果</dropdown-menu-item>
      <dropdown-menu-item custorm-class="menu-item out" @click="caomei">草莓</dropdown-menu-item>
    </dropdown-menu>
  </div>
 </k-dropdown>
 <button class="button is-primary is-plain" @click="hideDropdown">隐藏Dropdown</button>
</template>
<script>
  export default {
    data () {
      return {
        visible: true
      }
    },
    methods: {
      xiangjiao () {
        alert('香蕉')
      },
      pingguo () {
        alert('苹果')
      },
      caomei () {
        alert('草莓')
      },
      hideDropdown () {
        this.visible = false
      },
      doLogOut () {
        alert('你点击了退出!')
      }
    }
  }
</script>
</div>

::: demo
```html
<template>
 <k-dropdown>
  <button class="button is-success is-plain">通过HOVER方式触发</button>
  <div slot="content">
    <dropdown-menu>
      <dropdown-menu-item custorm-class="menu-item" @click="xiangjiao">香蕉</dropdown-menu-item>
      <dropdown-menu-item custorm-class="menu-item" @click="pingguo">苹果</dropdown-menu-item>
      <dropdown-menu-item custorm-class="menu-item out" @click="caomei">草莓</dropdown-menu-item>
    </dropdown-menu>
  </div>
 </k-dropdown>
 <k-dropdown trigger="hover">
  <button class="button is-info is-plain">通过CLICK方式触发</button>
  <div slot="content">
    <dropdown-menu>
      <dropdown-menu-item custorm-class="menu-item" @click="xiangjiao">香蕉</dropdown-menu-item>
      <dropdown-menu-item custorm-class="menu-item" @click="pingguo">苹果</dropdown-menu-item>
      <dropdown-menu-item custorm-class="menu-item out" @click="caomei">草莓</dropdown-menu-item>
    </dropdown-menu>
  </div>
 </k-dropdown>
 <k-dropdown :visible="visible">
  <button class="button is-danger is-plain">控制dropdown显示以及隐藏</button>
  <div slot="content">
    <dropdown-menu>
      <dropdown-menu-item custorm-class="menu-item" @click="xiangjiao">香蕉</dropdown-menu-item>
      <dropdown-menu-item custorm-class="menu-item" @click="pingguo">苹果</dropdown-menu-item>
      <dropdown-menu-item custorm-class="menu-item out" @click="caomei">草莓</dropdown-menu-item>
    </dropdown-menu>
  </div>
 </k-dropdown>
 <button class="button is-primary is-plain" @click="hideDropdown">隐藏Dropdown</button>
</template>
<script>
  export default {
    data () {
      return {
        visible: true
      }
    },
    methods: {
      xiangjiao () {
        alert('香蕉')
      },
      pingguo () {
        alert('苹果')
      },
      caomei () {
        alert('草莓')
      },
      hideDropdown () {
        this.visible = false
      }
    }
  }
</script>
```
:::

## 路由跳转
<div class="demo-block">
<template>
 <k-dropdown>
  <button class="button is-primary">下拉菜单</button>
  <div slot="content">
    <dropdown-menu>
      <dropdown-menu-item custorm-class="menu-item" to="/badge">下拉菜单1</dropdown-menu-item>
      <dropdown-menu-item custorm-class="menu-item" to="/dropdown">下拉菜单2</dropdown-menu-item>
      <dropdown-menu-item custorm-class="menu-item out" @click="doLogOut">退出</dropdown-menu-item>
    </dropdown-menu>
  </div>
 </k-dropdown>
</template>
</div>

::: demo
```html
<template>
 <k-dropdown>
  <button class="button is-primary">下拉菜单</button>
  <div slot="content">
    <dropdown-menu>
      <dropdown-menu-item custorm-class="menu-item" to="/badge">下拉菜单1</dropdown-menu-item>
      <dropdown-menu-item custorm-class="menu-item" to="/dropdown">下拉菜单2</dropdown-menu-item>
      <dropdown-menu-item custorm-class="menu-item out" @click="doLogOut">退出</dropdown-menu-item>
    </dropdown-menu>
  </div>
 </k-dropdown>
</template>
<script>
  export default {
    methods: {
      doLogOut () {
        alert('你点击了退出!')
      }
    }
  }
</script>
```
:::

## 综合展示
<style>
  .goods {
    overflow: hidden;
    clear: both;
  }
  .goods li{
    list-style:none;
    float: left;
  }
  .goods li span {
    font-size: 14px;
    padding: 5px;
    border: 1px solid red;
    color: red;
    display: block;
    margin:5px 0 0 5px;
    cursor: pointer;
  }
  .goods li span:hover {
    color:#fff;
    background-color: red;
    font-weight: 700;
  }
</style>
<div class="demo-block">
  <k-dropdown :width="500">
    <button class="button is-primary is-plain">选择你喜欢的商品:</button>
    <div slot="content">
      <k-tab>
        <k-tab-content title="游戏">
          <ul class="goods">
            <li><span class="radius3px">魔兽世界</span></li>
            <li><span class="radius3px">英雄联盟LOL</span></li>
            <li><span class="radius3px">圣歌</span></li>
            <li><span class="radius3px">逆战</span></li>
            <li><span class="radius3px">穿越火线</span></li>
            <li><span class="radius3px">逆水寒</span></li>
            <li><span class="radius3px">天涯明月刀</span></li>
            <li><span class="radius3px">刀剑2</span></li>
            <li><span class="radius3px">天谕</span></li>
            <li><span class="radius3px">星际争霸</span></li>
            <li><span class="radius3px">红色警戒</span></li>
            <li><span class="radius3px">武林外传</span></li>
          </ul>
        </k-tab-content>
        <k-tab-content title="动漫周边">
          <ul class="goods">
            <li><span class="radius3px">手办</span></li>
            <li><span class="radius3px">高达模型</span></li>
            <li><span class="radius3px">秦时明月</span></li>
            <li><span class="radius3px">大圣归来</span></li>
            <li><span class="radius3px">海贼王</span></li>
            <li><span class="radius3px">圣斗士</span></li>
            <li><span class="radius3px">火影忍者</span></li>
            <li><span class="radius3px">变形金刚</span></li>
            <li><span class="radius3px">银魂</span></li>
            <li><span class="radius3px">进击的巨人</span></li>
            <li><span class="radius3px">喜洋洋与灰太狼</span></li>
            <li><span class="radius3px">钢铁侠</span></li>
          </ul>
        </k-tab-content>
        <k-tab-content title="热门影视周边">
          <ul class="goods">
            <li><span class="radius3px">我不是药神</span></li>
            <li><span class="radius3px">复仇者联盟</span></li>
            <li><span class="radius3px">暗黑者</span></li>
            <li><span class="radius3px">无间道</span></li>
            <li><span class="radius3px">龙门客栈</span></li>
            <li><span class="radius3px">天剑绝刀</span></li>
            <li><span class="radius3px">白夜追凶</span></li>
            <li><span class="radius3px">刀剑笑</span></li>
            <li><span class="radius3px">笑傲江湖</span></li>
            <li><span class="radius3px">其他...</span></li>
          </ul>
        </k-tab-content>
      </k-tab>
    </div>
 </k-dropdown>
</div>