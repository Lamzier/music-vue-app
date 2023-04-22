<script setup>
import { onMounted, inject } from 'vue'

const navIndex = inject('navIndex')

onMounted(() => {
    navIndex.value = 1
})
</script>

<template>
    我的课程
</template>