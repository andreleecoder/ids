<script setup >


defineProps(
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
    corBg: {
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
    <q-separator :class="`${separator}`"></q-separator>
    <!--ipv inicio-->
    <q-card flat class="row justify-between">
      <q-card-section :class="`${corBg}`" class=" col text-center">
      </q-card-section>
      <q-card-section :class="`${corText}`" class="col text-center text-subtitle2 text-weight-bolder " nome>
        {{ nome }}
      </q-card-section>
      <q-card-section :class="`${corText}`" class="col text-center text-subtitle2 text-weight-bolder " hex>
        {{ hex }}
      </q-card-section>
      <q-card-section :class="`${corText}`" class="col text-center text-subtitle2 text-weight-bolder " rgb>
        {{ rgb }}
      </q-card-section>
    </q-card>
    <!--ipv fim-->
  </q-card>
</template>
