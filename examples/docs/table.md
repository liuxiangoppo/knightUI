<style>
.thCenter {text-align: center;color:red;}
</style>
# Table 表格
---
## 基础展示
<div class="demo-block">
    <k-table :data="dataSource" :columns="columns_demo1" :bordered="true"></k-table>
</div>

## 多表头
<div class="demo-block">
    <k-alert type="warning" class="marginBottom10">
        <span>平台的表格中很多都拥有多表头的显示 特此支持!</span>
    </k-alert>
    <template>
        <k-table :data="dataSource" :columns="columns" :bordered="true">
        </k-table>
    </template>
    <script>
        export default {
          data () {
            return {
              pagination: {
                total: 800,
                current: 5
              },
              columns_demo1: [
                  [{
                    field: 'username',
                    title: '姓名'
                },{
                    field: 'height',
                    title: '身高'
                },{
                    field: 'sex',
                    title: '性别'
                },{
                    field: 'address',
                    title: '住址'
                },{
                    field: 'hobby',
                    title: '爱好'
                }]
              ],
              columns_demo2: [
                  [{
                    field: 'username',
                    title: '姓名',
                    sorter: 'custom'
                },{
                    field: 'height',
                    title: '身高',
                    sorter: 'custom'
                },{
                    field: 'sex',
                    title: '性别'
                },{
                    field: 'address',
                    title: '住址'
                },{
                    field: 'hobby',
                    title: '爱好'
                }]
              ],
              columns_demo3: [
                [{
                    field: 'code',
                    title: '编号',
                    rowspan: 2,
                    sorter: 'custom'
                },{
                    title: '基础信息',
                    colspan: 2
                },{
                    title: '其他信息',
                    colspan: 3
                }],
                [{
                    field: 'username',
                    title: '姓名',
                    sorter: 'custom'
                },{
                    field: 'height',
                    title: '身高'
                },{
                    field: 'sex',
                    title: '性别'
                },{
                    field: 'address',
                    title: '住址'
                },{
                    field: 'hobby',
                    title: '爱好'
                }]
              ],
              columns_demo4: [
                [{
                    field: 'code',
                    title: '编号',
                    rowspan: 2,
                    sorter: 'custom',
                    className: 'thCenter'
                },{
                    title: '基础信息',
                    colspan: 2
                },{
                    title: '其他信息',
                    colspan: 3
                }],
                [{
                    field: 'username',
                    title: '姓名',
                    sorter: 'custom'
                },{
                    field: 'height',
                    title: '身高'
                },{
                    field: 'sex',
                    title: '性别'
                },{
                    field: 'address',
                    title: '住址'
                },{
                    field: 'hobby',
                    title: '爱好'
                }]
              ],
              columns_demo5: [
                [{
                    field: 'code',
                    title: '编号',
                    rowspan: 2,
                    sorter: 'custom',
                    className: 'thCenter'
                },{
                    title: '基础信息',
                    colspan: 2
                },{
                    title: '其他信息',
                    colspan: 3
                }],
                [{
                    field: 'username',
                    title: '姓名',
                    sorter: 'custom'
                },{
                    field: 'height',
                    title: '身高'
                },{
                    field: 'sex',
                    title: '性别'
                },{
                    field: 'address',
                    title: '住址'
                },{
                    field: 'hobby',
                    title: '爱好',
                    render: (h, {row, column}) => {
                        return h('k-tag', row[column.field])
                    }
                }]
              ],
              columns_demo6: [
                [{
                    field: 'code',
                    title: '编号',
                    rowspan: 2,
                    sorter: 'custom',
                    className: 'thCenter',
                    isFrozen: true
                },{
                    title: '基础信息',
                    colspan: 2
                },{
                    title: '其他信息',
                    colspan: 3
                }],
                [{
                    field: 'username',
                    title: '姓名',
                    sorter: 'custom'
                },{
                    field: 'height',
                    title: '身高'
                },{
                    field: 'sex',
                    title: '性别'
                },{
                    field: 'address',
                    title: '住址'
                },{
                    field: 'hobby',
                    title: '爱好',
                    render: (h, {row, column}) => {
                        return h('k-tag', row[column.field])
                    }
                }]
              ],
              columns: [
                [{
                    field: 'code',
                    title: '编号',
                    rowspan: 2
                },{
                    title: '基础信息',
                    colspan: 2
                },{
                    title: '其他信息',
                    colspan: 3
                }],
                [{
                    field: 'username',
                    title: '姓名'
                },{
                    field: 'height',
                    title: '身高'
                },{
                    field: 'sex',
                    title: '性别'
                },{
                    field: 'address',
                    title: '住址'
                },{
                    field: 'hobby',
                    title: '爱好'
                }]
              ],
              columns_demo7: [
                  [{
                    field: 'username',
                    title: '姓名',
                    isFrozen: true,
                    width: 100
                },{
                    field: 'height',
                    title: '身高',
                    isFrozen: true,
                    width: 100
                },{
                    field: 'sex',
                    title: '性别',
                    width: 150
                },{
                    field: 'address',
                    title: '住址',
                    width: 150
                },{
                    field: 'hobby',
                    title: '爱好',
                    width: 150
                }, {
                    field: 'action',
                    title: '操作',
                    width: 150,
                    className: 'thCenter',
                    isFrozen: 'right',
                    render: (h, {row, column}) => {
                        return [
                          h('button', {
                            class: 'button is-danger'
                          }, '编辑'),
                          h('button', {
                            class: 'button is-danger',
                            style: 'margin-left: 5px'
                          }, '移除')
                        ]
                    }
                }]
              ],
              dataSource: [{
                  code: 'CM37020001',
                  username: '吕云飞',
                  height: 180,
                  sex: '男',
                  address: '云南',
                  hobby: '唱歌'
                }, {
                  code: 'CM37020001',
                  username: '吕云鹏',
                  height: 180,
                  sex: '男',
                  address: '云南',
                  hobby: '唱歌'
                }, {
                  code: 'CM37020001',
                  username: '王鹏',
                  height: 180,
                  sex: '男',
                  address: '云南',
                  hobby: '唱歌'
                }, {
                  code: 'CM37020001',
                  username: '吕云鹏',
                  height: 180,
                  sex: '男',
                  address: '云南',
                  hobby: '唱歌'
                }, {
                  code: 'CM37020001',
                  username: '李东',
                  height: 180,
                  sex: '男',
                  address: '云南',
                  hobby: '唱歌'
                }, {
                  code: 'CM37020001',
                  username: '吕云鹏',
                  height: 180,
                  sex: '男',
                  address: '云南',
                  hobby: '唱歌'
                }, {
                  code: 'CM37020001',
                  username: '吕云鹏',
                  height: 180,
                  sex: '男',
                  address: '云南',
                  hobby: '唱歌'
                }, {
                  code: 'CM37020001',
                  username: '吕云鹏',
                  height: 180,
                  sex: '男',
                  address: '云南',
                  hobby: '唱歌'
                }]
            }
          },
          methods: {
              onSelectChange (selectedRowKeys, selectedRows) {
                  console.log(selectedRowKeys)
                  console.log(selectedRows)
              }
          }
        }
    </script>
</div>

::: demo
``` html
<k-table :data="dataSource" :columns="columns" :bordered="true"></k-table>
```
:::

## 固定表头
为表格设定高度 当内容超出设定的高度之后 会自动固定表头。
<div class="demo-block">
    <k-table :data="dataSource" :columns="columns_demo1" :bordered="true" :height="200"></k-table>
    <br/>
    <k-table :data="dataSource" :columns="columns" :bordered="true" :height="200"></k-table>
</div>

::: demo
``` html
<k-table :data="dataSource" :columns="columns_demo1" :bordered="true" :height="200"></k-table>
<br/>
<k-table :data="dataSource" :columns="columns" :bordered="true" :height="200"></k-table>
```
:::

## 边框以及斑马线
为表格设置边框以及斑马线
<div class="demo-block">
  <k-table :data="dataSource" :columns="columns_demo1" :bordered="true" :bordered="true" :striped="true"></k-table>
</div>

::: demo
``` html

<k-table :data="dataSource" :columns="columns_demo1" :bordered="true" :bordered="true" :striped="true"></k-table>

```
:::

## 排序
对表格进行排序
<div class="demo-block">
    <k-table :data="dataSource" :columns="columns_demo2" :bordered="true" :bordered="true" :striped="true"></k-table>
    <br/>
    <k-table :data="dataSource" :columns="columns_demo3" :bordered="true" :bordered="true" :striped="true"></k-table>
</div>

::: demo
``` html
<k-table :data="dataSource" :bordered="true" :striped="true">
    <column label="游戏名称" field="gameName" sorter="custom"></column>
    <column label="游戏类型" field="gameType" sorter="custom"></column>
    <column label="游戏厂商" field="gameCompany"></column>
    <column label="游戏大小" field="gameLength"></column>
</k-table>
<script>
    export default {
        data () {
        return {
            dataSource: [{
                gameName: '逆水寒',
                gameType: 'MMORPG',
                gameCompany: '网易',
                gameLength: '24G'
            },{
                gameName: '剑灵',
                gameType: 'MMORPG',
                gameCompany: '腾讯',
                gameLength: '30G'
            },{
                gameName: '王者荣耀',
                gameType: '手游',
                gameCompany: '腾讯',
                gameLength: '10G'
            },{
                gameName: '剑网三',
                gameType: 'MMORPG',
                gameCompany: '西山居',
                gameLength: '70G'
            },{
                gameName: '炉石传说',
                gameType: '卡牌',
                gameCompany: '暴雪',
                gameLength: '1G'
            },{
                gameName: '传奇',
                gameType: 'MMORPG',
                gameCompany: '盛大游戏',
                gameLength: '10G'
            },{
                gameName: '黑色沙漠',
                gameType: 'MMORPG',
                gameCompany: '蜗牛',
                gameLength: '24G'
            },{
                gameName: '使命召唤',
                gameType: '射击类游戏',
                gameCompany: '育碧',
                gameLength: '30G'
            }]
        }
        }
    }
</script>
```
:::

## 列样式自定义
<div class="demo-block">
<k-alert type="warning" class="marginBottom10">
    <span>可以通过设置列属性className来附加不同的样式。</span>
</k-alert>
<k-table :data="dataSource" :columns="columns_demo4" :bordered="true" :bordered="true" :striped="true" :pagination="pagination"></k-table>
</div>

::: demo
``` html
<k-table :data="dataSource" :columns="columns_demo4" :bordered="true" :bordered="true" :striped="true" :pagination="pagination"></k-table>
```
:::

## 自定义列模板
<div class="demo-block">
    <k-info title="注意" mode="flat">
    <p>通过定义列实体的render函数 可以自定义列的渲染。</p>
    <p>实例:</p>
    <p style="color:orange;">render: (h, (row, column)) => { ... }</p>
    </k-info>
    <k-table :data="dataSource" :columns="columns_demo5" :bordered="true" :bordered="true" :striped="true" :pagination="pagination"></k-table>
</div>

::: demo
``` html
<k-table :data="dataSource" :columns="columns_demo5" :bordered="true" :bordered="true" :striped="true" :pagination="pagination"></k-table>
```
:::

## 带有分页的表格
<div class="demo-block">
<k-table :data="dataSource" :columns="columns" :bordered="true" :bordered="true" :striped="true" :pagination="pagination"></k-table>
</div>

::: demo
``` html
<k-table :data="dataSource" :columns="columns" :bordered="true" :bordered="true" :striped="true" :pagination="pagination"></k-table>
```
:::

## 带有索引的表格
<div class="demo-block">
<k-table :data="dataSource" :columns="columns" :bordered="true" :bordered="true" :striped="true" checkable show-index></k-table>
</div>

::: demo
``` html
<k-table :data="dataSource" :columns="columns" :bordered="true" :bordered="true" :striped="true" checkable show-index></k-table>
```
:::

## 带有复选框的表格
<div class="demo-block">
<k-table :data="dataSource" :columns="columns_demo1" :bordered="true" :bordered="true" :striped="true" checkable></k-table>
</div>

::: demo
``` html
<k-table :data="dataSource" :columns="columns_demo1" :bordered="true" :bordered="true" :striped="true" checkable></k-table>
```
:::

## 综合展示
<div class="demo-block">

</div>

::: demo
``` html

<div></div>

```
:::

## 固定列
<div class="demo-block">
<!---->
<k-table :data="dataSource" :columns="columns_demo7" :bordered="true" checkable :height="200" :width="700"></k-table>
</div>

## 树形表格
<div class="demo-block">
    <!-- <k-alert type="primary" class="marginBottom10">树形表格 为了响应平台的需求。</k-alert> -->
</div>

## 汇总行
<div class="demo-block">
</div>

## 数据加载时的显示
<div class="demo-block">

</div>