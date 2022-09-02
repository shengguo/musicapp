
import {
    createRouter,
    createWebHistory,
    RouteRecordRaw
} from 'vue-router'

//类型校验，规范化typescript，增加路由对象类型限制，好处：允许在基础路由里增加开发自定义属性
const routes: RouteRecordRaw[] = [
    {
        path: '/',
        redirect: '/login',
    },
    {
        path: '/login',
        name: 'Login',
        meta: {
            type: 'Login'
        },
        component: () => import('../views/Login/Login.vue'),
    },
    {
        path: '/login/phone',
        name: 'Phone',
        meta: {
            type: 'Login'
        },
        component: () => import('../views/Login/Phone.vue'),
    },
    {
        path: '/login/phone/vcode',
        name: 'Vcode',
        component: () => import('../views/Login/VerCode.vue'),
    },
    {
        path: '/home',
        name: 'Home',
        meta: {
            type: 'Home'
        },
        component: () => import('../views/Home.vue')
    },
    {
        path: '/view',
        name: 'View',
        component: () => import('../views/View.vue'),
        meta: {
            keepAlive: true // 需要被缓存
        },
    },
    {
        path: '/comment',
        name: 'Comment',
        component: () => import('../views/Comment.vue')
    }

];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router