<style>
</style>
# Affix 图钉
----
## 概述
将元素钉在固定位置, 常用于顶部菜单或者侧边菜单
## 基础使用
<div class="demo-block">
<k-affix>
    <button class="button is-primary">我是图钉</button>
</k-affix>
</div>

::: demo
```html

<k-affix>
    <button class="button is-primary">我是图钉</button>
</k-affix>

```
:::

## 设置偏移量
<div class="demo-block">
<k-affix :offset="200">
    <button class="button is-primary">距离顶部200px的位置</button>
</k-affix>
</div>

::: demo
```html

<div class="demo-block">
<k-affix :offset="200">
    <button class="button is-primary">距离顶部200px的位置</button>
</k-affix>
</div>

```
:::

## 指定父容器
<div class="demo-block">
<div id="wrapper" style="height: 800px;text-align: center">
<k-affix :offset="0" boundary="#wrapper">
    <button class="button is-primary">我只会在父容器范围内固定</button>
</k-affix>
</div>
</div>

::: demo
```html

<div id="wrapper" style="height: 800px;text-align: center">
  <k-affix :offset="0" boundary="#wrapper">
      <button class="button is-primary">我只会在父容器范围内固定</button>
  </k-affix>
</div>

```
:::

## 回调函数

<div class="demo-block">
  <div>
    <k-affix :on-affix="onAffixed" :offset="1000">
      <button class="button is-primary">触发回调</button>
    </k-affix>
  </div>
  <script>
  export default {
    methods: {
      onAffixed(status) {
        this.$KNotify({
          title: '注意',
          message: '当前图钉的状态:'+status
        })
      },
    },
  };
  </script>
</div>

::: demo
```html
<div>
    <k-affix :on-affix="onAffixed" :offset="1000">
      <button class="button is-primary">触发回调</button>
    </k-affix>
  </div>
  <script>
  export default {
    methods: {
      onAffixed(status) {
        this.$KNotify({
          title: '注意',
          message: '当前图钉的状态:'+status
        })
      },
    },
  };
  </script>

```
:::

