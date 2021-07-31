<template lang="pug">.
    .topic(data-topic="3")
        h1
            |Update specification
        p
            |Update handlely-resizable specifications for an assigned element.
        demo-box
            template(#="")
                el-button(
                    size="small"
                    @click="lockX()"
                )
                    |lock on x-axis
                el-button(
                    size="small"
                    @click="lockY()"
                )
                    |lock on y-axis
                el-button(
                    size="small"
                    @click="unlock()"
                )
                    |unlock axes
                br
                br
                .resizable-1(
                    ref="ref_r_1"
                )
                    |resizable
                    br
                    |{{   resizable_directions   }}
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
        name: 'topic-3',
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
            const resizable_directions = ref(['x', 'y'])

            // methods -------------------------------------------------------------------------------------------------
            function lockX()
            {
                handlelyResizable(ref_rh_1.value, ref_r_1.value, { y: 0 })
                resizable_directions.value = ['x']
            }
            function lockY()
            {
                handlelyResizable(ref_rh_1.value, ref_r_1.value, { x: 0 })
                resizable_directions.value = ['y']
            }
            function unlock()
            {
                handlelyResizable(ref_rh_1.value, ref_r_1.value)
                resizable_directions.value = ['x', 'y']
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
                resizable_directions,
                lockX,
                lockY,
                unlock,
                CodeSnippets,
            }
        },
    })
</script>



<style lang="stylus">
@import _colorset

// 状态样式 -------------------------------------------------------------------------------------------------------------

// 基础样式 -------------------------------------------------------------------------------------------------------------
#demos .demo[data-demo='handlely-resizable'] .topic[data-topic='3']
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
