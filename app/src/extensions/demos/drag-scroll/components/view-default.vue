<template lang="pug">.
    indexed-layout(
        :links_config="links_config"
        :topic_tree_data="topic_tree_data"
        :demo_name="'drag-scroll'"
    )
        |view-default: drag-scroll
</template>



<script lang="ts">
    import { defineComponent } from "vue"
    
    import IndexedLayout from "@/core/interface/components/_indexed-layout/index.vue"
    import topic_tree_data from "@/extensions/demos/drag-scroll/logics/topics/topic-tree-data"

    export default defineComponent({
        name: 'view-default',
        components:
        {
            [IndexedLayout.name]: IndexedLayout,
        },
        setup()
        {
            // data ----------------------------------------------------------------------------------------------------
            // 0 //
            const links_config =
            {
                readme: 'https://github.com/Wolff-H/drag-scroll/blob/master/README.md',
                github: 'https://github.com/Wolff-H/drag-scroll',
                npm: 'https://www.npmjs.com/package/@wolff-h/drag-scroll',
            }

            // return --------------------------------------------------------------------------------------------------
            return {
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
