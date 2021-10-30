<template lang="pug">.
    .topic(data-topic="3-5")
        h1
            |Sensitivity
        p
            |To accurately define dragscroll's sensitivity, scale the relation of drag_trigger_threshold and scroll_respond_vector.
        h3
            |Normal
        p
            |For the example below, 1px drag triggers 1px scroll.
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
                .ruler-container(
                    ref="ref_ruler_scrollable"
                )
                    .ruler-element(
                        ref="ref_ruler_draggable"
                    )
                        span(
                            v-for="n in 20"
                            :key="n"
                        )
                            |{{   n   }}
            template(#code="")
                highlighted-code(code_language="html")
                    |{{   CodeSnippets['subtopic_1'].template   }}
                highlighted-code(code_language="typescript")
                    |{{   CodeSnippets['subtopic_1'].script   }}
        h3
            |Less sensitive
        p
            |For the example below, 5px drag triggers 1px scroll.
        demo-box
            template(#="")
                .container(
                    ref="ref_scrollable_1"
                )
                    img(
                        src="@/assets/images/landscape-coast.jpg"
                        alt="landscape-coast"
                        draggable="false"
                        ref="ref_draggable_1"
                    )
                .ruler-container(
                    ref="ref_ruler_scrollable_1"
                )
                    .ruler-element(
                        ref="ref_ruler_draggable_1"
                    )
                        span(
                            v-for="n in 20"
                            :key="n"
                        )
                            |{{   n   }}
            template(#code="")
                highlighted-code(code_language="html")
                    |{{   CodeSnippets['subtopic_2'].template   }}
                highlighted-code(code_language="typescript")
                    |{{   CodeSnippets['subtopic_2'].script   }}
        h3
            |More sensitive
        p
            |For the example below, 1px drag triggers 5px scroll.
        demo-box
            template(#="")
                .container(
                    ref="ref_scrollable_2"
                )
                    img(
                        src="@/assets/images/landscape-coast.jpg"
                        alt="landscape-coast"
                        draggable="false"
                        ref="ref_draggable_2"
                    )
                .ruler-container(
                    ref="ref_ruler_scrollable_2"
                )
                    .ruler-element(
                        ref="ref_ruler_draggable_2"
                    )
                        span(
                            v-for="n in 20"
                            :key="n"
                        )
                            |{{   n   }}
            template(#code="")
                highlighted-code(code_language="html")
                    |{{   CodeSnippets['subtopic_3'].template   }}
                highlighted-code(code_language="typescript")
                    |{{   CodeSnippets['subtopic_3'].script   }}
        h3
            |Scaled sensitive
        p
            |For the example below, 10px drag triggers 10px scroll.
        demo-box
            template(#="")
                .container(
                    ref="ref_scrollable_3"
                )
                    img(
                        src="@/assets/images/landscape-coast.jpg"
                        alt="landscape-coast"
                        draggable="false"
                        ref="ref_draggable_3"
                    )
                .ruler-container(
                    ref="ref_ruler_scrollable_3"
                )
                    .ruler-element(
                        ref="ref_ruler_draggable_3"
                    )
                        span(
                            v-for="n in 20"
                            :key="n"
                        )
                            |{{   n   }}
            template(#code="")
                highlighted-code(code_language="html")
                    |{{   CodeSnippets['subtopic_4'].template   }}
                highlighted-code(code_language="typescript")
                    |{{   CodeSnippets['subtopic_4'].script   }}
</template>



<script lang="ts">
    import { defineComponent, nextTick, onMounted, ref } from "vue"

    import DemoBox from "@/core/interface/components/_demo-box/index.vue"

    import dragScroll from "@/plugins/drag-scroll"
    import HighlightedCode from "@/core/interface/components/_highlighted-code/index.vue"
    import CodeSnippets from "@/extensions/demos/drag-scroll/logics/topics/code-snippets/topic-3-5"

    export default defineComponent({
        name: 'topic-3-5',
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
            const ref_ruler_draggable = ref() as { value: HTMLElement }
            const ref_ruler_scrollable = ref() as { value: HTMLElement }

            const ref_draggable_1 = ref() as { value: HTMLElement }
            const ref_scrollable_1 = ref() as { value: HTMLElement }
            const ref_ruler_draggable_1 = ref() as { value: HTMLElement }
            const ref_ruler_scrollable_1 = ref() as { value: HTMLElement }

            const ref_draggable_2 = ref() as { value: HTMLElement }
            const ref_scrollable_2 = ref() as { value: HTMLElement }
            const ref_ruler_draggable_2 = ref() as { value: HTMLElement }
            const ref_ruler_scrollable_2 = ref() as { value: HTMLElement }

            const ref_draggable_3 = ref() as { value: HTMLElement }
            const ref_scrollable_3 = ref() as { value: HTMLElement }
            const ref_ruler_draggable_3 = ref() as { value: HTMLElement }
            const ref_ruler_scrollable_3 = ref() as { value: HTMLElement }

            // methods -------------------------------------------------------------------------------------------------

            // lifecycles ----------------------------------------------------------------------------------------------
            onMounted(() => {
                nextTick(() => {
                    dragScroll(ref_draggable.value, ref_scrollable.value)
                    dragScroll(ref_ruler_draggable.value, ref_ruler_scrollable.value, { movement: { y: [0, 0] } })

                    dragScroll(ref_draggable_1.value, ref_scrollable_1.value, { movement: { x: [5, 1], y: [5, 1] } })
                    dragScroll(ref_ruler_draggable_1.value, ref_ruler_scrollable_1.value, { movement: { x: [5, 1], y: [0, 0] } })

                    dragScroll(ref_draggable_2.value, ref_scrollable_2.value, { movement: { x: [1, 5], y: [1, 5] } })
                    dragScroll(ref_ruler_draggable_2.value, ref_ruler_scrollable_2.value, { movement: { x: [1, 5], y: [0, 0] } })

                    dragScroll(ref_draggable_3.value, ref_scrollable_3.value, { movement: { x: [10, 10], y: [10, 10] } })
                    dragScroll(ref_ruler_draggable_3.value, ref_ruler_scrollable_3.value, { movement: { x: [10, 10], y: [0, 0] } })
                })
            })
            // return --------------------------------------------------------------------------------------------------
            return{
                ref_draggable,
                ref_scrollable,
                ref_ruler_draggable,
                ref_ruler_scrollable,
                ref_draggable_1,
                ref_scrollable_1,
                ref_ruler_draggable_1,
                ref_ruler_scrollable_1,
                ref_draggable_2,
                ref_scrollable_2,
                ref_ruler_draggable_2,
                ref_ruler_scrollable_2,
                ref_draggable_3,
                ref_scrollable_3,
                ref_ruler_draggable_3,
                ref_ruler_scrollable_3,
                CodeSnippets,
            }
        },
    })
</script>



<style lang="stylus">
@import _colorset

// 状态样式 -------------------------------------------------------------------------------------------------------------

// 基础样式 -------------------------------------------------------------------------------------------------------------
#demos .demo[data-demo='drag-scroll'] .topic[data-topic='3-5']
    .container
        display inline-block
        width 800px
        height 600px
        overflow auto

    .ruler-container
        width: (500 + 2)px
        height: (50 + 2)px
        margin-top 16px
        overflow-x auto
        border 1px solid $black60

        &::-webkit-scrollbar
            display none

        .ruler-element
            width 1000px
            height 50px

            *
                cursor default
                user-select none

            >span
                display inline-flex
                width 50px
                height 100%
                align-items center
                color $black60

                &:nth-child(2n)
                    background-color $black05

.
    // 
</style>
