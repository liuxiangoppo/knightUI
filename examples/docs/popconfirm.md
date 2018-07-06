# Popconfirm Pop确认框
----

## 基础展示
<div class="demo-block">
<k-popconfirm content="确定删除此条内容？不可恢复">
  <button class="button">确定</button>
</k-popconfirm>

<k-popconfirm content="通过审核？" :show-cancel="false">
  <button class="button is-primary">带有图标的确认框</button>
</k-popconfirm>

<k-popconfirm content="通过审核？" :on-ok="ok" :on-cancel="cancel">
  <button class="button is-primary">回调函数</button>
</k-popconfirm>

<script>
  export default {
    methods: {
      ok() {
        this.$KNotify({message: '删除成功!'});
      },
      cancel() {
        this.$KNotify({message: '取消删除!'});
      },
    },
  };
</script>
</div>

::: demo
``` html

<k-popconfirm content="确定删除此条内容？不可恢复">
  <button class="button">确定</button>
</k-popconfirm>

<k-popconfirm content="通过审核？" :show-cancel="false" icon="question-circle-o">
  <button class="button is-primary">带有图标的确认框</button>
</k-popconfirm>

<k-popconfirm content="通过审核？" icon="question-circle-o" :on-ok="ok" :on-cancel="cancel">
  <button class="button is-primary">回调函数</button>
</k-popconfirm>

<script>
  export default {
    methods: {
      ok() {
        this.$KNotify({message: '删除成功!'});
      },
      cancel() {
        this.$KNotify({message: '取消删除!'});
      },
    },
  };
</script>

``` 
::: 