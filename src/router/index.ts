import { authRoutes } from '@/modules/auth/routes'
import NotFound from '@/modules/common/components/pages/NotFound.vue'
import PrincipalLayout from '@/modules/principal/layout/PrincipalLayout.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    //Landing
    {
      path: '/',
      name: 'layout',
      redirect: { name: 'Default' },
      component: PrincipalLayout,
      children: [
        {
          path: 'default',
          name: 'Default',
          component: () => import('@/modules/principal/views/DefaultView.vue'),
        },
        {
          path: 'dialog',
          name: 'Dialog',
          component: () => import('@/modules/dialog/layout/dialogComponent.vue'),
        },
        {
          path: 'ejercicio',
          name: 'exercise',
          component: () => import('@/modules/peticion/layout/executionapi.vue'),
        },
        {
          path: 'not',
          name: 'not',
          component: NotFound,
        },
      ],
    },
    //Auth
    authRoutes,

    //NotFound
    {
      path: '/:pathMatch(.*)*',
      redirect: { name: 'not' },
      // component: NotFound,
    },
  ],
})

export default router
