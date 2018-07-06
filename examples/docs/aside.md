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
# Aside 侧边模态框
----
## 基础使用
<div class="demo-block">
 <template>
    <k-aside :is-show="isShow" title="左侧侧边栏" @close="isShow=false" :placement="placement">
        <h3>嗨！看我</h3>
        <p>我在左侧偷偷的看着你！</p>
    </k-aside>
    <button @click="toggleLeft" class="button is-primary">左侧模态框</button>
    <button @click="toggleRight" class="button is-primary">右侧模态框</button>   
 </template>
 <script>
     export default {
         data () {
             return  {
                 isShow: false,
                 placement: 'left'
             }
         },
         methods: {
             toggleLeft () {
                 this.isShow = !this.isShow
                 this.placement = 'left'
             },
             toggleRight () {
                 this.isShow = !this.isShow
                 this.placement = 'right'
             }
         }
     }
 </script>
</div>

::: demo
```html

<template>
    <k-aside :is-show="isShow" title="左侧侧边栏" @close="isShow=false" :placement="placement">
        <h3>嗨！看我</h3>
        <p>我在左侧偷偷的看着你！</p>
    </k-aside>
    <button @click="toggleLeft" class="button is-primary">左侧模态框</button>
    <button @click="toggleRight" class="button is-primary">右侧模态框</button>   
 </template>
 <script>
     export default {
         data () {
             return  {
                 isShow: false,
                 placement: 'left'
             }
         },
         methods: {
             toggleLeft () {
                 this.isShow = !this.isShow
                 this.placement = 'left'
             },
             toggleRight () {
                 this.isShow = !this.isShow
                 this.placement = 'right'
             }
         }
     }
 </script>

```
:::

### 属性

Aside是基于modal的组件，所以它拥有modal所有的特性，具体的参数可参考modal的文档，唯一不同的是Aside通过```placement```设置位置

| 成员      | 说明                                 | 类型      | 可选值       | 默认值   |
|---------- |------------------------------------ |---------- |------------- |-------- |
|placement      |位置 |	String   |	left/right           |	left       |
|width	      | 宽度                                |	Number    | 无|	640 |