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
# DropDown 下拉菜单
----
## 基本展示

<div class="demo-block">
<template>
 <k-dropdown>
  <button class="button is-primary">下拉菜单</button>
  <div slot="content">
    <dropdown-menu>
      <dropdown-menu-item custorm-class="menu-item" to="/badge">徽章组件</dropdown-menu-item>
      <dropdown-menu-item custorm-class="menu-item" to="/alert">警告框组件</dropdown-menu-item>
      <dropdown-menu-item custorm-class="menu-item" to="/breadcrumb">面包屑导航组件</dropdown-menu-item>
    </dropdown-menu>
  </div>
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
 <k-dropdown>
  <button class="button is-primary">下拉菜单</button>
  <div slot="content">
    <dropdown-menu>
      <dropdown-menu-item custorm-class="menu-item" to="/badge">徽章组件</dropdown-menu-item>
      <dropdown-menu-item custorm-class="menu-item" to="/alert">警告框组件</dropdown-menu-item>
      <dropdown-menu-item custorm-class="menu-item" to="/breadcrumb">面包屑导航组件</dropdown-menu-item>
    </dropdown-menu>
  </div>
 </k-dropdown>
</template>

```
:::

## 事件响应
<div class="demo-block">
<template>
 <k-dropdown>
  <button class="button is-primary">下拉菜单</button>
  <div slot="content">
    <dropdown-menu>
      <dropdown-menu-item custorm-class="menu-item" @click="xiangjiao">香蕉</dropdown-menu-item>
      <dropdown-menu-item custorm-class="menu-item" @click="pingguo">苹果</dropdown-menu-item>
      <dropdown-menu-item custorm-class="menu-item out" @click="caomei">草莓</dropdown-menu-item>
    </dropdown-menu>
  </div>
 </k-dropdown>
</template>
<script>
  export default {
    methods: {
      xiangjiao () {
        alert('香蕉')
      },
      pingguo () {
        alert('苹果')
      },
      caomei () {
        alert('草莓')
      }
    }
  }
</script>
</div>

::: demo
```html
/*示例代码*/
```
:::

## 指定指令
<div class="demo-block">
<template>
 <k-dropdown>
  <button class="button is-primary">下拉菜单</button>
  <div slot="content">
    <dropdown-menu>
      <dropdown-menu-item custorm-class="menu-item" to="/badge">下拉菜单1</dropdown-menu-item>
      <dropdown-menu-item custorm-class="menu-item">下拉菜单2</dropdown-menu-item>
      <dropdown-menu-item custorm-class="menu-item out">退出</dropdown-menu-item>
    </dropdown-menu>
  </div>
 </k-dropdown>
</template>
<script>
  export default {
    methods: {
      demo () {
        alert('.')
      }
    }
  }
</script>
</div>

::: demo
```html
/*示例代码*/
```
:::