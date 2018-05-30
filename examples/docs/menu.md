<style>
.menuNav {
    border: 1px solid #ddd;
    width: 250px;
    overflow-y: auto;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,.12), 0 0 6px 0 rgba(0,0,0,.04);
    background-color: #fff;
}
.menuNav .demo-title {
    margin: 7px 0;
    text-indent: 10px;
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
## 横向菜单
通过设置 ```mode``` 属性将菜单变为水平方向

<div class="demo-block"></div>