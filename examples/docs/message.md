<style></style>
# Message 提示信息
----
<p>常用于主动操作后的反馈提示。与Notification的区别是后者更多用于系统级通知的被动提醒</p>

### 基础使用
<div class="demo-block">
 <template>
    <button class="button is-primary" @click="doIt">3秒后消失</button>
    <button class="button is-primary" @click="neverHide">永不消失的Message</button>
    <button class="button is-primary" @click="withIcon">带有图标的Message</button>
    <button class="button is-primary" @click="onClose">关闭回调</button>
 </template>
 <script>
     export default {
         methods: {
             onClose () {
                 this.$KMessage({
                     content: '猜猜我是谁',
                     onClose: function () {
                       alert('阿西吧~')
                     }
                 })
             },
             doIt () {
                 this.$KMessage({
                     content: '猜猜我是谁'
                 })
             },
             neverHide () {
                this.$KMessage({
                     time: 0,
                     content: '不点关闭我就永远在这儿！'
                 })
             },
             withIcon () {
                 this.$KMessage({
                     allowUseHTML: true,
                     content: '<i class="k-icon">&#xe608;</i> <span style="font-size: 16px;">文字旁边有个图标!</span>'
                 })
             },
             primary () {
                 this.$KMessage({
                     type: 'primary',
                     content: '优先状态的信息'
                 })
             },
             success () {
                 this.$KMessage({
                     type: 'success',
                     allowUseHTML: true,
                     content: '<i class="k-icon">&#xe608;</i> <span style="font-size: 16px;">成功状态的信息!</span>'
                 })
             },
             warning () {
                 this.$KMessage({
                     type: 'warning',
                     content: '警告状态的信息'
                 })
             },
             danger () {
                 this.$KMessage({
                     type: 'danger',
                     content: '危险状态的信息'
                 })
             },
             info () {
                 this.$KMessage({
                     type: 'info',
                     content: '信息状态的信息'
                 })
             }
         }
     }
 </script>
</div>

::: demo
```html
<template>
    <button class="button is-primary" @click="doIt">3秒后消失</button>
    <button class="button is-primary" @click="withIcon">带有图标的Message</button>
 </template>
 <script>
     export default {
         methods: {
             doIt () {
                 this.$KMessage({
                     background: 'red',
                     content: '猜猜我是谁'
                 })
             },
             withIcon () {
                 this.$KMessage({
                     allowUseHTML: true,
                     content: '<i class="k-icon">&#xe608;</i> <span style="font-size: 16px;">文字旁边有个图标!</span>'
                 })
             },
             primary () {
                 this.$KMessage({
                     type: 'primary',
                     content: '优先状态的信息'
                 })
             },
             success () {
                 this.$KMessage({
                     type: 'success',
                     allowUseHTML: true,
                     content: '<i class="k-icon">&#xe608;</i> <span style="font-size: 16px;">成功状态的信息!</span>'
                 })
             },
             warning () {
                 this.$KMessage({
                     type: 'warning',
                     content: '警告状态的信息'
                 })
             },
             danger () {
                 this.$KMessage({
                     type: 'danger',
                     content: '危险状态的信息'
                 })
             },
             info () {
                 this.$KMessage({
                     type: 'info',
                     content: '信息状态的信息'
                 })
             }
         }
     }
 </script>
```
:::

### 不同状态
用来显示「成功、警告、消息、错误」类的操作反馈。

<div class="demo-block">
    <button class="button is-success" @click="success">成功</button>
    <button class="button is-warning" @click="warning">警告</button>
    <button class="button is-danger" @click="danger">危险</button>
    <button class="button is-info" @click="info">信息</button>
</div>

::: demo
```html
    <button class="button is-success" @click="success">成功</button>
    <button class="button is-warning" @click="warning">警告</button>
    <button class="button is-danger" @click="danger">危险</button>
    <button class="button is-info" @click="info">信息</button>
```
:::

## 属性
| 成员      | 说明                                 | 类型      | 可选值       | 默认值   |
|---------- |------------------------------------ |---------- |------------- |-------- |
|time      |延时关闭 单位毫秒 |	Number   |	无           |	3000       |
|content   |内容            | String   | 无            |	无        |
|type      |类型,可选值为```success``` ```warning``` ```danger``` ```info``` |	String   |	无           |	无       |
|allowUseHTML	      | 是否允许注入HTML                                |	Boolean    | 无|	false |
|onClose	      | Message关闭时的回调                                |	Function    | 无|	none |