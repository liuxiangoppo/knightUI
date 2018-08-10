<style>
    .ul {
        list-style: none;
    }
</style>
# Radio 单选框
----

## 基础展示
<div class="demo-block">
    <h3>选一辆自己中意的车:</h3>
    <ul class="ul">
        <li>
            <k-radio input-name="car" label="奥迪A4L" input-value="0"></k-radio>
        </li>
        <li>
            <k-radio input-name="car" label="宝马320I" input-value="0"></k-radio>
        </li>
        <li>
            <k-radio input-name="car" label="奔驰C200L" input-value="0"></k-radio>
        </li>
        <li>
            <k-radio input-name="car" label="凯迪拉克ATSL" input-value="0"></k-radio>
        </li>
    </ul>
</div>

::: demo
``` html

<ul class="ul">
    <li>
        <k-checkbox input-name="car" label="奥迪A4L" input-value="0"></k-checkbox>
    </li>
    <li>
        <k-checkbox input-name="car" label="宝马320I" input-value="0"></k-checkbox>
    </li>
    <li>
        <k-checkbox input-name="car" label="奔驰C200L" input-value="0"></k-checkbox>
    </li>
    <li>
        <k-checkbox input-name="car" label="凯迪拉克ATSL" input-value="0"></k-checkbox>
    </li>
</ul>

```
:::

## 配置
| 成员      | 说明                                 | 类型      | 可选值       | 默认值   |
|---------- |------------------------------------ |---------- |------------- |-------- |
|input-name      |元素名称 |	String   |	无           |	none       |
|input-id	      | 元素ID                                |	String    | 无|	none |
|label      |标题 |	String   |	无           |	none       |
|input-value	      | 元素值                                |	String    | 无|	none |
