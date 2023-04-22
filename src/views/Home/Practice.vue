<script setup>
import { onMounted, inject } from 'vue'

const navIndex = inject('navIndex')

onMounted(() => {
    navIndex.value = 4
})
</script>

<template>
    练习
</template>