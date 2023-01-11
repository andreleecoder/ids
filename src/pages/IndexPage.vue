<template>
  <q-page class="column flex-center">
    <img alt="Quasar logo" src="~assets/logo-illimtar-horizontal-2023.png" />
    <h6>illimitar Design system</h6>
    <div class="q-mt-xl">
      <q-btn
        color="primary"
        dense
        round
        label="-"
        :disable="count === min"
        @click="count--"
      />

      <span class="q-mx-md text-bold">{{ count }}</span>

      <q-btn
        color="primary"
        dense
        round
        label="+"
        :disable="count === max"
        @click="count++"
      />
    </div>

    <div class="q-mt-md" style="width: 200px">
      <q-slider v-model="count" :min="min" :max="max" />
    </div>
  </q-page>
</template>

<script setup>
import { ref } from 'vue';

const count = ref(0);

const min = -10;
const max = 10;
</script>
