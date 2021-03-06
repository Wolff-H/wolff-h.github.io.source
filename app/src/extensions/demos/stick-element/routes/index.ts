import { RouteRecordRaw } from "vue-router"

import store from "@/core/store"
import Default from "@/extensions/demos/stick-element/components/view-default.vue"
import Topic_0 from "@/extensions/demos/stick-element/components/topics/topic-0.vue"
import Topic_1 from "@/extensions/demos/stick-element/components/topics/topic-1.vue"
import Topic_2 from "@/extensions/demos/stick-element/components/topics/topic-2.vue"
import Topic_3 from "@/extensions/demos/stick-element/components/topics/topic-3.vue"
import Topic_4 from "@/extensions/demos/stick-element/components/topics/topic-4.vue"
import Topic_5 from "@/extensions/demos/stick-element/components/topics/topic-5.vue"
import { setCurrentTopic } from "@/core/interface/logics/_indexed-layout"

const routes: RouteRecordRaw =
{
    path: 'stick-element',
    alias: 'home',
    component: Default,
    beforeEnter: () => {
        store.dispatch("Demos/optDemo", { demo: 'stick-element' })
    },
    children:
    [
        {
            path: '',
            alias: 'intro',
            component: Topic_0,
            beforeEnter: () => {
                setCurrentTopic('stick-element', '')
            }
        },
        {
            path: '1',
            component: Topic_1,
            beforeEnter: () => {
                setCurrentTopic('stick-element', '1')
            }
        },
        {
            path: '2',
            component: Topic_2,
            beforeEnter: () => {
                setCurrentTopic('stick-element', '2')
            }
        },
        {
            path: '3',
            component: Topic_3,
            beforeEnter: () => {
                setCurrentTopic('stick-element', '3')
            }
        },
        {
            path: '4',
            component: Topic_4,
            beforeEnter: () => {
                setCurrentTopic('stick-element', '4')
            }
        },
        {
            path: '5',
            component: Topic_5,
            beforeEnter: () => {
                setCurrentTopic('stick-element', '5')
            }
        },
    ],
}

export default routes