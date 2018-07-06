# TimeLine 时间线
----

## 基础展示
<div class="demo-block">
    <k-timeline>
        <timeline-item date="2018-12-23" type="primary">
            <p>纸质报告已送达</p>
        </timeline-item>
        <timeline-item date="2018-12-22" type="primary">
            <p>纸质报告已送出</p>
        </timeline-item>
        <timeline-item date="2018-12-21" type="primary">
           <p>检测已完成，可查看电子报告</p>
        </timeline-item>
    </k-timeline>
</div>

::: demo
``` html
<k-timeline>
    <timeline-item date="2018-12-23" type="primary">
        <p>纸质报告已送达</p>
    </timeline-item>
    <timeline-item date="2018-12-22" type="danger">
        <p>纸质报告已送出</p>
    </timeline-item>
    <timeline-item date="2018-12-21" type="success">
        <p>检测已完成，可查看电子报告</p>
    </timeline-item>
</k-timeline>
```
:::

## 可以设置不同的类型
<div class="demo-block">
    <k-timeline>
        <timeline-item date="2018-12-23" type="primary">
            <p>纸质报告已送达</p>
        </timeline-item>
        <timeline-item date="2018-12-22" type="danger">
            <p>纸质报告已送出</p>
        </timeline-item>
        <timeline-item date="2018-12-21" type="success">
           <p>检测已完成，可查看电子报告</p>
        </timeline-item>
        <timeline-item date="2018-12-20" type="warning">
           <p>实验室正在检测样本，请稍等……</p>
        </timeline-item>
        <timeline-item date="2018-12-19" type="info">
           <p>样本已送至实验室</p>
        </timeline-item>
    </k-timeline>
</div>

::: demo
``` html
<k-timeline>
    <timeline-item date="2018-12-23" type="primary">
        <p>纸质报告已送达</p>
    </timeline-item>
    <timeline-item date="2018-12-22" type="danger">
        <p>纸质报告已送出</p>
    </timeline-item>
    <timeline-item date="2018-12-21" type="success">
        <p>检测已完成，可查看电子报告</p>
    </timeline-item>
    <timeline-item date="2018-12-20" type="warning">
        <p>实验室正在检测样本，请稍等……</p>
    </timeline-item>
    <timeline-item date="2018-12-19" type="info">
        <p>样本已送至实验室</p>
    </timeline-item>
</k-timeline>
```
:::

## 设置图标
<div class="demo-block">
    <k-timeline>
        <timeline-item date="2018-12-23" type="primary">
            <i class="k-icon icon-vip" slot="iconSlot"></i>
            <p>纸质报告已送达</p>
        </timeline-item>
        <timeline-item date="2018-12-22" type="danger">
            <p>纸质报告已送出</p>
        </timeline-item>
        <timeline-item date="2018-12-21" type="success" icon="icon-vip">
            <i class="k-icon icon-vip" slot="iconSlot"></i>
           <p>检测已完成，可查看电子报告</p>
        </timeline-item>
    </k-timeline>
</div>

::: demo
``` html
<k-timeline>
    <timeline-item date="2018-12-23" type="primary">
        <i class="k-icon icon-vip" slot="iconSlot"></i>
        <p>纸质报告已送达</p>
    </timeline-item>
    <timeline-item date="2018-12-22" type="danger">
        <p>纸质报告已送出</p>
    </timeline-item>
    <timeline-item date="2018-12-21" type="success" icon="icon-vip">
        <i class="k-icon icon-vip" slot="iconSlot"></i>
        <p>检测已完成，可查看电子报告</p>
    </timeline-item>
</k-timeline>
```
:::