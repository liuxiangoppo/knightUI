<style>
.menuNav {
    border: 1px solid #ddd;
    width: 250px;
    overflow-y: auto;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,.12), 0 0 6px 0 rgba(0,0,0,.04);
    background-color: #fff;
}
.menuNav_horizontal {
    border: 1px solid #ddd;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,.12), 0 0 6px 0 rgba(0,0,0,.04);
    background-color: #fff;
}
.menuNav .demo-title {
    margin: 7px 0;
    text-indent: 10px;
}
.menuItemClass {
  background-color: #2a3b4c;
  border-bottom: 1px solid #2f4355;
}
.menuItemClass:hover {
  background-color: red;
}
</style>
# Menu 菜单
----
## 基础使用
<div class="demo-block">
 <k-row>
    <k-col :span="4">
        <div class="menuNav">
            <h3 class="demo-title">非常朴素的菜单</h3>
            <k-menu :collapse="false">
                <k-menu-sub>
                    <span slot="title">监控管理</span>
                    <k-menu-nav-item title="泊位监控"></k-menu-nav-item>
                    <k-menu-sub>
                        <span slot="title">实时监控</span>
                        <k-menu-nav-item title="商停监控"></k-menu-nav-item>
                        <k-menu-nav-item title="路侧监控"></k-menu-nav-item>
                    </k-menu-sub>
                </k-menu-sub>
                <k-menu-sub>
                    <span slot="title">停车管理</span>
                    <k-menu-nav-item title="停车订单"></k-menu-nav-item>
                    <k-menu-nav-item title="业务管理"></k-menu-nav-item>
                </k-menu-sub>
            </k-menu>
        </div>
    </k-col>
    <k-col :span="4">
        <div class="menuNav">
            <h3 class="demo-title">带有图标的菜单</h3>
            <k-menu :collapse="false">
                <k-menu-sub>
                    <span slot="title"><k-icon type="icon-computer" :size="14" color="#515151"></k-icon>监控管理</span>
                    <k-menu-nav-item title="泊位监控"></k-menu-nav-item>
                    <k-menu-sub>
                        <span slot="title">实时监控</span>
                        <k-menu-nav-item title="商停监控"></k-menu-nav-item>
                        <k-menu-nav-item title="路侧监控"></k-menu-nav-item>
                    </k-menu-sub>
                </k-menu-sub>
                <k-menu-sub>
                    <span slot="title"><k-icon type="icon-computer" :size="14" color="#515151"></k-icon>停车管理</span>
                    <k-menu-nav-item title="停车订单"></k-menu-nav-item>
                    <k-menu-nav-item title="业务管理"></k-menu-nav-item>
                </k-menu-sub>
            </k-menu>
        </div>
    </k-col>
    <k-col :span="4">
        <div class="menuNav">
            <h3 class="demo-title">禁用菜单项</h3>
            <k-menu :collapse="false">
                <k-menu-sub>
                    <span slot="title">监控管理</span>
                    <k-menu-nav-item title="泊位监控" :disabled="true"></k-menu-nav-item>
                    <k-menu-sub>
                        <span slot="title">实时监控</span>
                        <k-menu-nav-item title="商停监控"></k-menu-nav-item>
                        <k-menu-nav-item title="路侧监控"></k-menu-nav-item>
                    </k-menu-sub>
                </k-menu-sub>
                <k-menu-sub>
                    <span slot="title">停车管理</span>
                    <k-menu-nav-item title="停车订单"></k-menu-nav-item>
                    <k-menu-nav-item title="业务管理"></k-menu-nav-item>
                </k-menu-sub>
            </k-menu>
        </div>
    </k-col>
</k-row>
</div>

::: demo
```html
<k-row>
    <k-col :span="4">
        // 非常朴素的菜单(原始的)
        <div class="menuNav">
            <h3 class="demo-title">非常朴素的菜单</h3>
            <k-menu :collapse="false">
                <k-menu-sub>
                    <span slot="title">监控管理</span>
                    <k-menu-nav-item title="泊位监控"></k-menu-nav-item>
                    <k-menu-sub>
                        <span slot="title">实时监控</span>
                        <k-menu-nav-item title="商停监控"></k-menu-nav-item>
                        <k-menu-nav-item title="路侧监控"></k-menu-nav-item>
                    </k-menu-sub>
                </k-menu-sub>
                <k-menu-sub>
                    <span slot="title">停车管理</span>
                    <k-menu-nav-item title="停车订单"></k-menu-nav-item>
                    <k-menu-nav-item title="业务管理"></k-menu-nav-item>
                </k-menu-sub>
            </k-menu>
        </div>
    </k-col>
    <k-col :span="4">
        // 带有图标的菜单
        <div class="menuNav">
            <h3 class="demo-title">带有图标的菜单</h3>
            <k-menu :collapse="false">
                <k-menu-sub>
                    <span slot="title"><k-icon type="icon-computer" :size="14" color="#515151"></k-icon>监控管理</span>
                    <k-menu-nav-item title="泊位监控"></k-menu-nav-item>
                    <k-menu-sub>
                        <span slot="title">实时监控</span>
                        <k-menu-nav-item title="商停监控"></k-menu-nav-item>
                        <k-menu-nav-item title="路侧监控"></k-menu-nav-item>
                    </k-menu-sub>
                </k-menu-sub>
                <k-menu-sub>
                    <span slot="title"><k-icon type="icon-computer" :size="14" color="#515151"></k-icon>停车管理</span>
                    <k-menu-nav-item title="停车订单"></k-menu-nav-item>
                    <k-menu-nav-item title="业务管理"></k-menu-nav-item>
                </k-menu-sub>
            </k-menu>
        </div>
    </k-col>
    <k-col :span="4">
        // 禁用菜单项
        <div class="menuNav">
            <h3 class="demo-title">禁用菜单项</h3>
            <k-menu :collapse="false">
                <k-menu-sub>
                    <span slot="title">监控管理</span>
                    <k-menu-nav-item title="泊位监控" :disabled="true"></k-menu-nav-item>
                    <k-menu-sub>
                        <span slot="title">实时监控</span>
                        <k-menu-nav-item title="商停监控"></k-menu-nav-item>
                        <k-menu-nav-item title="路侧监控"></k-menu-nav-item>
                    </k-menu-sub>
                </k-menu-sub>
                <k-menu-sub>
                    <span slot="title">停车管理</span>
                    <k-menu-nav-item title="停车订单"></k-menu-nav-item>
                    <k-menu-nav-item title="业务管理"></k-menu-nav-item>
                </k-menu-sub>
            </k-menu>
        </div>
    </k-col>
</k-row>
```
:::

## 用户交互
仿左侧导航菜单, 可以通过设置```background-color```、```text-color```、```active-text-color```等属性来设置不同的样式, 亦可通过k-menu-nav-item组件的```custormClass```进行样式自定义。

<div class="demo-block">
    <k-menu :collapse="true" background-color="#33485c" text-color="#fff" active-text-color="red">
        <k-menu-sub>
            <span slot="title">监控管理</span>
            <k-menu-nav-item title="泊位监控"></k-menu-nav-item>
            <k-menu-sub>
                <span slot="title">实时监控</span>
                <k-menu-nav-item title="商停监控" custorm-class="menuItemClass"></k-menu-nav-item>
                <k-menu-nav-item title="路侧监控" custorm-class="menuItemClass"></k-menu-nav-item>
            </k-menu-sub>
        </k-menu-sub>
        <k-menu-sub>
            <span slot="title">停车管理</span>
            <k-menu-nav-item title="停车订单"></k-menu-nav-item>
            <k-menu-nav-item title="业务管理"></k-menu-nav-item>
        </k-menu-sub>
    </k-menu>
    <k-info mode="flat" style="margin-top:10px;">
        可以通过<span class="code_inline">custorm-class</span>属性实现鼠标滑过效果。
    </k-info>
</div>

::: demo
```html
<k-menu :collapse="true" background-color="#33485c" text-color="#fff" active-text-color="red">
        <k-menu-sub>
            <span slot="title">监控管理</span>
            <k-menu-nav-item title="泊位监控"></k-menu-nav-item>
            <k-menu-sub>
                <span slot="title">实时监控</span>
                <k-menu-nav-item title="商停监控" custorm-class="menuItemClass"></k-menu-nav-item>
                <k-menu-nav-item title="路侧监控" custorm-class="menuItemClass"></k-menu-nav-item>
            </k-menu-sub>
        </k-menu-sub>
        <k-menu-sub>
            <span slot="title">停车管理</span>
            <k-menu-nav-item title="停车订单"></k-menu-nav-item>
            <k-menu-nav-item title="业务管理"></k-menu-nav-item>
        </k-menu-sub>
    </k-menu>
```
:::

## 横向菜单
通过设置 ```mode``` 属性将菜单变为水平方向(<span style="color: red;">尴尬, 尚不好使~</span>)

<div class="demo-block">
    <k-menu :collapse="false" mode="horizontal" custorm-class="menuNav_horizontal" background-color="#33485c" text-color="#fff" active-text-color='red'>
        <k-menu-sub>
            <span slot="title">监控管理</span>
            <k-menu-nav-item title="泊位监控"></k-menu-nav-item>
            <k-menu-nav-item title="泊位监控"></k-menu-nav-item>
            <k-menu-sub>
                <span slot="title">实时监控</span>
                <k-menu-nav-item title="商停监控"></k-menu-nav-item>
                <k-menu-nav-item title="路侧监控"></k-menu-nav-item>
            </k-menu-sub>
        </k-menu-sub>
        <k-menu-sub>
            <span slot="title">停车管理</span>
            <k-menu-nav-item title="停车订单"></k-menu-nav-item>
            <k-menu-nav-item title="业务管理"></k-menu-nav-item>
        </k-menu-sub>
    </k-menu>
</div>

## 路由跳转
通过设置 ```to``` 属性可以进行路由跳转 (<span style="color:red;">该属性依赖于```k-menu-nav-item```组件</span>)

<div class="demo-block">
    <k-menu :collapse="false" mode="horizontal" custorm-class="menuNav_horizontal" background-color="#33485c" text-color="#fff" active-text-color='red'>
        <k-menu-sub>
            <span slot="title">监控管理</span>
            <k-menu-nav-item title="泊位监控"></k-menu-nav-item>
            <k-menu-nav-item title="泊位监控"></k-menu-nav-item>
            <k-menu-sub>
                <span slot="title">实时监控</span>
                <k-menu-nav-item title="商停监控"></k-menu-nav-item>
                <k-menu-nav-item title="路侧监控"></k-menu-nav-item>
            </k-menu-sub>
        </k-menu-sub>
        <k-menu-sub>
            <span slot="title">停车管理</span>
            <k-menu-nav-item title="停车订单"></k-menu-nav-item>
            <k-menu-nav-item title="业务管理"></k-menu-nav-item>
        </k-menu-sub>
    </k-menu>
</div>