<style></style>
# Message 提示信息
----
<p>常用于主动操作后的反馈提示。与Notification的区别是后者更多用于系统级通知的被动提醒</p>

### 基础使用
<div class="demo-block">
 <template>
    <k-button @click="doIt">戳我啊~3秒后消失</k-button>
 </template>
 <script>
     export default {
         methods: {
             doIt () {
                 this.$KMessage({
                     background: 'red'
                 })
             }
         }
     }
 </script>
</div>

::: demo
```html
<template>
    <k-button @click="doIt">戳我啊~3秒后消失</k-button>
 </template>
 <script>
     export default {
         methods: {
             doIt () {
                 this.$KMessage({
                     background: 'red'
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
 <template>
    <k-button @click="hahahah">成功</k-button>
    <k-button @click="hahahah">警告</k-button>
    <k-button @click="hahahah">消息</k-button>
    <k-button @click="hahahah">错误</k-button>
 </template>
 <script>
     export default {
         name: 'demo2',
         methods: {
             hahahah () {
                 this.$KMessage({
                     background: 'red'
                 })
             }
         }
     }
 </script>
</div>

::: demo
```html
<template>
    <k-button @click="doIt">戳我啊~3秒后消失</k-button>
 </template>
 <script>
     export default {
         methods: {
             doIt () {
                 this.$KMessage({
                     background: 'red'
                 })
             }
         }
     }
 </script>
```
:::
