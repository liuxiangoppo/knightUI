import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/layouts',
      name: 'layouts',
      component: r => require.ensure([], () => r(require('../docs/layouts.md')))
    },
    {
      path: '/badge',
      name: 'badge',
      component: r => require.ensure([], () => r(require('../docs/badge.md')))
    },
    {
      path: '/breadcrumb',
      name: 'breadcrumb',
      component: r => require.ensure([], () => r(require('../docs/breadcrumb.md')))
    },
    {
      path: '/grid',
      name: 'grid',
      component: r => require.ensure([], () => r(require('../docs/grid.md')))
    },
    {
      path: '/button',
      name: 'button',
      component: r => require.ensure([], () => r(require('../docs/button.md')))
    },
    {
      path: '/panel',
      name: 'panel',
      component: r => require.ensure([], () => r(require('../docs/panel.md')))
    },
    {
      path: '/tab',
      name: 'tab',
      component: r => require.ensure([], () => r(require('../docs/tab.md')))
    },
    {
      path: '/info',
      name: 'info',
      component: r => require.ensure([], () => r(require('../docs/info.md')))
    },
    {
      path: '/message',
      name: 'message',
      component: r => require.ensure([], () => r(require('../docs/message.md')))
    },
    {
      path: '/tip',
      name: 'tip',
      component: r => require.ensure([], () => r(require('../docs/tip.md')))
    }
  ]
})
