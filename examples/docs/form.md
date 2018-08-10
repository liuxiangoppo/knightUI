<style>
    .demo {
        list-style: none;
        margin: 0;
        padding: 0;
    }
</style>
# Form 表单
----

## 基础展示
<div class="demo-block">
    <k-form>
    <k-form-item label-for="userName" label-name="用户名称:">
        <k-input input-name="userName" placeholder="用户名称" type="danger"></k-input>
    </k-form-item>
    <k-form-item label-for="password" label-name="密码:">
        <k-input input-type="password" input-name="password" placeholder="密码" type="danger"></k-input>
    </k-form-item>
    <k-form-item label-name="性别:">
        <k-radio input-name="sex" label="男生" input-id="male" input-value="0"></k-radio>
        <k-radio input-name="sex" label="女生" input-id="female" input-value="1"></k-radio>
    </k-form-item>
    <k-form-item label-name="喜欢的食物:">
        <k-checkbox input-name="food" label="苹果" input-id="pingguo" input-value="0"></k-checkbox>
        <k-checkbox input-name="food" label="西瓜" input-id="xigua" input-value="1"></k-checkbox>
        <k-checkbox input-name="food" label="樱桃" input-id="yingtao" input-value="2"></k-checkbox>
        <k-checkbox input-name="food" label="西红柿" input-id="西红柿" input-value="3"></k-checkbox>
    </k-form-item>
    <k-form-item label-name="简单介绍:">
        <k-input input-type="textarea" input-name="desc" :rows="3" :cols="10" placeholder="简单说几句吧~"></k-input>
    </k-form-item>
    <button class="button is-primary">确定</button>
    <button class="button">取消</button>
    </k-form>
</div>

::: demo
``` html
<k-form>
    <k-form-item label-for="userName" label-name="用户名称:">
        <k-input input-name="userName" placeholder="用户名称" type="danger"></k-input>
    </k-form-item>
    <k-form-item label-for="password" label-name="密码:">
        <k-input input-type="password" input-name="password" placeholder="密码" type="danger"></k-input>
    </k-form-item>
    <k-form-item label-name="性别:">
        <k-radio input-name="sex" label="男生" input-id="male" input-value="0"></k-radio>
        <k-radio input-name="sex" label="女生" input-id="female" input-value="1"></k-radio>
    </k-form-item>
    <k-form-item label-name="喜欢的食物:">
        <k-checkbox input-name="food" label="苹果" input-id="pingguo" input-value="0"></k-checkbox>
        <k-checkbox input-name="food" label="西瓜" input-id="xigua" input-value="1"></k-checkbox>
        <k-checkbox input-name="food" label="樱桃" input-id="yingtao" input-value="2"></k-checkbox>
        <k-checkbox input-name="food" label="西红柿" input-id="西红柿" input-value="3"></k-checkbox>
    </k-form-item>
    <k-form-item label-name="简单介绍:">
        <k-input input-type="textarea" input-name="desc" :rows="3" :cols="10" placeholder="简单说几句吧~"></k-input>
    </k-form-item>
    <button class="button is-primary">确定</button>
    <button class="button">取消</button>
    </k-form>
```
:::

## 设置标签位置
标签位置有三个值可选:```top```、```left```、```right```
<div class="demo-block">
  <template>
    <div class="marginBottom10">
        <button class="button is-primary" @click="setTop">Top</button>
        <button class="button is-primary" @click="setLeft">Left</button>
        <button class="button is-primary" @click="setRight">Right</button>
    </div>
    <k-form :label-position="position" label-width="100px">
      <k-form-item label-for="userName" label-name="用户名称:">
        <k-input input-name="userName" placeholder="用户名称" type="danger"></k-input>
      </k-form-item>
      <k-form-item label-for="password" label-name="密码:">
        <k-input input-type="password" input-name="password" placeholder="密码" type="danger"></k-input>
    </k-form-item>
    <k-form-item label-name="性别:">
        <k-radio-group>
            <k-radio input-name="sex" label="男生" input-id="male1" input-value="0"></k-radio>
            <k-radio input-name="sex" label="女生" input-id="female2" input-value="1"></k-radio>
        </k-radio-group>
    </k-form-item>
    <k-form-item label-name="喜欢的食物:">
        <k-checkbox input-name="food" label="苹果" input-id="pingguo1" input-value="0"></k-checkbox>
        <k-checkbox input-name="food" label="西瓜" input-id="xigua1" input-value="1"></k-checkbox>
        <k-checkbox input-name="food" label="樱桃" input-id="yingtao1" input-value="2"></k-checkbox>
        <k-checkbox input-name="food" label="西红柿" input-id="xihongshi1" input-value="3"></k-checkbox>
    </k-form-item>
    <k-form-item label-name="简单介绍:">
        <k-input input-type="textarea" input-name="desc" :rows="3" :cols="10" placeholder="简单说几句吧~"></k-input>
    </k-form-item>
    <button class="button is-primary">确定</button>
    <button class="button">取消</button>
    </k-form>
  </template>
  <script>
      export default {
          data () {
              return {
                  position: 'top'
              }
          },
          methods: {
              setTop () {
                  // Todo
                  this.position = 'top'
              },
              setLeft () {
                  // Todo
                  this.position = 'left'
              },
              setRight () {
                  // Todo
                  this.position = 'right'
              }
          }
      }
  </script>
</div>

::: demo
``` html

<k-form label-position="left" label-width="100px">
      <k-form-item label-for="userName" label-name="用户名称:">
        <k-input input-name="userName" placeholder="用户名称" type="danger"></k-input>
      </k-form-item>
      <k-form-item label-for="password" label-name="密码:">
        <k-input input-type="password" input-name="password" placeholder="密码" type="danger"></k-input>
    </k-form-item>
    <k-form-item label-name="性别:">
        <k-radio-group>
            <k-radio input-name="sex" label="男生" input-id="male1" input-value="0"></k-radio>
            <k-radio input-name="sex" label="女生" input-id="female2" input-value="1"></k-radio>
        </k-radio-group>
    </k-form-item>
    <k-form-item label-name="喜欢的食物:">
        <k-checkbox input-name="food" label="苹果" input-id="pingguo1" input-value="0"></k-checkbox>
        <k-checkbox input-name="food" label="西瓜" input-id="xigua1" input-value="1"></k-checkbox>
        <k-checkbox input-name="food" label="樱桃" input-id="yingtao1" input-value="2"></k-checkbox>
        <k-checkbox input-name="food" label="西红柿" input-id="xihongshi1" input-value="3"></k-checkbox>
    </k-form-item>
    <k-form-item label-name="简单介绍:">
        <k-input input-type="textarea" input-name="desc" :rows="3" :cols="10" placeholder="简单说几句吧~"></k-input>
    </k-form-item>
    <button class="button is-primary">确定</button>
    <button class="button">取消</button>
    </k-form>


```
:::

## 行内表单
<div class="demo-block">
    <k-form :inline="true">
        <k-form-item label-for="userName" label-name="用户名称:">
            <k-input input-name="userName" placeholder="用户名称" type="danger"></k-input>
        </k-form-item>
        <k-form-item label-for="password" label-name="密码:">
            <k-input input-type="password" input-name="password" placeholder="密码" type="danger"></k-input>
        </k-form-item>
        <button class="button is-primary">确定</button>  
    </k-form>
</div>

::: demo
``` html

<k-form :inline="true">
    <k-form-item label-for="userName" label-name="用户名称:">
        <k-input input-name="userName" placeholder="用户名称" type="danger"></k-input>
    </k-form-item>
    <k-form-item label-for="password" label-name="密码:">
        <k-input input-type="password" input-name="password" placeholder="密码" type="danger"></k-input>
    </k-form-item>
    <button class="button is-primary">确定</button>  
</k-form>

```
:::

## 配合栅格系统进行复杂布局
略复杂的布局建议还是搭配栅格化系统来辅助进行。
<div class="demo-block">
    <k-form :inline="true"  label-position="left" label-width="80px">
        <k-row :gutter="10">
            <k-col :span="6">
                <k-form-item label-for="userName" label-name="用户名称:">
                    <k-input input-name="userName" placeholder="用户名称" type="danger"></k-input>
                </k-form-item>
            </k-col>
            <k-col :span="6">
                <k-form-item label-for="password" label-name="密码:">
                    <k-input input-type="password" input-name="password" placeholder="密码" type="danger"></k-input>
                </k-form-item>
            </k-col>
        </k-row>
        <k-row :gutter="10">
            <k-col :span="6">
                <k-form-item label-name="性别:">
                    <k-radio-group>
                        <k-radio input-name="sex" label="男生" input-id="male3" input-value="0"></k-radio>
                        <k-radio input-name="sex" label="女生" input-id="female4" input-value="1"></k-radio>
                    </k-radio-group>
                </k-form-item>
            </k-col>
            <k-col :span="6">
                <k-form-item label-name="喜欢的食物:">
                    <k-checkbox input-name="food" label="苹果" input-id="pingguo5" input-value="0"></k-checkbox>
                    <k-checkbox input-name="food" label="西瓜" input-id="xigua7" input-value="1"></k-checkbox>
                    <k-checkbox input-name="food" label="樱桃" input-id="yingtao6" input-value="2"></k-checkbox>
                    <k-checkbox input-name="food" label="西红柿" input-id="xihongshi9" input-value="3"></k-checkbox>
                </k-form-item>
            </k-col>
        </k-row>
        <k-row :gutter="10">
            <k-col :span="12">
                <k-form-item label-name="简单介绍:">
                    <k-input input-type="textarea" input-name="desc" placeholder="简单说几句吧~"></k-input>
                </k-form-item>
            </k-col>
        </k-row>
  </k-form>
</div>

## 数据校验
<div class="demo-block">
这个坑还没填平。
</div>