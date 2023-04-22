import { createRouter, createWebHashHistory } from 'vue-router'

//路由懒加载
const Index = () => import('../views/Index.vue')
const Login = () => import('../views/Login.vue')
const Register = () => import('../views/Register.vue')
const Personalization = () => import('../views/Personalization.vue')
const Personalization2 = () => import('../views/Personalization2.vue')
const Home = () => import('../views/Home.vue')
const HomeIndex = () => import('../views/Home/Index.vue')
const HomeCommunity = () => import('../views/Home/Community.vue')
const HomeCourse = () => import('../views/Home/Course.vue')
const HomePractice = () => import('../views/Home/Practice.vue')
const HomeUserCenter = () => import('../views/Home/UserCenter.vue')

const routes = [
    {
        path: '/',
        component: Index,
    },
    {
        path: '/login',
        component: Login,
    },
    {
        path: '/register',
        component: Register,
    },
    {
        path: '/personalization',
        component: Personalization,
    },
    {
        path: '/personalization2',
        component: Personalization2,
    },
    {
        path: '/home',
        component: Home,
        //嵌套路由
        children:[
            {
                path: '',
                component: HomeIndex,
            },
            {
                path: 'course',
                component: HomeCourse
            },
            {
                path: 'practice',
                component: HomePractice
            },
            {
                path: 'community',
                component: HomeCommunity
            },
            {
                path: 'user-center',
                component: HomeUserCenter
            },
        ],
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes, // `routes: routes` 的缩写
    scrollBehavior() { //每次跳转返回最上面
        return { top: 0 }
    }
})

export default router

