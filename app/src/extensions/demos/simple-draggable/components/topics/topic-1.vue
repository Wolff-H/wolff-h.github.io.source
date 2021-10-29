<template lang="pug">.
    .topic(data-topic="1")
        h1
            |Basic Usage
        p
            |The most common, basic usage of simple-draggable.
            br
            |Drag the div all around the page.
        demo-box
            template(#="")
                el-button(
                    @click="reset()"
                )
                    |reset position
                br
                br
                .container
                    .draggable(
                        ref="ref_draggable"
                        @mousedown="removeSmoothEffect()"
                    )
                        |drag me
                //- template(#code="")
                //-     highlighted-code(code_language="html")
                //-         |{{   CodeSnippets['subtopic_1'].template   }}
                //-     highlighted-code(code_language="typescript")
                //-         |{{   CodeSnippets['subtopic_1'].script   }}
                //-     highlighted-code(code_language="stylus")
                //-         |{{   CodeSnippets['subtopic_1'].style   }}
</template>



<script lang="ts">
    import { defineComponent, nextTick, onMounted, ref } from "vue"
    import DemoBox from "@/core/interface/components/_demo-box/index.vue"
    import CodeSnippets from "@/extensions/demos/simple-draggable/logics/topics/code-snippets/topic-n"
    import HighlightedCode from "@/core/interface/components/_highlighted-code/index.vue"
    import simpleDraggable from "@/plugins/simple-draggable"

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

            // methods -------------------------------------------------------------------------------------------------
            function reset()
            {
                ref_draggable.value.classList.add('o-smooth')
                ref_draggable.value.style.top = '0px'
                ref_draggable.value.style.left = '0px'
            }

            function removeSmoothEffect()
            {
                ref_draggable.value.classList.remove('o-smooth')
            }

            // lifecycles ----------------------------------------------------------------------------------------------
            onMounted(() => {
                nextTick(() => {
                    const draggable_data = simpleDraggable(ref_draggable.value, { data: 'sss' })
                    console.log(draggable_data);

                    if(draggable_data)
                    {
                        draggable_data.data_transfer = 'something that is data transfer'
                    }

                    console.log(draggable_data);

                    window.dgb = draggable_data
                })
            })
            // return --------------------------------------------------------------------------------------------------
            return {
                ref_draggable,
                reset,
                removeSmoothEffect,
                CodeSnippets,
            }
        },
    })
</script>



<style lang="stylus">
@import _colorset

// 状态样式 -------------------------------------------------------------------------------------------------------------
#demos .demo[data-demo='simple-draggable'] .topic[data-topic='1']
    .draggable.o-smooth
        transition top 1s, left 1s

// 基础样式 -------------------------------------------------------------------------------------------------------------
#demos .demo[data-demo='simple-draggable'] .topic[data-topic='1']
    .container
        width 640px
        height 480px
        overflow hidden
        border 4px solid $black05

        .draggable
            display flex
            position relative
            width 120px
            height 80px
            justify-content center
            align-items center
            border 1px solid $black40
            background-color $black03
            user-select none

.
    // 
</style>
