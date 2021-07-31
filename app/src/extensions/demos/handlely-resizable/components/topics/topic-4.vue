<template lang="pug">.
    .topic(data-topic="4")
        h1
            |Disable, Destroy
        p
            |Disable and destroy resizable effect.
        demo-box
            template(#="")
                el-button(
                    size="small"
                    @click="disable()"
                )
                    |disable resizable
                el-button(
                    size="small"
                    @click="enable()"
                )
                    |enable resizable
                br
                br
                .resizable-1(
                    ref="ref_r_1"
                )
                    |resizable x and y
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
</template>



<script lang="ts">
    import { defineComponent, nextTick, onMounted, ref } from "vue"
    import DemoBox from "@/core/interface/components/_demo-box/index.vue"
    import handlelyResizable from "@/plugins/handlely-resizable"
    import HighlightedCode from "@/core/interface/components/_highlighted-code/index.vue"
    import CodeSnippets from "@/extensions/demos/handlely-resizable/logics/topics/code-snippets/topic-n"

    export default defineComponent({
        name: 'topic-4',
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

            // 0 //

            // methods -------------------------------------------------------------------------------------------------
            function disable()
            {
                handlelyResizable(ref_rh_1.value, ref_r_1.value, { x: 0, y: 0 })
            }
            function enable()
            {
                handlelyResizable(ref_rh_1.value, ref_r_1.value)
            }
            // lifecycles ----------------------------------------------------------------------------------------------
            onMounted(() => {
                nextTick(() => {
                    handlelyResizable(ref_rh_1.value, ref_r_1.value)
                })
            })

            // return --------------------------------------------------------------------------------------------------
            return {
                ref_r_1,
                ref_rh_1,
                disable,
                enable,
                CodeSnippets,
            }
        },
    })
</script>



<style lang="stylus">
@import _colorset

// 状态样式 -------------------------------------------------------------------------------------------------------------

// 基础样式 -------------------------------------------------------------------------------------------------------------
#demos .demo[data-demo='handlely-resizable'] .topic[data-topic='4']
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
            right -4px
            bottom -4px
            width 8px
            height 8px
            background-color $shadow10
            cursor nwse-resize
.
    // 
</style>
