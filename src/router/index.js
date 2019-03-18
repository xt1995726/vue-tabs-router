import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/common/Home'
import HelloWorld from '@/components/pages/HelloWorld'
import Page1 from '@/components/pages/Page1'
import Page2 from '@/components/pages/Page2'
import Page3 from '@/components/pages/Page3'
import Page4 from '@/components/pages/Page4'
import Page5 from '@/components/pages/Page5'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/HelloWorld'
    },
    {
      path: '/',
      name: Home,
      component: Home,
      meta: { title: '自述文件' },
      children: [
        {
          path: '/HelloWorld',
          name: 'HelloWorld',
          component: HelloWorld,
          meta: { title: '系统首页' }
        },
        {
          path: '/Page1',
          name: 'Page1',
          component: Page1,
          meta: { title: 'Page1' }
        },
        {
          path: '/Page2',
          name: 'Page2',
          component: Page2,
          meta: { title: 'Page2' }
        },
        {
          path: '/Page3',
          name: 'Page3',
          component: Page3,
          meta: { title: 'Page3' }
        },
        {
          path: '/Page4',
          name: 'Page4',
          component: Page4,
          meta: { title: 'Page4' }
        },
        {
          path: '/Page5',
          name: 'Page5',
          component: Page5,
          meta: { title: 'Page5' }
        },
      ]
    }
  ]
})
