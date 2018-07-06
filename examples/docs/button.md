<style>
    .marginTop10 {
      margin-top: 10px;
    }
</style>
# Button 按钮
----
<k-info mode="flat" title="写在前面">
  <p>个人认为将Button元素给Vue化是简单的事情复杂化</p>
  <p>还是直接提供样式来美化按钮来的直接一点</p>
</k-info>

## 基本按钮

<div class="demo-block">
 <button class="button">按钮</button>
 <button class="button is-primary">按钮</button>
 <button class="button is-info">按钮</button>
 <button class="button is-success">按钮</button>
 <button class="button is-warning">按钮</button>
 <button class="button is-danger">按钮</button>
</div>

::: demo
```html

 <button class="button">按钮</button>
 <button class="button is-primary">按钮</button>
 <button class="button is-info">按钮</button>
 <button class="button is-success">按钮</button>
 <button class="button is-warning">按钮</button>
 <button class="button is-danger">按钮</button>

```
:::

## 各种状态下的按钮

<div class="demo-block">
 <h3>Loading状态下的按钮</h3>
 <button class="button is-loading">Loading</button>
 <button class="button is-primary is-loading">Loading</button>
 <button class="button is-info is-loading">Loading</button>
 <button class="button is-success is-loading">Loading</button>
 <button class="button is-warning is-loading">Loading</button>
 <button class="button is-danger is-loading">Loading</button>
 <h3>活动状态下的按钮</h3>
 <button class="button is-active">活动</button>
 <button class="button is-primary is-active">活动</button>
 <button class="button is-info is-active">活动</button>
 <button class="button is-success is-active">活动</button>
 <button class="button is-warning is-active">活动</button>
 <button class="button is-danger is-active">活动</button>
 <h3>禁用状态下的按钮</h3>
 <button class="button" disabled>禁用</button>
 <button class="button is-primary" disabled>禁用</button>
 <button class="button is-info" disabled>禁用</button>
 <button class="button is-success" disabled>禁用</button>
 <button class="button is-warning" disabled>禁用</button>
 <button class="button is-danger" disabled>禁用</button>
</div>

::: demo
```html

 <h3>Loading状态下的按钮</h3>
 <button class="button is-loading">Loading</button>
 <button class="button is-primary is-loading">Loading</button>
 <button class="button is-info is-loading">Loading</button>
 <button class="button is-success is-loading">Loading</button>
 <button class="button is-warning is-loading">Loading</button>
 <button class="button is-danger is-loading">Loading</button>
 <h3>活动状态下的按钮</h3>
 <button class="button is-active">活动</button>
 <button class="button is-primary is-active">活动</button>
 <button class="button is-info is-active">活动</button>
 <button class="button is-success is-active">活动</button>
 <button class="button is-warning is-active">活动</button>
 <button class="button is-danger is-active">活动</button>
 <h3>禁用状态下的按钮</h3>
 <button class="button" disabled>禁用</button>
 <button class="button is-primary" disabled>禁用</button>
 <button class="button is-info" disabled>禁用</button>
 <button class="button is-success" disabled>禁用</button>
 <button class="button is-warning" disabled>禁用</button>
 <button class="button is-danger" disabled>禁用</button>

```
:::

## 带有边框的按钮
<div class="demo-block">
  <button class="button is-primary is-border">Primary</button>
  <button class="button is-success is-border">Success</button>
  <button class="button is-warning is-border">Warning</button>
  <button class="button is-danger is-border">Danger</button>
  <button class="button is-info is-border">Info</button>
</div>

::: demo

```html

  <button class="button is-primary is-border">Primary</button>
  <button class="button is-success is-border">Success</button>
  <button class="button is-warning is-border">Warning</button>
  <button class="button is-danger is-border">Danger</button>
  <button class="button is-info is-border">Info</button>

```
:::


## 不同尺寸的按钮
可以设置不同的按钮尺寸
<div class="demo-block">
  <button class="button is-large">Large</button>
  <button class="button is-medium">Medium</button>
  <button class="button">Normal</button>
  <button class="button is-small">Small</button>
</div>

::: demo

```html

  <button class="button is-large">Large</button>
  <button class="button is-medium">Medium</button>
  <button class="button">Normal</button>
  <button class="button is-small">Small</button>

```
:::

## 按钮组
<div class="demo-block">
  <div class="k-button-group">
    <button class="button">Left</button>
    <button class="button">Center</button>
    <button class="button">Right</button>
  </div>
  <div class="k-button-group marginTop10">
    <button class="button is-primary">Left</button>
    <button class="button is-primary">Center</button>
    <button class="button is-primary">Right</button>
  </div>
  <div class="k-button-group marginTop10">
    <button class="button is-success">Left</button>
    <button class="button is-success">Center</button>
    <button class="button is-success">Right</button>
  </div>
  <div class="k-button-group marginTop10">
    <button class="button is-danger">Left</button>
    <button class="button is-danger">Center</button>
    <button class="button is-danger">Right</button>
  </div>
  <div class="k-button-group marginTop10">
    <button class="button is-warning">Left</button>
    <button class="button is-warning">Center</button>
    <button class="button is-warning">Right</button>
  </div>
  <div class="k-button-group marginTop10">
    <button class="button is-info">Left</button>
    <button class="button is-info">Center</button>
    <button class="button is-info">Right</button>
  </div>
</div>

::: demo

```html

  <div class="k-button-group">
    <button class="button">Left</button>
    <button class="button">Center</button>
    <button class="button">Right</button>
  </div>
  <div class="k-button-group marginTop10">
    <button class="button is-primary">Left</button>
    <button class="button is-primary">Center</button>
    <button class="button is-primary">Right</button>
  </div>
  <div class="k-button-group marginTop10">
    <button class="button is-success">Left</button>
    <button class="button is-success">Center</button>
    <button class="button is-success">Right</button>
  </div>
  <div class="k-button-group marginTop10">
    <button class="button is-danger">Left</button>
    <button class="button is-danger">Center</button>
    <button class="button is-danger">Right</button>
  </div>
  <div class="k-button-group marginTop10">
    <button class="button is-warning">Left</button>
    <button class="button is-warning">Center</button>
    <button class="button is-warning">Right</button>
  </div>
  <div class="k-button-group marginTop10">
    <button class="button is-info">Left</button>
    <button class="button is-info">Center</button>
    <button class="button is-info">Right</button>
  </div>

```
:::