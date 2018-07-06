# Step 步骤条
----

## 基础展示
<div class="demo-block">
<k-steps :current="0" type="line" prev-text="上一步" next-text="下一步">
  <k-step title="第一步" description="举头望明月">
    <p>1.床前明月光，疑是地上霜。举头望明月，低头思故乡</p>
  </k-step>
  <k-step title="Eating" description="春晓">
    <p>2.春眠不觉晓，处处闻啼鸟。夜来风雨声，花落知多少。</p>
  </k-step>
  <k-step title="Swimming" description="春夜喜雨">
    <p>3.好雨知时节，当春乃发生。随风潜入夜，润物细无声</p>
  </k-step>
</k-steps>
</div>

::: demo
```html
<k-steps :current="0" type="line" prev-text="上一步" next-text="下一步">
  <k-step title="第一步" description="举头望明月">
    <p>1.床前明月光，疑是地上霜。举头望明月，低头思故乡</p>
  </k-step>
  <k-step title="Eating" description="春晓">
    <p>2.春眠不觉晓，处处闻啼鸟。夜来风雨声，花落知多少。</p>
  </k-step>
  <k-step title="Swimming" description="春夜喜雨">
    <p>3.好雨知时节，当春乃发生。随风潜入夜，润物细无声</p>
  </k-step>
</k-steps>
```
:::

## 另一种样式
<div class="demo-block">
    <k-steps :current="0" type="pills">
        <k-step title="标题" description="举头望明月">
            <p>1.床前明月光，疑是地上霜。举头望明月，低头思故乡</p>
        </k-step>
        <k-step title="Eating" description="春晓">
            <p>2.春眠不觉晓，处处闻啼鸟。夜来风雨声，花落知多少。</p>
        </k-step>
        <k-step title="Swimming" description="春夜喜雨">
            <p>3.好雨知时节，当春乃发生。随风潜入夜，润物细无声</p>
        </k-step>
    </k-steps>
</div>

::: demo
``` html
<k-steps :current="0" type="pills">
    <k-step title="标题" description="举头望明月">
        <p>1.床前明月光，疑是地上霜。举头望明月，低头思故乡</p>
    </k-step>
    <k-step title="Eating" description="春晓">
        <p>2.春眠不觉晓，处处闻啼鸟。夜来风雨声，花落知多少。</p>
    </k-step>
    <k-step title="Swimming" description="春夜喜雨">
        <p>3.好雨知时节，当春乃发生。随风潜入夜，润物细无声</p>
    </k-step>
</k-steps>
```
:::

## 属性
| 成员      | 说明                                 | 类型      | 可选值       | 默认值   |
|---------- |------------------------------------ |---------- |------------- |-------- |
|type      |显示样式 |	String   |	无           |	```pills``` ```line```       |
|current	      | 当前第几步                                |	Number    | 0|	0 |
|prevText      |上一步的按钮文字 |	String   |	无           |	前进       |
|nextText	      | 下一步的按钮文字                                |	String    | 无|	后退 |
|on-prev      |上一步回调 |	Function   |	无           |	none       |
|on-next	      | 下一步回调                                |	Function    | 无|	none |
|show-footer      |是否显示footer栏，不显示的话可以通过current自己控制上一步下一步 |	Boolean   |	无           |	none       |
