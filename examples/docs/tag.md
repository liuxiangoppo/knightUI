# Tag 标签
---

## 基础展示
<div class="demo-block">
    <k-tag type="primary">优先</k-tag>
    <k-tag type="info">信息</k-tag>
    <k-tag type="success">成功</k-tag>
    <k-tag type="danger">危险</k-tag>
    <k-tag type="warning">警告</k-tag>
    <k-tag type="primary" color="#f50" :closable="true">带有关闭按钮的标签</k-tag>
    <br><br>
    <k-tag type="primary" rounded>优先</k-tag>
    <k-tag type="info" rounded>信息</k-tag>
    <k-tag type="success" rounded>成功</k-tag>
    <k-tag type="danger" rounded>危险</k-tag>
    <k-tag type="warning" rounded>警告</k-tag>
</div>

::: demo
``` html
<k-tag type="primary">优先</k-tag>
<k-tag type="info">信息</k-tag>
<k-tag type="success">成功</k-tag>
<k-tag type="danger">危险</k-tag>
<k-tag type="warning">警告</k-tag>
<k-tag type="primary" color="#f50" :closable="true">带有关闭按钮的标签</k-tag>
<br><br>
<k-tag type="primary" rounded>优先</k-tag>
<k-tag type="info" rounded>信息</k-tag>
<k-tag type="success" rounded>成功</k-tag>
<k-tag type="danger" rounded>危险</k-tag>
<k-tag type="warning" rounded>警告</k-tag>
```
:::

## 不同尺寸
<div class="demo-block">
<k-tag type="primary">默认尺寸</k-tag>
<k-tag type="info" size="small">小尺寸</k-tag>
<k-tag type="success" size="medium">中等尺寸</k-tag>
<k-tag type="warning" size="large">大尺寸</k-tag>
</div>

::: demo
``` html

<k-tag type="primary">默认尺寸</k-tag>
<k-tag type="info" size="small">小尺寸</k-tag>
<k-tag type="success" size="medium">中等尺寸</k-tag>
<k-tag type="warning" size="large">大尺寸</k-tag>

```
:::

## 关闭以及回调
<div class="demo-block">
<k-tag type="primary" :closable="true">带有关闭按钮的标签</k-tag>
<k-tag type="warning" size="medium" :closable="true" :on-close="close">关闭回调</k-tag>
<script>
  export default {
    methods: {
      close() {
        this.$KNotify({
          message: '关闭之后的回调',
          title: '回调函数',
        });
      },
    },
  };
</script>
</div>

::: demo
``` html

<k-tag type="primary" :closable="true">带有关闭按钮的标签</k-tag>
<k-tag type="warning" size="medium" :closable="true" :on-close="close">关闭回调</k-tag>
<script>
  export default {
    methods: {
      close() {
        this.$KNotify({
          message: '关闭之后的回调',
          title: '回调函数',
        });
      },
    },
  };
</script>

```
:::

## 属性
| 成员      | 说明                                 | 类型      | 可选值       | 默认值   |
|---------- |------------------------------------ |---------- |------------- |-------- |
|type      |主题颜色,可选值为```primary``` ```info``` ```success``` ```danger``` ```warning``` |	String   |	无           |	无       |
|color	      | 背景色,如#87d087                                |	String    | 无|	无 |
|size      |标签大小,可选值为```small``` ```medium``` ```large``` |	String   |	无           |	无       |
|rounded	      | 是否圆弧形                                |	Boolean    | 无|	false |
|closable      |标签是否可关闭 |	Boolean   |	无           |	false       |
|on-close	      | 标签关闭时的回调                                |	Function    | 无|	none |