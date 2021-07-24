<template lang="pug">.
    #tsp-graphing
        tsp-graphing-app
</template>



<script lang="ts">
    import { defineComponent } from "vue"

    import TSPGraphingApp from "./app/index.vue"

    export default defineComponent({
        name: 'tsp-graphing',
        components:
        {
            [TSPGraphingApp.name]: TSPGraphingApp,
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
#tsp-graphing
    height 100%
    width 100%
.
    // 
</style>
