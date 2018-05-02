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

### 使用预先定义的样式
组件库预先为```K-badge```组件定义了几种样式,可以方便用户直接使用。

<div class="demo-block">
  <ul class="temp-list">
    <li>普通<k-badge className="k-badge__normal pullRight">20</k-badge></li>
    <li>绿色<k-badge className="k-badge__green pullRight">100</k-badge></li>
    <li>黄色<k-badge className="k-badge__yellow pullRight">30</k-badge></li>
    <li>橙色<k-badge className="k-badge__orange pullRight">30</k-badge></li>
  </ul>
</div>

::: demo

```html

<ul class="temp-list">
  <li>普通<k-badge className="k-badge__normal pullRight">20</k-badge></li>
  <li>绿色<k-badge className="k-badge__green pullRight">100</k-badge></li>
  <li>黄色<k-badge className="k-badge__yellow pullRight">30</k-badge></li>
  <li>橙色<k-badge className="k-badge__orange pullRight">30</k-badge></li>
</ul>

```

:::
