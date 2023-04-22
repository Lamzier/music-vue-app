<script setup>
import { onMounted, inject } from 'vue'

const navIndex = inject('navIndex')

onMounted(() => {
    navIndex.value = 0
})
</script>

<template>
    社区
</template>