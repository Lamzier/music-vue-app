<script setup>
import { nextTick, provide, reactive, ref } from 'vue'
import { RouterView } from 'vue-router'

const useinfo = reactive({}) // 用户信息
provide('userinfo', useinfo) //将用户信息暴露出来

//刷新页面
const routerReload = ref(true)
const reload = () => {
    routerReload.value = false
    nextTick(() => {
        routerReload.value = true
    })
}
provide("reload", reload)

</script>

<template>
    <RouterView v-if="routerReload"></RouterView>
</template>
<style scoped>

</style>