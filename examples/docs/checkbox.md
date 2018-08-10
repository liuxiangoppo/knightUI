<style>
    .ul {
        list-style: none;
    }
</style>
# Checkbox 复选框
----

## 基础展示
<div class="demo-block">
    <k-checkbox input-name="car" label="复选框" :checked="checked" v-model="chooseCar"></k-checkbox>
    <p>
        <button class="button is-primary" @click="switchState">控制复选框状态</button>
    </p>
</div>

::: demo
``` html

<k-checkbox input-name="car" label="复选框" :checked="checked" v-model="chooseCar"></k-checkbox>
<button class="button is-primary" @click="switchState">控制复选框状态</button>
<script>
    export default {
        data () {
            return {
                checked: true
            }
        },
        methods: {
            switchState () {
                this.checked = !this.checked
            }
        }
    }
</script>
```
:::

## 禁用复选框
<div class="demo-block">
    <k-checkbox input-name="car" label="被禁用的复选框" v-model="chooseCar" value="0" :disabled="disabled"></k-checkbox>
    <p>
        <button class="button is-primary" @click="switchDisabled">控制复选框禁用启用</button>
    </p>
</div>

::: demo
``` html

<k-checkbox input-name="car" label="被禁用的复选框" v-model="chooseCar" value="0" :disabled="disabled"></k-checkbox>
<p>
    <button class="button is-primary" @click="switchDisabled">控制复选框禁用启用</button>
</p>
<script>
    export default {
        data () {
            return {
                disabled: true
            }
        },
        methods: {
            switchDisabled () {
                this.disabled = !this.disabled
            }
        }
    }
</script>
```
:::

## 多选框组
<div class="demo-block">
    <k-row :gutter="20">
        <k-col :span="6">
            <p class="marginBottom10">选择几种你喜欢的车（<span style="color: #bbb;">只能选2到4种</span>）:</p>
            <!--checkbox群组-->
            <k-checkbox-group v-model="chooseVal" :max="3">
                <p v-for="(item, index) in cars" :key="index"><k-checkbox input-name="car" :label="item.carName"  :value="item.id"></k-checkbox></p>
            </k-checkbox-group>
            <button class="button is-primary marginTop10" @click="getVal">我选好了</button>
        </k-col>
        <k-col :span="6">
            <k-card title="已选中的车型:" :shadow="false">
                <k-tag v-for="(car, index) in chooseItems" :key="index" type="primary" :closable="true" class="marginRight10">{{ car.carName }}</k-tag>
            </k-card>
        </k-col>
    </k-row>
</div>


::: demo
``` html

<template>
    <k-checkbox-group v-model="chooseVal">
        <k-checkbox v-for="(item, index) in cars" :key="index" input-name="car" :label="item.carName"  :value="item.price"></k-checkbox>
    </k-checkbox-group>
    <button class="button is-primary" @click="getVal">获取chooseVal的值</button>
</template>

<script>
    export default {
        data () {
            return {
                cars: [{
                    carName: '奥迪A4L',
                    price: 10,
                    id: 1
                },{
                    carName: '宝马320I',
                    price: 20,
                    id: 2
                },{
                    carName: '奔驰C200L',
                    price: 30,
                    id: 3
                },{
                    carName: '凯迪拉克ATSL',
                    price: 40,
                    id: 4
                },{
                    carName: '英菲尼迪S30L',
                    price: 50,
                    id: 5
                }],
                chooseVal: 0
            }
        },
        methods: {
            getVal () {
                alert(this.chooseVal.join(','))
            }
        }
    }
</script>

```
:::


<k-info mode="flat" title="注意">
上述功能目前尚不完善，其内部实现尚有缺陷，后续还需要做进一步的优化。
</k-info>

## 综合展示
<div class="demo-block">
    <h3>选几辆自己中意的车:</h3>
    <ul class="ul">
        <li>
            <k-checkbox input-name="car" label="奥迪A4L" v-model="chooseCar"value="0"></k-checkbox>
        </li>
        <li>
            <k-checkbox input-name="car" label="宝马320I" v-model="chooseCar" value="1"></k-checkbox>
        </li>
        <li>
            <k-checkbox input-name="car" label="奔驰C200L" v-model="chooseCar" value="2"></k-checkbox>
        </li>
        <li>
            <k-checkbox input-name="car" label="凯迪拉克ATSL" v-model="chooseCar" value="3"></k-checkbox>
        </li>
    </ul>
    <button class="button is-primary" @click="doIt">确定</button>
    <script>
        export default {
            data () {
                return {
                    chooseCar: false,
                    checked: true,
                    disabled: true,
                    chooseVal: [],
                    chooseItems: [],
                    cars: [{
                        carName: '奥迪A4L',
                        price: 10,
                        id: 1
                    },{
                        carName: '宝马320I',
                        price: 20,
                        id: 2
                    },{
                        carName: '奔驰C200L',
                        price: 30,
                        id: 3
                    },{
                        carName: '凯迪拉克ATSL',
                        price: 40,
                        id: 4
                    },{
                        carName: '英菲尼迪S30L',
                        price: 50,
                        id: 5
                    }]
                }
            },
            watch: {
                chooseVal (newVal) {
                    this.chooseItems.length = 0
                    this.chooseVal.forEach((item, i) => {
                        this.cars.forEach((car) => {
                            if (item === car.id) {
                                this.chooseItems.push(car)
                            }
                        })
                    })
                    console.log(this.chooseItems)
                }
            },
            methods: {
                doIt () {
                    console.log(this.chooseCar)
                },
                switchState () {
                    this.checked = !this.checked
                    console.log(this.checked)
                },
                switchDisabled () {
                    this.disabled = !this.disabled
                },
                getVal () {
                    alert(this.chooseVal.join(','))
                }
            }
        }
    </script>
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

## 控制是否被选中
<div class="demo-block">
    <p>你喜欢那个姑娘:</p>
    <k-checkbox input-name="girl" label="林志玲" value="0"></k-checkbox>
    <k-checkbox input-name="girl" label="苍井空" value="0"></k-checkbox>
    <k-checkbox input-name="girl" label="罗玉凤" :checked="true" value="0"></k-checkbox>
    <k-checkbox input-name="girl" label="芙蓉姐姐" value="0"></k-checkbox>
</div>

## 配置
| 成员      | 说明                                 | 类型      | 可选值       | 默认值   |
|---------- |------------------------------------ |---------- |------------- |-------- |
|input-name      |元素名称 |	String   |	无           |	none       |
|input-id	      | 元素ID                                |	String    | 无|	none |
|label      |标题 |	String   |	无           |	none       |
|input-value	      | 元素值                                |	String    | 无|	none |
