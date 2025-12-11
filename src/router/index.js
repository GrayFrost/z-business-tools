import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/pages/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/components/button-group',
    name: 'ButtonGroup',
    component: () => import('@/pages/components/ButtonGroup.vue')
  },
  {
    path: '/mixins/form-mixin',
    name: 'FormMixin',
    component: () => import('@/pages/mixins/FormMixin.vue')
  },
  {
    path: '/utils/date-utils',
    name: 'DateUtils',
    component: () => import('@/pages/utils/DateUtils.vue')
  },
  {
    path: '/docs',
    name: 'Docs',
    component: () => import('@/pages/Docs.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: import.meta.env.BASE_URL,
  routes
})

export default router
