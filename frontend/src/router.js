import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'User',
            component: () => import('./components/auth/Login.vue'),
            meta: { requiresAuth: true }
        },
        {
            path: '/Main',
            name: 'MainHomePage',
            component: () => import('./components/MainHomePage.vue'),
            meta: { requiresAuth: true }
        },
        {
            path: '/SignUp',
            name: 'SignUp',
            component: () => import('./components/auth/SignUp.vue'),
            meta: { requiresAuth: true }
        },
    ]
})

router.beforeEach((to, from, next) => {
    if (to.name === 'User' || to.name === 'SignUp') {
        if (JSON.parse(sessionStorage.getItem('userinfo'))) {
            return next('/')
        } else {
            return next()
        }
    } else {
        return next()
    }
})

export default router