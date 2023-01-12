<template>
  <q-card flat>
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
    <q-separator color="primary"></q-separator>
    <!--ipv inicio-->
    <q-card flat class="row justify-between">
      <q-card-section class="col text-center bg-primary">
      </q-card-section>
      <q-card-section class="col text-center text-subtitle2 text-weight-bolder text-primary">
        $ipv
      </q-card-section>
      <q-card-section class="col text-center text-subtitle2 text-weight-bolder text-primary">
        #1379DF
      </q-card-section>
      <q-card-section class="col text-center text-subtitle2 text-weight-bolder text-primary">
        19 121 223
      </q-card-section>
    </q-card>
    <!--ipv fim-->
    <q-separator color="primary"></q-separator>
    <!--ipv-100 inicio-->
    <q-card flat class="row justify-between">
      <q-card-section outlined style="border:solid 0.5px #000000;" class="col text-center  bg-light">
      </q-card-section>
      <q-card-section class="col text-center text-subtitle2 text-weight-bolder ">
        $ipv-100
      </q-card-section>
      <q-card-section class="col text-center text-subtitle2 text-weight-bolder ">
        #F5F9FF
      </q-card-section>
      <q-card-section class="col text-center text-subtitle2 text-weight-bolder ">
        245 249 255
      </q-card-section>
    </q-card>
    <!--ipv-100 fim-->
    <q-separator color="dark"></q-separator>

  </q-card>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PaletaBlue',
});
</script>
