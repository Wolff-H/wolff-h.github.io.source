<template lang="pug">.
    .topic(data-topic="1")
        h1
            |Basic usage
        p
            |Make elements sticky just like native sticky.
        demo-box
            template(#="")
                .container(
                    ref="ref_container"
                )
                    .sticker(
                        ref="ref_sticker"
                    )
                        |sticker1
                    .padding-x
                        |· · · · · · 1 · · · · · · 2 · · · · · · 3 · · · · · · 4 · · · · · · 5 · · · · · · 6 · · · · · · 7 · · · · · · 8 · · · · · · 9 · · · · · · 10 · · · · · · 11 · · · · · · 12 · · · · · · 13 · · · · · · 14 · · · · · · 15 · · · · · · 
                    .sticker-1(
                        ref="ref_sticker_1"
                    )
                        |sticker2
                    .padding-y
                        |· · · · · · 1 · · · · · · 2 · · · · · · 3 · · · · · · 4 · · · · · · 5 · · · · · · 6 · · · · · · 7 · · · · · · 8 · · · · · · 9 · · · · · · 10 · · · · · · 11 · · · · · · 12 · · · · · · 13 · · · · · · 14 · · · · · · 15 · · · · · · 
            template(#code="")
                highlighted-code(code_language="html")
                    |{{   CodeSnippets['subtopic_1'].template   }}
                highlighted-code(code_language="typescript")
                    |{{   CodeSnippets['subtopic_1'].script   }}
</template>



<script lang="ts">
    import { defineComponent, nextTick, onMounted, ref } from "vue"

    import DemoBox from "@/core/interface/components/_demo-box/index.vue"

    import stickElement from "stick-element"
    import HighlightedCode from "@/core/interface/components/_highlighted-code/index.vue"
    import CodeSnippets from "@/extensions/demos/drag-scroll/logics/topics/code-snippets/topic-5"

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
            const ref_container = ref() as { value: HTMLElement }
            const ref_sticker = ref() as { value: HTMLElement }
            const ref_sticker_1 = ref() as { value: HTMLElement }

            // methods -------------------------------------------------------------------------------------------------

            // lifecycles ----------------------------------------------------------------------------------------------
            onMounted(() => {
                nextTick(() => {
                    stickElement(ref_container.value, ref_sticker.value, {
                        movement: { top: 0, left: 0 }
                    })
                    stickElement(ref_container.value, ref_sticker_1.value, {
                        movement: { left: 50 }
                    })
                })
            })

            // return --------------------------------------------------------------------------------------------------
            return {
                ref_container,
                ref_sticker,
                ref_sticker_1,
                CodeSnippets,
            }
        },
    })
</script>



<style lang="stylus">
@import _colorset

// 状态样式 -------------------------------------------------------------------------------------------------------------

// 基础样式 -------------------------------------------------------------------------------------------------------------
#demos .demo[data-demo='stick-element'] .topic[data-topic='1']
    .container
        width: (800 + 2)px
        height: (600 + 2)px
        padding 50px
        overflow auto
        overflow auto
        border 1px solid black

        >.sticker
            display inline-flex
            position relative
            width 200px
            height 50px
            justify-content center
            align-items center
            border 1px solid $black40
            background-color $black03

        >.padding-x
            display inline-block
            width 1500px
            padding 10px 0px

        >.sticker-1
            display inline-flex
            position relative
            width 50px
            height 200px
            padding 10px
            justify-content center
            align-items center
            border 1px solid $black40
            background-color $black03
            writing-mode vertical-lr

        .padding-y
            width 50px
            height 1500px
            writing-mode vertical-lr

.
    // 
</style>
