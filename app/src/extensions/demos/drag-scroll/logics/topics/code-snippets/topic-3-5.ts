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
    .ruler-container(
        ref="ref_ruler_scrollable"
    )
        .ruler-element(
            ref="ref_ruler_draggable"
        )
            span(
                v-for="n in 20"
                :key="n"
            )
                |{{   n   }}
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
            const ref_ruler_draggable = ref() as { value: HTMLElement }
            const ref_ruler_scrollable = ref() as { value: HTMLElement }

            const ref_draggable_1 = ref() as { value: HTMLElement }
            const ref_scrollable_1 = ref() as { value: HTMLElement }
            const ref_ruler_draggable_1 = ref() as { value: HTMLElement }
            const ref_ruler_scrollable_1 = ref() as { value: HTMLElement }

            const ref_draggable_2 = ref() as { value: HTMLElement }
            const ref_scrollable_2 = ref() as { value: HTMLElement }
            const ref_ruler_draggable_2 = ref() as { value: HTMLElement }
            const ref_ruler_scrollable_2 = ref() as { value: HTMLElement }

            const ref_draggable_3 = ref() as { value: HTMLElement }
            const ref_scrollable_3 = ref() as { value: HTMLElement }
            const ref_ruler_draggable_3 = ref() as { value: HTMLElement }
            const ref_ruler_scrollable_3 = ref() as { value: HTMLElement }

            onMounted(() => {
                nextTick(() => {
                    dragScroll(ref_draggable.value, ref_scrollable.value)
                    dragScroll(ref_ruler_draggable.value, ref_ruler_scrollable.value, { y: [0, 0] })

                    dragScroll(ref_draggable_1.value, ref_scrollable_1.value, { x: [5, 1], y: [5, 1] })
                    dragScroll(ref_ruler_draggable_1.value, ref_ruler_scrollable_1.value, { x: [5, 1], y: [0, 0] })

                    dragScroll(ref_draggable_2.value, ref_scrollable_2.value, { x: [1, 5], y: [1, 5] })
                    dragScroll(ref_ruler_draggable_2.value, ref_ruler_scrollable_2.value, { x: [1, 5], y: [0, 0] })

                    dragScroll(ref_draggable_3.value, ref_scrollable_3.value, { x: [10, 10], y: [10, 10] })
                    dragScroll(ref_ruler_draggable_3.value, ref_ruler_scrollable_3.value, { x: [10, 10], y: [0, 0] })
                })
            })
            
            return{
                ref_draggable,
                ref_scrollable,
                ref_ruler_draggable,
                ref_ruler_scrollable,
                ref_draggable_1,
                ref_scrollable_1,
                ref_ruler_draggable_1,
                ref_ruler_scrollable_1,
                ref_draggable_2,
                ref_scrollable_2,
                ref_ruler_draggable_2,
                ref_ruler_scrollable_2,
                ref_draggable_3,
                ref_scrollable_3,
                ref_ruler_draggable_3,
                ref_ruler_scrollable_3,
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
    .ruler-container(
        ref="ref_ruler_scrollable_1"
    )
        .ruler-element(
            ref="ref_ruler_draggable_1"
        )
            span(
                v-for="n in 20"
                :key="n"
            )
                |{{   n   }}
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
            const ref_ruler_draggable = ref() as { value: HTMLElement }
            const ref_ruler_scrollable = ref() as { value: HTMLElement }

            const ref_draggable_1 = ref() as { value: HTMLElement }
            const ref_scrollable_1 = ref() as { value: HTMLElement }
            const ref_ruler_draggable_1 = ref() as { value: HTMLElement }
            const ref_ruler_scrollable_1 = ref() as { value: HTMLElement }

            const ref_draggable_2 = ref() as { value: HTMLElement }
            const ref_scrollable_2 = ref() as { value: HTMLElement }
            const ref_ruler_draggable_2 = ref() as { value: HTMLElement }
            const ref_ruler_scrollable_2 = ref() as { value: HTMLElement }

            const ref_draggable_3 = ref() as { value: HTMLElement }
            const ref_scrollable_3 = ref() as { value: HTMLElement }
            const ref_ruler_draggable_3 = ref() as { value: HTMLElement }
            const ref_ruler_scrollable_3 = ref() as { value: HTMLElement }

            onMounted(() => {
                nextTick(() => {
                    dragScroll(ref_draggable.value, ref_scrollable.value)
                    dragScroll(ref_ruler_draggable.value, ref_ruler_scrollable.value, { y: [0, 0] })

                    dragScroll(ref_draggable_1.value, ref_scrollable_1.value, { x: [5, 1], y: [5, 1] })
                    dragScroll(ref_ruler_draggable_1.value, ref_ruler_scrollable_1.value, { x: [5, 1], y: [0, 0] })

                    dragScroll(ref_draggable_2.value, ref_scrollable_2.value, { x: [1, 5], y: [1, 5] })
                    dragScroll(ref_ruler_draggable_2.value, ref_ruler_scrollable_2.value, { x: [1, 5], y: [0, 0] })

                    dragScroll(ref_draggable_3.value, ref_scrollable_3.value, { x: [10, 10], y: [10, 10] })
                    dragScroll(ref_ruler_draggable_3.value, ref_ruler_scrollable_3.value, { x: [10, 10], y: [0, 0] })
                })
            })
            
            return{
                ref_draggable,
                ref_scrollable,
                ref_ruler_draggable,
                ref_ruler_scrollable,
                ref_draggable_1,
                ref_scrollable_1,
                ref_ruler_draggable_1,
                ref_ruler_scrollable_1,
                ref_draggable_2,
                ref_scrollable_2,
                ref_ruler_draggable_2,
                ref_ruler_scrollable_2,
                ref_draggable_3,
                ref_scrollable_3,
                ref_ruler_draggable_3,
                ref_ruler_scrollable_3,
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
    .ruler-container(
        ref="ref_ruler_scrollable_2"
    )
        .ruler-element(
            ref="ref_ruler_draggable_2"
        )
            span(
                v-for="n in 20"
                :key="n"
            )
                |{{   n   }}
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
            const ref_ruler_draggable = ref() as { value: HTMLElement }
            const ref_ruler_scrollable = ref() as { value: HTMLElement }

            const ref_draggable_1 = ref() as { value: HTMLElement }
            const ref_scrollable_1 = ref() as { value: HTMLElement }
            const ref_ruler_draggable_1 = ref() as { value: HTMLElement }
            const ref_ruler_scrollable_1 = ref() as { value: HTMLElement }

            const ref_draggable_2 = ref() as { value: HTMLElement }
            const ref_scrollable_2 = ref() as { value: HTMLElement }
            const ref_ruler_draggable_2 = ref() as { value: HTMLElement }
            const ref_ruler_scrollable_2 = ref() as { value: HTMLElement }

            const ref_draggable_3 = ref() as { value: HTMLElement }
            const ref_scrollable_3 = ref() as { value: HTMLElement }
            const ref_ruler_draggable_3 = ref() as { value: HTMLElement }
            const ref_ruler_scrollable_3 = ref() as { value: HTMLElement }

            onMounted(() => {
                nextTick(() => {
                    dragScroll(ref_draggable.value, ref_scrollable.value)
                    dragScroll(ref_ruler_draggable.value, ref_ruler_scrollable.value, { y: [0, 0] })

                    dragScroll(ref_draggable_1.value, ref_scrollable_1.value, { x: [5, 1], y: [5, 1] })
                    dragScroll(ref_ruler_draggable_1.value, ref_ruler_scrollable_1.value, { x: [5, 1], y: [0, 0] })

                    dragScroll(ref_draggable_2.value, ref_scrollable_2.value, { x: [1, 5], y: [1, 5] })
                    dragScroll(ref_ruler_draggable_2.value, ref_ruler_scrollable_2.value, { x: [1, 5], y: [0, 0] })

                    dragScroll(ref_draggable_3.value, ref_scrollable_3.value, { x: [10, 10], y: [10, 10] })
                    dragScroll(ref_ruler_draggable_3.value, ref_ruler_scrollable_3.value, { x: [10, 10], y: [0, 0] })
                })
            })
            
            return{
                ref_draggable,
                ref_scrollable,
                ref_ruler_draggable,
                ref_ruler_scrollable,
                ref_draggable_1,
                ref_scrollable_1,
                ref_ruler_draggable_1,
                ref_ruler_scrollable_1,
                ref_draggable_2,
                ref_scrollable_2,
                ref_ruler_draggable_2,
                ref_ruler_scrollable_2,
                ref_draggable_3,
                ref_scrollable_3,
                ref_ruler_draggable_3,
                ref_ruler_scrollable_3,
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

const subtopic_4 =
{
template:
`\
<template lang="pug">.
    .container(
        ref="ref_scrollable_3"
    )
        img(
            src="@/assets/images/landscape-coast.jpg"
            alt="landscape-coast"
            draggable="false"
            ref="ref_draggable_3"
        )
    .ruler-container(
        ref="ref_ruler_scrollable_3"
    )
        .ruler-element(
            ref="ref_ruler_draggable_3"
        )
            span(
                v-for="n in 20"
                :key="n"
            )
                |{{   n   }}
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
            const ref_ruler_draggable = ref() as { value: HTMLElement }
            const ref_ruler_scrollable = ref() as { value: HTMLElement }

            const ref_draggable_1 = ref() as { value: HTMLElement }
            const ref_scrollable_1 = ref() as { value: HTMLElement }
            const ref_ruler_draggable_1 = ref() as { value: HTMLElement }
            const ref_ruler_scrollable_1 = ref() as { value: HTMLElement }

            const ref_draggable_2 = ref() as { value: HTMLElement }
            const ref_scrollable_2 = ref() as { value: HTMLElement }
            const ref_ruler_draggable_2 = ref() as { value: HTMLElement }
            const ref_ruler_scrollable_2 = ref() as { value: HTMLElement }

            const ref_draggable_3 = ref() as { value: HTMLElement }
            const ref_scrollable_3 = ref() as { value: HTMLElement }
            const ref_ruler_draggable_3 = ref() as { value: HTMLElement }
            const ref_ruler_scrollable_3 = ref() as { value: HTMLElement }

            onMounted(() => {
                nextTick(() => {
                    dragScroll(ref_draggable.value, ref_scrollable.value)
                    dragScroll(ref_ruler_draggable.value, ref_ruler_scrollable.value, { y: [0, 0] })

                    dragScroll(ref_draggable_1.value, ref_scrollable_1.value, { x: [5, 1], y: [5, 1] })
                    dragScroll(ref_ruler_draggable_1.value, ref_ruler_scrollable_1.value, { x: [5, 1], y: [0, 0] })

                    dragScroll(ref_draggable_2.value, ref_scrollable_2.value, { x: [1, 5], y: [1, 5] })
                    dragScroll(ref_ruler_draggable_2.value, ref_ruler_scrollable_2.value, { x: [1, 5], y: [0, 0] })

                    dragScroll(ref_draggable_3.value, ref_scrollable_3.value, { x: [10, 10], y: [10, 10] })
                    dragScroll(ref_ruler_draggable_3.value, ref_ruler_scrollable_3.value, { x: [10, 10], y: [0, 0] })
                })
            })
            
            return{
                ref_draggable,
                ref_scrollable,
                ref_ruler_draggable,
                ref_ruler_scrollable,
                ref_draggable_1,
                ref_scrollable_1,
                ref_ruler_draggable_1,
                ref_ruler_scrollable_1,
                ref_draggable_2,
                ref_scrollable_2,
                ref_ruler_draggable_2,
                ref_ruler_scrollable_2,
                ref_draggable_3,
                ref_scrollable_3,
                ref_ruler_draggable_3,
                ref_ruler_scrollable_3,
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
    subtopic_2,
    subtopic_3,
    subtopic_4,
}