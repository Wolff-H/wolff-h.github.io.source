<template lang="pug">.
    .topic(data-topic="1")
        h1
            |Basic usage
        p
            |Make elements sticky just like native sticky
        demo-box
            template(#="")
                .container(
                    ref="ref_container"
                )
                    .wrapper
                        img(
                            src="@/assets/images/landscape-coast.jpg"
                            alt="landscape-coast"
                            draggable="false"
                            ref="ref_draggable"
                        )
                        .sticker(
                            ref="ref_sticker"
                        )
                            |sticker1
                        .sticker-1(
                            ref="ref_sticker_1"
                        )
                            |sticker2
                    
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
                    stickElement(ref_container.value, ref_sticker.value, { top: 50, left: 50 })
                })
            })

            // return --------------------------------------------------------------------------------------------------
            return {
                ref_container,
                ref_sticker,
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
        position relative
        display inline-block
        width 640px
        height 480px
        overflow auto

        >.sticker
            display flex
            position absolute
            top 50px
            left 50px
            width 200px
            height 50px
            justify-content center
            align-items center
            border 1px solid $black40
            background-color $black03

        >.sticker-1
            position absolute
            top 150px
            left 50px
            width 50px
            height 200px
            padding 10px
            border 1px solid $black40
            background-color $black03

.
    // 
</style>
