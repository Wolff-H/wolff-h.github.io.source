<template lang="pug">.
    .topic(data-topic="3")
        h1
            |Drag event hooks
        p
            |You may set custom callback functions on different stages of the dragging action.
        h3
            |dragStart
        p
            b dragStart
            | 
            |is called on 
            code mousedown
            |.
        p
            |Return 
            code false
            | 
            |in your callback to prevent the default behavior of this stage.
        h3
            |drag
        p
            b drag
            | 
            |is called on 
            code mousemove
            |.
        p
            |Return 
            code false
            | 
            |in your callback to prevent the default behavior of this stage.
        h3
            |dragEnd
        p
            b dragEnd
            | 
            |is called on 
            code mouseup
            |.
        p
            |Return 
            code false
            | 
            |in your callback to prevent the default behavior of this stage.
        //- demo-box
        //-     template(#="")
        //-         el-button(
        //-             @click="reset()"
        //-         )
        //-             |reset position
        //-         br
        //-         br
        //-         .container
        //-             .draggable(
        //-                 ref="ref_draggable"
        //-                 @mousedown="removeSmoothEffect()"
        //-             )
        //-                 .handle.left(ref="ref_handle_left")
        //-                 .handle.right(ref="ref_handle_right")
        //-         //- template(#code="")
        //-         //-     highlighted-code(code_language="html")
        //-         //-         |{{   CodeSnippets['subtopic_1'].template   }}
        //-         //-     highlighted-code(code_language="typescript")
        //-         //-         |{{   CodeSnippets['subtopic_1'].script   }}
        //-         //-     highlighted-code(code_language="stylus")
        //-         //-         |{{   CodeSnippets['subtopic_1'].style   }}
        h3
            |A comprehensive demo
        p
            |Shows information from different drag stages.
        demo-box
            template(#="")
                el-button(
                    @click="reset()"
                )
                    |reset
                br
                br
                .container
                    .draggable(
                        ref="ref_draggable"
                        @mousedown="removeSmoothEffect()"
                    )
                        |{{   displaying_info   }}
                        //- .
                        //-     drag starts --- 显示1s （背景绿色）
                        //-     dragging （背景蓝色）
                        //-     offset: [0, 0]
                        //-     drag ends --- 显示1s （背景黄色）
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
            const ref_draggable = ref() as { value: HTMLElement }

            // 0 //
            const displaying_info = ref('')

            // methods -------------------------------------------------------------------------------------------------
            function reset()
            {
                ref_draggable.value.classList.add('o-smooth')
                ref_draggable.value.style.top = '0px'
                ref_draggable.value.style.left = '0px'

                displaying_info.value = ''
            }

            function removeSmoothEffect()
            {
                ref_draggable.value.classList.remove('o-smooth')
            }

            // lifecycles ----------------------------------------------------------------------------------------------
            onMounted(() => {
                nextTick(() => {
                    simpleDraggable(ref_draggable.value, {
                        hooks:
                        {
                            dragStart: () => {
                                displaying_info.value = 'drag starts'
                            },
                            drag: (_event, draggable) => {
                                displaying_info.value = `[${draggable.style.left}, ${draggable.style.top}]`
                            },
                            dragEnd: () => {
                                displaying_info.value = 'drag ends'
                            },
                        }
                    })
                })
            })

            // return --------------------------------------------------------------------------------------------------
            return {
                ref_draggable,
                displaying_info,
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
#demos .demo[data-demo='simple-draggable'] .topic[data-topic='3']
    .draggable.o-smooth
        transition top 1s, left 1s

// 基础样式 -------------------------------------------------------------------------------------------------------------
#demos .demo[data-demo='simple-draggable'] .topic[data-topic='3']
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