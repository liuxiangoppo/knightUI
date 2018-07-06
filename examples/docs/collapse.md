<style>
    .marginTop10 {
      margin-top: 10px;
    }
</style>
# Collapse 折叠面板
----
可折叠展开的面板

## 基础展示

<div class="demo-block">
 <k-collapse>
  <k-collapse-item title="标题#1">
    <span>内容#1</span>
  </k-collapse-item>
  <k-collapse-item title="标题#2">
    <span>内容#2</span>
  </k-collapse-item>
  <k-collapse-item title="标题#3">
    <span>内容#3</span>
  </k-collapse-item>
 </k-collapse>
</div>

::: demo
```html

 <k-collapse>
  <k-collapse-item title="标题#1">
    <span>内容#1</span>
  </k-collapse-item>
  <k-collapse-item title="标题#2">
    <span>内容#2</span>
  </k-collapse-item>
  <k-collapse-item title="标题#3">
    <span>内容#3</span>
  </k-collapse-item>
 </k-collapse>

```
:::

## 手风琴风格的折叠面板

<div class="demo-block">
 <k-collapse accordion>
  <k-collapse-item title="表单">
    <span>各种表单组件</span>
  </k-collapse-item>
  <k-collapse-item title="视图">
    <span>各种视图组件</span>
  </k-collapse-item>
 </k-collapse>
</div>

::: demo
```html

 <k-collapse accordion>
  <k-collapse-item title="表单">
    <span>各种表单组件</span>
  </k-collapse-item>
  <k-collapse-item title="视图">
    <span>各种视图组件</span>
  </k-collapse-item>
 </k-collapse>

```
:::

## 属性
### Collapse
| 成员      | 说明                                 | 类型      | 可选值       | 默认值   |
|---------- |------------------------------------ |---------- |------------- |-------- |
|accordion      |手风琴模式:同时只能展开一个面板 |	Boolean   |	true/false           |	false       |

### CollapseItem
| 成员      | 说明                                 | 类型      | 可选值       | 默认值   |
|---------- |------------------------------------ |---------- |------------- |-------- |
|title      |标题 |	String   |	无           |	none       |
|actived	      | 是否展开                                |	Boolean    | true/false|	false |
