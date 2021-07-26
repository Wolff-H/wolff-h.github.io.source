const seperate_element_and_container =
{
template:
`\
<template lang="pug">.
    .container(
        ref="ref_scrollable"
    )
        img(
            src="@/assets/images/landscape-coast.jpg"
            alt="landscape-coast"
            draggable="false"
        )
    .touchpad(
        ref="ref_draggable"
    )
</template>
`,
script:
`
<script lang="ts">
    export default defineComponent({
        setup()
        {
            const ref_draggable = ref() as { value: HTMLElement }
            const ref_scrollable = ref() as { value: HTMLElement }

            onMounted(() => {
                nextTick(() => {
                    dragScroll(ref_draggable.value, ref_scrollable.value)
                })
            })

            return {
                ref_draggable,
                ref_scrollable,
            }
        },
    })
</script>
`,
style:
`
<style lang="stylus">
    .container
        display inline-block
        width 640px
        height 480px
        overflow auto

    .touchpad
        margin-top 24px
        width 256px
        height 192px
        background-color $black20
</style>
`,
}

export default
{
    seperate_element_and_container,
}