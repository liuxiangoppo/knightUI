<style>
    .myCard {
        border: 1px solid red;
    }
</style>
# Card 卡片
----

## 基础展示
<div class="demo-block">
    <k-card title="标题" :shadow="false">
        <ul>
            <li>香蕉</li>
            <li>苹果</li>
            <li>西瓜</li>
            <li>菠萝</li>
        </li>
    </k-card>
</div>

## 不带有标题
<div class="demo-block">
    <k-card :shadow="false">
        <ul>
            <li>香蕉</li>
            <li>苹果</li>
            <li>西瓜</li>
            <li>菠萝</li>
        </li>
    </k-card>
</div>

## 自定义标题
<div class="demo-block">
    <k-card :shadow="false">
        <h3 title="cardTitle">
            自定义标题
        </h3>
        <ul>
            <li>香蕉</li>
            <li>苹果</li>
            <li>西瓜</li>
            <li>菠萝</li>
        </li>
    </k-card>
</div>