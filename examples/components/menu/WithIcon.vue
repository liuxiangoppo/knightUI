<template>
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
</template>

<script>
export default {
  name: 'menu-width-icon'
}
</script>

<style lang="less">
.menuNav {
    border: 1px solid #ddd;
    width: 250px;
    overflow-y: auto;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,.12), 0 0 6px 0 rgba(0,0,0,.04);

    .demo-title {
        margin: 7px 0;
        text-indent: 10px;
    }
}
</style>
