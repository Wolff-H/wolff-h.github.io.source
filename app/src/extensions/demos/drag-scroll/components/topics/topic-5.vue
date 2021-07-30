<template lang="pug">.
    .topic(data-topic="5")
        h1
            |Avoid handles
        p
            |Dragscroll won't take effect on those elements assigned as avoids.
            br
            |For the example below, order number divs are avoided
        demo-box
            template(#="")
                .ruler-container(
                    ref="ref_ruler_scrollable"
                )
                    .ruler-element(
                        ref="ref_ruler_draggable"
                    )
                        span(
                            v-for="(value, index) of order_numbers"
                            :key="index"
                        )
                            span(
                                @click="toggleNumber(index - 1)"
                                :class="order_numbers[index - 1] ? 'o-active' : ''"
                            )
                                |{{   index   }}
            template(#code="")
                highlighted-code(code_language="html")
                    |{{   CodeSnippets['subtopic_1'].template   }}
                highlighted-code(code_language="typescript")
                    |{{   CodeSnippets['subtopic_1'].script   }}
</template>



<script lang="ts">
    import { defineComponent, nextTick, onMounted, ref } from "vue"

    import DemoBox from "@/core/interface/components/_demo-box/index.vue"

    import dragScroll from "@/plugins/drag-scroll"
    import HighlightedCode from "@/core/interface/components/_highlighted-code/index.vue"
    import CodeSnippets from "@/extensions/demos/drag-scroll/logics/topics/code-snippets/topic-5"

    export default defineComponent({
        name: 'topic-5',
        components:
        {
            [DemoBox.name]: DemoBox,
            [HighlightedCode.name]: HighlightedCode,
        },
        setup()
        {
            // data ----------------------------------------------------------------------------------------------------
            // 0 //

            const order_numbers = ref([
                false, false, false, false, false, false, false, false, false, false,
                false, false, false, false, false, false, false, false, false, false,
            ])

            // dom refs //
            const ref_ruler_draggable = ref() as { value: HTMLElement }
            const ref_ruler_scrollable = ref() as { value: HTMLElement }

            // methods //
            function toggleNumber(num: number)
            {
                order_numbers.value[num] = !order_numbers.value[num]
            }

            // lifecycles ----------------------------------------------------------------------------------------------
            onMounted(() => {
                nextTick(() => {
                    const avoid_targets = Array.from(
                        document.querySelectorAll(`#demos .demo[data-demo='drag-scroll'] .topic[data-topic='5'] .ruler-container .ruler-element>span>span`)
                    ) as HTMLElement[]

                    dragScroll(ref_ruler_draggable.value, ref_ruler_scrollable.value, {}, { avoid: avoid_targets })
                })
            })

            // return --------------------------------------------------------------------------------------------------
            return{
                order_numbers,
                ref_ruler_draggable,
                ref_ruler_scrollable,
                toggleNumber,
                CodeSnippets,
            }
        },
    })
</script>



<style lang="stylus">
@import _colorset

// 状态样式 -------------------------------------------------------------------------------------------------------------
#demos .demo[data-demo='drag-scroll'] .topic[data-topic='5']
    .ruler-container .ruler-element>span>span.o-active
        color $primary

// 基础样式 -------------------------------------------------------------------------------------------------------------
#demos .demo[data-demo='drag-scroll'] .topic[data-topic='5']
    .ruler-container
        width: (500 + 2)px
        height: (50 + 2)px
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

                >span
                    padding 4px
                    border 1px solid $black15

                    &:hover
                        background-color $black15

                    &:active
                        background-color $black20

.
    // 
</style>
