<template lang="pug">.
    .topic(data-topic="3")
        h1
            |Capture effect
        p
            |Element can be "captured" in container where it's originally outside the viewport.
        demo-box
            template(#="")
                .container(
                    ref="ref_container"
                )
                    
                    .padding-y
                        |· · · · · · 1 · · · · · · 2 · · · · · · 3 · · · · · · 4 · · · · · · 5 · · · · · · 6 · · · · · · 7 · · · · · · 8 · · · · · · 9 · · · · · · 10 · · · · · · 11 · · · · · · 12 · · · · · · 13 · · · · · · 14 · · · · · · 15 · · · · · · 
                    .padding-x
                        |· · · · · · 1 · · · · · · 2 · · · · · · 3 · · · · · · 4 · · · · · · 5 · · · · · · 6 · · · · · · 7 · · · · · · 8 · · · · · · 9 · · · · · · 10 · · · · · · 11 · · · · · · 12 · · · · · · 13 · · · · · · 14 · · · · · · 15 · · · · · · 
                    .sticker(
                        ref="ref_sticker"
                    )
                        |sticker
                    .padding-y
                        |· · · · · · 1 · · · · · · 2 · · · · · · 3 · · · · · · 4 · · · · · · 5 · · · · · · 6 · · · · · · 7 · · · · · · 8 · · · · · · 9 · · · · · · 10 · · · · · · 11 · · · · · · 12 · · · · · · 13 · · · · · · 14 · · · · · · 15 · · · · · · 
</template>



<script lang="ts">
    import { defineComponent, nextTick, onMounted, ref } from "vue"

    import DemoBox from "@/core/interface/components/_demo-box/index.vue"

    import stickElement from "@/plugins/stick-element"

    export default defineComponent({
        name: 'topic-1',
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
            const ref_sticker = ref() as { value: HTMLElement }

            // methods -------------------------------------------------------------------------------------------------

            // lifecycles ----------------------------------------------------------------------------------------------
            onMounted(() => {
                nextTick(() => {
                    stickElement(ref_container.value, ref_sticker.value, { top: 0, left: 0 })
                })
            })

            // return --------------------------------------------------------------------------------------------------
            return {
                ref_container,
                ref_sticker,
                ref_sticker_1,
            }
        },
    })
</script>



<style lang="stylus">
@import _colorset

// 状态样式 -------------------------------------------------------------------------------------------------------------

// 基础样式 -------------------------------------------------------------------------------------------------------------
#demos .demo[data-demo='stick-element'] .topic[data-topic='1']
    .container
        width: (800 + 2)px
        height: (600 + 2)px
        padding 50px
        overflow auto
        overflow auto
        border 1px solid black

        >.sticker
            display inline-flex
            position relative
            width 200px
            height 50px
            justify-content center
            align-items center
            border 1px solid $black40
            background-color $black03

        >.padding-x
            display inline-block
            width 1500px
            padding 10px 0px

        >.sticker-1
            display inline-flex
            position relative
            width 50px
            height 200px
            padding 10px
            justify-content center
            align-items center
            border 1px solid $black40
            background-color $black03
            writing-mode vertical-lr

        .padding-y
            width 50px
            height 1500px
            writing-mode vertical-lr

.
    // 
</style>
