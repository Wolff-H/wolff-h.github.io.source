<template lang="pug">.
    .topic(data-topic="3-4")
        h1
            |Constrained dragscroll
        p
            |Dragscroll can only happen when cursor is inside the scrollable container.
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
</template>



<script lang="ts">
    import { defineComponent, nextTick, onMounted, ref } from "vue"

    import DemoBox from "@/core/interface/components/_demo-box/index.vue"

    import dragScroll from "@/plugins/drag-scroll"
    import HighlightedCode from "@/core/interface/components/_highlighted-code/index.vue"
    import CodeSnippets from "@/extensions/demos/drag-scroll/logics/topics/code-snippets/topic-3-4"

    export default defineComponent({
        name: 'topic-3-4',
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

            // methods -------------------------------------------------------------------------------------------------

            // lifecycles ----------------------------------------------------------------------------------------------
            onMounted(() => {
                nextTick(() => {
                    dragScroll(ref_draggable.value, ref_scrollable.value, { constrained: true })
                })
            })
            // return --------------------------------------------------------------------------------------------------
            return{
                ref_draggable,
                ref_scrollable,
                CodeSnippets,
            }
        },
    })
</script>



<style lang="stylus">
@import _colorset

// 状态样式 -------------------------------------------------------------------------------------------------------------

// 基础样式 -------------------------------------------------------------------------------------------------------------
#demos .demo[data-demo='drag-scroll'] .topic[data-topic='3-4']
    .container
        display inline-block
        width 800px
        height 600px
        overflow auto

.
    // 
</style>
