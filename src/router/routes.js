const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: 'inicio', component: () => import('src/pages/inicio/IndexPage.vue') },
      { path: 'cores', component: () => import('src/pages/cores/PaletaCores.vue') },
      { path: 'marca', component: () => import('src/pages/marca/ManualMarca.vue') },
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
