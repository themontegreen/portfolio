import { createRouter, createWebHistory } from 'vue-router'
import HomepageView from '../views/HomepageView.vue'
import ProjectView from '../views/ProjectView.vue'
import NotFound from '../views/NotFound.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomepageView
    },
    {
      path: '/project-:id',
      name: 'project',
      component: ProjectView
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: NotFound
    },
  ]
})

export default router
