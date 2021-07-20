<template lang="pug">.
    #app
        router-view
</template>



<script lang="ts">
    import { defineComponent, onMounted } from "vue"
    import { integration } from "./core";
    import { demo_module_name_to_name_dict, demo_name_to_module_name_dict } from "./core/logics/extensions/demos"

    export default defineComponent({
        name: 'app',
        components:
        {
            
        },
        setup()
        {
            // data ----------------------------------------------------------------------------------------------------
            // 0 //

            // life cycles ---------------------------------------------------------------------------------------------
            onMounted(() => {
                console.log(integration);
                console.log(demo_name_to_module_name_dict, demo_module_name_to_name_dict);
                
            })
            // return --------------------------------------------------------------------------------------------------
        },
    })
</script>



<style lang="stylus">
@import '~@/assets/stylesheets/overall/index.styl'
@import _colorset

// 状态样式 -------------------------------------------------------------------------------------------------------------
body
    &.o-cursor-wait
        &, *
            cursor wait !important
    &.o-cursor-progress
        &, *
            cursor progress !important
    &.o-cursor-ew-resize
        &, *
            cursor ew-resize !important
    &.o-cursor-move
        &, *
            cursor move !important

// 基础样式 -------------------------------------------------------------------------------------------------------------
#app
    // 

.
    // 
</style>
