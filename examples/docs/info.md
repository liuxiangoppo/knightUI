<style></style>
# Info 信息盒子
----
### 基础使用
<div class="demo-block">
 <template>
    <k-info title="七里香" mode="flat">
        <p>秋刀鱼的滋味 猫跟你都想了解</p>
    </k-info>
    <k-info title="发如雪" mode="success">
        <p>你发如雪 凄美了离别 我焚香感动了谁~</p>
    </k-info>
    <k-info title="我的地盘" mode="warning">
        <p>在我地盘这儿 你就得听我嘚儿~</p>
    </k-info>
    <k-info title="向天再借五百年" mode="danger">
        <p>我真的还想再活五百年~</p>
    </k-info>
    <k-info title="悟空" mode="info">
        <p>我要 这铁棒有何用 ~~  我要~~ 这金箍又如何~</p>
    </k-info>
 </template>
</div>

::: demo
```html
<template>
    <k-info title="七里香" mode="flat">
        <p>秋刀鱼的滋味 猫跟你都想了解</p>
    </k-info>
    <k-info title="发如雪" mode="success">
        <p>你发如雪 凄美了离别 我焚香感动了谁~</p>
    </k-info>
    <k-info title="我的地盘" mode="warning">
        <p>在我地盘这儿 你就得听我嘚儿~</p>
    </k-info>
    <k-info title="向天再借五百年" mode="danger">
        <p>我真的还想再活五百年~</p>
    </k-info>
    <k-info title="悟空" mode="info">
        <p>我要 这铁棒有何用 ~~  我要~~ 这金箍又如何~</p>
    </k-info>
 </template>
```
:::
### 不使用标题
<div class="demo-block">
 <template>
    <k-info mode="flat">
        <p>秋刀鱼的滋味 猫跟你都想了解</p>
    </k-info>
    <k-info mode="success">
        <p>你发如雪 凄美了离别 我焚香感动了谁~</p>
    </k-info>
    <k-info mode="warning">
        <p>在我地盘这儿 你就得听我嘚儿~</p>
    </k-info>
    <k-info mode="danger">
        <p>我真的还想再活五百年~</p>
    </k-info>
    <k-info mode="info">
        <p>我要 这铁棒有何用 ~~  我要~~ 这金箍又如何~</p>
    </k-info>
 </template>
</div>

::: demo
```html
<template>
    <k-info mode="flat">
        <p>秋刀鱼的滋味 猫跟你都想了解</p>
    </k-info>
    <k-info mode="success">
        <p>你发如雪 凄美了离别 我焚香感动了谁~</p>
    </k-info>
    <k-info mode="warning">
        <p>在我地盘这儿 你就得听我嘚儿~</p>
    </k-info>
    <k-info mode="danger">
        <p>我真的还想再活五百年~</p>
    </k-info>
    <k-info mode="info">
        <p>我要 这铁棒有何用 ~~  我要~~ 这金箍又如何~</p>
    </k-info>
 </template>
```
:::

### 设置圆角
<div class="demo-block">
 <template>
    <k-info mode="flat" :radius="3">
        <p>秋刀鱼的滋味 猫跟你都想了解</p>
    </k-info>
    <k-info mode="success" :radius="3">
        <p>你发如雪 凄美了离别 我焚香感动了谁~</p>
    </k-info>
    <k-info mode="warning" :radius="3">
        <p>在我地盘这儿 你就得听我嘚儿~</p>
    </k-info>
    <k-info mode="danger" :radius="3">
        <p>我真的还想再活五百年~</p>
    </k-info>
    <k-info mode="info" :radius="3">
        <p>我要 这铁棒有何用 ~~  我要~~ 这金箍又如何~</p>
    </k-info>
 </template>
</div>

::: demo
```html
<template>
    <k-info mode="flat" :radius="3">
        <p>秋刀鱼的滋味 猫跟你都想了解</p>
    </k-info>
    <k-info mode="success" :radius="3">
        <p>你发如雪 凄美了离别 我焚香感动了谁~</p>
    </k-info>
    <k-info mode="warning" :radius="3">
        <p>在我地盘这儿 你就得听我嘚儿~</p>
    </k-info>
    <k-info mode="danger" :radius="3">
        <p>我真的还想再活五百年~</p>
    </k-info>
    <k-info mode="info" :radius="3">
        <p>我要 这铁棒有何用 ~~  我要~~ 这金箍又如何~</p>
    </k-info>
 </template>
```
:::