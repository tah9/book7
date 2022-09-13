import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        component: () => import('../views/Guide/Login')
    }, {
        path: '/login',
        component: () => import('../views/Guide/Login')
    }, {
        path: '/addBook',
        component: () => import('../views/Main/AddBook')
    },{
        path: '/add',
        component: () => import('../views/Main/Add')
    }, {
        path: '/register',
        component: () => import('../views/Guide/Register')
    }, {
        path: '/excerptInfo',
        component: () => import('../views/Main/ExcerptInfo')
    }, {
        path: '/bookInfo',
        component: () => import('../views/Main/BookInfo')
    }, {
        path: '/main',
        component: () => import('../views/Main/Main'),
        children: [
            {
                path: 'home',
                component: () => import('../views/Main/Home')
            }, {
                path: 'mine',
                component: () => import('../views/Main/Mine')
            }
        ]
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
