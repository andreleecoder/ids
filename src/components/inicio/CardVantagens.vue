<script setup >

defineProps(
    {
        titulo: {
            type: String,
            valor: 'Velocidade',
        },
        conteudo: {
            type: String,
            valor: "Quando designers e desenvolvedores melhoram sua formade se comunicar e colaborar, o resultado é menos tempo executando tarefas repetitivas e tomando decisões e mais velocidade nas entregas",
        },

        corBg: {
            type: String,
            valor: 'primary',
        },
    }
)

</script>
<template>
    <q-card :class="`bg-${corBg}`" class="col q-py-xs q-my-md q-mx-lg shadow-6">
        <q-card-section class="q-my-none">
            <h6 class="q-my-sm" titulo>{{ props.titulo }}</h6>
            <p class="text-subtitle1" conteudo>
                {{ props.conteudo }}
            </p>
        </q-card-section>
    </q-card>
</template>