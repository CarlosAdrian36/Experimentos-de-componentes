import { authRoutes } from '@/modules/auth/routes'
import NotFound from '@/modules/common/components/pages/NotFound.vue'
import PrincipalLayout from '@/modules/principal/layout/PrincipalLayout.vue'
import Principal2layout from '@/modules/principal/layout2/layout/Principal2layout.vue'
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
          path: 'formulario',
          name: 'Formulario',
          component: () => import('@/modules/formulario/layout/CreacionBanco.vue'),
        },
        // {
        //   path: 'editor',
        //   name: 'Editor',
        //   component: () => import('@/modules/editorTexto/Primer/editorText.vue'),
        // },
        {
          path: 'objetos',
          name: 'Objetos',
          component: () => import('@/modules/objects/objetos.vue'),
        },
        {
          path: 'drawside',
          name: 'DrawSide',
          component: () => import('@/modules/drawside/drawside.vue'),
        },
        {
          path: 'reactivos',
          name: 'Reactivos',
          component: () => import('@/modules/banco/gestionReactivos/reactivos.vue'),
        },
        {
          path: 'themes',
          name: 'Themes',
          component: () => import('@/modules/themes/layout/contenido.vue'),
        },

        {
          path: 'not',
          name: 'not',
          component: NotFound,
        },
      ],
    },
    {
      path: '/V2',
      name: 'x2',
      component: Principal2layout,
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
