# ProgressBar 进度条
-----

## 基础展示
<div class="demo-block">
<k-progressbar :percent="45" type="primary" :showinfo="true"></k-progressbar>
<k-progressbar :percent="30" type="info" :showinfo="true"></k-progressbar>
<k-progressbar :percent="50" type="success" :showinfo="true"></k-progressbar>
<k-progressbar :percent="60" type="danger" :showinfo="true" :info-inside="false"></k-progressbar>
<k-progressbar :percent="65" type="warning" :showinfo="true" :striped="true" :animated="true"></k-progressbar>
</div>

::: demo
``` html

<k-progressbar :percent="45" type="primary" :showinfo="true"></k-progressbar>
<k-progressbar :percent="30" type="info" :showinfo="true"></k-progressbar>
<k-progressbar :percent="50" type="success" :showinfo="true"></k-progressbar>
<k-progressbar :percent="60" type="danger" :showinfo="true"></k-progressbar>
<k-progressbar :percent="65" type="warning" :showinfo="true" :striped="true" :animated="true"></k-progressbar>

```
:::

## 属性
| 成员      | 说明                                 | 类型      | 可选值       | 默认值   |
|---------- |------------------------------------ |---------- |------------- |-------- |
|type      |主题颜色,可选值为```primary``` ```info``` ```success``` ```danger``` ```warning``` |	String   |	无           |	无       |
|size      |标签大小,可选值为```small``` ```medium``` ```large``` |	String   |	无           |	无       |
|percent	      | 百分比 不带有百分比符号                               |	Number    | 无|	0 |
|showinfo      |是否显示进度数值 |	Boolean   |	无           |	false       |
|info-inside	      | 进度信息的显示是否在进度条内部                                |	Boolean    | 无|	true |
|format	      | 显示信息的模板函数                                |	Function    | 无|	```return precent + '%'``` |