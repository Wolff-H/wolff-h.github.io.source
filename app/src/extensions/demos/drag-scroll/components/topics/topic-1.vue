<template lang="pug">.
    .topic(data-topic="1")
        h1
            |Basic Usage
        h3
            |Basic Usage
        p
            |The most common, basic usage of drag-scroll.
            br
            |Drag the image below to scroll its parent container.
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
                    |{{   CodeSnippets.template   }}
                highlighted-code(code_language="typescript")
                    |{{   CodeSnippets.script   }}
                highlighted-code(code_language="stylus")
                    |{{   CodeSnippets.style   }}
</template>



<script lang="ts">
    import { defineComponent, nextTick, onMounted, ref } from "vue"

    import DemoBox from "@/core/interface/components/_demo-box/index.vue"
    import CodeSnippets from "@/extensions/demos/drag-scroll/logics/topics/code-snippets/topic-1"
    import HighlightedCode from "@/core/interface/components/_highlighted-code/index.vue"

    import dragScroll from "@/plugins/drag-scroll"

    export default defineComponent({
        name: 'topic-1',
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
                    dragScroll(ref_draggable.value, ref_scrollable.value)
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
#demos .demo[data-demo='drag-scroll'] .topic[data-topic='1']
    .container
        display inline-block
        width 800px
        height 600px
        overflow auto

.
    // 
</style>
