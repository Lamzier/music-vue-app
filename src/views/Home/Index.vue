<script setup>
import { onMounted, inject } from 'vue'

const navIndex = inject('navIndex')

onMounted(() => {
    navIndex.value = 2
})
</script>

<template>
    <div class="container">
        <header class="row">
            <div class="input-group mb-3 mt-3">
                <div class="input-group-append">
                    <label class="badge text-bg-dark badge-user">普通用户</label>
                </div>
                <input type="text" class="form-control" placeholder="关键字">
                <div class="input-group-append">
                    <button class="btn btn-outline-secondary" type="button">搜索</button>
                </div>
                <div class="input-group-append">
                    <label class="user-message bi bi-envelope-fill "></label>
                </div>
            </div>
        </header>


        主页
    </div>
</template>
<style scoped>
.container {
    background-color: antiquewhite;
}

.badge-user {
    height: 100%;
    line-height: 100%;
    vertical-align: middle;
    padding: 12px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    min-width: 50px;
    max-width: 80px;
}

.user-message {
    margin-left: 10px;
    font-size: 1.5em;
}
</style>