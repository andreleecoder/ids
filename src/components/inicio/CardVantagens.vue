
<script setup >

defineProps(
    {
        titulo: {
            type: String,
            default: ""

        },
        conteudo: {
            type: String,
            default: ""

        },

    }

)

</script>
<template>
    <q-card class=" full-width col q-py-xs q-my-md q-mx-lg shadow-6">
        <q-card-section class="q-my-none">
            <h6 class="q-my-sm" titulo>{{ titulo }}</h6>
            <p class="text-subtitle1" conteudo>
                {{ conteudo }}
            </p>
        </q-card-section>
    </q-card>
</template>
