<template lang="pug">.
    .markdown-box(
        :innerHTML="rendered"
    )
</template>



<script lang="ts">
    import { defineComponent } from "vue"

    import MarkdownIt from "markdown-it"

    export default defineComponent({
        name: 'markdown-box',
        components:
        {
            
        },
        props:
        {
            "markdown_string":
            {
                type: String,
                default: null,
            },
        },
        setup(props)
        {
            // data ----------------------------------------------------------------------------------------------------
            // 0 //
            const mdit = new MarkdownIt()
            const rendered = mdit.render(props.markdown_string)

            // return --------------------------------------------------------------------------------------------------
            return {
                rendered,
            }
        },
    })
</script>



<style lang="stylus">
@import _colorset
@import "./markdown7.styl"

// 状态样式 -------------------------------------------------------------------------------------------------------------

// 基础样式 -------------------------------------------------------------------------------------------------------------
.
    // 
</style>
