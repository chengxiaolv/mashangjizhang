import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/logins/login.vue'
import main from '@/components/logins/main.vue'

// 首页
import homePage from '@/components/homePage/homePage.vue'

// 账套管理
import accountingManagement from '@/components/accountingManagement/accountingManagement.vue'

// 组件示例
import commonAssemblysExample from '@/common/common_assemblys_example/common_assemblys_example.vue' //组件实列文件集合。

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
            }, {
                path: '/accountingManagement',
                name: 'accountingManagement',
                component: accountingManagement
            }]
        },
        { //打开查看组件实列新标签页。
            path: '/commonAssemblysExample',
            name: 'commonAssemblysExample',
            component: commonAssemblysExample
        },
    ]
})