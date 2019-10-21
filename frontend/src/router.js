import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'MainHomePage',
            component: () => import('./components/MainHomePage.vue'),
            meta: { requiresAuth: true }
        },
        {
            path: '/SignUp',
            name: 'SignUp',
            component: () => import('./components/SignUp.vue'),
            meta: { requiresAuth: true }
        },
        {
            path: '/Login',
            name: 'Login',
            component: () => import('./components/Login.vue'),
            meta: { requiresAuth: true }
        },
    ]
})