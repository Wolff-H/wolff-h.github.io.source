<template lang="pug">.
    .topic(data-topic="3-1")
        h1
            |Lock axis
        p
            |Dragscroll behavior will only take place on x-axis, y-axis, or both.
        h3
            |Lock x-axis
        p
            |Dragscroll behavior will only take place on x-axis.
        demo-box
            template(#="")
                .container(
                    ref="ref_scrollable"
                )
                    img(
                        src="@/assets/images/landscape-coast.jpg"
                        alt="landscape-coast"
                        draggable="false"
                        ref="ref_draggable"
                    )
        h3
            |Lock y-axis
        p
            |Dragscroll behavior will only take place on y-axis.
        demo-box
            template(#="")
                .container(
                    ref="ref_scrollable_1"
                )
                    img(
                        src="@/assets/images/landscape-coast.jpg"
                        alt="landscape-coast"
                        draggable="false"
                        ref="ref_draggable_1"
                    )
</template>



<script lang="ts">
    import { defineComponent, nextTick, onMounted, ref } from "vue"

    import DemoBox from "@/core/interface/components/_demo-box/index.vue"

    import dragScroll from "@/plugins/drag-scroll"

    export default defineComponent({
        name: 'topic-3-1',
        components:
        {
            [DemoBox.name]: DemoBox,
        },
        setup()
        {
            // data ----------------------------------------------------------------------------------------------------
            // 0 //

            // dom refs //
            const ref_draggable = ref() as { value: HTMLElement }
            const ref_scrollable = ref() as { value: HTMLElement }

            const ref_draggable_1 = ref() as { value: HTMLElement }
            const ref_scrollable_1 = ref() as { value: HTMLElement }

            // methods -------------------------------------------------------------------------------------------------

            // lifecycles ----------------------------------------------------------------------------------------------
            onMounted(() => {
                nextTick(() => {
                    dragScroll(ref_draggable.value, ref_scrollable.value, { y: [0, 0] })
                    dragScroll(ref_draggable_1.value, ref_scrollable_1.value, { x: [0, 0] })
                })
            })

            // return --------------------------------------------------------------------------------------------------
            return{
                ref_draggable,
                ref_scrollable,
                ref_draggable_1,
                ref_scrollable_1,
            }
        },
    })
</script>



<style lang="stylus">
@import _colorset

// 状态样式 -------------------------------------------------------------------------------------------------------------

// 基础样式 -------------------------------------------------------------------------------------------------------------
#demos .demo[data-demo='drag-scroll'] .topic[data-topic='3-1']
    .container
        display inline-block
        width 640px
        height 480px
        overflow auto
.
    // 
</style>
