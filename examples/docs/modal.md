<style>
.white-text {
  color: #FFF;
}
</style>
# Modal 模态框
----
## 基础使用
<div class="demo-block">
    <template>
        <button class="button is-primary marginBottom10" @click="toggle">点我关闭模态框</button>
        <button class="button is-primary marginBottom10" @click="noCover">不显示遮罩层</button>
        <button class="button is-primary marginBottom10" @click="setWidth">将宽度设置为700</button>
        <button class="button is-primary marginBottom10" @click="allowDropDownClose">是否允许通过点击遮罩层关闭模态框</button>
        <button class="button is-primary marginBottom10" @click="allowDropDownClose">回调函数</button>
        <button class="button is-primary marginBottom10" @click="allowDropDownClose">异步关闭</button>
        <k-modal title="模态框" :width="width" :is-show="isShow" :backdrop="backdrop" @close="isShow=false" cancel-text="取消" ok-text="确定" :backdrop-closable="backdropClosable" :on-ok="okCb">
            <p>
                我就是传说中的内容
            </p>
        </k-modal>
    </template>
    <script>
        export default {
            data () {
                return {
                    isShow: false,
                    backdrop: true,
                    width: 520,
                    backdropClosable: false
                }
            },
            methods: {
                toggle () {
                    this.isShow = true
                },
                noCover () {
                    this.isShow = true
                    this.backdrop = false
                },
                setWidth () {
                    this.width = 700
                    this.isShow = true
                    this.backdrop = true
                },
                allowDropDownClose () {
                    this.width = 700
                    this.isShow = true
                    this.backdrop = true
                    this.backdropClosable = true
                },
                okCb() {
                    this.$KNotify({
                        title: '标题',
                        message: '你点了确定'
                    })
                },
                okCloseCb() {
                    setTimeout(() => {
                        this.toggle();
                    }, 2000);
                }
            }
        }
    </script>
</div>

::: demo
```html

<template>
        <button class="button is-primary marginBottom10" @click="toggle">点我关闭模态框</button>
        <button class="button is-primary marginBottom10" @click="noCover">不显示遮罩层</button>
        <button class="button is-primary marginBottom10" @click="setWidth">将宽度设置为700</button>
        <button class="button is-primary marginBottom10" @click="allowDropDownClose">是否允许通过点击遮罩层关闭模态框</button>
        <button class="button is-primary marginBottom10" @click="allowDropDownClose">回调函数</button>
        <button class="button is-primary marginBottom10" @click="allowDropDownClose">异步关闭</button>
        <k-modal title="模态框" :width="width" :is-show="isShow" :backdrop="backdrop" @close="isShow=false" cancel-text="取消" ok-text="确定" :backdrop-closable="backdropClosable" :on-ok="okCb">
            <p>
                我就是传说中的内容
            </p>
        </k-modal>
    </template>
    <script>
        export default {
            data () {
                return {
                    isShow: false,
                    backdrop: true,
                    width: 520,
                    backdropClosable: false
                }
            },
            methods: {
                toggle () {
                    this.isShow = true
                },
                noCover () {
                    this.isShow = true
                    this.backdrop = false
                },
                setWidth () {
                    this.width = 700
                    this.isShow = true
                    this.backdrop = true
                },
                allowDropDownClose () {
                    this.width = 700
                    this.isShow = true
                    this.backdrop = true
                    this.backdropClosable = true
                },
                okCb() {
                    this.$KNotify({
                        title: '标题',
                        message: '你点了确定'
                    })
                },
                okCloseCb() {
                    setTimeout(() => {
                        this.toggle();
                    }, 2000);
                }
            }
        }
    </script>

```
:::
