<style></style>
# Tips 文字提示
----
## 基础使用
<div class="demo-block">
 <template>
    <k-tip content="我是基础的Tip"><button class="button is-primary">基础Tip</button></k-tip>
    <k-tip content="点击触发Tip" trigger="click"><button class="button is-primary">点击触发</button></k-tip>
    <k-tip content="我一直显示" :always="true"><button class="button is-primary">总是显示</button></k-tip>
    <k-tip content="禁用Tip" :disabled="true"><button class="button is-primary">禁用Tip</button></k-tip>
 </template>
</div>

::: demo
```html
 <template>
    <k-tip content="我是基础的Tip"><button class="button is-primary">基础Tip</button></k-tip>
    <k-tip content="点击触发Tip" trigger="click"><button class="button is-primary">点击触发</button></k-tip>
    <k-tip content="我一直显示" :always="true"><button class="button is-primary">总是显示</button></k-tip>
    <k-tip content="禁用Tip" :disabled="true"><button class="button is-primary">禁用Tip</button></k-tip>
 </template>
```
:::

## 属性
| 成员      | 说明                                 | 类型      | 可选值       | 默认值   |
|---------- |------------------------------------ |---------- |------------- |-------- |
|trigger      |触发方式 |	String   |	无           |	hover       |
|content	      | 内容                                |	String    | 无|	无 |
|placement      |```top``` ```left``` ```right``` ```bottom``` ```topLeft``` ```topRight``` ```leftTop``` ```leftBottom``` ```bottomLeft``` ```rightTop``` ```rightBottom``` |	String   |	无           |	top       |
|always	      | 始终保持打开状态                                |	Boolean    | 无|	false |
|disabled      |是否禁用 |	Boolean   |	无           |	false       |
