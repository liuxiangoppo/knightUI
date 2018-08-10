import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', redirect: '/introduce' },
    {
      path: '/introduce',
      name: 'introduce',
      component: r => require.ensure([], () => r(require('../docs/introduce.md')))
    },
    {
      path: '/layouts',
      name: 'layouts',
      component: r => require.ensure([], () => r(require('../docs/layouts.md')))
    },
    {
      path: '/menu',
      name: 'menu',
      component: r => require.ensure([], () => r(require('../docs/menu.md')))
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
    },
    {
      path: '/notification',
      name: 'notification',
      component: r => require.ensure([], () => r(require('../docs/notify.md')))
    },
    {
      path: '/modal',
      name: 'modal',
      component: r => require.ensure([], () => r(require('../docs/modal.md')))
    },
    // {
    //   path: '/messagebox',
    //   name: 'messagebox',
    //   component: r => require.ensure([], () => r(require('../docs/MessageBox.vue')))
    // },
    {
      path: '/affix',
      name: 'affix',
      component: r => require.ensure([], () => r(require('../docs/affix.md')))
    },
    {
      path: '/scrollto',
      name: 'scrollto',
      component: r => require.ensure([], () => r(require('../docs/scrollto.md')))
    },
    {
      path: '/install',
      name: 'install',
      component: r => require.ensure([], () => r(require('../docs/install.md')))
    },
    {
      path: '/quickstart',
      name: 'quickstart',
      component: r => require.ensure([], () => r(require('../docs/quickstart.md')))
    },
    {
      path: '/updatelog',
      name: 'updatelog',
      component: r => require.ensure([], () => r(require('../docs/updatelog.md')))
    },
    {
      path: '/timeline',
      name: 'timeline',
      component: r => require.ensure([], () => r(require('../docs/timeline.md')))
    },
    {
      path: '/transition',
      name: 'transition',
      component: r => require.ensure([], () => r(require('../docs/transition.md')))
    },
    {
      path: '/dropdown',
      name: 'dropdown',
      component: r => require.ensure([], () => r(require('../docs/dropdown.md')))
    },
    {
      path: '/alert',
      name: 'alert',
      component: r => require.ensure([], () => r(require('../docs/alert.md')))
    },
    {
      path: '/collapse',
      name: 'collapse',
      component: r => require.ensure([], () => r(require('../docs/collapse.md')))
    },
    {
      path: '/style',
      name: 'style',
      component: r => require.ensure([], () => r(require('../docs/style.md')))
    },
    {
      path: '/aside',
      name: 'aside',
      component: r => require.ensure([], () => r(require('../docs/aside.md')))
    },
    {
      path: '/table',
      name: 'table',
      component: r => require.ensure([], () => r(require('../docs/table.md')))
    },
    {
      path: '/pagination',
      name: 'pagination',
      component: r => require.ensure([], () => r(require('../docs/pagination.md')))
    },
    {
      path: '/step',
      name: 'step',
      component: r => require.ensure([], () => r(require('../docs/step.md')))
    },
    {
      path: '/tag',
      name: 'tag',
      component: r => require.ensure([], () => r(require('../docs/tag.md')))
    },
    {
      path: '/popover',
      name: 'popover',
      component: r => require.ensure([], () => r(require('../docs/popover.md')))
    },
    {
      path: '/form',
      name: 'form',
      component: r => require.ensure([], () => r(require('../docs/form.md')))
    },
    {
      path: '/card',
      name: 'card',
      component: r => require.ensure([], () => r(require('../docs/card.md')))
    },
    {
      path: '/progress',
      name: 'progress',
      component: r => require.ensure([], () => r(require('../docs/progress.md')))
    },
    {
      path: '/popconfirm',
      name: 'popconfirm',
      component: r => require.ensure([], () => r(require('../docs/popconfirm.md')))
    },
    {
      path: '/input',
      name: 'input',
      component: r => require.ensure([], () => r(require('../docs/input.md')))
    },
    {
      path: '/checkbox',
      name: 'checkbox',
      component: r => require.ensure([], () => r(require('../docs/checkbox.md')))
    },
    {
      path: '/radio',
      name: 'radio',
      component: r => require.ensure([], () => r(require('../docs/radio.md')))
    },
    {
      path: '/select',
      name: 'select',
      component: r => require.ensure([], () => r(require('../docs/select.md')))
    },
    {
      path: '/datepicker',
      name: 'datepicker',
      component: r => require.ensure([], () => r(require('../docs/datepicker.md')))
    }
  ]
})
