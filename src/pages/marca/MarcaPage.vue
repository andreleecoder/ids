<script setup>

import { ref } from 'vue';
import PaletaCores from 'src/components/Cores/PaletaCores.vue';
import { Notify } from 'quasar'
import { copyToClipboard } from 'quasar'
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

const getCssG = () => {
  let curvaG = document.getElementById("curvaG")
  copyToClipboard(curvaG.textContent)
    .then(() => {
      Notify.create({
        color: 'positive',
        message: 'copiado com sucesso',
        timeout: 500
      })

    })
    .catch(() => {
      // fail
    })
}
const getCssP = () => {
  let curvaP = document.getElementById("curvaP")
  copyToClipboard(curvaP.textContent)
    .then(() => {
      Notify.create({
        color: 'positive',
        message: 'copiado com sucesso',
        timeout: 500
      })

    })
    .catch(() => {
      // fail
    })
}

</script>
<template>
  <q-page class="fundo-paginas q-pb-lg q-px-lg column flex-start">
    <div class=" q-pb-sm full-width justify-between row ">
      <h4 class="text-weight-bolder">Manual da Marca</h4>


      <q-btn class="self-center" style="height:50px;" rounded icon="download" target="blank"
        label="Baixar o PDF do manual" color="primary" href="https://cloud.illimitar.com.br/s/2DJ3Eq6rSn3B8Dg" />
    </div>
    <!--logo-->
    <div class=" full-width justify-between column ">
      <h5 class=" i-h5 q-mb-xs text-weight-bolder">Logo</h5>
      <div class="row items-center q-px-lg">
        <div class="col-5">
          <img class="full-width" alt="logo vertical"
            src="https://cloud.illimitar.com.br/apps/files_sharing/publicpreview/img-ids?file=/logo-illimitar-vertical-2023.png&fileId=963370&x=1920&y=1080&a=true" />
        </div>
        <div class="col">
          <img class="full-width " alt="logo horizontal"
            src="https://cloud.illimitar.com.br/apps/files_sharing/publicpreview/img-ids?file=/logo-illimtar-horizontal-2023.png&fileId=963368&x=1920&y=1080&a=true" />
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
            <q-btn class=" text-bold" target="_blank" href="https://cloud.illimitar.com.br/s/fontes" flat
              color="primary" label="Fontes illimitar"></q-btn>
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
          <q-card-section class=" ipv-curv-gdbg col text-center text-subtitle2">

          </q-card-section>
          <q-card-section class="col text-center text-subtitle2 text-bold">
            <p>#1379DF</p>
            <p>#5CADFF</p>
          </q-card-section>
          <q-card-section class="col text-center text-subtitle2 text-bold">
            <p class="q-ma-none">19 121 223</p>
            <p class="q-ma-none">210 64 100</p>
          </q-card-section>
          <q-card-section class="col-4  i-subtitle2 text-bold">
            <q-btn flat label="copiar" class="absolute-bottom-right" @click="getCssG()" />
            <p id="curvaG" style="word-break:break-all;">background: linear-gradient(82.61deg, #5C9DFF 3.18%, #1363DF
              97.94%);</p>
          </q-card-section>
        </q-card>
        <q-separator class="ipv-900bg"></q-separator>
        <q-card flat class="row justify-between">

          <q-card-section class="ipv-curv-peqbg col text-center text-subtitle2">

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
            <q-btn flat label="copiar" class="absolute-bottom-right" @click="getCssP()" />

            <p id="curvaP" style="word-break:break-all;">background: linear-gradient(270deg, #1379DF 0.01%, #5CADFF
              100.01%);</p>
          </q-card-section>
        </q-card>
      </q-card>
    </div>
  </q-page>
</template>

