const subtopic_1 =
{
template:
`\
<template lang="pug">.
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
</template>
`,
script:
`
<script lang="ts">
    export default defineComponent({
        setup()
        {
            const order_numbers = ref([
                false, false, false, false, false, false, false, false, false, false,
                false, false, false, false, false, false, false, false, false, false,
            ])

            function toggleNumber(num: number)
            {
                order_numbers.value[num] = !order_numbers.value[num]
            }

            const ref_ruler_draggable = ref() as { value: HTMLElement }
            const ref_ruler_scrollable = ref() as { value: HTMLElement }

            onMounted(() => {
                nextTick(() => {
                    const avoid_targets = Array.from(
                        document.querySelectorAll(\`.ruler-container .ruler-element>span>span\`)
                    ) as HTMLElement[]

                    dragScroll(ref_ruler_draggable.value, ref_ruler_scrollable.value, {}, { avoid: avoid_targets })
                })
            })

            return {
                ref_ruler_draggable,
                ref_ruler_scrollable,
                CodeSnippets,
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