# Table 表格
---
## 基础展示
<div class="demo-block">
    <template>
        <k-table :data="dataSource">
            <column label="游戏名称" field="gameName">
                <column label="demo" field="">
                    <column label="demo" field=""></column>
                    <column label="demo" field=""></column>
                    <column label="demo" field=""></column>
                </column>
                <column label="demo" field=""></column>
                <column label="demo" field=""></column>
            </column>
            <column label="游戏类型" field="gameType"></column>
            <column label="游戏厂商" field="gameCompany"></column>
            <column label="游戏大小" field="gameLength"></column>
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
<template>
    <k-table :data="dataSource">
        <column label="游戏名称" field="gameName"></column>
        <column label="游戏类型" field="gameType"></column>
        <column label="游戏厂商" field="gameCompany"></column>
        <column label="游戏大小" field="gameLength"></column>
    </k-table>
</template>
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

## 固定表头
为表格设定高度 当内容超出设定的高度之后 会自动固定表头。
<div class="demo-block">
    <!-- <k-table :data="dataSource" :height="200">
        <column label="游戏名称" field="gameName"></column>
        <column label="游戏类型" field="gameType"></column>
        <column label="游戏厂商" field="gameCompany"></column>
        <column label="游戏大小" field="gameLength"></column>
    </k-table> -->
</div>

::: demo
``` html
<template>
    <k-table :data="dataSource" :height="200">
        <column label="游戏名称" field="gameName"></column>
        <column label="游戏类型" field="gameType"></column>
        <column label="游戏厂商" field="gameCompany"></column>
        <column label="游戏大小" field="gameLength"></column>
    </k-table>
</template>
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

## 边框以及斑马线
为表格设置边框以及斑马线
<div class="demo-block">
<!-- <k-table :data="dataSource" :bordered="true" :striped="true">
    <column label="游戏名称" field="gameName"></column>
    <column label="游戏类型" field="gameType"></column>
    <column label="游戏厂商" field="gameCompany"></column>
    <column label="游戏大小" field="gameLength"></column>
</k-table> -->
</div>

::: demo
``` html

<k-table :data="dataSource" :bordered="true" :striped="true">
    <column label="游戏名称" field="gameName"></column>
    <column label="游戏类型" field="gameType"></column>
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

## 排序
对表格进行排序
<div class="demo-block">
<!-- <k-table :data="dataSource" :bordered="true" :striped="true">
    <column label="游戏名称" field="gameName" sorter="custom"></column>
    <column label="游戏类型" field="gameType" sorter="custom"></column>
    <column label="游戏厂商" field="gameCompany"></column>
    <column label="游戏大小" field="gameLength"></column>
</k-table> -->
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

## 自定义列模板
<div class="demo-block">
<!-- <k-table :data="dataSource" :bordered="true" :striped="true">
        <column label="游戏名称" field="gameName" sorter="custom"></column>
        <column label="游戏类型" field="gameType" sorter="custom"></column>
        <column label="游戏厂商">
            <template slot-scope="row">
                <k-tag type="primary">{{ row.gameCompany }}</k-tag>
            </template>
        </column>
        <column label="游戏大小" field="gameLength"></column>
    </k-table> -->
</div>

## 带有分页的表格
<div class="demo-block">
<!-- <k-table :data="dataSource" :bordered="true" :striped="true" :pagination="pagination" checkable>
    <column label="游戏名称" field="gameName" sorter="custom"></column>
    <column label="游戏类型" field="gameType" sorter="custom"></column>
    <column label="游戏厂商">
        <template slot-scope="row">
            <k-tag type="primary">{{ row.gameCompany }}</k-tag>
        </template>
    </column>
    <column label="游戏大小" field="gameLength"></column>
</k-table> -->
</div>

::: demo
``` html
<k-table :data="dataSource" :bordered="true" :striped="true" :pagination="pagination">
    <column label="游戏名称" field="gameName" sorter="custom"></column>
    <column label="游戏类型" field="gameType" sorter="custom"></column>
    <column label="游戏厂商">
        <template slot-scope="row">
            <k-tag type="primary">{{ row.gameCompany }}</k-tag>
        </template>
    </column>
    <column label="游戏大小" field="gameLength"></column>
</k-table>
<script>
    export default {
        data () {
        return {
            pagination: {
            total: 800,
            current: 5
            },
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

## 带有索引的表格
<div class="demo-block">
<!-- <k-table :data="dataSource" :bordered="true" :striped="true" :pagination="pagination" show-index>
    <column label="游戏名称" field="gameName" sorter="custom"></column>
    <column label="游戏类型" field="gameType" sorter="custom"></column>
    <column label="游戏厂商">
        <template slot-scope="row">
            <k-tag type="primary">{{ row.gameCompany }}</k-tag>
        </template>
    </column>
    <column label="游戏大小" field="gameLength"></column>
</k-table> -->
</div>

## 带有复选框的表格
<div class="demo-block">
<!-- <k-table :data="dataSource" :bordered="true" :striped="true" :pagination="pagination" checkable show-index :on-select-change="onSelectChange" :single-selection="true" :narrow="true">
    <column label="游戏名称" field="gameName" sorter="custom"></column>
    <column label="游戏类型" field="gameType" sorter="custom"></column>
    <column label="游戏厂商">
        <template slot-scope="row">
            <k-tag type="primary">{{ row.gameCompany }}</k-tag>
        </template>
    </column>
    <column label="游戏大小" field="gameLength"></column>
</k-table> -->
</div>

## 综合展示
<div class="demo-block">
<!-- <k-table :data="dataSource" :bordered="true" :striped="true" :pagination="pagination" checkable show-index :on-select-change="onSelectChange" :single-selection="true" :narrow="true">
    <column label="游戏信息" field="gameInfo" :mergeTh="true"></column>
    <column label="游戏名称" field="gameName" sorter="custom"></column>
    <column label="游戏类型" field="gameType" sorter="custom"></column>
    <column label="游戏厂商">
        <template slot-scope="row">
            <k-tag type="primary">{{ row.gameCompany }}</k-tag>
        </template>
    </column>
    <column label="游戏大小" field="gameLength"></column>
</k-table> -->
</div>

::: demo
``` html

<div></div>

```
:::
