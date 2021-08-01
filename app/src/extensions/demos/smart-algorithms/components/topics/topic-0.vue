<template lang="pug">.
    .topic(data-topic="0")
        markdown-box(
            :markdown_string="MarkdownContent"
        )
</template>



<script lang="ts">
    import { defineComponent } from "vue"
    import MarkdownBox from "@/plugins/markdown-box/index.vue"

    import MarkdownContent from "./topic-0-content.md"

    export default defineComponent({
        name: 'topic-0',
        components:
        {
            [MarkdownBox.name]: MarkdownBox,
        },
        setup()
        {
            // data ----------------------------------------------------------------------------------------------------
            // 0 //
            // return --------------------------------------------------------------------------------------------------
            return {
                MarkdownContent,
            }
        },
    })
</script>



<style lang="stylus">
@import _colorset

// 状态样式 -------------------------------------------------------------------------------------------------------------

// 基础样式 -------------------------------------------------------------------------------------------------------------
.
    // 
</style>
