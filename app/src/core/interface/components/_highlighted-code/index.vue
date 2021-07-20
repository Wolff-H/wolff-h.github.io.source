<doc>
    在 _demo-block.vue 中使用这个组件，从而精细指定每一段代码的语法
</doc>



<template lang="pug">.
    pre.highlighted-code
        code(
            :class="code_language"
            ref="ref_code"
        )
            slot
</template>



<script lang="ts">
    import { defineComponent, nextTick, onMounted, ref } from "vue"

    import HighlightJS from "highlight.js"

    export default defineComponent({
        name: 'highlighted-code',
        components:
        {
            
        },
        props:
        {
            "code_language":
            {
                type: String,
                default: 'plaintext',
            },
        },
        setup()
        {
            // data ----------------------------------------------------------------------------------------------------
            // 0 //
            
            // dom refs //
            const ref_code = ref() as { value: HTMLElement }
            
            // lifecycles ----------------------------------------------------------------------------------------------
            onMounted(() => {
                nextTick(() => {
                    HighlightJS.highlightBlock(ref_code.value)
                })
            })
            // return --------------------------------------------------------------------------------------------------
            return{
                ref_code,
            }
        },
    })
</script>



<style lang="stylus">
@import _colorset

// 状态样式 -------------------------------------------------------------------------------------------------------------

// 基础样式 -------------------------------------------------------------------------------------------------------------
.highlighted-code
    margin 0px

    >code
        padding 0px
        font-family consolas
        white-space pre

        *
            font-family consolas
.
    // 
</style>
