import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        component: () => import('../views/Guide/Login'),
        meta: {allowBack: false}
    }, {
        path: '/login',
        component: () => import('../views/Guide/Login'),
        meta: {allowBack: false}
    }, {
        path: '/addBook',
        component: () => import('../views/Main/AddBook')
    }, {
        path: '/noteInfo',
        component: () => import('../views/Main/NoteInfo')
    }, {
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
        path: '/elist',
        component: () => import('../views/Main/ExcerptList')
    }, {
        path: '/nlist',
        component: () => import('../views/Main/NoteList')
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
