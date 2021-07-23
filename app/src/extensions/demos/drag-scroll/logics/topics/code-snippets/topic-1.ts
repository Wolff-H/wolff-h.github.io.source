const basic_usage =
{
template:
`\
<template lang="pug">.
    .resizable-1(
        ref="ref_r_1"
    )
        |a resizable div
    .resizable-handle-1(
        ref="ref_rh_1"
    )
</template>
`,
script:
`
<script lang="ts">
    import { defineComponent, nextTick, onMounted, ref } from "vue"
    import handlelyResizable from "handlely-resizable"

    export default defineComponent({
        setup()
        {
            const ref_r_1 = ref() as { value: HTMLElement }
            const ref_rh_1 = ref() as { value: HTMLElement }

            onMounted(() => {
                nextTick(() => {
                    handlelyResizable(ref_rh_1.value, ref_r_1.value)
                })
            })

            return{
                ref_r_1,
                ref_rh_1,
            }
        },
    })
</script>
`,
style:
`
<style lang="stylus">
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
</style>
`,
}

export default basic_usage