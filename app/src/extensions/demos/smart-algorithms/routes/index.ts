import { RouteRecordRaw } from "vue-router"
import store from "@/core/store"

import Default from "@/extensions/demos/smart-algorithms/components/view-default.vue"

import Topic_0 from "@/extensions/demos/smart-algorithms/components/topics/topic-0.vue"
import Topic_1 from "@/extensions/demos/smart-algorithms/components/topics/topic-1.vue"
import Topic_2 from "@/extensions/demos/smart-algorithms/components/topics/topic-2.vue"
import Topic_3 from "@/extensions/demos/smart-algorithms/components/topics/topic-3.vue"
import Topic_4 from "@/extensions/demos/smart-algorithms/components/topics/topic-4.vue"
import Topic_4_1 from "@/extensions/demos/smart-algorithms/components/topics/topic-4-1.vue"
import Topic_4_2 from "@/extensions/demos/smart-algorithms/components/topics/topic-4-2.vue"

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
        {
            path: '1',
            component: Topic_1,
            beforeEnter: () => {
                setCurrentTopic('smart-algorithms', '1')
            }
        },
        {
            path: '2',
            component: Topic_2,
            beforeEnter: () => {
                setCurrentTopic('smart-algorithms', '2')
            }
        },
        {
            path: '3',
            component: Topic_3,
            beforeEnter: () => {
                setCurrentTopic('smart-algorithms', '3')
            }
        },
        {
            path: '4',
            component: Topic_4,
            beforeEnter: () => {
                setCurrentTopic('smart-algorithms', '4')
            }
        },
        {
            path: '4-1',
            component: Topic_4_1,
            beforeEnter: () => {
                setCurrentTopic('smart-algorithms', '4-1')
            }
        },
        {
            path: '4-2',
            component: Topic_4_2,
            beforeEnter: () => {
                setCurrentTopic('smart-algorithms', '4-2')
            }
        },
    ],
}

export default routes