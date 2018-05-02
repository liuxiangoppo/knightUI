<style>
.marginTop10 {
  margin-top: 10px;
}
.grid-content {
    border-radius: 4px;
    min-height: 36px;
}
.bg-purple-dark {background: #99a9bf;}
.bg-purple {
    background: #d3dce6;
}
.bg-purple-light {
    background: #e5e9f2;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>
# Grid 栅格系统
----
### 概述
栅格化设计是按照一定的规则把页面分成固定的相同宽度，然后列出各种组合的可能性，以便于在进行页面呈现的时候能够快速的进行布局。市面上一般使用 12栅格 系统，也有采用 8栅格 系统的，但是随着设备屏幕越来越大，传统的 12栅格 系统在一些业务场景下，没办法很好的解决元素布局的问题，所以我们使用了 24栅格 系统。也就是将页面区域 24 等分。
### 基础布局
<div class="demo-block">
 <k-row>
    <k-col :span="12"><div class="grid-content bg-purple-dark"></div></k-col>
  </k-row>
  <k-row class="marginTop10">
    <k-col :span="4"><div class="grid-content bg-purple"></div></k-col>
    <k-col :span="4"><div class="grid-content bg-purple-light"></div></k-col>
    <k-col :span="4"><div class="grid-content bg-purple"></div></k-col>
  </k-row>
  <k-row class="marginTop10">
    <k-col :span="2"><div class="grid-content bg-purple"></div></k-col>
    <k-col :span="2"><div class="grid-content bg-purple-light"></div></k-col>
    <k-col :span="2"><div class="grid-content bg-purple"></div></k-col>
    <k-col :span="2"><div class="grid-content bg-purple-light"></div></k-col>
    <k-col :span="2"><div class="grid-content bg-purple"></div></k-col>
    <k-col :span="2"><div class="grid-content bg-purple-light"></div></k-col>
  </k-row>
</div>

::: demo
```html

  <k-row>
    <k-col :span="12"><div class="grid-content bg-purple-dark"></div></k-col>
  </k-row>
  <k-row class="marginTop10">
    <k-col :span="4"><div class="grid-content bg-purple"></div></k-col>
    <k-col :span="4"><div class="grid-content bg-purple-light"></div></k-col>
    <k-col :span="4"><div class="grid-content bg-purple"></div></k-col>
  </k-row>
  <k-row class="marginTop10">
    <k-col :span="2"><div class="grid-content bg-purple"></div></k-col>
    <k-col :span="2"><div class="grid-content bg-purple-light"></div></k-col>
    <k-col :span="2"><div class="grid-content bg-purple"></div></k-col>
    <k-col :span="2"><div class="grid-content bg-purple-light"></div></k-col>
    <k-col :span="2"><div class="grid-content bg-purple"></div></k-col>
    <k-col :span="2"><div class="grid-content bg-purple-light"></div></k-col>
  </k-row>

```
:::

### 分栏间隔

分栏之间存在间隔
Row 组件 提供 ```gutter``` 属性来指定每一栏之间的间隔，默认间隔为 0。

<div class="demo-block">
  <k-row :gutter="20">
    <k-col :span="4"><div class="grid-content bg-purple"></div></k-col>
    <k-col :span="4"><div class="grid-content bg-purple-light"></div></k-col>
    <k-col :span="4"><div class="grid-content bg-purple"></div></k-col>
  </k-row>
</div>

::: demo

```html

  <k-row :gutter="20">
    <k-col :span="4"><div class="grid-content bg-purple"></div></k-col>
    <k-col :span="4"><div class="grid-content bg-purple-light"></div></k-col>
    <k-col :span="4"><div class="grid-content bg-purple"></div></k-col>
  </k-row>

```

:::

### 混合布局

通过基础的 1/24 分栏任意扩展组合形成较为复杂的混合布局。

<div class="demo-block">
  <k-row :gutter="20">
    <k-col :span="12"><div class="grid-content bg-purple-dark"></div></k-col>
  </k-row>
  <k-row class="marginTop10" :gutter="20">
    <k-col :span="4"><div class="grid-content bg-purple"></div></k-col>
    <k-col :span="4"><div class="grid-content bg-purple-light"></div></k-col>
    <k-col :span="4"><div class="grid-content bg-purple"></div></k-col>
  </k-row>
  <k-row class="marginTop10" :gutter="20">
    <k-col :span="2"><div class="grid-content bg-purple"></div></k-col>
    <k-col :span="2"><div class="grid-content bg-purple-light"></div></k-col>
    <k-col :span="2"><div class="grid-content bg-purple"></div></k-col>
    <k-col :span="2"><div class="grid-content bg-purple-light"></div></k-col>
    <k-col :span="2"><div class="grid-content bg-purple"></div></k-col>
    <k-col :span="2"><div class="grid-content bg-purple-light"></div></k-col>
  </k-row>
</div>

::: demo

```html

<w-row :gutter="20">
  <w-col :span="16"><div class="grid-content bg-purple"></div></w-col>
  <w-col :span="8"><div class="grid-content bg-purple"></div></w-col>
</w-row>
<w-row :gutter="20" class="m-10">
  <w-col :span="8"><div class="grid-content bg-purple"></div></w-col>
  <w-col :span="8"><div class="grid-content bg-purple"></div></w-col>
  <w-col :span="4"><div class="grid-content bg-purple"></div></w-col>
  <w-col :span="4"><div class="grid-content bg-purple"></div></w-col>
</w-row>
<w-row :gutter="20" class="m-10">
  <w-col :span="4"><div class="grid-content bg-purple"></div></w-col>
  <w-col :span="16"><div class="grid-content bg-purple"></div></w-col>
  <w-col :span="4"><div class="grid-content bg-purple"></div></w-col>
</w-row>

```

:::

### 分栏偏移

支持偏移指定的栏数。通过制定 col 组件的 ```offset``` 属性可以指定分栏偏移的栏数。

<div class="demo-block">
  <k-row :gutter="20">
    <k-col :span="12"><div class="grid-content bg-purple-dark"></div></k-col>
  </k-row>
  <k-row class="marginTop10" :gutter="20">
    <k-col :span="4" :offset="4"><div class="grid-content bg-purple-light"></div></k-col>
    <k-col :span="4"><div class="grid-content bg-purple"></div></k-col>
  </k-row>
  <k-row class="marginTop10" :gutter="20">
    <k-col :span="2" :offset="2"><div class="grid-content bg-purple-light"></div></k-col>
    <k-col :span="2"><div class="grid-content bg-purple"></div></k-col>
    <k-col :span="2"><div class="grid-content bg-purple-light"></div></k-col>
    <k-col :span="2" :offset="2"><div class="grid-content bg-purple-light"></div></k-col>
  </k-row>
</div>

::: demo

```html

  <k-row :gutter="20">
    <k-col :span="12"><div class="grid-content bg-purple-dark"></div></k-col>
  </k-row>
  <k-row class="marginTop10" :gutter="20">
    <k-col :span="4" :offset="4"><div class="grid-content bg-purple-light"></div></k-col>
    <k-col :span="4"><div class="grid-content bg-purple"></div></k-col>
  </k-row>
  <k-row class="marginTop10" :gutter="20">
    <k-col :span="2" :offset="2"><div class="grid-content bg-purple-light"></div></k-col>
    <k-col :span="2"><div class="grid-content bg-purple"></div></k-col>
    <k-col :span="2"><div class="grid-content bg-purple-light"></div></k-col>
    <k-col :span="2" :offset="2"><div class="grid-content bg-purple-light"></div></k-col>
  </k-row>

```

:::

### Flex 布局

通过 flex 布局来对分栏进行灵活的对齐。
将 ```mode``` 属性赋值为 'flex'，可以启用 flex 布局，并可通过 ```justify``` 属性来指定 start, center, end, spaceBetween, spaceAround 其中的值来定义子元素的排版方式。
<div class="demo-block">
  <k-row mode="flex" :columnCount="24" class="row-bg" justify="start">
    <k-col :span="6"><div class="grid-content bg-purple"></div></k-col>
    <k-col :span="6"><div class="grid-content bg-purple-light"></div></k-col>
    <k-col :span="6"><div class="grid-content bg-purple"></div></k-col>
  </k-row>
  <k-row mode="flex" :columnCount="24" class="row-bg marginTop10" justify="center">
    <k-col :span="6"><div class="grid-content bg-purple"></div></k-col>
    <k-col :span="6"><div class="grid-content bg-purple-light"></div></k-col>
    <k-col :span="6"><div class="grid-content bg-purple"></div></k-col>
  </k-row>
  <k-row mode="flex" :columnCount="24" class="row-bg marginTop10" justify="end">
    <k-col :span="6"><div class="grid-content bg-purple"></div></k-col>
    <k-col :span="6"><div class="grid-content bg-purple-light"></div></k-col>
    <k-col :span="6"><div class="grid-content bg-purple"></div></k-col>
  </k-row>
  <k-row mode="flex" :columnCount="24" class="row-bg marginTop10" justify="spaceBetween">
    <k-col :span="6"><div class="grid-content bg-purple"></div></k-col>
    <k-col :span="6"><div class="grid-content bg-purple-light"></div></k-col>
    <k-col :span="6"><div class="grid-content bg-purple"></div></k-col>
  </k-row>
  <k-row mode="flex" :columnCount="24" class="row-bg marginTop10" justify="spaceAround">
    <k-col :span="6"><div class="grid-content bg-purple"></div></k-col>
    <k-col :span="6"><div class="grid-content bg-purple-light"></div></k-col>
    <k-col :span="6"><div class="grid-content bg-purple"></div></k-col>
  </k-row>
</div>

::: demo

```html

<k-row mode="flex" :columnCount="24" class="row-bg" justify="start">
    <k-col :span="6"><div class="grid-content bg-purple"></div></k-col>
    <k-col :span="6"><div class="grid-content bg-purple-light"></div></k-col>
    <k-col :span="6"><div class="grid-content bg-purple"></div></k-col>
  </k-row>
  <k-row mode="flex" :columnCount="24" class="row-bg marginTop10" justify="center">
    <k-col :span="6"><div class="grid-content bg-purple"></div></k-col>
    <k-col :span="6"><div class="grid-content bg-purple-light"></div></k-col>
    <k-col :span="6"><div class="grid-content bg-purple"></div></k-col>
  </k-row>
  <k-row mode="flex" :columnCount="24" class="row-bg marginTop10" justify="end">
    <k-col :span="6"><div class="grid-content bg-purple"></div></k-col>
    <k-col :span="6"><div class="grid-content bg-purple-light"></div></k-col>
    <k-col :span="6"><div class="grid-content bg-purple"></div></k-col>
  </k-row>
  <k-row mode="flex" :columnCount="24" class="row-bg marginTop10" justify="spaceBetween">
    <k-col :span="6"><div class="grid-content bg-purple"></div></k-col>
    <k-col :span="6"><div class="grid-content bg-purple-light"></div></k-col>
    <k-col :span="6"><div class="grid-content bg-purple"></div></k-col>
  </k-row>
  <k-row mode="flex" :columnCount="24" class="row-bg marginTop10" justify="spaceAround">
    <k-col :span="6"><div class="grid-content bg-purple"></div></k-col>
    <k-col :span="6"><div class="grid-content bg-purple-light"></div></k-col>
    <k-col :span="6"><div class="grid-content bg-purple"></div></k-col>
  </k-row>

```

:::

### 响应式布局

参照了 Bootstrap 的 响应式设计，预设了五个响应尺寸：```xs```、```sm```、```md```、```lg``` 和 ```xl```。
<div class="demo-block">
  <k-row :gutter="10" :columnCount="24">
    <k-col :xs="8" :sm="6" :md="4" :lg="3"><div class="grid-content bg-purple"></div></k-col>
    <k-col :xs="4" :sm="6" :md="8" :lg="9"><div class="grid-content bg-purple-light"></div></k-col>
    <k-col :xs="4" :sm="6" :md="8" :lg="9"><div class="grid-content bg-purple"></div></k-col>
    <k-col :xs="8" :sm="6" :md="4" :lg="3"><div class="grid-content bg-purple-light"></div></k-col>
  </k-row>
</div>


::: demo
```html

  <k-row :gutter="10">
    <k-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple"></div></k-col>
    <k-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content bg-purple-light"></div></k-col>
    <k-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content bg-purple"></div></k-col>
    <k-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple-light"></div></k-col>
  </k-row>

```

:::