import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/IndexPage.vue'),
      },
      {
        path: 'contact',
        component: () => import('pages/ContactPage.vue'),
      },
      {
        path: 'projects',
        name: 'projects',
        component: () => import('pages/ProjectsPage.vue'),
      },
      {
        path: '/projects/:slug',
        name: 'project-detail',
        component: () => import('pages/ProjectDetailPage.vue'),
      },
      {
        path: 'job-positions',
        name: 'job-positions',
        component: () => import('pages/JobPositionsPage.vue'),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
