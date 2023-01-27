<script setup>

import { ref } from 'vue';
import PaletaCores from 'src/components/Cores/PaletaCores.vue';
//dados das paletas de cor
const paletaAzulLista = ref([
  {
    nome: '$ipv',
    hex: '#1379DF',
    rgb: '9 121 223',
    corBg: 'ipvbg',
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

])
let paletaAzul = paletaAzulLista

</script>
<template>
  <q-page class="fundo-paginas q-pb-lg q-px-lg column flex-start">
    <div class=" q-pb-sm full-width justify-between row ">
      <h4 class="text-weight-bolder">Manual da Marca</h4>
      <q-btn class="self-center" style="height:50px;" target="_blank"
        href="https://www.figma.com/file/FHHT480KlTdFbVkSmfHTez/identidade-visual-illimitar?node-id=75%3A384&t=0Sbt3TzSxuIMfTma-1"
        rounded color="primary" label="Acessar biblioteca no figma"></q-btn>
    </div>
    <!--logo-->
    <div class=" full-width justify-between column ">
      <h5 class=" i-h5 q-mb-xs text-weight-bolder">Logo</h5>
      <div class="row items-center q-px-lg">
        <div class="col-5">
          <img class="full-width" alt="logo vertical" src="https://raw.githubusercontent.com/andreleecoder/ids/main/src/assets/logo-illimitar-vertical-2023.png" />
        </div>
        <div class="col">
          <img class="full-width " alt="logo horizontal" src="https://raw.githubusercontent.com/andreleecoder/ids/main/src/assets/logo-illimtar-horizontal-2023.png" />
        </div>
      </div>
    </div>
    <!--tipografia-->
    <div class=" full-width justify-between column ">
      <h5 class=" i-h5 q-mb-xs  text-weight-bolder">Tipografia</h5>

      <q-card class=" full-width shadow-6">
        <!--header inicio-->
        <q-card flat class="row justify-between">
          <q-card-section class="col text-center text-subtitle2 ">
            Font Family
          </q-card-section>
          <q-card-section class="col text-center text-subtitle2 ">
            Peso
          </q-card-section>
          <q-card-section class="col text-center text-subtitle2 ">
            Link Para Download
          </q-card-section>
        </q-card>
        <!--header fim-->
        <!--info inicio-->
        <q-card flat class="row justify-between">
          <q-card-section class="col text-center text-subtitle2 text-bold">
            Aller
          </q-card-section>
          <q-card-section class="col text-center text-subtitle2 text-bold">
            Bold
          </q-card-section>
          <q-card-section class="col text-center text-subtitle2 ">
            <q-btn class="text-bold" target="_blank" href="https://cloud.illimitar.com.br/s/fontes" flat color="primary"
              label="Fontes illimitar"></q-btn>
          </q-card-section>
        </q-card>
        <!--info fim-->
      </q-card>
    </div>
    <!--cores-->
    <div class=" full-width justify-between column ">
      <h5 class=" i-h5 q-mb-xs  text-weight-bolder">Cores</h5>

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
    </div>
    <!--tGradientes Logo-->
    <div class=" full-width justify-between column ">
      <h5 class=" i-h5 q-mb-xs text-weight-bolder">Gradientes Logo</h5>
      <q-card class="full-width shadow-6">
        <!--header inicio-->
        <q-card flat class="row justify-between">
          <q-card-section class="col text-center text-subtitle2">
            Gradiente
          </q-card-section>
          <q-card-section class="col text-center text-subtitle2 ">
            HEX
          </q-card-section>
          <q-card-section class="col text-center text-subtitle2 ">
            HEX
          </q-card-section>
          <q-card-section class="col-4 text-center text-subtitle2 ">
            CSS
          </q-card-section>
        </q-card>
        <!--header fim-->
        <q-card flat class="row justify-between">
          <q-card-section class="col text-center text-subtitle2">

            <img class="full-width" alt="logo vertical" src="src/assets/logo-curva-grande.png" />

          </q-card-section>
          <q-card-section class="col text-center text-subtitle2 text-bold">
            <p>#1379DF</p>
            <p>#5CADFF</p>
          </q-card-section>
          <q-card-section class="col text-center text-subtitle2 text-bold">
            <p>19 121 223</p>
            <p>210 64 100</p>
          </q-card-section>
          <q-card-section class="col-4  i-subtitle2 text-bold">
            <p style="word-break:break-all;">background: linear-gradient(82.61deg, #5C9DFF 3.18%, #1363DF 97.94%);</p>
          </q-card-section>
        </q-card>
        <q-card flat class="row justify-between">
          <q-card-section class="col text-center text-subtitle2">

            <img class="full-width" alt="logo vertical" src="src/assets/logo-curva-peq.png" />

          </q-card-section>
          <q-card-section class="col text-center text-subtitle2 text-bold">
            <p>#1379DF</p>
            <p>#5CADFF</p>
          </q-card-section>
          <q-card-section class="col text-center text-subtitle2 text-bold">
            <p>19 121 223</p>
            <p>210 64 100</p>
          </q-card-section>
          <q-card-section class="col-4 i-subtitle2 text-bold">
            <p style="word-break:break-all;">background: linear-gradient(82.61deg, #5C9DFF 3.18%, #1363DF 97.94%);</p>
          </q-card-section>
        </q-card>
      </q-card>
    </div>
  </q-page>
</template>

