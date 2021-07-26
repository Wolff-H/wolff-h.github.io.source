import { RouteRecordRaw } from "vue-router"

import store from "@/core/store"
import TSPGraphing from "@/extensions/demos/tsp-graphing/components/index.vue"

const routes: RouteRecordRaw =
{
    path: 'tsp-graphing',
    alias: 'home',
    component: TSPGraphing,
    beforeEnter: () => {
        store.dispatch("Demos/optDemo", { demo: 'tsp-graphing' })
    },
}

export default routes