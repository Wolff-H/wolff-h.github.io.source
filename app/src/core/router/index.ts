import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router"

import store from "@/core/store"

// views //
import Home from "@/core/components/view-home/index.vue"
import PageNotFound from "@/core/components/view-page-not-found/index.vue"

import Demos from "@/core/components/view-demos/index.vue"
import DemosDefault from "@/core/components/view-demos/view-default.vue"

import { integration } from "@/core"
import routes_DragScroll from "@/extensions/demos/drag-scroll/routes"
import routes_HandlelyResizable from "@/extensions/demos/handlely-resizable/routes"
import routes_StickElement from "@/extensions/demos/stick-element/routes"
import routes_TSPGraphing from "@/extensions/demos/tsp-graphing/routes"
import routes_SmartAlgorithms from "@/extensions/demos/smart-algorithms/routes"

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
        beforeEnter: () => {
            store.dispatch("Demos/optDemo", { demo: '' })
        },
        children:
        [
            {
                path: '',
                component: DemosDefault,
            },
            routes_DragScroll,
            routes_HandlelyResizable,
            routes_StickElement,
            routes_TSPGraphing,
            routes_SmartAlgorithms,
            // integration.extensions.demos["DragScroll"].registration.routes,
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