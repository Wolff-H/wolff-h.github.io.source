import { RouteRecordRaw } from "vue-router"
// import store from "@/store"

import Default from "@/extensions/demos/drag-scroll/components/view-default.vue"
import Topic_0 from "@/extensions/demos/drag-scroll/components/topics/topic-0.vue"
import Topic_1 from "@/extensions/demos/drag-scroll/components/topics/topic-1.vue"
import Topic_2 from "@/extensions/demos/drag-scroll/components/topics/topic-2.vue"
import Topic_3 from "@/extensions/demos/drag-scroll/components/topics/topic-3.vue"
import Topic_3_1 from "@/extensions/demos/drag-scroll/components/topics/topic-3-1.vue"
import Topic_3_2 from "@/extensions/demos/drag-scroll/components/topics/topic-3-2.vue"
import Topic_3_3 from "@/extensions/demos/drag-scroll/components/topics/topic-3-3.vue"
import Topic_3_4 from "@/extensions/demos/drag-scroll/components/topics/topic-3-4.vue"
import Topic_3_5 from "@/extensions/demos/drag-scroll/components/topics/topic-3-5.vue"
import Topic_4 from "@/extensions/demos/drag-scroll/components/topics/topic-4.vue"
import Topic_5 from "@/extensions/demos/drag-scroll/components/topics/topic-5.vue"
import { setCurrentTopic } from "@/core/interface/logics/_indexed-layout"

const routes: RouteRecordRaw =
{
    path: 'drag-scroll',
    alias: 'home',
    beforeEnter: () => {
        // store.commit("Demos/optDemo", { demo: 'drag-scroll' })
        console.log('before enter /drag-scroll');
        
    },
    component: Default,
    children:
    [
        {
            path: '',
            alias: 'intro',
            component: Topic_0,
            beforeEnter: () => {
                setCurrentTopic('drag-scroll', '')
            }
        },
        {
            path: '1',
            component: Topic_1,
            beforeEnter: () => {
                setCurrentTopic('drag-scroll', '1')
            }
        },
        {
            path: '2',
            component: Topic_2,
            beforeEnter: () => {
                setCurrentTopic('drag-scroll', '2')
            }
        },
        {
            path: '3',
            component: Topic_3,
            beforeEnter: () => {
                setCurrentTopic('drag-scroll', '3')
            }
        },
        {
            path: '3-1',
            component: Topic_3_1,
            beforeEnter: () => {
                setCurrentTopic('drag-scroll', '3-1')
            }
        },
        {
            path: '3-2',
            component: Topic_3_2,
            beforeEnter: () => {
                setCurrentTopic('drag-scroll', '3-2')
            }
        },
        {
            path: '3-3',
            component: Topic_3_3,
            beforeEnter: () => {
                setCurrentTopic('drag-scroll', '3-3')
            }
        },
        {
            path: '3-4',
            component: Topic_3_4,
            beforeEnter: () => {
                setCurrentTopic('drag-scroll', '3-4')
            }
        },
        {
            path: '3-5',
            component: Topic_3_5,
            beforeEnter: () => {
                setCurrentTopic('drag-scroll', '3-5')
            }
        },
        {
            path: '4',
            component: Topic_4,
            beforeEnter: () => {
                setCurrentTopic('drag-scroll', '4')
            }
        },
        {
            path: '5',
            component: Topic_5,
            beforeEnter: () => {
                setCurrentTopic('drag-scroll', '5')
            }
        },
    ],
}

export default routes