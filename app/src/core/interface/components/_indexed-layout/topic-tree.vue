<template lang="pug">.
    .topic-tree
        .title
            |Topics
            .options
                icon-expand-down-one.icon.expand-all(
                    size="16px"
                    title="expand-all"
                    @click="expandAll()"
                )
                icon-fold-up-one.icon.fold-all(
                    size="16px"
                    title="fold-all"
                    @click="foldAll()"
                )
        .content
            el-tree.tree(
                ref="ref_tree"
                :data="topic_tree_data"
                node-key="code_full"
                @node-click="onNodeClick"
                :current-node-key="current_topic"
            )
                template(#default="{ node, data }")
                    span.title(
                        :class="current_topic === data.code_full ? 'o-current' : ''"
                    )
                        |{{   data.label   }}
</template>



<script lang="ts">
    import { demo_name_to_module_name_dict } from "@/core/logics/extensions/demos";
    import router from "@/core/router"
    import store from "@/core/store"
    import { DemoName } from "@/core/types/extensions/demos"
    import { computed, defineComponent, ref } from "vue"
    import { Topic, TopicTreeData } from "../../types/indexed-layout/topic-tree"
    import { ExpandDownOne as IconExpandDownOne, FoldUpOne as IconFoldUpOne } from "@icon-park/vue-next"

    export default defineComponent({
        name: 'topic-tree',
        components:
        {
            [IconExpandDownOne.name]: IconExpandDownOne,
            [IconFoldUpOne.name]: IconFoldUpOne,
        },
        props:
        {
            "topic_tree_data":
            {
                type: Object as () => TopicTreeData,
                default: [],
            },
            "demo_name":
            {
                type: String as () => DemoName,
                default: null,
            },
        },
        setup(props)
        {
            // data ----------------------------------------------------------------------------------------------------
            // 0 //
            const current_topic = computed(() => {
                return (store.state.Demos[demo_name_to_module_name_dict[props.demo_name]] as any).current_topic as string
            })

            // component refs ------------------------------------------------------------------------------------------
            const ref_tree = ref() as { value: any }

            // methods -------------------------------------------------------------------------------------------------
            function onNodeClick(node_data: Topic, node: any, node_ins: any)
            {
                console.log(node_data, node, node_ins);
                router.push({ path: `/demos/${props.demo_name}/${node_data.code_full}` })
            }

            function expandAll()
            {
                const nodes = ref_tree.value.store.nodesMap
                for(let key in nodes)
                {
                    nodes[key].expanded = true
                }
            }

            function foldAll()
            {
                const nodes = ref_tree.value.store.nodesMap
                for(let key in nodes)
                {
                    nodes[key].expanded = false
                }
            }

            // return --------------------------------------------------------------------------------------------------
            return {
                current_topic,
                ref_tree,
                onNodeClick,
                expandAll,
                foldAll,
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

    >.title
        display flex
        position relative
        margin-bottom 12px
        align-items center
        color $black40
        font-size 16px

        >.options
            position absolute
            right 0px

            >.icon
                padding 2px
                cursor pointer

                &:hover
                    color $black60

                &:active
                    color black

    >.content
        >.tree
            background-color transparent

            .el-tree-node__expand-icon
                padding 8px
                font-size 16px
                cursor default

                &:not(.is-leaf)
                    &:hover
                        background-color $primary20

                    &:active
                        background-color $primary30

            .el-tree-node__content
                height 32px
                cursor default

                &:hover
                    background-color $primary10

                    .el-tree-node__expand-icon:not(.is-leaf)
                        color $primary50

                &:active
                    background-color $primary20

                    .el-tree-node__expand-icon:not(.is-leaf)
                        color $primary60

                span.title
                    // color $black60
                    margin-left 4px

                    &.o-current
                        color $primary

.
    // 
</style>
