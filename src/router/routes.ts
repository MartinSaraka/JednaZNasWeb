import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('pages/IndexPage.vue'),
        meta: {
          title: 'JEDNA Z NÁS - Občianske združenie',
          description:
            'Občianske združenie JEDNA Z NÁS transformuje životy ľudí zo znevýhodneného prostredia. Zameriavame sa na sociálnu inklúziu, vzdelávanie a podporu komunít na Slovensku.',
        },
      },
      {
        path: 'contact',
        name: 'contact',
        component: () => import('pages/ContactPage.vue'),
        meta: {
          title: 'Kontakt - JEDNA Z NÁS',
          description:
            'Kontaktujte občianske združenie JEDNA Z NÁS. Email: jednaznasoz@gmail.com. Radi vám zodpovieme otázky a tešíme sa na spoluprácu.',
        },
      },
      {
        path: 'projects',
        name: 'projects',
        component: () => import('pages/ProjectsPage.vue'),
        meta: {
          title: 'Projekty - JEDNA Z NÁS',
          description:
            'Prezrite si projekty občianskeho združenia JEDNA Z NÁS. Sociálne a komunitné projekty zamerané na pomoc znevýhodneným skupinám.',
        },
      },
      {
        path: '/projects/:slug',
        name: 'project-detail',
        component: () => import('pages/ProjectDetailPage.vue'),
        meta: {
          title: 'Detail projektu - JEDNA Z NÁS',
          description:
            'Podrobné informácie o projekte občianskeho združenia JEDNA Z NÁS.',
        },
      },
      {
        path: 'job-positions',
        name: 'job-positions',
        component: () => import('pages/JobPositionsPage.vue'),
        meta: {
          title: 'Pracovné pozície - JEDNA Z NÁS',
          description:
            'Aktuálne pracovné pozície a príležitosti v občianskom združení JEDNA Z NÁS. Pridajte sa k nám a pomáhajte znevýhodneným skupinám.',
        },
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
    meta: {
      title: 'Stránka nenájdená - JEDNA Z NÁS',
      description: 'Požadovaná stránka nebola nájdená.',
    },
  },
];

export default routes;
