
<script setup>
import PaletaBlue from 'src/components/Cores/PaletaIpvAzul.vue';

const paletaAzulList = [

  {
    nome: '$ipv',
    hex: '#1379DF',
    rgb: '9 121 223',
    corBg: 'primary',
    corText: 'primary',
    separator: 'primary',
  }
];
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
      <PaletaBlue v-for="list in paletaAzulList" :key="list.props.nome.valor" v-bind="list" />
    </q-card>
    <!--paleta azul ipv-->

  </q-page>
</template>

