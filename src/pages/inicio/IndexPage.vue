<script setup>
import { ref } from 'vue'
import CardVantagens from 'src/components/inicio/CardVantagens.vue';
const listaCardVantagens = ref(
  [
    {
      titulo: "Consistência",
      conteudo: "Ele facilita decisões de design, colabora para o alinhamento dos times de produto e acelera o desenvolvimento,permitindo que as pessoas foquem seus esforços em soluções mais estratégicas.",
    },
    {
      titulo: "Velocidade",
      conteudo: " Quando designers e desenvolvedores melhoram sua forma de se comunicar e colaborar, o resultado é menos tempo executando tarefas repetitivas e tomando decisões e mais velocidade nas entregas.",
    },
    {
      titulo: "Qualidade",
      conteudo: " Nossos padrões são desenvolvidos levando em conta as necessidades do produto, dos usuários e seguindo boas práticas de front-end. Além disso são constantemente testados e validados, gerando melhoria contínua e maior qualidade.",
    },
    {
      titulo: "Evolução",
      conteudo: " Produtos digitais precisam evoluir constantemente e tornar esse processo mais simples é um dos objetivos do Design System. Com um sistema centralizado, atualizar e melhorar interfaces torna-se mais fácil e ágil. Retrabalho não precisa ser o caminho para a evolução.",
    },
    {
      titulo: "Melhor Experiência",
      conteudo: "Ter padrões claros, consistentes e efetivos traz benefícios também para os nossos usuários, que vão ter mais facilidade no aprendizado e utilização dos nossos produtos.",
    },

  ])
let cards = listaCardVantagens

</script>
<template>
  <q-page class="fundo-paginas column q-px-lg q-py-lg flex-center">
    <img style="width:40%;" alt="Quasar logo"
      src="https://cloud.illimitar.com.br/apps/files_sharing/publicpreview/img-ids?file=/logo-illimitar-vertical-2023.png&fileId=963370&x=1920&y=1080&a=true" />
    <h4 class="i-h4 q-mb-none">illimitar Design system</h4>
    <div class="column q-px-lg q-my-lg ">

      <p class="i-subtitle1">
        O Design System fornece recursos e
        guias para construir interfaces consistentes,
        acessíveis e com foco em oferecer uma ótima experiência aos nossos usuários.
      </p>
      <p class="i-subtitle1">
        Ele facilita decisões de design, colabora para o
        alinhamento dos times de produto e acelera o desenvolvimento,
        permitindo que as pessoas foquem seus esforços em soluções mais estratégicas.
      </p>
      <h5 class=" i-h5 q-mb-none">Vantagens ao adotar um design system</h5>

    </div>
    <!--cards vantagens-->
    <CardVantagens v-for="lista in cards" :key="lista.titulo" v-bind="lista" />
  </q-page>
</template>


