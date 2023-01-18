const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('src/pages/inicio/IndexPage.vue') },
      { path: 'inicio', component: () => import('src/pages/inicio/IndexPage.vue') },
      { path: 'cores', component: () => import('src/pages/cores/CoresPage.vue') },
      { path: 'marca', component: () => import('src/pages/marca/MarcaPage.vue') },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('src/pages/erro/ErrorNotFound.vue'),
  },
];

export default routes;
