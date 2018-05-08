<style></style>
# Tab 选项卡面板
----
分隔内容上有关联但属于不同类别的数据集合。
### 基础使用
<div class="demo-block">
 <template>
    <k-tab>
        <k-tabContent title="系统管理">系统管理内容</k-tabContent>
        <k-tabContent title="停车订单">停车订单内容</k-tabContent>
        <k-tabContent title="修改用户信息">修改用户信息内容</k-tabContent>
    </k-tab>
 </template>
</div>

::: demo
```html
<template>
    <k-tab>
        <k-tabContent title="系统管理">系统管理内容</k-tabContent>
        <k-tabContent title="停车订单">停车订单内容</k-tabContent>
        <k-tabContent title="修改用户信息">修改用户信息内容</k-tabContent>
    </k-tab>
</template>
```
:::

### 通过索引来设置默认显示内容
<div class="demo-block">
 <template>
    <k-tab :currentIndex="1">
        <k-tabContent title="泊位监控">泊位监控内容</k-tabContent>
        <k-tabContent title="用户管理">用户管理内容</k-tabContent>
        <k-tabContent title="查看用户信息">查看用户信息内容</k-tabContent>
    </k-tab>
 </template>
</div>

::: demo
```html
<template>
    <k-tab :currentIndex="1">
        <k-tabContent title="泊位监控">泊位监控内容</k-tabContent>
        <k-tabContent title="用户管理">用户管理内容</k-tabContent>
        <k-tabContent title="查看用户信息">查看用户信息内容</k-tabContent>
    </k-tab>
</template>
```
:::

### 选项卡样式
选项卡样式的标签页

<div class="demo-block">
<template>
    <k-tab mode="card">
        <k-tabContent title="泊位监控">泊位监控内容</k-tabContent>
        <k-tabContent title="用户管理">用户管理内容</k-tabContent>
        <k-tabContent title="查看用户信息">查看用户信息内容</k-tabContent>
    </k-tab>
</template>
</div>

::: demo

```html

```

:::

### 卡片化
卡片化风格的选项卡

<div class="demo-block">
<template>
    <k-tab mode="border-card">
        <k-tabContent title="泊位监控">泊位监控内容</k-tabContent>
        <k-tabContent title="用户管理">用户管理内容</k-tabContent>
        <k-tabContent title="查看用户信息">查看用户信息内容</k-tabContent>
    </k-tab>
</template>
</div>

::: demo

```html
<template>
    <k-tab mode="border-card">
        <k-tabContent title="泊位监控">泊位监控内容</k-tabContent>
        <k-tabContent title="用户管理">用户管理内容</k-tabContent>
        <k-tabContent title="查看用户信息">查看用户信息内容</k-tabContent>
    </k-tab>
</template>
```

:::

### 位置
可以对选项卡的位置进行调整

<div class="demo-block">
<k-button-group>
    <k-button mode="default">上</k-button>
    <k-button mode="default">右</k-button>
    <k-button mode="default">下</k-button>
    <k-button mode="default">左</k-button>
</k-button-group>
<k-tab mode="border-card">
    <k-tabContent title="泊位监控">泊位监控内容</k-tabContent>
    <k-tabContent title="用户管理">用户管理内容</k-tabContent>
    <k-tabContent title="查看用户信息">查看用户信息内容</k-tabContent>
</k-tab>
</div>

::: demo

```html

```

:::

### 自定义标签页
可在面板标题区域左侧进行功能扩展

<div class="demo-block">

</div>

::: demo

```html

```

:::

### 动态增减标签页
可在面板标题区域左侧进行功能扩展

<div class="demo-block">

</div>

::: demo

```html

```

:::

### 自定义增加标签页触发器
可在面板标题区域左侧进行功能扩展

<div class="demo-block">

</div>

::: demo

```html

```

:::
