<template lang="pug">.
    .topic(data-topic="3-2")
        h1
            |Reverse scroll direction
        p
            |Reverse scroll direction along x-axis, y-axis, or both.
        h3
            |Reverse x-axis.
        p
            |Reverse scroll direction along x-axis.
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
            template(#code="")
                highlighted-code(code_language="html")
                    |{{   CodeSnippets['subtopic_1'].template   }}
                highlighted-code(code_language="typescript")
                    |{{   CodeSnippets['subtopic_1'].script   }}
                highlighted-code(code_language="stylus")
                    |{{   CodeSnippets['subtopic_1'].style   }}
        h3
            |Reverse y-axis.
        p
            |Reverse scroll direction along y-axis.
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
            template(#code="")
                highlighted-code(code_language="html")
                    |{{   CodeSnippets['subtopic_2'].template   }}
                highlighted-code(code_language="typescript")
                    |{{   CodeSnippets['subtopic_2'].script   }}
                highlighted-code(code_language="stylus")
                    |{{   CodeSnippets['subtopic_2'].style   }}
        h3
            |Reverse xy-axis.
        p
            |Reverse scroll direction on both x-axis and y-axis.
        demo-box
            template(#="")
                .container(
                    ref="ref_scrollable_2"
                )
                    img(
                        src="@/assets/images/landscape-coast.jpg"
                        alt="landscape-coast"
                        draggable="false"
                        ref="ref_draggable_2"
                    )
            template(#code="")
                highlighted-code(code_language="html")
                    |{{   CodeSnippets['subtopic_3'].template   }}
                highlighted-code(code_language="typescript")
                    |{{   CodeSnippets['subtopic_3'].script   }}
                highlighted-code(code_language="stylus")
                    |{{   CodeSnippets['subtopic_3'].style   }}
</template>



<script lang="ts">
    import { defineComponent, nextTick, onMounted, ref } from "vue"

    import DemoBox from "@/core/interface/components/_demo-box/index.vue"

    import dragScroll from "@/plugins/drag-scroll"
    import HighlightedCode from "@/core/interface/components/_highlighted-code/index.vue"
    import CodeSnippets from "@/extensions/demos/drag-scroll/logics/topics/code-snippets/topic-3-2"

    export default defineComponent({
        name: 'topic-3-2',
        components:
        {
            [DemoBox.name]: DemoBox,
            [HighlightedCode.name]: HighlightedCode,
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

            const ref_draggable_2 = ref() as { value: HTMLElement }
            const ref_scrollable_2 = ref() as { value: HTMLElement }

            // methods -------------------------------------------------------------------------------------------------

            // lifecycles ----------------------------------------------------------------------------------------------
            onMounted(() => {
                nextTick(() => {
                    dragScroll(ref_draggable.value, ref_scrollable.value, { movement: { x: [1, -1] } })
                    dragScroll(ref_draggable_1.value, ref_scrollable_1.value, { movement: { y: [1, -1] } })
                    dragScroll(ref_draggable_2.value, ref_scrollable_2.value, { movement: { x: [1, -1], y: [1, -1] } })
                })
            })

            // return --------------------------------------------------------------------------------------------------
            return{
                ref_draggable,
                ref_scrollable,
                ref_draggable_1,
                ref_scrollable_1,
                ref_draggable_2,
                ref_scrollable_2,
                CodeSnippets,
            }
        },
    })
</script>



<style lang="stylus">
@import _colorset

// 状态样式 -------------------------------------------------------------------------------------------------------------

// 基础样式 -------------------------------------------------------------------------------------------------------------
#demos .demo[data-demo='drag-scroll'] .topic[data-topic='3-2']
    .container
        display inline-block
        width 640px
        height 480px
        overflow auto
.
    // 
</style>
