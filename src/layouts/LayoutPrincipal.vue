<script setup>
import { ref } from 'vue'
import LinksNavegacao from 'src/components/Layout/LinksNavegacao.vue';

let listaRotaInicio = ref([
  {
    title: 'Inicio',
    caption: 'Design sistem',
    icon: 'home',
    link: 'inicio',
  }
])
let listaRotasEstilo = ref([
  {
    title: 'Cores',
    caption: 'Paleta de cores',
    icon: 'palette',
    link: 'cores',
  },
  {
    title: 'Marca',
    caption: 'Manual Marca',
    icon: 'diamond',
    link: 'marca',
  },
])




let rotaInicio = listaRotaInicio
let rotasEstilo = listaRotasEstilo

//componente drawer
let drawerLeft = ref(false)
let expanded = ref(true)
</script>

<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="bg-toolbar ">
      <q-toolbar class="text-primary">
        <q-btn flat dense round icon="menu" aria-label="Menu" @click="drawerLeft = !drawerLeft" />
        <q-img fit width="60px" alt="logo ids"
          src="https://cloud.illimitar.com.br/apps/files_sharing/publicpreview/J46Y23767CwXWds?file=&fileId=963587&x=2880&y=1800&a=true" />
        <q-toolbar-title class="i-h5">illimitar Design System </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="drawerLeft">

      <q-list>
        <LinksNavegacao v-for="link in rotaInicio" :key="link.title" v-bind="link" />
        <q-expansion-item header-class="text-primary" v-model="expanded" icon="style" label="Estilo">
          <LinksNavegacao v-for="link in rotasEstilo" :key="link.title" v-bind="link" />
        </q-expansion-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

