const subtopic_1 =
{
template:
`\
<template lang="pug">.
    .buttons
        el-button(
            @click="setScale_1_1()"
        )
            |set scale 1:1
        el-button(
            @click="setScale_25_25()"
        )
            |set scale 25:25
        el-button(
            @click="disable()"
        )
            |disable
        el-button(
            @click="distroy()"
        )
            |destroy
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

            function setScale_1_1()
            {
                dragScroll(ref_draggable.value, ref_scrollable.value)
            }

            function setScale_25_25()
            {
                dragScroll(ref_draggable.value, ref_scrollable.value, { x: [25, 25], y: [25, 25] })
            }

            function disable()
            {
                dragScroll(ref_draggable.value, ref_scrollable.value, { x: [0, 0], y: [0, 0] })
            }

            function distroy()
            {
                dragScroll(ref_draggable.value, null)    // 清除draggable下的所有scrollable
            }

            onMounted(() => {
                nextTick(() => {
                    dragScroll(ref_draggable.value, ref_scrollable.value)
                })
            })

            return {
                ref_draggable,
                ref_scrollable,
                setScale_1_1,
                setScale_25_25,
                disable,
                distroy,
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