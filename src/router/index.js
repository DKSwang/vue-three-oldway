/*
 * @Author: xxuzhong.wang
 * @Date: 2021-02-07 15:41:03
 * @LastEditors: xuzhong.wang
 * @LastEditTime: 2021-02-18 09:46:51
 * @Description: 
 */
import {
    createRouter,
    createWebHistory
} from 'vue-router'

const routes = [{
        path: '/',
        name: 'Login',
        component: () => import( /* webpackChunkName: "about" */ '../views/Login/login.vue')
    },
    {
        path: "/",
        name: "wrapper",
        component: () => import("../components/Wrapper.vue"),
        children: [{
                path: '/home',
                name: 'Home',
                component: () => import( /* webpackChunkName: "about" */ '../views/Home/home.vue')
            },
            {
                path: "/loanafterManage/batchAdjustment",
                name: "batchAdjustment",
                component: () =>
                    import("@/views/LoanafterManage/batchAdjustment/index.vue"),
                meta: {
                    name: "批量调额"
                }
            },
            {
                path: "/modifyPassword",
                name: "modifyPassword",
                component: () => import("@/views/ModifyPassword/index.vue"),
                meta: {
                    name: "修改密码"
                }
            },
            {
                path: "/test",
                name: "test",
                component: () => import("@/views/Test/test.vue"),
                meta: {
                    name: "测试页面"
                }
            },

        ]

    },
    {
        path: '/:catchAll(.*)',
        name: '404',
        component: () => import( /* webpackChunkName: "about" */ '../views/404/404.vue')
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router