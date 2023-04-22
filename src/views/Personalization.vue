<script setup>
import { nextTick, provide, reactive, ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()

function submit() {
    router.push('/personalization2')
}

</script>

<template>
    <div class="content">
        <div class="title">
            <h1>选择学习阶段</h1>
            <p>请放心选择，以后还可以更改 <span class="bi bi-browser-safari">地区</span></p>
        </div>
        <div class="container">
            <ul class="row content-person">
                <h1>小学</h1>
                <li class="col-4"><button class="btn btn-secondary">一年级</button></li>
                <li class="col-4"><button class="btn btn-secondary">二年级</button></li>
                <li class="col-4"><button class="btn btn-secondary">三年级</button></li>
                <li class="col-4"><button class="btn btn-secondary">四年级</button></li>
                <li class="col-4"><button class="btn btn-secondary">五年级</button></li>
                <li class="col-4"><button class="btn btn-secondary">六年级</button></li>
            </ul>
            <ul class="row content-person">
                <h1>初中</h1>
                <li class="col-4"><button class="btn btn-secondary">初一</button></li>
                <li class="col-4"><button class="btn btn-secondary">初二</button></li>
                <li class="col-4"><button class="btn btn-secondary">初三</button></li>
            </ul>
            <ul class="row content-person">
                <h1>高中</h1>
                <li class="col-4"><button class="btn btn-secondary">高一</button></li>
                <li class="col-4"><button class="btn btn-secondary">高二</button></li>
                <li class="col-4"><button class="btn btn-secondary">高三</button></li>
            </ul>
            <ul class="row content-person">
                <h1>大学</h1>
                <li class="col-4"><button class="btn btn-secondary">大一</button></li>
                <li class="col-4"><button class="btn btn-secondary">大二</button></li>
                <li class="col-4"><button class="btn btn-secondary">大三</button></li>
                <li class="col-4"><button class="btn btn-secondary">大四</button></li>
                <li class="col-4"><button class="btn btn-secondary">研究生</button></li>
            </ul>
            <ul class="row content-person">
                <h1>其他</h1>
                <li class="col-4"><button class="btn btn-secondary">上班族</button></li>
                <li class="col-4"><button class="btn btn-secondary">求职者</button></li>
                <li class="col-4"><button class="btn btn-secondary">自由系</button></li>
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