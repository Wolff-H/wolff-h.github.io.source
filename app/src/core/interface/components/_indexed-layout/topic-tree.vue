<template lang="pug">.
    .topic-tree
        .title
            |Topics
        .content
            el-tree.tree(
                :data="topic_tree_data"
                @node-click="onNodeClick"
            )
</template>



<script lang="ts">
    import router from "@/core/router";
    import { defineComponent } from "vue"
    import { Topic, TopicTreeData } from "../../types/indexed-layout/topic-tree"

    export default defineComponent({
        name: 'topic-tree',
        components:
        {
            
        },
        props:
        {
            "topic_tree_data":
            {
                type: Object as () => TopicTreeData,
                default: [],
            },
        },
        setup()
        {
            // data ----------------------------------------------------------------------------------------------------
            // 0 //
            const demo_data =
            [{
            label: '一级 1',
            children: [{
                label: '二级 1-1',
                children: [{
                label: '三级 1-1-1'
                }]
            }]
            }, {
            label: '一级 2',
            children: [{
                label: '二级 2-1',
                children: [{
                label: '三级 2-1-1'
                }]
            }, {
                label: '二级 2-2',
                children: [{
                label: '三级 2-2-1'
                }]
            }]
            }, {
            label: '一级 3',
            children: [{
                label: '二级 3-1',
                children: [{
                label: '三级 3-1-1'
                }]
            }, {
                label: '二级 3-2',
                children: [{
                label: '三级 3-2-1'
                }]
            }]
            }]

            // methods -------------------------------------------------------------------------------------------------
            function onNodeClick(node_data: Topic, node: any, node_ins: any)
            {
                console.log(node_data, node, node_ins);
                router.push({ path: node_data.code_full })
                
            }

            // return --------------------------------------------------------------------------------------------------
            return {
                demo_data,
                onNodeClick,
            }
        },
    })
</script>



<style lang="stylus">
@import _colorset

// 状态样式 -------------------------------------------------------------------------------------------------------------

// 基础样式 -------------------------------------------------------------------------------------------------------------
.indexed-layout>.sidebar .topic-tree
    padding 8px

    .title
        margin-bottom 12px
        color $black40
        font-size 16px

.
    // 
</style>
