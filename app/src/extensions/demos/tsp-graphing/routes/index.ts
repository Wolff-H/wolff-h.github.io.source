import { RouteRecordRaw } from "vue-router"

import TSPGraphing from "@/extensions/demos/tsp-graphing/components/index.vue"

const routes: RouteRecordRaw =
{
    path: 'tsp-graphing',
    alias: 'home',
    component: TSPGraphing,
}

export default routes