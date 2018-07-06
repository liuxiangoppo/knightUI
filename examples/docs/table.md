# Table 表格
---
## 基础展示
<div class="demo-block">
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
                  gameType: 'mmorpg',
                  gameCompany: '网易',
                  gameLength: '24G'
              },{
                  gameName: '剑灵',
                  gameType: 'mmorpg',
                  gameCompany: '腾讯',
                  gameLength: '30G'
              },{
                  gameName: '王者荣耀',
                  gameType: '手游',
                  gameCompany: '腾讯',
                  gameLength: '10G'
              },{
                  gameName: '剑网三',
                  gameType: 'mmorpg',
                  gameCompany: '西山居',
                  gameLength: '70G'
              },{
                  gameName: '炉石传说',
                  gameType: '卡牌',
                  gameCompany: '暴雪',
                  gameLength: '1G'
              },{
                  gameName: '传奇',
                  gameType: 'mmorpg',
                  gameCompany: '盛大游戏',
                  gameLength: '10G'
              },{
                  gameName: '黑色沙漠',
                  gameType: 'mmorpg',
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
</div>

## 固定表头
为表格设定高度 当内容超出设定的高度之后 会自动固定表头。
<div class="demo-block">
    <k-table :data="dataSource" :height="200">
        <column label="游戏名称" field="gameName"></column>
        <column label="游戏类型" field="gameType"></column>
        <column label="游戏厂商" field="gameCompany"></column>
        <column label="游戏大小" field="gameLength"></column>
    </k-table>
</div>

## 边框以及斑马线
为表格设置边框以及斑马线
<div class="demo-block">
<k-table :data="dataSource" :bordered="true" :striped="true">
        <column label="游戏名称" field="gameName"></column>
        <column label="游戏类型" field="gameType"></column>
        <column label="游戏厂商" field="gameCompany"></column>
        <column label="游戏大小" field="gameLength"></column>
    </k-table>
</div>

## 排序
对表格进行排序
<div class="demo-block">
<k-table :data="dataSource" :bordered="true" :striped="true">
        <column label="游戏名称" field="gameName" sorter="custom"></column>
        <column label="游戏类型" field="gameType" sorter="custom"></column>
        <column label="游戏厂商" field="gameCompany"></column>
        <column label="游戏大小" field="gameLength"></column>
    </k-table>
</div>

## 自定义列模板
<div class="demo-block">
<k-table :data="dataSource" :bordered="true" :striped="true">
        <column label="游戏名称" field="gameName" sorter="custom"></column>
        <column label="游戏类型" field="gameType" sorter="custom"></column>
        <column label="游戏厂商">
            <template slot-scope="row">
                <k-tag type="primary">{{ row.gameCompany }}</k-tag>
            </template>
        </column>
        <column label="游戏大小" field="gameLength"></column>
    </k-table>
</div>