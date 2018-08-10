# Input 文本
----

## 基础展示
<div class="demo-block">
    <k-input input-type="text" placeholder="Input文本框" class="marginBottom10"></k-input>
    <k-input input-type="password" placeholder="Password密码" class="marginBottom10"></k-input>
    <k-input input-type="textarea" placeholder="TextArea文本域"></k-input>
</div>

::: demo
``` html
<k-input input-type="text" placeholder="我是一个文本框" class="marginBottom10"></k-input>
<k-input input-type="textarea" placeholder="我是一个文本域"></k-input>
```
:::

## 通过设置```type```属性控制外观
可选值类型为```primary```、```success```、```warning```、```danger```、```info```
<div class="demo-block">
    <k-input input-type="text" type="primary" placeholder="Primary" class="marginBottom10" style="width: 300px;"></k-input>
    <k-input input-type="text" type="success" placeholder="Success" class="marginBottom10" style="width: 300px;"></k-input>
    <k-input input-type="text" type="warning" placeholder="Warning" class="marginBottom10" style="width: 300px;"></k-input>
    <k-input input-type="text" type="danger" placeholder="Danger" class="marginBottom10" style="width: 300px;"></k-input>
    <k-input input-type="text" type="info" placeholder="Info" class="marginBottom10" style="width: 300px;"></k-input>
</div>

::: demo
``` html
<k-input input-type="text" type="primary" placeholder="我是一个文本框" class="marginBottom10"></k-input>
<k-input input-type="text" type="success" placeholder="我是一个文本框" class="marginBottom10"></k-input>
<k-input input-type="text" type="warning" placeholder="我是一个文本框" class="marginBottom10"></k-input>
<k-input input-type="text" type="danger" placeholder="我是一个文本框" class="marginBottom10"></k-input>
<k-input input-type="text" type="info" placeholder="我是一个文本框" class="marginBottom10"></k-input>
```
:::

## 禁用Input
<div class="demo-block">
    <k-input input-type="text" type="primary" placeholder="我被禁用了..." class="marginBottom10" disabled></k-input>
    <k-input input-type="textarea" placeholder="我被禁用了..." disabled></k-input>
</div>

::: demo
``` html

<k-input input-type="text" type="primary" placeholder="我是一个文本框" class="marginBottom10" disabled></k-input>
<k-input input-type="textarea" placeholder="我是一个文本域" disabled></k-input>

```
:::

## 与Tip组合使用
<div class="demo-block">
    <k-tip content="我是基础的Tip" placement="bottomRight">
      <k-input input-type="text" type="primary" placeholder="我是一个文本框" class="marginBottom10" style="width: 300px;"></k-input>
    </k-tip>
</div>

::: demo
``` html

<k-tip content="我是基础的Tip" placement="bottomRight">
    <k-input input-type="text" type="primary" placeholder="我是一个文本框" class="marginBottom10"></k-input>
</k-tip>

```
:::

## 带有图标的Input
<div class="demo-block">
    <k-input input-type="text" type="primary" placeholder="看不见我..." class="marginBottom10" style="width: 200px;">
        <i slot="inputIcon" class="k-icon">&#xe602;</i>
    </k-input>
</div>

::: demo
``` html
<k-input input-type="text" type="primary" placeholder="看不见我..." class="marginBottom10" style="width: 200px;">
    <i slot="inputIcon" class="k-icon">&#xe602;</i>
</k-input>
```
:::

## 自动补齐
智能提示
<div class="demo-block">
    <span>尚未进行开发</span>
</div>

## 清空内容
一键清理掉文本框的内容
<div class="demo-block">
    <span>尚未进行开发</span>
</div>

## 最大最小长度
可以控制文本框的最大最小长度。
<div class="demo-block">
    <span>尚未进行开发</span>
</div>