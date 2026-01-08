import type { RouteRecordRaw } from 'vue-router'
import AuthLayout from '../layout/AuthLayout.vue'

export const authRoutes: RouteRecordRaw = {
  path: '/auth',
  name: 'auth',
  redirect: { name: 'Login' },
  component: AuthLayout,
  children: [
    {
      path: 'login',
      name: 'Login',
      component: () => import('@/modules/auth/views/LoginView.vue'),
    },
  ],
}
