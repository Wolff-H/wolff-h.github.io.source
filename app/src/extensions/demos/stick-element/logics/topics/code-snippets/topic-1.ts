const subtopic_1 =
{
template:
`\
<template lang="pug">.
    .container(
        ref="ref_container"
    )
        .sticker(
            ref="ref_sticker"
        )
            |sticker1
        .padding-x
        .sticker-1(
            ref="ref_sticker_1"
        )
            |sticker2
        .padding-y
</template>
`,
script:
`
<script lang="ts">
    export default defineComponent({
        setup()
        {
            const ref_container = ref() as { value: HTMLElement }
            const ref_sticker = ref() as { value: HTMLElement }
            const ref_sticker_1 = ref() as { value: HTMLElement }

            onMounted(() => {
                nextTick(() => {
                    stickElement(ref_container.value, ref_sticker.value, { top: 0, left: 0 })
                    stickElement(ref_container.value, ref_sticker_1.value, { left: 50 })
                })
            })

            return {
                ref_container,
                ref_sticker,
                ref_sticker_1,
            }
        },
    })
</script>
`,
style:
`
<style lang="stylus">

</style>
`,
}

export default
{
    subtopic_1,
}