const routes = [
  // rotas inicio
  {
    path: '/',
    component: () => import('src/layouts/LayoutPrincipal.vue'),
    children: [
      { path: '', component: () => import('src/pages/inicio/IndexPage.vue') },

    ],
  },
  {
    path: '/inicio',
    name: 'Inicio',
    component: () => import('src/layouts/LayoutPrincipal.vue'),
    children: [

      { path: '/inicio', component: () => import('src/pages/inicio/IndexPage.vue') },

    ],
  },
  //rotas estilo
  {
    path: '/cores',
    name: 'Cores',
    component: () => import('src/layouts/LayoutPrincipal.vue'),
    children: [

      { path: '/cores', component: () => import('src/pages/estilo/cores/CoresPage.vue') },

    ],
  },
  {
    path: '/marca',
    name: 'Marca',
    component: () => import('src/layouts/LayoutPrincipal.vue'),
    children: [

      { path: '/marca', component: () => import('src/pages/estilo/marca/MarcaPage.vue') },
    ],
  },
  //rotas escrita
  {
    path: '/principios',
    name: 'Principios',
    component: () => import('src/layouts/LayoutPrincipal.vue'),
    children: [

      { path: '/principios', component: () => import('src/pages/escrita/principios/PrincipiosPage.vue') },
    ],
  },
  {
    path: '/configuracoes',
    name: 'Configuracoes',
    component: () => import('src/layouts/LayoutPrincipal.vue'),
    children: [

      { path: '/configuracoes', component: () => import('src/pages/escrita/pref_config/PrefenciasConfiguracoesPage.vue') },
    ],
  },
  {
    path: '/mensagemErro',
    name: 'MensagemErro',
    component: () => import('src/layouts/LayoutPrincipal.vue'),
    children: [

      { path: '/mensagemErro', component: () => import('src/pages/escrita/mens_erro/MensagemErroPage.vue') },
    ],
  },
  {
    path: '/mensagemSucesso',
    name: 'MensagemSucesso',
    component: () => import('src/layouts/LayoutPrincipal.vue'),
    children: [

      { path: '/mensagemSucesso', component: () => import('src/pages/escrita/mens_sucesso/MensagemSucessoPage.vue') },
    ],
  },

  //desenvolvimento
  {
    path: '/start',
    name: 'Start',
    component: () => import('src/layouts/LayoutPrincipal.vue'),
    children: [

      { path: '/start', component: () => import('src/pages/desenvolvimento/gettingStarted/StartPage.vue') },
    ],
  },
  {
    path: '/icones',
    name: 'Icones',
    component: () => import('src/layouts/LayoutPrincipal.vue'),
    children: [

      { path: '/icones', component: () => import('src/pages/desenvolvimento/icones/IconesPage.vue') },
    ],
  },
  {
    path: '/varCor',
    name: 'VarCor',
    component: () => import('src/layouts/LayoutPrincipal.vue'),
    children: [

      { path: '/varCor', component: () => import('src/pages/desenvolvimento/varCor/VarCorPage.vue') },
    ],
  },
  {
    path: '/boasPraticas',
    name: 'BoasPraticas',
    component: () => import('src/layouts/LayoutPrincipal.vue'),
    children: [

      { path: '/boasPraticas', component: () => import('src/pages/desenvolvimento/boasPraticas/BoasPraticas.vue') },
    ],
  },

  {
    path: '/bpmn',
    name: 'bpmn',
    component: () => import('src/layouts/LayoutPrincipal.vue'),
    children: [

      { path: '/bpmn', component: () => import('src/pages/desenvolvimento/bpmn/BPMN.vue') },
    ],
  },
  //componentes

  {
    path: '/botoes',
    name: 'Botoes',
    component: () => import('src/layouts/LayoutPrincipal.vue'),
    children: [

      { path: '/botoes', component: () => import('src/pages/desenvolvimento/componentes/botoes/BotoesPage.vue') },
    ],
  },
  {
    path: '/barras',
    name: 'Barras',
    component: () => import('src/layouts/LayoutPrincipal.vue'),
    children: [

      { path: '/barras', component: () => import('src/pages/desenvolvimento/componentes/barras/BarrasPage.vue') },
    ],
  },
  {
    path: '/tab',
    name: 'Tab',
    component: () => import('src/layouts/LayoutPrincipal.vue'),
    children: [

      { path: '/tab', component: () => import('src/pages/desenvolvimento/componentes/tabs/TabPage.vue') },
    ],
  },

  // {
  //   path: '/modeloLayout',
  //   name:'modeloLayout',
  //   component: () => import('src/layouts/LayoutPrincipal.vue'),
  //   children: [

  //     { path: '/modeloLayout', component: () => import('src/pages/desenvolvimento/componentes/modeloLayout/ModeloLayoutPage.vue') },
  //   ],
  // },


  //rota erro
  {
    path: '/:catchAll(.*)*',
    component: () => import('src/pages/erro/ErrorNotFound.vue'),
  },
];

export default routes;
