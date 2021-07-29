import { RouteRecordRaw } from "vue-router"
import store from "@/core/store"

import Default from "@/extensions/demos/smart-algorithms/components/view-default.vue"

import Topic_0 from "@/extensions/demos/smart-algorithms/components/topics/topic-0.vue"

import { setCurrentTopic } from "@/core/interface/logics/_indexed-layout"

const routes: RouteRecordRaw =
{
    path: 'smart-algorithms',
    alias: 'home',
    beforeEnter: () => {
        store.dispatch("Demos/optDemo", { demo: 'smart-algorithms' })
    },
    component: Default,
    children:
    [
        {
            path: '',
            alias: 'intro',
            component: Topic_0,
            beforeEnter: () => {
                setCurrentTopic('smart-algorithms', '')
            }
        },

    ],
}

export default routes