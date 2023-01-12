<template>
  <q-card flat>
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
      <q-card-section class="col text-center bg-primary" cor>
        {{ cor }}</q-card-section
      >
      <q-card-section
        class="col text-center text-subtitle2 text-weight-bolder text-primary"
        variavel
      >
        {{ variavel }}
      </q-card-section>
      <q-card-section
        class="col text-center text-subtitle2 text-weight-bolder text-primary"
        hex
      >
        {{ hex }}
      </q-card-section>
      <q-card-section
        class="col text-center text-subtitle2 text-weight-bolder text-primary"
        rgb
      >
        {{ rgb }}
      </q-card-section>
    </q-card>
    <q-separator color="primary"></q-separator>
  </q-card>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PaletaCores',
  props: {
    cor: {
      type: String,
      default: '',
    },

    variavel: {
      type: String,
      default: '',
    },

    hex: {
      type: String,
      default: '',
    },

    rgb: {
      type: String,
      default: '',
    }, 
  },
});
</script>
