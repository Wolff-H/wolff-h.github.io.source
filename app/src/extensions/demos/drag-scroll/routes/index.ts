import { RouteRecordRaw } from "vue-router"
// import store from "@/store"

import Default from "@/extensions/demos/drag-scroll/components/view-default.vue"
import Topic_0 from "@/extensions/demos/drag-scroll/components/topics/topic-0.vue"

const routes: RouteRecordRaw =
{
    path: 'drag-scroll',
    alias: 'home',
    // beforeEnter: () => {
    //     store.commit("Demos/optDemo", { demo: 'drag-scroll' })
    // },
    component: Default,
    children:
    [
        {
            path: '',
            alias: 'intro',
            component: Topic_0,
        },
        // {
        //     path: '1',
        //     component: Case1,
        // },
        // {
        //     path: '2',
        //     component: Case2,
        // },
        // {
        //     path: '3',
        //     component: Case3,
        // },
        // {
        //     path: '4',
        //     component: Case4,
        // },
        // {
        //     path: '5',
        //     component: Case5,
        // },
    ],
}

export default routes