<template lang="pug">.
    .topic(data-topic="4-2")
        iframe(
            src="./html-files/rl-q-learning/index.html"
        )
</template>



<script lang="ts">
    import { defineComponent } from "vue"

    export default defineComponent({
        name: 'topic-4-2',
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
#demos .demo[data-demo='smart-algorithms'] .topic[data-topic='4-2']
    width 100%
    height 100%
    padding 0px

    iframe
        width 100%
        height 100%
        border none

.
    // 
</style>
