<script setup>
import { nextTick, provide, reactive, ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()

function submit() {
    router.push('/home')
}

</script>

<template>
    <div class="content">
        <div class="title">
            <h1>选择你感兴趣的分类</h1>
        </div>
        <div class="container">
            <ul class="row content-person">
                <li class="col-4"><button class="btn btn-secondary">学习</button></li>
                <li class="col-4"><button class="btn btn-secondary">鉴赏音乐</button></li>
                <li class="col-4"><button class="btn btn-secondary">乐理</button></li>
                <li class="col-4"><button class="btn btn-secondary">考级</button></li>
            </ul>
            <div class="row">
                <div class="col-2"></div>
                <div class="col-8">
                    <button @click="submit" class="col-8 btn btn-success">提交</button>
                <a class="col-4 btn">跳过</a>
                </div>
          
                <div class="col-2"></div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.content {
    width: 100%;
    background-color: bisque;
    min-height: 100vh;
}

.title {
    width: 100%;
    padding: 25px 25px 0 25px;
    border-bottom: 1px solid;
}

.title h1 {
    font-weight: bolder;
    font-size: 2em;
}

.title p span {
    float: right;
    font-weight: bolder;
}

.content-person {
    padding: 10px;
}

.content-person h1 {
    font-size: 1.2em;
    font-weight: bolder;
}

.content-person li {
    list-style: none;
    margin-bottom: 10px;
}

.content-person li button {
    width: 100%;
}
</style>