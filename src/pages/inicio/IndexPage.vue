<script setup>
import { ref } from 'vue'
import CardsNavegacao from 'src/components/inicio/CardsNavegacao.vue';


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
//itens do drawer de navegação
let rotaDev = listaRotaDev
let rotaDevComponentes = listaRotaDevComponentes
let rotaEscrita = listaRotaEscrita
let rotaEstilo = listaRotaEstilo



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

</script>
<template>
  <q-page class=" column q-px-sm q-py-md ">
    <img style="width:40%;" class="col-md-5 col-xs self-center" alt="Quasar logo" src="../../assets/inicio/logo-illimitar-vertical-2023.png" />
    <h4 class="i-h4 text-center q-mb-none">illimitar Design system</h4>
    <div class="column q-px-md q-my-lg ">

      <p class=" text-center i-subtitle1">
        Um design system é um conjunto de padrões, diretrizes, componentes e princípios de design que ajudam a manter a
        consistência e a coesão visual em um produto digital. Ele serve como uma fonte única de verdade para designers,
        desenvolvedores e outros profissionais envolvidos no processo de criação de produtos.
      </p>
    </div>
    <div class="col flex justify-end">

      <q-btn :label="aberto ? 'expandir' : 'recolher'" :icon="aberto ? 'expand_more' : 'expand_less'" color="light" flat @click="mudar" />
    </div>

    <q-expansion-item v-model="expandir.dev" :expanded="expandir.dev" header-class="i-h6" class="col " icon="code" label="Desenvolvimento">
      <div class="row q-gutter-sm">
        <CardsNavegacao v-for="link in rotaDev" :key="link.title" v-bind="link" />
      </div>
      <!--expansor componentes-->
      <q-expansion-item v-model="expandir.devComponentes" :expanded="expandir.devComponentes" class="col " header-class="i-h6" icon="smart_button" label="Componentes">

        <div class="row col q-gutter-sm">
          <CardsNavegacao v-for="link in rotaDevComponentes" :key="link.title" v-bind="link" />
        </div>
      </q-expansion-item>
    </q-expansion-item>
    <q-separator />
    <q-expansion-item v-model="expandir.escrita" :expanded="expandir.escrita" header-class="i-h6" class="col " icon="edit_note" label="Escrita">
      <div class="row q-gutter-sm">
        <CardsNavegacao :isActive="link.isActive" v-for="link in rotaEscrita" :key="link.title" v-bind="link" />
      </div>
    </q-expansion-item>
    <q-separator />
    <!--estilo-->
    <q-expansion-item v-model="expandir.estilo" :expanded="expandir.estilo" header-class="i-h6" class="col " icon="style" label="Estilo">
      <div class="row q-gutter-sm">
        <CardsNavegacao :isActive="link.isActive" v-for="link in rotaEstilo" :key="link.title" v-bind="link" />
      </div>
    </q-expansion-item>
  </q-page>
</template>

