<style></style>
# Tab 选项卡面板
----
分隔内容上有关联但属于不同类别的数据集合。
## 基础使用
<div class="demo-block">
 <template>
    <k-tab>
        <k-tab-content title="系统管理">系统管理内容</k-tab-content>
        <k-tab-content title="停车订单">停车订单内容</k-tab-content>
        <k-tab-content title="平台管理">平台管理内容</k-tab-content>
    </k-tab>
 </template>
</div>

::: demo
```html
 <template>
    <k-tab>
        <k-tab-content title="系统管理">系统管理内容</k-tab-content>
        <k-tab-content title="停车订单">停车订单内容</k-tab-content>
        <k-tab-content title="平台管理">平台管理内容</k-tab-content>
    </k-tab>
 </template>
```
:::

## 通过索引来设置默认显示内容
<div class="demo-block">
 <k-tab :active-index="1">
    <k-tab-content title="系统管理">系统管理内容</k-tab-content>
    <k-tab-content title="停车订单">停车订单内容</k-tab-content>
    <k-tab-content title="平台管理">平台管理内容</k-tab-content>
</k-tab>
</div>

::: demo
```html
<template>
<k-tab :active-index="1">
    <k-tab-content title="系统管理">系统管理内容</k-tab-content>
    <k-tab-content title="停车订单">停车订单内容</k-tab-content>
    <k-tab-content title="平台管理">平台管理内容</k-tab-content>
</k-tab>
</template>
```
:::

## 选项卡样式
选项卡样式的标签页

<div class="demo-block">
<template>
    <k-tab type="card">
        <k-tab-content title="系统管理">系统管理内容</k-tab-content>
        <k-tab-content title="停车订单">停车订单内容</k-tab-content>
        <k-tab-content title="平台管理">平台管理内容</k-tab-content>
    </k-tab>
</template>
</div>

::: demo

```html

```

:::

## 卡片化
卡片化风格的选项卡

<div class="demo-block">
<template>
    <k-tab type="border-card">
        <k-tab-content title="系统管理">系统管理内容</k-tab-content>
        <k-tab-content title="停车订单">停车订单内容</k-tab-content>
        <k-tab-content title="平台管理">平台管理内容</k-tab-content>
    </k-tab>
</template>
</div>

::: demo

```html
<template>
    <k-tab mode="border-card">
        <k-tab-content title="系统管理">系统管理内容</k-tab-content>
        <k-tab-content title="停车订单">停车订单内容</k-tab-content>
        <k-tab-content title="平台管理">平台管理内容</k-tab-content>
    </k-tab>
</template>
```

:::

## 选项卡位置
可以对选项卡的位置进行调整

<div class="demo-block">
<k-row :gutter="20">
    <k-col :span="6">
        <k-tab label-position="top" type="border-card">
            <k-tab-content title="系统管理">系统管理内容</k-tab-content>
            <k-tab-content title="停车订单">停车订单内容</k-tab-content>
            <k-tab-content title="平台管理">平台管理内容</k-tab-content>
        </k-tab>
    </k-col>
    <k-col :span="6">
        <k-tab label-position="bottom" type="border-card">
            <k-tab-content title="系统管理">系统管理内容</k-tab-content>
            <k-tab-content title="停车订单">停车订单内容</k-tab-content>
            <k-tab-content title="平台管理">平台管理内容</k-tab-content>
        </k-tab>
    </k-col>
</k-row>
<k-row :gutter="20" class="marginTop10">
    <k-col :span="6">
        <k-tab label-position="right" type="border-card" style="height: 200px;">
            <k-tab-content title="系统管理">系统管理内容</k-tab-content>
            <k-tab-content title="停车订单">停车订单内容</k-tab-content>
            <k-tab-content title="平台管理">平台管理内容</k-tab-content>
        </k-tab>
    </k-col>
    <k-col :span="6">
        <k-tab label-position="left" type="border-card" style="height: 200px;">
            <k-tab-content title="系统管理">系统管理内容</k-tab-content>
            <k-tab-content title="停车订单">停车订单内容</k-tab-content>
            <k-tab-content title="平台管理">平台管理内容</k-tab-content>
        </k-tab>
    </k-col>
</k-row>
</div>

::: demo
```html
<k-row :gutter="20">
    <k-col :span="6">
        <k-tab label-position="top" type="border-card">
            <k-tab-content title="系统管理">系统管理内容</k-tab-content>
            <k-tab-content title="停车订单">停车订单内容</k-tab-content>
            <k-tab-content title="平台管理">平台管理内容</k-tab-content>
        </k-tab>
    </k-col>
    <k-col :span="6">
        <k-tab label-position="bottom" type="border-card">
            <k-tab-content title="系统管理">系统管理内容</k-tab-content>
            <k-tab-content title="停车订单">停车订单内容</k-tab-content>
            <k-tab-content title="平台管理">平台管理内容</k-tab-content>
        </k-tab>
    </k-col>
</k-row>
<k-row :gutter="20" class="marginTop10">
    <k-col :span="6">
        <k-tab label-position="right" type="border-card" style="height: 200px;">
            <k-tab-content title="系统管理">系统管理内容</k-tab-content>
            <k-tab-content title="停车订单">停车订单内容</k-tab-content>
            <k-tab-content title="平台管理">平台管理内容</k-tab-content>
        </k-tab>
    </k-col>
    <k-col :span="6">
        <k-tab label-position="left" type="border-card" style="height: 200px;">
            <k-tab-content title="系统管理">系统管理内容</k-tab-content>
            <k-tab-content title="停车订单">停车订单内容</k-tab-content>
            <k-tab-content title="平台管理">平台管理内容</k-tab-content>
        </k-tab>
    </k-col>
</k-row>
```
:::

## 自定义标签页
可在面板标题区域左侧进行功能扩展

<div class="demo-block">
还没开始。
</div>

::: demo

```html

```

:::

## 动态增减标签页
可在面板标题区域左侧进行功能扩展

<div class="demo-block">
还没开始。
</div>

::: demo
```html

```
:::

