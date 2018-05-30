<template>
    <section>
      <h1>Menu 菜单</h1>
      <hr/>
      <h2>基础使用</h2>
      <div class="demo-block">
          <k-row>
            <k-col :span="4">
              <basic-menu-demo></basic-menu-demo>
            </k-col>
            <k-col :span="4">
              <with-icon></with-icon>
            </k-col>
            <k-col :span="4">
              <disable-menu-item></disable-menu-item>
            </k-col>
          </k-row>
      </div>
      <demo-block>
        // 非常朴素的菜单
        <template>
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
        </template>

        <script>
        export default {
          name: 'basic-menu-demo'
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
        // 带有图标的菜单
        // 禁用菜单项
      </demo-block>
    </section>
</template>

<script>
import BasicMenuDemo from 'examples/components/menu/BasicMenu'
import WithIcon from 'examples/components/menu/WithIcon'
import DisableMenuItem from 'examples/components/menu/DisableMenuItem'
export default {
  name: 'menu-demo',
  components: {
    BasicMenuDemo, WithIcon, DisableMenuItem
  }
}
</script>

<style>
.menuNav {
    border: 1px solid #ddd;
    width: 250px;
    overflow-y: auto;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,.12), 0 0 6px 0 rgba(0,0,0,.04);
}
</style>
