<script setup>
import { ref } from 'vue'
const props = defineProps(
  {
    //valores das informações
    nome: {
      type: String,
      valor: '',
    },
    hex: {
      type: String,
      valor: '',
    },
    rgb: {
      type: String,
      valor: '',
    },
    //valor do estilo
    corBG: {
      type: String,
      valor: '',
    },
    corText: {
      type: String,
      valor: '',
    },
    separator: {
      type: String,
      valor: '',
    }
  }
)



</script>
<template>
  <q-card flat>
    <!--header inicio-->
    <q-card flat class="row justify-between">
      <q-card-section v-model="cor" class="col text-center text-subtitle2">
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
    <q-separator :class="`bg-${props.separator.valor}`"></q-separator>
    <!--ipv inicio-->
    <q-card flat class="row justify-between">
      <q-card-section :class="`bg-${props.corBG.valor}`" class="col text-center">
      </q-card-section>
      <q-card-section :class="`text-${props.corText.valor}`" class="col text-center text-subtitle2 text-weight-bolder ">
        {{ props.nome.valor }}
      </q-card-section>
      <q-card-section :class="`text-${props.corText.valor}`" class="col text-center text-subtitle2 text-weight-bolder ">
        {{ props.hex.valor }}
      </q-card-section>
      <q-card-section :class="`text-${props.corText.valor}`" class="col text-center text-subtitle2 text-weight-bolder ">
        {{ props.rgb.valor }}
      </q-card-section>
    </q-card>
    <!--ipv fim-->
    <q-separator :class="`bg-${props.separator}`"></q-separator>

  </q-card>
</template>


