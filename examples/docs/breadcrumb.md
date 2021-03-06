<style>
    .temp-list {
        width: 250px;
        border: 1px solid #ddd;
        padding: 0;
    }
    .temp-list li {
        list-style: none;
        padding: 5px;
        border-bottom: 1px solid #ddd;
    }
    .pullRight {
        float: right;
    }
</style>
# BreadCrumb 面包屑导航
----
### 概述
面包屑导航

## 基础使用
<div class="demo-block">
 <k-breadcrumb>
    <k-breadcrumb-item to="/badge">首页</k-breadcrumb-item>
    <k-breadcrumb-item>平台管理</k-breadcrumb-item>
    <k-breadcrumb-item>角色管理</k-breadcrumb-item>
 </k-breadcrumb>
</div>

::: demo
```html

<k-breadcrumb>
   <k-breadcrumb-item>首页</k-breadcrumb-item>
   <k-breadcrumb-item>平台管理</k-breadcrumb-item>
   <k-breadcrumb-item>角色管理</k-breadcrumb-item>
</k-breadcrumb>

```
:::


## 路由跳转
可以通过给```k-breadcrumb-item```组件设置to属性，来设置路由跳转
::: demo

```html

<k-breadcrumb>
   <k-breadcrumb-item to="/home">首页</k-breadcrumb-item>
   <k-breadcrumb-item>平台管理</k-breadcrumb-item>
   <k-breadcrumb-item to="/badge">角色管理</k-breadcrumb-item>
 </k-breadcrumb>

```

:::


## 自定义间隔符
<div class="demo-block">
<k-breadcrumb separator="<span style='color: red;'>></span>">
   <k-breadcrumb-item>首页</k-breadcrumb-item>
   <k-breadcrumb-item to="/badge">平台管理</k-breadcrumb-item>
   <k-breadcrumb-item to="/badge">角色管理</k-breadcrumb-item>
 </k-breadcrumb>
</div>

::: demo
``` html
<k-breadcrumb separator="<span style='color: red;'>></span>">
   <k-breadcrumb-item>首页</k-breadcrumb-item>
   <k-breadcrumb-item to="/badge">平台管理</k-breadcrumb-item>
   <k-breadcrumb-item to="/badge">角色管理</k-breadcrumb-item>
 </k-breadcrumb>

```
:::

## 属性
### Breadcrumb
| 成员      | 说明                                 | 类型      | 可选值       | 默认值   |
|---------- |------------------------------------ |---------- |------------- |-------- |
|separator      |分隔符 |	String   |	无           |	/       |

### Breadcrumb-item
| 成员      | 说明                                 | 类型      | 可选值       | 默认值   |
|---------- |------------------------------------ |---------- |------------- |-------- |
|to      |路由跳转 |	String   |	无           |	none       |