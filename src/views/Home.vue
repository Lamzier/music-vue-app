<script setup>
import FooterBottom from '../components/FooterBottom.vue';
import { ref, provide, onMounted } from 'vue'

const navIndex = ref(0) //导航栏索引
provide('navIndex', navIndex)
</script>

<template>
    <RouterView></RouterView>
    <FooterBottom />
</template>