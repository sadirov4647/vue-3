import { createRouter, createWebHistory } from 'vue-router'
import EventList from '@/views/EventList.vue'
import EventDisplay from '@/views/event/Display.vue'
import EventRegister from '@/views/event/Register.vue'
import EventEdit from '@/views/event/Edit.vue'
import About from '@/views/About.vue'

const routes = [
  {
    path: '/',
    name: 'EventList',
    component: EventList,
    props: route => ({ page: parseInt(route.query.page) || 1 })
  },
  {
    path: '/event/:id',
    name: 'EventDisplay',
    props: true,
    component: EventDisplay
  },
  {
    path: '/event/:id/register',
    name: 'EventRegister',
    props: true,
    component: EventRegister
  },
  {
    path: '/event/:id/edit',
    name: 'EventEdit',
    props: true,
    component: EventEdit
  },
  {
    path: '/about',
    name: 'About',
    component: About
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
