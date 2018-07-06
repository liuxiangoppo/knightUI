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
# Badge 徽章
----
### 概述
主要为了退出高亮数据,以及需要使用户需要额外注意的数据。
### 基础使用
<div class="demo-block">
 当前消费金额<k-badge>20</k-badge>充值金额<k-badge>100</k-badge>
</div>

::: demo
```html

当前消费金额<k-badge>20</k-badge>充值金额<k-badge>100</k-badge>

```
:::

### 使用预先定义的样式
组件库预先为```K-badge```组件定义了几种样式,可以方便用户直接使用。

<div class="demo-block">
  <ul class="temp-list">
    <li>普通<k-badge class-name="k-badge__normal pullRight">20</k-badge></li>
    <li>绿色<k-badge class-name="k-badge__green pullRight">100</k-badge></li>
    <li>黄色<k-badge class-name="k-badge__yellow pullRight">30</k-badge></li>
    <li>橙色<k-badge class-name="k-badge__orange pullRight">30</k-badge></li>
  </ul>
</div>

::: demo

```html

<ul class="temp-list">
  <li>普通<k-badge class-name="k-badge__normal pullRight">20</k-badge></li>
  <li>绿色<k-badge class-name="k-badge__green pullRight">100</k-badge></li>
  <li>黄色<k-badge class-name="k-badge__yellow pullRight">30</k-badge></li>
  <li>橙色<k-badge class-name="k-badge__orange pullRight">30</k-badge></li>
</ul>

```

:::
