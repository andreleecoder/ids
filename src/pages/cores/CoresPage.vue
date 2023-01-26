
<script setup>
import { ref } from 'vue'
import PaletaCores from 'src/components/Cores/PaletaCores.vue';
//dados das paletas de cor
const paletaAzulLista = ref([
  {
    nome: '$ipv',
    hex: '#1379DF',
    rgb: '9 121 223',
    corBg: 'ipvbg',
    corText: 'ipvtx',
    separator: 'ipvbg',
  },
  {
    nome: '$ipv-100',
    hex: '#F5F9FF',
    rgb: '245 249 255',
    corBg: 'ipv-100bg',
    corText: 'dark',
    separator: 'ipv-900bg',
  },
  {
    nome: '$ipv-200',
    hex: '#C9E4FF',
    rgb: '201 228 255',
    corBg: 'ipv-200bg',
    corText: 'dark',
    separator: 'ipv-900bg',
  },
  {
    nome: '$ipv-400',
    hex: '#5CADFF',
    rgb: '210 64 100',
    corBg: 'ipv-400bg',
    corText: 'dark',
    separator: 'ipv-900bg',
  },
  {
    nome: '$ipv-600',
    hex: '#0060BF',
    rgb: '210 100 75',
    corBg: 'ipv-600bg',
    corText: 'dark',
    separator: 'ipv-900bg',
  },
  {
    nome: '$ipv-800',
    hex: '#0F5499',
    rgb: '15 84 153',
    corBg: 'ipv-800bg',
    corText: 'dark',
    separator: 'ipv-900bg',
  },

  {
    nome: '$ipv-900',
    hex: '#121314',
    rgb: '18 19 20',
    corBg: 'ipv-900bg',
    corText: 'dark',
    separator: 'ipv-900bg',
  },
]);
const paletaLaranjaLista = ref([
  {
    nome: '$est',
    hex: '#F59019',
    rgb: '245 144 25',
    corBg: 'estbg',
    corText: 'esttx',
    separator: 'estbg',
  },
  {
    nome: '$est-100',
    hex: '#FFFAF5',
    rgb: '255 250 245',
    corBg: 'est-100bg',
    corText: 'dark',
    separator: 'est-900bg',
  },
  {
    nome: '$est-200',
    hex: '#FFE6C9',
    rgb: '250 230 201',
    corBg: 'est-200bg',
    corText: 'dark',
    separator: 'est-900bg',
  },
  {
    nome: '$est-400',
    hex: '#F5AC19',
    rgb: '245 172 25',
    corBg: 'est-400bg',
    corText: 'dark',
    separator: 'est-900bg',
  },
  {
    nome: '$est-600',
    hex: '#F57B00',
    rgb: '245 123 0',
    corBg: 'est-600bg',
    corText: 'dark',
    separator: 'est-900bg',
  },
  {
    nome: '$est-800',
    hex: '#D86801',
    rgb: '216 104 1',
    corBg: 'est-800bg',
    corText: 'dark',
    separator: 'est-900bg',
  },

  {
    nome: '$est-900',
    hex: '#141312',
    rgb: '20 19 18',
    corBg: 'est-900bg',
    corText: 'dark',
    separator: 'est-900bg',
  },
]);
const paletaVerdeFinLista = ref([
  {
    nome: '$fin',
    hex: '#12B27D',
    rgb: '18 178 125',
    corBg: 'finbg',
    corText: 'fintx',
    separator: 'finbg',
  },
  {
    nome: '$fin-100',
    hex: '#F5FFFC',
    rgb: '245 255 252',
    corBg: 'fin-100bg',
    corText: 'dark',
    separator: 'est-900bg',
  },
  {
    nome: '$fin-200',
    hex: '#CCFFEE',
    rgb: '204 255 238',
    corBg: 'fin-200bg',
    corText: 'dark',
    separator: 'fin-900bg',
  },
  {
    nome: '$fin-400',
    hex: '#00F0A0',
    rgb: '0 240 160',
    corBg: 'fin-400bg',
    corText: 'dark',
    separator: 'fin-900bg',
  },
  {
    nome: '$est-600',
    hex: '#00B295',
    rgb: '0 178 149',
    corBg: 'fin-600bg',
    corText: 'dark',
    separator: 'est-900bg',
  },
  {
    nome: '$fin-800',
    hex: '#007850',
    rgb: '0 120 80',
    corBg: 'fin-800bg',
    corText: 'dark',
    separator: 'fin-900bg',
  },

  {
    nome: '$fin-900',
    hex: '#121413',
    rgb: '18 20 19',
    corBg: 'fin-900bg',
    corText: 'dark',
    separator: 'fin-900bg',
  },
]);
const paletaVerdeShcLista = ref([
  {
    nome: '$shc',
    hex: '#42C920',
    rgb: '66 201 32',
    corBg: 'shcbg',
    corText: 'fintx',
    separator: 'finbg',
  },
  {
    nome: '$shc-100',
    hex: '#F7FFF5',
    rgb: '247 255 245',
    corBg: 'shc-100bg',
    corText: 'dark',
    separator: 'est-900bg',
  },
  {
    nome: '$shc-200',
    hex: '#B8FFCA',
    rgb: '184 255 202',
    corBg: 'shc-200bg',
    corText: 'dark',
    separator: 'shc-900bg',
  },
  {
    nome: '$fin-400',
    hex: '#00FF41',
    rgb: '0 255 65',
    corBg: 'shc-400bg',
    corText: 'dark',
    separator: 'shc-900bg',
  },
  {
    nome: '$shc-600',
    hex: '#008F11',
    rgb: '0 147 17',
    corBg: 'shc-600bg',
    corText: 'dark',
    separator: 'est-900bg',
  },
  {
    nome: '$shc-800',
    hex: '#006600',
    rgb: '0 102 0',
    corBg: 'shc-800bg',
    corText: 'dark',
    separator: 'shc-900bg',
  },

  {
    nome: '$shc-900',
    hex: '#121412',
    rgb: '18 20 18',
    corBg: 'shc-900bg',
    corText: 'dark',
    separator: 'shc-900bg',
  },
]);




let paletaAzul = paletaAzulLista
let paletaLaranja = paletaLaranjaLista
let paletaVerdeFin = paletaVerdeFinLista
let paletaVerdeShc = paletaVerdeShcLista




</script>

<template >
  <q-page class="q-pa-lg column flex-center">

    <div class=" q-pb-md full-width justify-between row">
      <h4 class="text-weight-bolder">Paletas de Cor</h4>
      <q-btn class="self-center" style="height:50px;" target="_blank"
        href="https://www.figma.com/file/FHHT480KlTdFbVkSmfHTez/identidade-visual-illimitar?node-id=56%3A472&t=LKWTO5kUvvJp3pgk-1"
        rounded color="primary" label="Acessar biblioteca no figma"></q-btn>
    </div>
    <!--paleta azul ipv inicio-->
    <div class=" full-width text-subtitle2 q-pb-md">
      <b>ipv</b> - illimitar | produto | venda : Aplicada em materiais, sistemas
      e recursos que estejam relacionados à marca da empresa e à gestão de
      produtos e vendas.
    </div>
    <q-card class=" full-width shadow-6">
      <!--header inicio-->
      <q-card flat class="row justify-between">
        <q-card-section class="col text-center text-subtitle2">
          Cor
        </q-card-section>
        <q-card-section class="col text-center text-subtitle2 text-bold">
          variavel
        </q-card-section>
        <q-card-section class="col text-center text-subtitle2 text-bold">
          HEX
        </q-card-section>
        <q-card-section class="col text-center text-subtitle2 text-bold">
          RGB
        </q-card-section>
      </q-card>
      <!--header fim-->
      <PaletaCores v-for="lista in paletaAzul" :key="lista.nome" v-bind="lista" />
    </q-card>
    <!--paleta azul ipv fim-->
    <!--paleta laranja est inicio-->
    <div class=" q-pt-lg full-width text-subtitle2 q-pb-md">
      <b>est</b> - Estoque: Aplicada em materiais, sistemas e recursos
      que estejam relacionados à gestão de estoque
    </div>
    <q-card class=" full-width shadow-6">
      <!--header inicio-->
      <q-card flat class="row justify-between">
        <q-card-section class="col text-center text-subtitle2">
          Cor
        </q-card-section>
        <q-card-section class="col text-center text-subtitle2 text-bold">
          variavel
        </q-card-section>
        <q-card-section class="col text-center text-subtitle2 text-bold">
          HEX
        </q-card-section>
        <q-card-section class="col text-center text-subtitle2 text-bold">
          RGB
        </q-card-section>
      </q-card>
      <!--header fim-->
      <PaletaCores v-for="lista in paletaLaranja" :key="lista.nome" v-bind="lista" />
    </q-card>
    <!--paleta laranja est fim-->
    <!--paleta verde fin inicio-->
    <div class=" q-pt-lg full-width text-subtitle2 q-pb-md">
      <b>fin</b> - Financeiro: Aplicada em materiais,
      sistemas e recursos que estejam relacionados à gestão financeira
    </div>
    <q-card class=" full-width shadow-6">
      <!--header inicio-->
      <q-card flat class="row justify-between">
        <q-card-section class="col text-center text-subtitle2">
          Cor
        </q-card-section>
        <q-card-section class="col text-center text-subtitle2 text-bold">
          variavel
        </q-card-section>
        <q-card-section class="col text-center text-subtitle2 text-bold">
          HEX
        </q-card-section>
        <q-card-section class="col text-center text-subtitle2 text-bold">
          RGB
        </q-card-section>
      </q-card>
      <!--header fim-->
      <PaletaCores v-for="lista in paletaVerdeFin" :key="lista.nome" v-bind="lista" />
    </q-card>
    <!--paleta verde fin fim-->
    <!--paleta verde shc inicio-->
    <div class=" q-pt-lg full-width text-subtitle2 q-pb-md">
      <b>shc</b> - Software house | Consultoria: Aplicada em materiais
      que estejam relacionados aos serviços da software house e de consultoria
    </div>
    <q-card class=" full-width shadow-6">
      <!--header inicio-->
      <q-card flat class="row justify-between">
        <q-card-section class="col text-center text-subtitle2">
          Cor
        </q-card-section>
        <q-card-section class="col text-center text-subtitle2 text-bold">
          variavel
        </q-card-section>
        <q-card-section class="col text-center text-subtitle2 text-bold">
          HEX
        </q-card-section>
        <q-card-section class="col text-center text-subtitle2 text-bold">
          RGB
        </q-card-section>
      </q-card>
      <!--header fim-->
      <PaletaCores v-for="lista in paletaVerdeShc" :key="lista.nome" v-bind="lista" />
    </q-card>
    <!--paleta verde shc fim-->
  </q-page>
</template>
