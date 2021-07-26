<template lang="pug">.
    .topic(data-topic="4")
        h1
            |Update, disable, destroy
        p
            |Update, disable, destroy an existing dragscroll.
        demo-box
            template(#="")
                .buttons
                    el-button(
                        @click="setScale_1_1()"
                    )
                        |set scale 1:1
                    el-button(
                        @click="setScale_25_25()"
                    )
                        |set scale 25:25
                    el-button(
                        @click="disable()"
                    )
                        |disable
                    el-button(
                        @click="distroy()"
                    )
                        |destroy
                .container(
                    ref="ref_scrollable"
                )
                    img(
                        src="@/assets/images/landscape-coast.jpg"
                        alt="landscape-coast"
                        draggable="false"
                        ref="ref_draggable"
                    )
</template>



<script lang="ts">
    import { defineComponent, nextTick, onMounted, ref } from "vue"

    import DemoBox from "@/core/interface/components/_demo-box/index.vue"

    import dragScroll from "@/plugins/drag-scroll"

    export default defineComponent({
        name: 'topic-4',
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

            // methods -------------------------------------------------------------------------------------------------
            function setScale_1_1()
            {
                dragScroll(ref_draggable.value, ref_scrollable.value)
            }

            function setScale_25_25()
            {
                dragScroll(ref_draggable.value, ref_scrollable.value, { x: [25, 25], y: [25, 25] })
            }

            function disable()
            {
                dragScroll(ref_draggable.value, ref_scrollable.value, { x: [0, 0], y: [0, 0] })
            }

            function distroy()
            {
                dragScroll(ref_draggable.value, null)    // 清除draggable下的所有scrollable
            }

            // lifecycles ----------------------------------------------------------------------------------------------
            onMounted(() => {
                nextTick(() => {
                    dragScroll(ref_draggable.value, ref_scrollable.value)
                })
            })

            // return --------------------------------------------------------------------------------------------------
            return{
                ref_draggable,
                ref_scrollable,
                setScale_1_1,
                setScale_25_25,
                disable,
                distroy,
            }
        },
    })
</script>



<style lang="stylus">
@import _colorset

// 状态样式 -------------------------------------------------------------------------------------------------------------

// 基础样式 -------------------------------------------------------------------------------------------------------------
#demos .demo[data-demo='drag-scroll'] .topic[data-topic='4']
    .container
        display inline-block
        width 640px
        height 480px
        overflow auto

    .buttons
        margin-bottom 16px

.
    // 
</style>
