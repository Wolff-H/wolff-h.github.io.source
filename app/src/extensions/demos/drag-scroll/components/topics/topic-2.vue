<template lang="pug">.
    .topic(data-topic="2")
        h1
            |Seperate element and container
        p
            |It's not necessary to make corresponding scrollable container right the draggable element's parent.
            br
            |For the example below, use the grey "touchpad" to scroll the container.
        demo-box
            template(#="")
                .container(
                    ref="ref_scrollable"
                )
                    img(
                        src="@/assets/images/landscape-coast.jpg"
                        alt="landscape-coast"
                        draggable="false"
                    )
                .touchpad(
                    ref="ref_draggable"
                )
            template(#code="")
                highlighted-code(code_language="html")
                    |{{   CodeSnippets['seperate_element_and_container'].template   }}
                highlighted-code(code_language="typescript")
                    |{{   CodeSnippets['seperate_element_and_container'].script   }}
                highlighted-code(code_language="stylus")
                    |{{   CodeSnippets['seperate_element_and_container'].style   }}
</template>



<script lang="ts">
    import { defineComponent, nextTick, onMounted, ref } from "vue"
    import DemoBox from "@/core/interface/components/_demo-box/index.vue"
    import dragScroll from "dragroll"
    import HighlightedCode from "@/core/interface/components/_highlighted-code/index.vue"
    import CodeSnippets from "@/extensions/demos/drag-scroll/logics/topics/code-snippets/topic-2"

    export default defineComponent({
        name: 'topic-2',
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
            return {
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
#demos .demo[data-demo='drag-scroll'] .topic[data-topic='2']
    .container
        display inline-block
        width 640px
        height 480px
        overflow auto

    .touchpad
        margin-top 24px
        width 256px
        height 192px
        background-color $black20

.
    // 
</style>
