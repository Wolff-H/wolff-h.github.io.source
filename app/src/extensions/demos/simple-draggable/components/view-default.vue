<template lang="pug">.
    indexed-layout.demo(
        :links_config="links_config"
        :topic_tree_data="topic_tree_data"
        :demo_name="demo_name"
    )
        |view-default: simple-draggable
</template>



<script lang="ts">
    import { defineComponent } from "vue"
    
    import IndexedLayout from "@/core/interface/components/_indexed-layout/index.vue"
    import topic_tree_data from "@/extensions/demos/simple-draggable/logics/topics/topic-tree-data"

    export default defineComponent({
        name: 'view-default',
        components:
        {
            [IndexedLayout.name]: IndexedLayout,
        },
        setup()
        {
            // data ----------------------------------------------------------------------------------------------------
            // constants -----------------------------------------------------------------------------------------------
            const demo_name = 'simple-draggable'

            // 0 //
            const links_config =
            {
                readme: 'https://github.com/Wolff-H/simple-draggable/blob/master/README.md',
                github: 'https://github.com/Wolff-H/simple-draggable',
                npm: 'https://www.npmjs.com/package/@wolff-h/simple-draggable',
            }

            // return --------------------------------------------------------------------------------------------------
            return {
                demo_name,
                links_config,
                topic_tree_data,
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
