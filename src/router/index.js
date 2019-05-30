import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Inicio from '@/components/Inicio'
import Template from '@/layout/template'

Vue.use(Router)

export default new Router({
  base: '',
  routes: [
    {
      path: '/',
      name: 'Template',
      component: Template,
      children: [
        {
          path: '/',
          name: 'Inicio',
          component: Inicio,
          props: true
        }
        // {
        //   path: '/',
        //   name: 'Inicio',
        //   component: Inicio,
        //   props: true
        // }
      ]
    },
    {
      path: '/primera',
      name: 'Template',
      component: Template,
      children: [
        {
          path: '/primera',
          name: 'HelloWorld',
          component: HelloWorld,
          props: true
        }
      ]
    }
  ]
})
