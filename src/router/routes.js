const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: 'inicio', component: () => import('pages/IndexPage.vue') },
      { path: 'cores', component: () => import('pages/PaletaCores.vue') },
      { path: 'marca', component: () => import('pages/ManualMarca.vue') },
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
