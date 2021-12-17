<template lang="pug">.
    .topic(data-topic="6")
        h1
            |Application: A dragscrollable sticky table
        p
            |Drag the table head to scroll table horizontally.
            br
            |Drag the first column to scroll table vertically.
            br
            |The sticky ability is carried by <router-link to="/demos/stick-element/">stick-element</router-link>.
        demo-box
            template(#="")
                .container(
                    ref="ref_container"
                )
                    table
                        tr
                            td
                                table.col-1-drag(
                                    ref="ref_col1_drag"
                                )
                                    thead(
                                        ref="ref_col1_head"
                                    )
                                        tr
                                            th
                                                div
                                                    |row_n
                                    tbody
                                        tr(
                                            v-for="(row, row_n) in dataset.rows"
                                            :key="row_n"
                                        )
                                            td
                                                |{{   row_n + 1   }}
                            td
                                table.main
                                    thead(
                                        ref="ref_thead"
                                    )
                                        tr
                                            th(
                                                v-for="(column_name) in dataset.columns"
                                                :key="column_name"
                                            )
                                                div
                                                    |{{   column_name   }}
                                    tbody
                                        tr(
                                            v-for="(row, row_n) in dataset.rows"
                                            :key="row_n"
                                        )
                                            td(
                                                v-for="(item, item_n) in row"
                                                :key="item_n"
                                            )
                                                |{{   item   }}
                            td.shadow-margin-right


</template>



<script lang="ts">
    import { defineComponent, nextTick, onMounted, ref } from "vue"

    import DemoBox from "@/core/interface/components/_demo-box/index.vue"

    import dragScroll from "dragroll"
    import stickElement from "stick-element"
    import HighlightedCode from "@/core/interface/components/_highlighted-code/index.vue"
    import CodeSnippets from "@/extensions/demos/drag-scroll/logics/topics/code-snippets/topic-6"

    import dataset from "@/extensions/demos/drag-scroll/logics/topics/example_dataset"

    export default defineComponent({
        name: 'topic-6',
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
            const ref_col1_drag = ref() as { value: HTMLElement }
            const ref_col1_head = ref() as { value: HTMLElement }
            const ref_thead = ref() as { value: HTMLElement }

            // methods -------------------------------------------------------------------------------------------------

            // lifecycles ----------------------------------------------------------------------------------------------
            onMounted(() => {
                nextTick(() => {
                    dragScroll(ref_thead.value, ref_container.value, { movement: { y: [0, 0] } })
                    dragScroll(ref_col1_drag.value, ref_container.value, { movement: { x: [0, 0] } })
                    stickElement(ref_container.value, ref_thead.value, {
                        movement: { top: 0 }
                    })
                    stickElement(ref_container.value, ref_col1_drag.value, {
                        movement: { left: 0 }
                    })
                    stickElement(ref_container.value, ref_col1_head.value, {
                        movement: { top: 0 }
                    })
                })
            })

            // return --------------------------------------------------------------------------------------------------
            return {
                dataset,
                ref_container,
                ref_col1_drag,
                ref_col1_head,
                ref_thead,
                CodeSnippets,
            }
        },
    })
</script>



<style lang="stylus">
@import _colorset

// 状态样式 -------------------------------------------------------------------------------------------------------------

// 基础样式 -------------------------------------------------------------------------------------------------------------
#demos .demo[data-demo='drag-scroll'] .topic[data-topic='6']
    .container
        position relative
        width: (800 + 2)px
        height: (600 + 2)px
        padding 50px
        overflow scroll
        border 1px solid black

        &::-webkit-scrollbar
            display none

        table
            position relative
            border-spacing 0

        table.col-1-drag
            position relative
            z-index 1
            border-collapse separate
            table-layout fixed
            cursor grab
            user-select none

            >thead
                display table-caption
                position relative

                th
                    >div
                        display flex
                        position relative
                        z-index 100
                        min-width 58px
                        min-height 40px
                        height 40px
                        justify-content center
                        align-items center
                        border 1px solid $black40
                        background-color $black10
                        color $black80
                        font-weight bold

            >tbody
                position relative

                td
                    min-width 58px
                    height 40px
                    padding-left 10px
                    border-right 1px solid $black40
                    border-bottom 1px solid $black10
                    border-left 1px solid $black40
                    background-color $black03
                    color $black60

        table.main
            position relative
            border-collapse separate
            table-layout fixed

            >thead
                display table-caption
                position relative
                height 40px
                cursor grab
                user-select none

                th
                    >div
                        display flex
                        min-width 220px
                        min-height 40px
                        height 40px
                        justify-content center
                        align-items center
                        border-top 1px solid $black40
                        border-right 1px solid $black40
                        border-bottom 1px solid $black40
                        border-left none
                        background-color $black10
                        color $black80
                        font-weight bold

            >tbody
                td
                    min-width 220px
                    height 40px
                    padding-left 10px
                    border-right 1px solid $black10
                    border-bottom 1px solid $black10
                    border-left none
                    color $black60

            >.col-1-drag
                position absolute
                top 0px
                width 58px
                height 100%
                background-color $shadow20

        .shadow-margin-right
            min-width 50px
            height 100%

.
    // 
</style>
