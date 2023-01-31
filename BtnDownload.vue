<template>
    <q-btn class="self-center" style="height:50px;" rounded icon="download" color="primary" :label="label"
        @click="download" />
</template>

<script setup>

defineProps(
    {
        url: {
            type: String,
            required: true
        },
        label: {
            type: String,
            default: ''
        }
    })


const emit = defineEmits(['handleDownload'])
const download = () => {
    emit('handleDownload')
}
</script>
