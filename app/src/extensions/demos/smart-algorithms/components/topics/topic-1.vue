<template lang="pug">.
    .topic(data-topic="1")
        iframe(
            src="./html-files/a-star-pathfinding/index.html"
        )
</template>



<script lang="ts">
    import { defineComponent } from "vue"

    export default defineComponent({
        name: 'topic-1',
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
#demos .demo[data-demo='smart-algorithms'] .topic[data-topic='1']
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
