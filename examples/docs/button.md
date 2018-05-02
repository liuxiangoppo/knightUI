<style>
    
</style>
# Button 按钮
----
### 概述
按钮组件
### 默认状态下的按钮

<div class="demo-block">
 <k-button>按钮</k-button>
 <k-button mode="primary">按钮</k-button>
 <k-button mode="success">按钮</k-button>
 <k-button mode="info">按钮</k-button>
 <k-button mode="warning">按钮</k-button>
 <k-button mode="danger">按钮</k-button>
</div>

::: demo
```html

 <k-button>按钮</k-button>
 <k-button mode="primary">按钮</k-button>
 <k-button mode="success">按钮</k-button>
 <k-button mode="info">按钮</k-button>
 <k-button mode="warning">按钮</k-button>
 <k-button mode="danger">按钮</k-button>

```
:::

### 带有边框的按钮

<div class="demo-block">
 <k-button>按钮</k-button>
 <k-button mode="primary" :outLined="true">按钮</k-button>
 <k-button mode="success" :outLined="true">按钮</k-button>
 <k-button mode="info" :outLined="true">按钮</k-button>
 <k-button mode="warning" :outLined="true">按钮</k-button>
 <k-button mode="danger" :outLined="true">按钮</k-button>
</div>

::: demo
```html

 <k-button>按钮</k-button>
 <k-button mode="primary" :outLined="true">按钮</k-button>
 <k-button mode="success" :outLined="true">按钮</k-button>
 <k-button mode="info" :outLined="true">按钮</k-button>
 <k-button mode="warning" :outLined="true">按钮</k-button>
 <k-button mode="danger" :outLined="true">按钮</k-button>

```
:::

### 链接样式的按钮
<div class="demo-block">
  <k-button mode="text">
  <k-icon type="icon-refresh"></k-icon>
  我是按钮
  </k-button>
</div>

::: demo
```html

 <k-button mode="text">
  <k-icon type="icon-refresh"></k-icon>
  <span>我是按钮</span>
  </k-button>

```
:::

### 为按钮设置圆角
预先设置了几种圆角```0```、```3```、```5```、```7```、```10```、```circle```

<div class="demo-block">
  <k-button radius="0" mode="primary">按钮</k-button>
  <k-button radius="3" mode="success">按钮</k-button>
  <k-button radius="5" mode="info">按钮</k-button>
  <k-button radius="7" mode="warning">按钮</k-button>
  <k-button radius="10" mode="danger">按钮</k-button>
  <k-button radius="circle" mode="danger" disabled>按钮</k-button>
</div>

::: demo

```html

  <k-button radius="0" mode="primary">按钮</k-button>
  <k-button radius="3" mode="success">按钮</k-button>
  <k-button radius="5" mode="info">按钮</k-button>
  <k-button radius="7" mode="warning">按钮</k-button>
  <k-button radius="10" mode="danger">按钮</k-button>
  <k-button radius="circle" mode="danger">按钮</k-button>

```
:::

### 不同尺寸的按钮
可以设置不同的按钮尺寸
<div class="demo-block">
  <k-button radius="3" sizing="large">大尺寸按钮</k-button>
  <k-button radius="3" sizing="normal">一般按钮</k-button>
  <k-button radius="3" sizing="small">小尺寸按钮</k-button>
  <k-button radius="3" sizing="extraSmall">极小按钮</k-button>
  <k-button radius="3" sizing="block">块状按钮</k-button>
</div>

::: demo

```html

  <k-button radius="3" sizing="large">大尺寸按钮</k-button>
  <k-button radius="3" sizing="normal">一般按钮</k-button>
  <k-button radius="3" sizing="small">小尺寸按钮</k-button>
  <k-button radius="3" sizing="extraSmall">极小按钮</k-button>

```
:::

### 带图标的按钮
<div class="demo-block">
  <k-button radius="circle" mode="primary">
    <k-icon type="icon-add" :size="13"></k-icon>
    增加
  </k-button>
  <k-button radius="circle" mode="danger">
    <k-icon type="icon-delete" :size="13"></k-icon>
    删除
  </k-button>
  <k-button radius="circle" mode="warning">
    <k-icon type="icon-edit" :size="13"></k-icon>
    修改
  </k-button>
  <k-button radius="circle" mode="info">
    <k-icon type="icon-search" :size="13"></k-icon>
    查询
  </k-button>
  <k-button radius="circle" mode="success">
    <k-icon type="icon-refresh" :size="13"></k-icon>
    刷新
  </k-button>
</div>

::: demo

```html
<k-button radius="circle" mode="primary">
    <k-icon type="icon-add" :size="13"></k-icon>
    增加
  </k-button>
  <k-button radius="circle" mode="danger">
    <k-icon type="icon-delete" :size="13"></k-icon>
    删除
  </k-button>
  <k-button radius="circle" mode="warning">
    <k-icon type="icon-edit" :size="13"></k-icon>
    修改
  </k-button>
  <k-button radius="circle" mode="info">
    <k-icon type="icon-search" :size="13"></k-icon>
    查询
  </k-button>
  <k-button radius="circle" mode="success">
    <k-icon type="icon-refresh" :size="13"></k-icon>
    刷新
  </k-button>
```
:::

### 禁用按钮
<div class="demo-block">
  <k-button radius="3" sizing="normal" disabled>按钮被禁用</k-button>
</div>

::: demo

```html

  <k-button radius="3" sizing="normal" disabled>按钮被禁用</k-button>

```
:::

### 按钮组
<div class="demo-block">
  <k-button-group>
    <k-button mode="success">
      <k-icon type="icon-refresh" :size="12"></k-icon>
      按钮
    </k-button>
    <k-button mode="success">按钮</k-button>
    <k-button mode="success">按钮</k-button>
  </k-button-group>
  <k-button-group>
    <k-button mode="info">按钮</k-button>
    <k-button mode="info">按钮</k-button>
    <k-button mode="info">按钮</k-button>
  </k-button-group>
  <k-button-group>
    <k-button mode="primary">按钮</k-button>
    <k-button mode="primary">按钮</k-button>
    <k-button mode="primary">按钮</k-button>
  </k-button-group>
</div>

::: demo

```html

  <k-button-group>
    <k-button mode="success">
      <k-icon type="icon-refresh" :size="12"></k-icon>
      按钮
    </k-button>
    <k-button mode="success">按钮</k-button>
    <k-button mode="success">按钮</k-button>
  </k-button-group>
  <k-button-group>
    <k-button mode="info">按钮</k-button>
    <k-button mode="info">按钮</k-button>
    <k-button mode="info">按钮</k-button>
  </k-button-group>
  <k-button-group>
    <k-button mode="primary">按钮</k-button>
    <k-button mode="primary">按钮</k-button>
    <k-button mode="primary">按钮</k-button>
  </k-button-group>

```
:::