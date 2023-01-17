<script >
import { defineComponent } from 'vue';

export default defineComponent({
  nome: 'PaletaBlue',
  props: (
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
});


</script>
<template>
  <q-card flat>

    <q-separator :class="`bg-${separator}`"></q-separator>
    <!--ipv inicio-->
    <q-card flat class="row justify-between">
      <q-card-section :class="`bg-${corBg}`" class="col text-center">
      </q-card-section>
      <q-card-section :class="`text-${corText}`" class="col text-center text-subtitle2 text-weight-bolder " nome>
        {{ nome }}
      </q-card-section>
      <q-card-section :class="`text-${corText}`" class="col text-center text-subtitle2 text-weight-bolder " hex>
        {{ hex }}
      </q-card-section>
      <q-card-section :class="`text-${corText}`" class="col text-center text-subtitle2 text-weight-bolder " rgb>
        {{ rgb }}
      </q-card-section>
    </q-card>
    <!--ipv fim-->
    <q-separator :class="`bg-${separator}`"></q-separator>

  </q-card>
</template>
<style href="app.vue" lang="sass">
@import './css/quasar.variables.scss';

</style>

