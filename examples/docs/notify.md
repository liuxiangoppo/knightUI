<style>
.white-text {
  color: #FFF;
}
</style>
# Notify 通知
----
## 基础使用
<div class="demo-block">
    <template>
        <button class="button marginBottom10" @click="demo">默认</button>
        <button class="button is-primary marginBottom10" @click="demo1">优先</button>
        <button class="button is-success marginBottom10" @click="demo2">成功</button>
        <button class="button is-warning marginBottom10" @click="demo3">警告</button>
        <button class="button is-danger marginBottom10" @click="demo4">危险</button>
        <button class="button is-info marginBottom10" @click="demo5">信息</button>
        <br/><br/>
        <button class="button is-primary marginBottom10" @click="wait10s">10s关闭</button>
        <button class="button is-primary marginBottom10" @click="demo2">自定义icon</button>
        <button class="button is-primary marginBottom10" @click="position">自定义位置</button>
        <button class="button is-primary marginBottom10" @click="hideClose">隐藏关闭按钮</button>
    </template>
    <script>
        export default {
            methods: {
            hideClose () {
                this.$KNotify({
                    title: '标题',
                    message: '这是一条短信~',
                    position: 'topLeft',
                    closed: true
                })
            },
            position () {
                this.$KNotify({
                    title: '标题',
                    message: '这是一条短信~',
                    position: 'topLeft'
                })
            },
            wait10s () {
                this.$KNotify({
                    title: '标题',
                    message: '这是一条短信~',
                    time: 10000
                })
            },
            demo () {
                this.$KNotify({
                    title: '标题',
                    message: '这是一条短信~',
                    time: 0
                })
            },
            demo1 () {
                this.$KNotify({
                    title: '标题',
                    message: '这是一条短信~',
                    type: 'primary'
                })
            },
            demo2 () {
                this.$KNotify({
                    title: '标题',
                    message: '这是一条短信~',
                    type: 'success'
                })
            },
            demo3 () {
                this.$KNotify({
                    title: '标题',
                    message: '这是一条短信~',
                    type: 'warning'
                })
            },
            demo4 () {
                this.$KNotify({
                    title: '标题',
                    message: '这是一条短信~',
                    type: 'danger'
                })
            },
            demo5 () {
                this.$KNotify({
                    title: '标题',
                    message: '这是一条短信~',
                    type: 'info'
                })
            }
  }
        }
    </script>
</div>

::: demo
```html

```
:::

## 属性
| 成员      | 说明                                 | 类型      | 可选值       | 默认值   |
|---------- |------------------------------------ |---------- |------------- |-------- |
|type      |主题颜色,可选值为```primary``` ```info``` ```success``` ```danger``` ```warning``` |	String   |	无 |	无       |
|title	      | 标题                                |	String    | 无|	无 |
|content      |内容 |	String   |	无           |	无       |
|time	      | 延时多长时间关闭 单位毫秒                               |	Number    | 无|	3000 |
|position      |位置 ```topLeft``` ```topRight``` ```bottomLeft``` ```bottomRight```|	String   |	无           |	topRight       |
|showClose	      | 是否显示关闭按钮                                |	Boolean    | 无|	false |