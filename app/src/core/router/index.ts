import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router"

import store from "@/core/store"

// views //
import Home from "@/core/components/view-home/index.vue"
import PageNotFound from "@/core/components/view-page-not-found/index.vue"

import Demos from "@/core/components/view-demos/index.vue"
import DemosDefault from "@/core/components/view-demos/view-default.vue"

import { integration } from "@/core"

/**********************************************************************************************************************/

const routes: RouteRecordRaw[] =
[
    // 兜底404 //
    {
        path: '/:pathMatch(.*)',
        component: PageNotFound,
    },
    {
        path: '/',
        component: Home,
    },
    {
        path: '/demos',
        component: Demos,
        // beforeEnter: () => {
        //     store.commit("Demo/optDemo", { demo: '' })
        // },
        children:
        [
            {
                path: '',
                component: DemosDefault,
            },
            integration.extensions.demos["DragScroll"].registration.routes,
            // HandlelyResizable,
            // VueCollapse,
            // StickElement,
        ],
    },
    
]

console.log(routes);


const router = createRouter({
    history: createWebHashHistory(),
    routes: routes,
})

/**********************************************************************************************************************/

export default router