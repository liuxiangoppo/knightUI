<style>
  .demoDiv {
    width: 200px;height: 800px;border:1px solid #ddd;text-align:center;line-height: 800px;margin-top: 5px;margin-bottom:5px;background-color: #e5e9f2;
  }
</style>
# ScrollTo 滚动到
----
## 概述
- 该组件基于```jump.js```
- [点我跳转](https://github.com/callmecavs/jump.js)

## 基础使用
<div class="demo-block">
    <k-scrollTo target="#target2">
  <button class="button is-primary">点我滚动到目标位置</button>
</k-scrollTo>
<div class="demoDiv">模拟非常多的内容</div>
<button id="target2" class="button is-primary">我就是传说中的目标</button>
</div>

::: demo
```html

<div class="demo-block">
    <k-scrollTo target="#target2">
  <button class="button is-primary">点我滚动到目标位置</button>
</k-scrollTo>
<div class="demoDiv">模拟非常多的内容</div>
<button id="target2" class="button is-primary">我就是传说中的目标</button>

```
:::

## 属性
| 成员      | 说明                                 | 类型      | 可选值       | 默认值   |
|---------- |------------------------------------ |---------- |------------- |-------- |
|target      |```target```的值可以是任意css的选择器，如 ```.target``` ```#id1```。当 target='top' 时，会触发内置的返回到顶部，即在页面右下角显示返回顶部的箭头按钮 |	String   |	无           |	none       |
|duration	      | 滚动时间 单位为毫秒                                |	Number    |  无|	500 |
|distance |	滚动距离（优先级高于target）正值向下滚动 负值向上滚动                         |	Number   |	—             |	—      |

