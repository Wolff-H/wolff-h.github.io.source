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
    // // 全局滚动条样式 //
    // ::-webkit-scrollbar
    //     width 8px
    //     height 8px
    //     background-color $black05

    //     // &:hover, &:active
    //     //     background-color $primary10 //$black05

    // ::-webkit-scrollbar-thumb
    //     border 1px solid $black05
    //     background-color $black25

    //     &:hover
    //         background-color $black40
    //         border none

    //     &:active
    //         background-color $black50
    //         border none
    
    // // 全局滚动条样式 - 适配Firefox //
    // *
    //     scrollbar-width thin
    //     scrollbar-color $black25 $black05
.
    // 
</style>
