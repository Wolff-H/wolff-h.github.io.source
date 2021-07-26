const subtopic_1 =
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
                    dragScroll(ref_draggable.value, ref_scrollable.value, { x: [1, -1] })
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
</style>
`,
}

const subtopic_2 =
{
template:
`\
<template lang="pug">.
    .container(
        ref="ref_scrollable_1"
    )
        img(
            src="@/assets/images/landscape-coast.jpg"
            alt="landscape-coast"
            draggable="false"
            ref="ref_draggable_1"
        )
</template>
`,
script:
`
<script lang="ts">
    export default defineComponent({
        setup()
        {
            const ref_draggable_1 = ref() as { value: HTMLElement }
            const ref_scrollable_1 = ref() as { value: HTMLElement }

            onMounted(() => {
                nextTick(() => {
                    dragScroll(ref_draggable_1.value, ref_scrollable_1.value, { y: [1, -1] })
                })
            })

            return {
                ref_draggable_1,
                ref_scrollable_1,
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
</style>
`,
}

const subtopic_3 =
{
template:
`\
<template lang="pug">.
    .container(
        ref="ref_scrollable_2"
    )
        img(
            src="@/assets/images/landscape-coast.jpg"
            alt="landscape-coast"
            draggable="false"
            ref="ref_draggable_2"
        )
</template>
`,
script:
`
<script lang="ts">
    export default defineComponent({
        setup()
        {
            const ref_draggable_2 = ref() as { value: HTMLElement }
            const ref_scrollable_2 = ref() as { value: HTMLElement }

            onMounted(() => {
                nextTick(() => {
                    dragScroll(ref_draggable_2.value, ref_scrollable_2.value, { x: [1, -1], y: [1, -1] })
                })
            })

            return {
                ref_draggable_2,
                ref_scrollable_2,
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
</style>
`,
}

export default
{
    subtopic_1,
    subtopic_2,
    subtopic_3,
}