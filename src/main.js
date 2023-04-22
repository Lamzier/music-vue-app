import { createApp } from 'vue'
import App from './App.vue'
// 引入bootstrap
import 'bootstrap'
import Router from './router'

// 引入bootstrap样式
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
// 图标
import 'bootstrap-icons/font/bootstrap-icons.css';

const app = createApp(App)
app.use(Router)
app.mount('#app')