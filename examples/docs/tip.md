<style></style>
# Tips 文字提示
----
### 基础使用
<k-info title="Message组件提供两种类型:" mode="flat">
    <p>一种是偏素的扁平化风格</p>
    <p>另一种是偏艳的类平台管理风格的样式</p>
</k-info>
<div class="demo-block">
 <template>
    <k-button @click="showTop">上</k-button>
    <k-button @click="showRight">右</k-button>
    <k-button @click="showBottom">下</k-button>
    <k-button @click="showLeft">左</k-button>
 </template>
 <script>
     export default {
         data: () => {
             return {
                 message: '<p>门前大桥下游过一群鸭~</p><p>快来快来数一数~~</p><p>二四六七八</p>'
             }
         },
         methods: {
             showTop (e) {
                 this.$KTip(e, {
                    content: '向上方向的Tip',
                    allowUseHTML: true,
                    direction: 'top',
                    background: '#000',
                    color: '#fff',
                    time: 3000000
                 })
             },
             showLeft (e) {
                 this.$KTip(e, {
                    content: '向左方向的Tip',
                    direction: 'left',
                    background: '#000',
                    color: '#fff',
                    time: 3000
                 })
             },
             showRight (e) {
                 this.$KTip(e, {
                    content: '向右方向的Tip',
                    direction: 'right',
                    background: '#000',
                    color: '#fff',
                    time: 3000
                 })
             },
             showBottom (e) {
                 this.$KTip(e, {
                    content: '向下方向的Tip',
                    direction: 'bottom',
                    background: '#000',
                    color: '#fff',
                    time: 3000
                 })
             }
         }
     }
 </script>
</div>

::: demo
```html
<template>
    <k-button @click="showTop">上</k-button>
    <k-button @click="showRight">右</k-button>
    <k-button @click="showBottom">下</k-button>
    <k-button @click="showLeft">左</k-button>
 </template>
 <script>
     export default {
         methods: {
             showTop (e) {
                 this.$KTip(e, {
                    content: '向上方向的Tip',
                    direction: 'top',
                    background: '#000',
                    color: '#fff',
                    time: 3000000
                 })
             },
             showLeft (e) {
                 this.$KTip(e, {
                    content: '向左方向的Tip',
                    direction: 'left',
                    background: '#000',
                    color: '#fff',
                    time: 3000
                 })
             },
             showRight (e) {
                 this.$KTip(e, {
                    content: '向右方向的Tip',
                    direction: 'right',
                    background: '#000',
                    color: '#fff',
                    time: 3000
                 })
             },
             showBottom (e) {
                 this.$KTip(e, {
                    content: '向下方向的Tip',
                    direction: 'bottom',
                    background: '#000',
                    color: '#fff',
                    time: 3000
                 })
             }
         }
     }
 </script>
```
:::
