<script setup>
import { onMounted, inject } from 'vue'

const navIndex = inject('navIndex')

onMounted(() => {
    navIndex.value = 3
})
</script>

<template>
    用户中心
</template>