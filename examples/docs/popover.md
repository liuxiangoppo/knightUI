# Popover 气泡弹出框
----

## 基础展示
<div class="demo-block">
<k-popover title="基础的Popover" :always="false" placement="right">
  <button class="button is-primary">基础的Popover</button>
  <div slot="content">
    <p>我是Popover的内容</p>
    <p>我可以随意被定制！</p>
  </div>
</k-popover>

<k-popover title="永远显示的Popover" content="像Tip一样 我是永远显示的~" :always="true">
  <button class="button is-primary">永远显示</button>
</k-popover>

<k-popover title="Always Popover" content="Duis mollis, est non commodo luctus" :disabled="true">
  <button class="button is-warning">被禁用的Popover</button>
</k-popover>

<k-popover content="没有标题！没有标题！没有标题！重要的事情说三遍~">
  <button class="button is-info">不带有标题的Popover</button>
</k-popover>
</div>

::: demo
``` html

<k-popover title="基础的Popover" :always="false">
  <button class="button is-primary">基础的Popover</button>
  <div slot="content">
    <p>我是Popover的内容</p>
    <p>我可以随意被定制！</p>
  </div>
</k-popover>

<k-popover title="永远显示的Popover" content="像Tip一样 我是永远显示的~" :always="true">
  <button class="button is-primary">永远显示</button>
</k-popover>

<k-popover title="Always Popover" content="Duis mollis, est non commodo luctus" :disabled="true">
  <button class="button is-warning">被禁用的Popover</button>
</k-popover>

<k-popover content="没有标题！没有标题！没有标题！重要的事情说三遍~">
  <button class="button is-info">不带有标题的Popover</button>
</k-popover>


```
:::


<div style="margin-top: 30px;">
<k-info mode="flat">
    Popover的基本属性可以参考Tip的属性。
</k-info>
</div>

## 属性
| 成员      | 说明                                 | 类型      | 可选值       | 默认值   |
|---------- |------------------------------------ |---------- |------------- |-------- |
|trigger      |触发方式 |	String   |	```hover``` ```click``` ```focus```           |	click       |
|content	      | 内容 也可以通过Slot来进行内容定制                               |	String    | 无|	无 |
|always	      | 始终保持打开状态                                |	Boolean    | 无|	false |
|disabled      |是否禁用 |	Boolean   |	无           |	false       |
|trigger      |触发方式 |	Boolean   |	无           |	false       |