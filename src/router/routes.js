const routes = [
  {
    path: '/',
    component: () => import('src/layouts/LayoutPrincipal.vue'),
    children: [
      { path: '', component: () => import('src/pages/inicio/IndexPage.vue') },
  
    ],
  },
  {
    path: '/inicio',
    name:'Inicio',
    component: () => import('src/layouts/LayoutPrincipal.vue'),
    children: [

      { path: '/inicio', component: () => import('src/pages/inicio/IndexPage.vue') },

    ],
  },
  {
    path: '/cores',
    name:'Cores',
    component: () => import('src/layouts/LayoutPrincipal.vue'),
    children: [
    
      { path: '/cores', component: () => import('src/pages/cores/CoresPage.vue') },

    ],
  },
  {
    path: '/marca',
    name:'Marca',
    component: () => import('src/layouts/LayoutPrincipal.vue'),
    children: [
      
      { path: '/marca', component: () => import('src/pages/marca/MarcaPage.vue') },
    ],
  },
  
  {
    path: '/:catchAll(.*)*',
    component: () => import('src/pages/erro/ErrorNotFound.vue'),
  },
];

export default routes;
