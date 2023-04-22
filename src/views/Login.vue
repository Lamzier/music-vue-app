<script setup>
import {useRouter} from 'vue-router'
const router = useRouter()

function login() {
    router.push('/personalization')
}

</script>

<template>
    <div class="login-contain">
        <div class="login-header">
            <p>欢迎登录</p>
        </div>
        <div class="login-logo" align="center">
            <img src="/img/userhead.jpg">
            <p>划过美好生活</p>
        </div>
        <div class="form-group">
            <div class="form-item">
                <label class="bi bi-person-fill"></label>
                <input type="text" placeholder="请输入邮箱">
            </div>
            <div class="form-item">
                <label class="bi bi-key-fill"></label>
                <input type="password" placeholder="请输入密码">
            </div>
        </div>
        <div class="button-group">
            <button @click="login" class="btn btn-success">登录</button>
            <RouterLink to="/register" class="btn btn-info login-register">注册</RouterLink>
        </div>
        <div class="casual">
            <a>随便逛逛</a>
        </div>
        <div class="order-login">
            <p>使用第三方账号登录</p>
            <ul>
                <li>
                    <a>
                        <img src="/img/QQ.png" alt="">
                    </a>
                </li>
                <li>
                    <a>
                        <img src="/img/WeChat.png" alt="">
                    </a>
                </li>

            </ul>
        </div>
        <div class="copyright">
            该技术由如你所喜欢提供
        </div>
    </div>
</template>

<style scoped>
body,
html,
div,
a,
span,
p,
h1,
h2,
h3,
h4,
h5,
ul,
li,
input,
button {
    margin: 0;
    padding: 0;
}

.f-left {
    float: left;
}

a,
li {
    list-style: none;
}

a {
    text-decoration: none;
    color: black;
}

/*
登录界面--start*/
.login-bg {
    background-image: url("../image/l-bg.jpg");
    background-size: cover;
    color: #ffffff;
}

.login-contain {
    background-color: rgba(0, 0, 0, 0.4);
    height: 100vh;
    width: 100%;
    position: fixed;
}

.login-header {
    padding: 5%;
}

.login-header p {
    font-size: 20px;
    color: #ffffff;
    text-align: center;
}

.login-logo {
    padding: 5%;
}

.login-logo img {
    width: 55px;
    height: 55px;
    border-radius: 50%;
}

.login-logo p {
    color: #ffffff;
    font-size: 14px;
    text-align: center;
    letter-spacing: 2px;
    margin-top: 2%;
}

.form-group {
    padding: 5%;
}

.form-group .form-item {
    border-bottom: 1px #ffffff solid;
    margin-top: 5%;
}

.form-group .form-item label{
    font-size: 1.5em;
}

.form-group .form-item input {
    outline: none;
    border: 0;
    background-color: transparent;
    color: #ffffff;
    height: 40px;
    font-size: 18px;
    width: 80%;
    margin-left: 3%;
}

.form-group .form-item input::-webkit-input-placeholder {
    /* WebKit browsers */
    color: #ffffff;
    font-size: 16px;
}

.form-group .form-item input:-moz-placeholder {
    /* Mozilla Firefox 4 to 18 */
    color: #ffffff;
    font-size: 16px;
}

.form-group .form-item input::-moz-placeholder {
    /* Mozilla Firefox 19+ */
    color: #ffffff;
    font-size: 16px;
}

.form-group .form-item input:-ms-input-placeholder {
    /* Internet Explorer 10+ */
    color: #ffffff;
    font-size: 16px;
}

.form-group .form-item label img {
    width: 25px;
    position: absolute;
    margin-top: 2%;
}

.form-group .form-item button {
    outline: none;
    background: transparent;
    border: 1px #00cc99 dashed;
    color: #ffffff;
    height: 30px;
    border-radius: 5px;
    float: right;
    padding: 1%;
}

.button-group {
    padding: 5%;
}

.button-group button {
    outline: none;
    border: 0;
    width: 90%;
    height: 35px;
    margin-top: 4%;
    border-radius: 20px;
    margin-left: 4%;
    color: #ffffff;
    font-size: 18px;
}

.button-group .login-btn {
    background-color: #00cc99;
}

.button-group .login-register {
    outline: none;
    border: 0;
    width: 90%;
    height: 35px;
    line-height: 35px;
    margin-top: 4%;
    border-radius: 20px;
    margin-left: 4%;
    color: #ffffff;
    font-size: 18px;
}

.casual {
    text-align: center;
}

.casual a {
    color: #ffffff;
    font-size: 18px;
}

.order-login {
    padding: 5%;
}

.order-login p {
    display: block;
    /*设置为块级元素会独占一行形成上下居中的效果*/
    position: relative;
    /*定位横线（当横线的父元素）*/
    text-align: center;
    font-size: 14px;
    color: #cccccc;
}

.order-login ul {
    margin-left: 25%;
    margin-top: 5%;
    height: 40px;
}

.order-login ul li {
    width: 25%;
    float: left;
}

.order-login ul li a img {
    width: 35px;
    height: 35px;
}

.order-login p:before,
.order-login p:after {
    content: '';
    position: absolute;
    /*定位背景横线的位置*/
    top: 50%;
    background: #cccccc;
    /*背景横线颜色*/
    width: 20%;
    /*单侧横线的长度*/
    height: 1px;
}

.order-login p:before {
    left: 10%;
    /*调整背景横线的左右距离*/
}

.order-login p:after {
    right: 10%;
}

.copyright {
    text-align: center;
    padding: 2%;
}
</style>