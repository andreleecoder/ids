
<script>

import { defineComponent } from 'vue';
import PaletaBlue from 'src/components/Cores/PaletaIpvAzul.vue';
const paletaAzulLista = [
  {
    nome: '$ipv',
    hex: '#1379DF',
    rgb: '9 121 223',
    corBg: 'primary',
    corText: 'primary',
    separator: 'primary',
  },
  {
    nome: '$ipv-400',
    hex: '#1379DF',
    rgb: '9 121 223',
    corBg: 'ipv-800',
    corText: 'dark',
    separator: 'dark',
  },
];

export default defineComponent({
  // name: 'paletaCores',

  components: {
    PaletaBlue,
  },

  setup() {


    return {
      paletaAzul: paletaAzulLista,


    };
  },
});



</script>
<template >
  <q-page class="q-px-lg bg-light column items-center">

    <div class=" full-width justify-between row text-subtitle2 ">
      <h4 class="text-weight-bolder">Paletas de Cor</h4>
      <q-btn class="self-center" style="height:50px;" target="_blank"
        href="https://www.figma.com/file/FHHT480KlTdFbVkSmfHTez/identidade-visual-illimitar?node-id=56%3A472&t=LKWTO5kUvvJp3pgk-1"
        rounded color="primary" label="Acessar biblioteca no figma"></q-btn>
    </div>
    <div class=" full-width text-subtitle2 q-pb-md">
      <b>ipv</b> - illimitar | produto | venda : Aplicada em materiais, sistemas
      e recursos que estejam relacionados à marca da empresa e à gestão de
      produtos e vendas.
    </div>
    <!--paleta azul ipv-->
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
      <PaletaBlue v-for="lista in paletaAzul" :key="lista.nome" v-bind="lista" />
    </q-card>
    <!--paleta azul ipv-->

  </q-page>
</template>

<style href="app.vue" lang="sass">
@import './css/quasar.variables.scss';


</style>