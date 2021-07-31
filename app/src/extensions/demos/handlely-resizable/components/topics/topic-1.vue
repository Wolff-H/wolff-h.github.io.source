<template lang="pug">.
    .topic(data-topic="1")
        h1
            |Basic
        p
            |Basic usage. Doubleclick the resizer to reset resizable.
        demo-box
            template(#="")
                .resizable(
                    ref="ref_resizable"
                )
                    |a resizable div
                    .handle(
                        ref="ref_handle"
                        @dblclick="resetResizableWidth()"
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
    import handlelyResizable from "@/plugins/handlely-resizable"
    import HighlightedCode from "@/core/interface/components/_highlighted-code/index.vue"
    import CodeSnippets from "@/extensions/demos/handlely-resizable/logics/topics/code-snippets/topic-n"

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
            // dom refs //
            const ref_resizable = ref() as { value: HTMLElement }
            const ref_handle = ref() as { value: HTMLElement }

            // 0 //

            // methods -------------------------------------------------------------------------------------------------
            function resetResizableSize()
            {
                ref_resizable.value.style.width = '256px'
                ref_resizable.value.style.height = '128px'
            }
            // lifecycles ----------------------------------------------------------------------------------------------
            onMounted(() => {
                nextTick(() => {
                    handlelyResizable(ref_handle.value, ref_resizable.value)
                })
            })

            // return --------------------------------------------------------------------------------------------------
            return {
                ref_resizable,
                ref_handle,
                resetResizableSize,
                CodeSnippets,
            }
        },
    })
</script>



<style lang="stylus">
@import _colorset

// 状态样式 -------------------------------------------------------------------------------------------------------------

// 基础样式 -------------------------------------------------------------------------------------------------------------
#demos .demo[data-demo='handlely-resizable'] .topic[data-topic='1']
    .resizable
        display inline-flex
        position relative
        min-width 128px
        min-height 128px
        justify-content center
        align-items center
        border 1px solid $black50
        background-color $black05

        .handle
            position absolute
            right -4px
            bottom -4px
            width 8px
            height 8px
            background-color $shadow10
            cursor nwse-resize
.
    // 
</style>
