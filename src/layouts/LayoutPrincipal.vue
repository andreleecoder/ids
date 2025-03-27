<script setup>
import { ref } from 'vue';
import LinksNavegacao from 'src/components/Layout/LinksNavegacao.vue';
// lista de rotas
let listaRotaInicio = ref([
  {
    title: 'Inicio',
    caption: 'Design system',
    icon: 'home',
    link: 'inicio',
    isActive: 'inicio',
  }
])
let listaRotaEstilo = ref([
  {
    title: 'Cores',
    caption: 'Paleta de cores',
    icon: 'palette',
    link: 'cores',
    isActive: 'cores',
  },
  {
    title: 'Marca',
    caption: 'Manual Marca',
    icon: 'diamond',
    link: 'marca',
    isActive: 'marca',
  },
])

let listaRotaEscrita = ref([
  {
    title: 'Princípios',
    caption: 'Princípios de conteúdo escrito',
    icon: 'menu_book',
    link: 'principios',
    isActive: 'principios',
  },
  {
    title: 'Preferências e Configurações',
    caption: 'Textos de configurações',
    icon: 'settings',
    link: 'configuracoes',
    isActive: 'configuracoes',
  },
  {
    title: 'Mensagens de Erro',
    caption: 'Criando mensagens de erro',
    icon: 'warning',
    link: 'mensagemErro',
    isActive: 'mensagemErro',
  },
  {
    title: 'Mensagens de Sucesso',
    caption: 'Criando mensagens de Sucesso',
    icon: 'check_circle',
    link: 'mensagemSucesso',
    isActive: 'mensagemSucesso',

  },
])
let listaRotaDev = ref([
  {
    title: 'BPMN ',
    caption: 'Guia de Boas práticas para a criação de fluxos usando BPMN ',
    icon: 'account_tree',
    link: 'bpmn',
    isActive: 'bpmn',
  },
  {
    title: 'Boas Práticas',
    caption: 'Guia de Boas práticas para o desenvolvimento de interfaces ',
    icon: 'thumb_up_alt',
    link: 'boasPraticas',
    isActive: 'boasPraticas',
  },
  {
    title: 'Getting Started',
    caption: 'Tecnologias de frontend usadas na illimitar ',
    icon: 'play_circle',
    link: 'start',
    isActive: 'start',
  },
  {
    title: 'Ícones',
    caption: 'Bibliotecas de icones usadas na illimitar para desenvolvimento',
    icon: 'add_reaction',
    link: 'icones',
    isActive: 'icones',
  },
  {
    title: 'variáveis de cor',
    caption: 'Definindo váriáveis de cor nos frameworks',
    icon: 'colorize',
    link: 'varCor',
    isActive: 'varCor',
  },


])
let listaRotaDevComponentes = ref([
  {
    title: 'Botões',
    caption: 'Como usar botões da melhor maneira',
    icon: 'call_to_action',
    link: 'botoes',
    isActive: 'botoes',
  },
  {
    title: 'Barras',
    caption: 'Como usar as barras da melhor maneira',
    icon: 'view_day',
    link: 'barras',
    isActive: 'barras',
  },
  {
    title: 'Tabs',
    caption: 'Como usar as Tabs da melhor maneira',
    icon: 'padding',
    link: 'tab',
    isActive: 'tab',
  },

  // {
  //   title: 'Modelos de layout',
  //   caption: 'Sugestões de arquitetura de layout',
  //   icon: 'space_dashboard',
  //   link: 'modeloLayout',
  //   isActive: 'modeloLayout',
  // },
])



//itens do drawer de navegação
let rotaInicio = listaRotaInicio
let rotaEstilo = listaRotaEstilo
let rotaEscrita = listaRotaEscrita
let rotaDev = listaRotaDev
let rotaDevComponentes = listaRotaDevComponentes


//componente drawer
let drawerLeft = ref(false)

//  estado dos Componentes expansion items
let expandirItens = ref({
  dev: true,
  devComponentes: true,
  escrita: true,
  estilo: true,
});

// Variável que está no ternário do ícone recolher tudo
let aberto = ref(false);

// Verifica se todas as propriedades do objeto expandirItens têm o mesmo valor
function todasAsPropriedadesIguais(obj) {
  const valores = Object.values(obj);
  return valores.every((val, i, arr) => val === arr[0]);
}

// Fecha tudo
let expandir = expandirItens;
let mudarEstado = () => {
  if (!todasAsPropriedadesIguais(expandirItens.value)) {
    // Se as propriedades não estiverem iguais, defina todas como false
    for (let propriedade in expandirItens.value) {
      expandirItens.value[propriedade] = false;
    }
  } else {
    // Caso contrário, alterne o estado de todas as propriedades
    for (let propriedade in expandirItens.value) {
      expandirItens.value[propriedade] = !expandirItens.value[propriedade];
    }
  }
  // Muda valor da variável para o oposto do estado atual
  aberto.value = !aberto.value;
};

let mudar = mudarEstado;



// parte do componente filtro que pretendo implementar futuramente
/*const itens = [rotaInicio, rotaEscrita, rotaEstilo, rotaDev]
const filtro = ref('')
const itensFiltrados = computed(() =>
  itens.filter(item => item.title.toLowerCase().includes(filtro.value.toLowerCase()))
)*/
</script>

<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="desktop-only fundo-toolbar-escuro">
      <q-toolbar class=" text-primary">

        <q-btn class="q-mr-md" flat dense round icon="menu" aria-label="Menu" @click="drawerLeft = !drawerLeft" />


        <q-toolbar-title class="q-mx-none i-h5">illimitar Design System</q-toolbar-title>
      </q-toolbar>

    </q-header>

    <q-drawer v-model="drawerLeft">

      <q-item class="fundo-toolbar-escuro q-py-none ">
        <q-item-section avatar>
          <q-img fit width="60px" alt="logo illimitar" src="../assets/layout/logo.svg" />
        </q-item-section>

        <q-item-section>
          <h5 class="text-primary q-my-sm i-h5">iDS</h5>
        </q-item-section>
        <q-item-section>
          <q-btn class="absolute-right" :icon="aberto ? 'expand_more' : 'expand_less'" color="light" flat @click="mudar" />
        </q-item-section>
      </q-item>
      <q-list>

        <!--inicio-->

        <LinksNavegacao class="flex col-10" :isActive="link.isActive" v-for="link in rotaInicio" :key="link.title" v-bind="link" />
        <q-separator />

        <!--desenvolvimento-->
        <q-expansion-item v-model="expandir.dev" :expanded="expandir.dev" header-class="ipv-600tx" icon="code" label="Desenvolvimento">
          <LinksNavegacao :isActive="link.isActive" v-for="link in rotaDev" :key="link.title" v-bind="link" />

          <!--expansor componentes-->
          <q-expansion-item v-model="expandir.devComponentes" :expanded="expandir.devComponentes" header-class="ipv-400tx" icon="smart_button" label="Componentes">
            <LinksNavegacao :isActive="link.isActive" v-for="link in rotaDevComponentes" :key="link.title" v-bind="link" />
          </q-expansion-item>

        </q-expansion-item>
        <q-separator />
        <q-expansion-item v-model="expandir.escrita" :expanded="expandir.escrita" header-class="ipv-600tx" icon="edit_note" label="Escrita">
          <LinksNavegacao :isActive="link.isActive" v-for="link in rotaEscrita" :key="link.title" v-bind="link" />
        </q-expansion-item>
        <q-separator />

        <!--estilo-->
        <q-expansion-item v-model="expandir.estilo" :expanded="expandir.estilo" header-class="ipv-600tx" icon="style" label="Estilo">
          <LinksNavegacao :isActive="link.isActive" v-for="link in rotaEstilo" :key="link.title" v-bind="link" />
        </q-expansion-item>
        <q-separator />
        <!--escrita-->
      </q-list>
    </q-drawer>

    <q-page-container class="fundo-paginas-escuro">
      <router-view />
    </q-page-container>
    <q-footer class="mobile-only fundo-toolbar-escuro">
      <q-toolbar class=" text-primary">

        <q-btn class="fixed-left q-px-lg" flat round icon="menu" aria-label="Menu" @click="drawerLeft = !drawerLeft" />
        <q-btn class="q-mx-auto" icon="home" size="lg" flat dense round aria-label="Menu" to="inicio">
        </q-btn>

      </q-toolbar>

    </q-footer>
  </q-layout>
</template>

