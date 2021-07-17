<template lang="pug">.
    .view-default-demos
        |Select a work to view its demo
</template>



<script lang="ts">
    import { defineComponent } from "vue"

    export default defineComponent({
        name: 'view-default',
        components:
        {
            
        },
        setup()
        {
            // data ----------------------------------------------------------------------------------------------------
            // 0 //
            // return --------------------------------------------------------------------------------------------------
        },
    })
</script>



<style lang="stylus">
@import _colorset

// 状态样式 -------------------------------------------------------------------------------------------------------------

// 基础样式 -------------------------------------------------------------------------------------------------------------
#demos .view-default-demos
    display flex
    width 100%
    height 100%
    justify-content center
    align-items center
    color $black40
    font-size 24px
</style>
