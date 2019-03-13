import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/logins/login.vue'
import main from '@/components/logins/main.vue'
import homePage from '@/components/homePage/homePage.vue'

Vue.use(Router)

export default new Router({
    scrollBehavior(to, from, savedPosition) {
        if (to.hash) {
            return {
                selector: to.hash
            }
        }
        window.scrollTo(0, 0)
    },
    mode: 'hash',
    routes: [{
            path: '/',
            redirect: '/login'
        },
        {
            path: '/login',
            name: 'login',
            component: login
        },
        {
            path: '/main',
            name: 'main',
            component: main,
            children: [{
                path: '/homePage',
                name: 'homePage',
                component: homePage
            }]
        }
    ]
})