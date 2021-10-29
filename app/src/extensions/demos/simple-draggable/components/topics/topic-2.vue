<template lang="pug">.
    .topic(data-topic="2")
        h1
            |Drag handles and avoidance
        h3
            |Specify drag handles
        p
            |The objective will be draggable only when cursor starts at handles.
            br
            |Drag on those light blue handles.
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
                        .handle.left(ref="ref_handle_left")
                        .handle.right(ref="ref_handle_right")
                //- template(#code="")
                //-     highlighted-code(code_language="html")
                //-         |{{   CodeSnippets['subtopic_1'].template   }}
                //-     highlighted-code(code_language="typescript")
                //-         |{{   CodeSnippets['subtopic_1'].script   }}
                //-     highlighted-code(code_language="stylus")
                //-         |{{   CodeSnippets['subtopic_1'].style   }}
        h3
            |Specify drag avoidance
        p
            |The objective will not be draggable if cursor starts at avoidance.
            br
            |Drag on the div but avoid those light red patches.
        demo-box
            template(#="")
                el-button(
                    @click="reset_1()"
                )
                    |reset position
                br
                br
                .container
                    .draggable.draggable-1(
                        ref="ref_draggable_1"
                        @mousedown="removeSmoothEffect_1()"
                    )
                        .ban.ban-1(ref="ref_ban_1")
                        .ban.ban-2(ref="ref_ban_2")
                        .ban.ban-3(ref="ref_ban_3")
                        .ban.ban-4(ref="ref_ban_4")
                        .ban.ban-5(ref="ref_ban_5")
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
            const ref_handle_left = ref() as { value: HTMLElement }
            const ref_handle_right = ref() as { value: HTMLElement }

            const ref_draggable_1 = ref() as { value: HTMLElement }
            const ref_ban_1 = ref() as { value: HTMLElement }
            const ref_ban_2 = ref() as { value: HTMLElement }
            const ref_ban_3 = ref() as { value: HTMLElement }
            const ref_ban_4 = ref() as { value: HTMLElement }
            const ref_ban_5 = ref() as { value: HTMLElement }

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

            function reset_1()
            {
                ref_draggable_1.value.classList.add('o-smooth')
                ref_draggable_1.value.style.top = '0px'
                ref_draggable_1.value.style.left = '0px'
            }

            function removeSmoothEffect_1()
            {
                ref_draggable_1.value.classList.remove('o-smooth')
            }

            // lifecycles ----------------------------------------------------------------------------------------------
            onMounted(() => {
                nextTick(() => {
                    simpleDraggable(ref_draggable.value, {
                        handles: [ref_handle_left.value, ref_handle_right.value]
                    })

                    simpleDraggable(ref_draggable_1.value, {
                        avoid: [ref_ban_1.value, ref_ban_2.value, ref_ban_3.value, ref_ban_4.value, ref_ban_5.value]
                    })
                })
            })
            // return --------------------------------------------------------------------------------------------------
            return {
                ref_draggable,
                ref_handle_left,
                ref_handle_right,
                ref_draggable_1,
                ref_ban_1,
                ref_ban_2,
                ref_ban_3,
                ref_ban_4,
                ref_ban_5,
                reset,
                removeSmoothEffect,
                reset_1,
                removeSmoothEffect_1,
                CodeSnippets,
            }
        },
    })
</script>



<style lang="stylus">
@import _colorset

// 状态样式 -------------------------------------------------------------------------------------------------------------
#demos .demo[data-demo='simple-draggable'] .topic[data-topic='2']
    .draggable.o-smooth
        transition top 1s, left 1s

// 基础样式 -------------------------------------------------------------------------------------------------------------
#demos .demo[data-demo='simple-draggable'] .topic[data-topic='2']
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
            justify-content space-between
            align-items center
            border 1px solid $black40
            background-color $black03
            user-select none

            .handle
                background-color $blue60
                opacity 0.2
                height 100%
                width 20px
        
        .draggable-1
            position relative
            width 120px
            height 80px
            border 1px solid $black40
            background-color $black03
            user-select none

            .ban
                position absolute
                background-color $red60
                opacity 0.2
            
            .ban-1
                height 56px
                width 32px
                top 12px
                left 12px
            
            .ban-2
                height 8px
                width 64px
                top 12px
                right 0px
            
            .ban-3
                height 32px
                width 12px
                bottom 12px
                right 0px
            
            .ban-4
                height 24px
                width 12px
                bottom 12px
                right 20px
            
            .ban-5
                height 16px
                width 12px
                bottom 12px
                right 40px
                

        

.
    // 
</style>
