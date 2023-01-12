
<template >
  <q-page class="bg-light column items-center">

    <div style="width: 80%; " class="justify-between row text-subtitle2 ">
      <h4 class="text-weight-bolder">Paletas de Cor</h4>
      <q-btn class="self-center" style="height:50px;" target="_blank"
        href="https://www.figma.com/file/FHHT480KlTdFbVkSmfHTez/identidade-visual-illimitar?node-id=56%3A472&t=LKWTO5kUvvJp3pgk-1"
        rounded color="primary" label="Acessar biblioteca no figma"></q-btn>
    </div>
    <div style="width: 80%" class="text-subtitle2 q-pb-md">
      <b>ipv</b> - illimitar | produto | venda : Aplicada em materiais, sistemas
      e recursos que estejam relacionados à marca da empresa e à gestão de
      produtos e vendas.
    </div>
    <!--paleta azul ipv-->
    <q-card style="width: 80%" class="shadow-6">
      <PaletaBlue />
    </q-card>
    <!--paleta azul ipv-->

  </q-page>
</template>
<script>
import { defineComponent, ref } from 'vue';
import PaletaBlue from 'src/components/PaletaIpvAzul.vue';

export default defineComponent({
  components: {
    PaletaBlue,
  }
});
</script>
