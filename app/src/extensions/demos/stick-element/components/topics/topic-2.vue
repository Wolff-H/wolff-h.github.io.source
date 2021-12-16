<template lang="pug">.
    .topic(data-topic="2")
        h1
            |Cross-level sticky
        p
            |Element can be sticky to any container, rather than only its direct parent.
            br
            |For the example below, cells are apparently not the direct children of the container, still they can be sticky.
        demo-box
            template(#="")
                .container(
                    ref="ref_container"
                )
                    table
                        thead
                            tr
                                th.th1(
                                    ref="ref_th1"
                                )
                                    span
                                        |th1
                                th.th2
                                    span
                                        |th2
                                th.th3
                                    span
                                        |th2
                                th.th4
                                    span
                                        |th2
                                th.th5
                                    span
                                        |th2
                        tbody
                            tr
                                td 11
                                td 12
                                td 13
                                td 14
                                td 15
                            tr
                                td 21
                                td.highlighted(ref="ref_td22") 22
                                td 23
                                td 24
                                td 25
                            tr
                                td 31
                                td 32
                                td 33
                                td 34
                                td 35
                            tr
                                td 41
                                td 42
                                td 43
                                td 44
                                td 45
                            tr
                                td 51
                                td 52
                                td 53
                                td 54
                                td 55



</template>



<script lang="ts">
    import { defineComponent, nextTick, onMounted, ref } from "vue"

    import DemoBox from "@/core/interface/components/_demo-box/index.vue"

    import stickElement from "stick-element"

    export default defineComponent({
        name: 'topic-2',
        components:
        {
            [DemoBox.name]: DemoBox,
        },
        setup()
        {
            // data ----------------------------------------------------------------------------------------------------
            // 0 //

            // dom refs //
            const ref_container = ref() as { value: HTMLElement }
            const ref_th1 = ref() as { value: HTMLElement }
            const ref_td22 = ref() as { value: HTMLElement }

            // methods -------------------------------------------------------------------------------------------------

            // lifecycles ----------------------------------------------------------------------------------------------
            onMounted(() => {
                nextTick(() => {
                    stickElement(ref_container.value, ref_th1.value, {
                        limits: { top: 50 }
                    })
                    stickElement(ref_container.value, ref_td22.value, {
                        limits: { top: 200, left: 200 }
                    })
                })
            })

            // return --------------------------------------------------------------------------------------------------
            return {
                ref_container,
                ref_th1,
                ref_td22,
            }
        },
    })
</script>



<style lang="stylus">
@import _colorset

// 状态样式 -------------------------------------------------------------------------------------------------------------

// 基础样式 -------------------------------------------------------------------------------------------------------------
#demos .demo[data-demo='stick-element'] .topic[data-topic='2']
    .container
        width: (800 + 2)px
        height: (600 + 2)px
        padding 50px
        overflow auto
        border 1px solid black

        table
            th
                position relative
                z-index 100
                height 100px
                border 1px solid $black60
                background-color $orange20

            td
                position relative
                min-width 400px
                min-height 200px
                width 400px
                height 200px
                border 1px solid $black20
                text-align center
                // z-index 100
            
            .highlighted
                background-color rgba(0, 0, 255, 0.1)

            tr:nth-child(2n+1)>td:nth-child(2n+1)
                background-color $black05

.
    // 
</style>
