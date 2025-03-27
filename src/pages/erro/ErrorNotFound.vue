<template>
  <div class="fullscreen fundo-paginas text-white text-center q-pa-md flex flex-center">
    <div>
      <div class="ipvtx" style="font-size: 30vh">404</div>

      <div class="text-h2 ipv-100tx">Desculpe, algo deu errado</div>

      <q-btn class="q-mt-xl" color="primary" unelevated to="inicio" label="Voltar pro inicio" no-caps />
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ErrorNotFound',
});
</script>
