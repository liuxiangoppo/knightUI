<style>
.white-text {
  color: #FFF;
}
</style>
# Panel 面板
----
### 概述
面板
### 基础使用
<div class="demo-block">
 <k-row :gutter="10">
  <k-col :md="4" :sm="6" :xs="12">
    <k-panel>
      <template slot="title">
        <p>标题</p>
      </template>
      <p>我是内容</p>
    </k-panel>
  </k-col>
  <k-col :md="4" :sm="6" :xs="12">
    <k-panel mode="primary">
      <template slot="title">
        <p class="white-text">标题</p>
      </template>
      <p>我是内容</p>
    </k-panel>
  </k-col>
  <k-col :md="4" :sm="6" :xs="12">
    <k-panel mode="success">
      <template slot="title">
        <p class="white-text">标题</p>
      </template>
      <p>我是内容</p>
    </k-panel>
  </k-col>
 </k-row>
 <k-row :gutter="10">
  <k-col :md="4" :sm="6" :xs="12">
    <k-panel mode="warning">
      <template slot="title">
        <p class="white-text">标题</p>
      </template>
      <p>我是内容</p>
    </k-panel>
  </k-col>
  <k-col :md="4" :sm="6" :xs="12">
    <k-panel mode="info">
      <template slot="title">
        <p class="white-text">标题</p>
      </template>
      <p>我是内容</p>
    </k-panel>
  </k-col>
  <k-col :md="4" :sm="6" :xs="12">
    <k-panel mode="danger">
      <template slot="title">
        <p class="white-text">标题</p>
      </template>
      <p>我是内容</p>
    </k-panel>
  </k-col>
 </k-row>
</div>

::: demo
```html

<k-row :gutter="10">
  <k-col :md="4" :sm="6" :xs="12">
    <k-panel>
      <template slot="title">
        <p>标题</p>
      </template>
      <p>我是内容</p>
    </k-panel>
  </k-col>
  <k-col :md="4" :sm="6" :xs="12">
    <k-panel mode="primary">
      <template slot="title">
        <p class="white-text">标题</p>
      </template>
      <p>我是内容</p>
    </k-panel>
  </k-col>
  <k-col :md="4" :sm="6" :xs="12">
    <k-panel mode="success">
      <template slot="title">
        <p class="white-text">标题</p>
      </template>
      <p>我是内容</p>
    </k-panel>
  </k-col>
 </k-row>
 <k-row :gutter="10">
  <k-col :md="4" :sm="6" :xs="12">
    <k-panel mode="warning">
      <template slot="title">
        <p class="white-text">标题</p>
      </template>
      <p>我是内容</p>
    </k-panel>
  </k-col>
  <k-col :md="4" :sm="6" :xs="12">
    <k-panel mode="info">
      <template slot="title">
        <p class="white-text">标题</p>
      </template>
      <template slot="extra">
        <p class="white-text">我是扩展</p>
      </template>
      <p>我是内容</p>
    </k-panel>
  </k-col>
  <k-col :md="4" :sm="6" :xs="12">
    <k-panel mode="danger">
      <template slot="title">
        <p class="white-text">标题</p>
      </template>
      <p>我是内容</p>
    </k-panel>
  </k-col>
 </k-row>

```
:::

### 可对面板组件进行扩展
可在面板标题区域左侧进行功能扩展

<div class="demo-block">
  <k-panel>
      <template slot="title">
        <p>标题</p>
      </template>
      <template slot="extra">
         <k-button mode="text">
            <k-icon type="icon-refresh"></k-icon>
            <span>我是按钮</span>
          </k-button>
      </template>
      <p>我是内容</p>
    </k-panel>
    <k-panel>
      <template slot="title">
        <h2 style="margin: 0;">标题</h2>
      </template>
      <template slot="extra">
         <k-button mode="primary" :outLined="true">按钮</k-button>
      </template>
      <p>我是内容</p>
    </k-panel>
</div>

::: demo

```html

<k-panel>
      <template slot="title">
        <p>标题</p>
      </template>
      <template slot="extra">
         <k-button mode="text">
            <k-icon type="icon-refresh"></k-icon>
            <span>我是按钮</span>
          </k-button>
      </template>
      <p>我是内容</p>
    </k-panel>
    <k-panel>
      <template slot="title">
        <h2 style="margin: 0;">标题</h2>
      </template>
      <template slot="extra">
         <k-button mode="primary" :outLined="true">按钮</k-button>
      </template>
      <p>我是内容</p>
    </k-panel>

```

:::

### 没有标题的面板
<div class="demo-block">
  <k-panel>
    <p>面板内容</p>
  </k-panel>
</div>