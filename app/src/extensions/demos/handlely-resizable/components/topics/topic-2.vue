<template lang="pug">.
    .topic(data-topic="2")
        h1
            |Movement
        p
            |Specify movement.
        h3
            |Lock x-axis
        p
            |Lock x-axis.
        demo-box
            template(#="")
                .resizable-1(
                    ref="ref_r_1"
                )
                    .resizable-handle-1(
                        ref="ref_rh_1"
                    )
            template(#code="")
                highlighted-code(code_language="html")
                    |{{   CodeSnippets['subtopic_1'].template   }}
                highlighted-code(code_language="typescript")
                    |{{   CodeSnippets['subtopic_1'].script   }}
                highlighted-code(code_language="stylus")
                    |{{   CodeSnippets['subtopic_1'].style   }}
        h3
            |Lock y-axis
        p
            |Lock y-axis.
        demo-box
            template(#="")
                .resizable-2(
                    ref="ref_r_2"
                )
                    .resizable-handle-2(
                        ref="ref_rh_2"
                    )
            template(#code="")
                highlighted-code(code_language="html")
                    |{{   CodeSnippets['subtopic_1'].template   }}
                highlighted-code(code_language="typescript")
                    |{{   CodeSnippets['subtopic_1'].script   }}
                highlighted-code(code_language="stylus")
                    |{{   CodeSnippets['subtopic_1'].style   }}
        h3
            |Directions
        p
            |Resizable along different directions.
        demo-box
            template(#="")
                .container
                    .resizable-3(
                        ref="ref_r_3"
                    )
                        .resizable-handle-3(
                            ref="ref_rh_3"
                        )
                    .resizable-4(
                        ref="ref_r_4"
                    )
                        .resizable-handle-4(
                            ref="ref_rh_4"
                        )
                    .resizable-5(
                        ref="ref_r_5"
                    )
                        .resizable-handle-5(
                            ref="ref_rh_5"
                        )
                    .resizable-6(
                        ref="ref_r_6"
                    )
                        .resizable-handle-6(
                            ref="ref_rh_6"
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
        name: 'topic-2',
        components:
        {
            [DemoBox.name]: DemoBox,
            [HighlightedCode.name]: HighlightedCode,
        },
        setup()
        {
            // data ----------------------------------------------------------------------------------------------------
            // dom refs //
            const ref_r_1 = ref() as { value: HTMLElement }
            const ref_rh_1 = ref() as { value: HTMLElement }

            const ref_r_2 = ref() as { value: HTMLElement }
            const ref_rh_2 = ref() as { value: HTMLElement }

            const ref_r_3 = ref() as { value: HTMLElement }
            const ref_rh_3 = ref() as { value: HTMLElement }

            const ref_r_4 = ref() as { value: HTMLElement }
            const ref_rh_4 = ref() as { value: HTMLElement }

            const ref_r_5 = ref() as { value: HTMLElement }
            const ref_rh_5 = ref() as { value: HTMLElement }

            const ref_r_6 = ref() as { value: HTMLElement }
            const ref_rh_6 = ref() as { value: HTMLElement }

            // 0 //

            // methods -------------------------------------------------------------------------------------------------

            // lifecycles ----------------------------------------------------------------------------------------------
            onMounted(() => {
                nextTick(() => {
                    handlelyResizable(ref_rh_1.value, ref_r_1.value, { y: 0 })
                    handlelyResizable(ref_rh_2.value, ref_r_2.value, { x: 0 })
                    handlelyResizable(ref_rh_3.value, ref_r_3.value, { x: 1, y: 1 })
                    handlelyResizable(ref_rh_4.value, ref_r_4.value, { x: -1, y: 1 })
                    handlelyResizable(ref_rh_5.value, ref_r_5.value, { x: -1, y: -1 })
                    handlelyResizable(ref_rh_6.value, ref_r_6.value, { x: 1, y: -1 })
                })
            })

            // return --------------------------------------------------------------------------------------------------
            return {
                ref_r_1,
                ref_rh_1,
                ref_r_2,
                ref_rh_2,
                ref_r_3,
                ref_rh_3,
                ref_r_4,
                ref_rh_4,
                ref_r_5,
                ref_rh_5,
                ref_r_6,
                ref_rh_6,
                CodeSnippets,
            }
        },
    })
</script>



<style lang="stylus">
@import _colorset

// 状态样式 -------------------------------------------------------------------------------------------------------------

// 基础样式 -------------------------------------------------------------------------------------------------------------
#demos .demo[data-demo='handlely-resizable'] .topic[data-topic='2']
    .resizable-1
        display inline-flex
        position relative
        min-width 128px
        min-height 128px
        justify-content center
        align-items center
        border 1px solid $black50
        background-color $black05

        .resizable-handle-1
            position absolute
            right -1px
            width 5px
            height 100%
            background-color $shadow10
            cursor ew-resize

    .resizable-2
        display inline-flex
        position relative
        min-width 128px
        min-height 128px
        justify-content center
        align-items center
        border 1px solid $black50
        background-color $black05

        .resizable-handle-2
            position absolute
            bottom -1px
            width 100%
            height 5px
            background-color $shadow10
            cursor ns-resize

    .container
        position relative
        width 580px
        height 580px
        border 4px solid $black05

        .resizable-3, .resizable-4, .resizable-5, .resizable-6
            position absolute
            min-width 128px
            min-height 128px
            border 1px solid $black50
            background-color $black05

        .resizable-3
            top 0px
            left 0px

        .resizable-4
            top 0px
            right 0px

        .resizable-5
            right 0px
            bottom 0px

        .resizable-6
            bottom 0px
            left 0px

        .resizable-handle-3, .resizable-handle-4, .resizable-handle-5, .resizable-handle-6
            position absolute
            width 9px
            height 9px
            background-color $shadow10

        .resizable-handle-3
            right -5px
            bottom -5px
            cursor nwse-resize

        .resizable-handle-4
            bottom -5px
            left -5px
            cursor nesw-resize

        .resizable-handle-5
            top -5px
            left -5px
            cursor nwse-resize

        .resizable-handle-6
            top -5px
            right -5px
            cursor nesw-resize

.
    // 
</style>
