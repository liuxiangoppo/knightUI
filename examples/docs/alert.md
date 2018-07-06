<style>
    .marginTop10 {
        margin-top: 10px;
    }
</style>
# Alert 警告框
----
## 概述
主要用于展现重要的信息

## 基础使用
<div class="demo-block">
<k-alert type="warning">
    <span>警告状态提示</span>
</k-alert>
<k-alert type="success" class="marginTop10">
    <span>成功状态提示</span>
</k-alert>
<k-alert type="danger" class="marginTop10">
    <span>危险状态提示</span>
</k-alert>
<k-alert type="info" class="marginTop10">
    <span>普通信息提示</span>
</k-alert>
</div>

::: demo
```html

<k-alert type="warning">
    <span>警告状态提示</span>
</k-alert>
<k-alert type="success" class="marginTop10">
    <span>成功状态提示</span>
</k-alert>
<k-alert type="danger" class="marginTop10">
    <span>危险状态提示</span>
</k-alert>
<k-alert type="info" class="marginTop10">
    <span>普通信息提示</span>
</k-alert>

```
:::

## 回调函数
警告框关闭之后的操作

<div class="demo-block">
<template>
    <k-alert type="danger" :on-close="shutUp">
        <span>有本事你就关掉我~</span>
    </k-alert>
</template>
<script>
    export default {
      methods: {
        shutUp () {
          this.$KNotify({
            title: '阿西吧',
            message: '你真关掉了/捂脸'
          })
        }
      }
    }
</script>
</div>

::: demo
```html

<k-alert type="warning">
    <span>警告状态提示</span>
</k-alert>
<k-alert type="success" class="marginTop10">
    <span>成功状态提示</span>
</k-alert>
<k-alert type="danger" class="marginTop10">
    <span>危险状态提示</span>
</k-alert>
<k-alert type="info" class="marginTop10">
    <span>普通信息提示</span>
</k-alert>

```
:::