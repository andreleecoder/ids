<template>
  <q-page class="column flex-center">
    <h4 class="text-weight-bolder">Paletas de Cor</h4>
    <div style="width: 80%" class="text-subtitle2 q-py-md">
      <b>ipv</b> - illimitar | produto | venda : Aplicada em materiais, sistemas
      e recursos que estejam relacionados à marca da empresa e à gestão de
      produtos e vendas.
    </div>
    <q-card class="shadow-6">
      <PaletaCores
        v-for="paleta in PaletaCores"
        :key="paleta.title"
        v-bind="paleta"
      />
    </q-card>
    <q-card style="width: 80%" class="shadow-6 justify-center collumn">
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
      <q-separator color="primary"></q-separator>
      <q-card flat class="row justify-between">
        <q-card-section class="col text-center bg-primary"> </q-card-section>
        <q-card-section
          class="col text-center text-subtitle2 text-weight-bolder text-primary"
        >
          $ipv
        </q-card-section>
        <q-card-section
          class="col text-center text-subtitle2 text-weight-bolder text-primary"
        >
          #1379DF
        </q-card-section>
        <q-card-section
          class="col text-center text-subtitle2 text-weight-bolder text-primary"
        >
          19 121 223
        </q-card-section>
      </q-card>
      <q-separator color="primary"></q-separator>
    </q-card>
    <a
      href="https://www.figma.com/file/FHHT480KlTdFbVkSmfHTez/identidade-visual-illimitar?node-id=56%3A472&t=oBp4dMjnW1fczxse-1"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img alt="paletas" src="~assets/paletas de cor.png" />
    </a>
  </q-page>
</template>
<script>
import PaletaCores from 'components/PaletaCores.vue';
const paletasList = [
  {
    cor: '#0060bf',
    variavel: '$ipv-600',
    hex: '#0060bf',
    rgb: '210 100 75',
  }
  ]
  export default defineComponent({
  name: 'MainLayout',

  components: {
    PaletaCores,
  },

  setup() {


    return {
      PaletaCores: paletasList,
     
    };
  },
});
</script>
