<template lang="pug">.
    .indexed-layout(
        :data-demo="demo_name"
    )
        .sidebar(
            :class="x_class"
            ref="ref_sidebar"
        )
            .content
                links(
                    :readme="links_config?.readme ? links_config.readme : null"
                    :github="links_config?.github ? links_config.github : null"
                    :npm="links_config?.npm ? links_config.npm : null"
                )
                    slot(name="links")
                topic-tree(
                    :topic_tree_data="topic_tree_data"
                    :demo_name="demo_name"
                )
            .resizer(
                ref="ref_resizer"
                @dblclick="resetWidth()"
                @mousedown="setGlobalCursorState('ew-resize')"
            )
            .toggle-trigger-area
                .toggle-button(
                    @click="toggleOpened()"
                )
                    icon-left(
                        v-if="if_opened"
                        size="16px"
                    )
                    icon-right(
                        v-if="!if_opened"
                        size="16px"
                    )
        .content
            router-view
</template>



<script lang="ts">
    import { computed, defineComponent, nextTick, onMounted, ref } from "vue"

    import handlelyResizable from "@/plugins/handlely-resizable"

    import { Left as IconLeft, Right as IconRight } from "@icon-park/vue-next"

    import Links from "./links.vue"
    import TopicTree from "./topic-tree.vue"
    import { DemoName } from "@/core/types/extensions/demos"
    import { setGlobalCursorState } from "@/core/logics"

    export default defineComponent({
        name: 'indexed-layout',
        components:
        {
            [IconLeft.name]: IconLeft,
            [IconRight.name]: IconRight,
            [Links.name]: Links,
            [TopicTree.name]: TopicTree,
        },
        props:
        {
            "links_config":
            {
                type: Object as () =>
                {
                    readme?: string,
                    github?: string,
                    npm?: string,
                },
                default: null,
            },
            "topic_tree_data":
            {
                type: Object as () => any,
                default: null,
            },
            "demo_name":
            {
                type: String as () => DemoName,
                default: '',
            },
        },
        setup()
        {
            // data ----------------------------------------------------------------------------------------------------
            // C //
            const x_class = computed(()=>{
                const x_class =
                {
                    'o-opened': false,
                }

                if(if_opened.value)
                {
                    x_class['o-opened'] = true
                }

                return x_class
            })
            // 0 //
            const if_opened = ref(true)

            // dom refs //
            const ref_sidebar = ref() as { value: HTMLElement }
            const ref_resizer = ref() as { value: HTMLElement }

            // methods -------------------------------------------------------------------------------------------------
            function toggleOpened()
            {
                ref_sidebar.value.style.width = if_opened.value ? '0px' : '360px'
                if_opened.value = !if_opened.value
            }

            function resetWidth()
            {
                ref_sidebar.value.style.width = '360px'
            }

            // lifecycles ----------------------------------------------------------------------------------------------
            onMounted(() => {
                nextTick(() => {
                    handlelyResizable(ref_resizer.value, ref_sidebar.value, { y: 0 })
                })
            })

            // return --------------------------------------------------------------------------------------------------
            return{
                x_class,
                toggleOpened,
                resetWidth,
                if_opened,
                ref_sidebar,
                ref_resizer,
                setGlobalCursorState,
            }
        },
    })
</script>



<style lang="stylus">
@import _colorset

// 状态样式 -------------------------------------------------------------------------------------------------------------
// 状态样式 -------------------------------------------------------------------------------------------------------------
.indexed-layout
    >.sidebar.o-opened
        min-width 240px
        width 360px
        border-right 1px solid $black60

        >.resizer
            display block

        >.toggle-trigger-area
            left calc(100% + 1px)

// 基础样式 -------------------------------------------------------------------------------------------------------------
.indexed-layout
    display flex
    width 100%

    >.sidebar
        position relative
        max-width 480px
        width 0px
        border-right 1px solid $black40
        background-color $black03

        >.content
            width 100%
            height 100%
            overflow hidden

        &:hover
            >.toggle-trigger-area
                width 32px

                >.toggle-button
                    display flex

        >.resizer
            display none
            position absolute
            top 0px
            right -1px
            z-index 1
            width 5px
            height 100%
            cursor ew-resize
            transition background-color 0.25s

            &:hover
                background-color $black15

        >.toggle-trigger-area
            display flex
            position absolute
            top 33px
            left 100%
            z-index 1
            width 4px
            height calc(100% - 33px)
            align-items center

            >.toggle-button
                display none
                position absolute
                width 32px
                height 64px
                margin-left -1px
                align-items center
                border 1px solid $black60
                border-left none
                border-top-right-radius 32px
                border-bottom-right-radius 32px
                background-color $black03
                cursor pointer

    >.content
        display flex
        width 0px
        flex-grow 1
        flex-direction column
        overflow auto

        >.topic
            padding 12px 36px

        // *
        // color $black60
        h1
            margin 16px 0px
            color $black80
            font-weight normal
            font-size 32px

        h2
            margin 12px 0px
            color $black60
            font-weight normal
            font-size 28px

        h3
            margin 48px 0px 8px 0px
            color $black60
            font-weight normal
            font-size 22px

        h4
            margin 4px 0px
            color $black60
            font-weight normal
            font-size 20px

        h5
            margin 2px 0px
            color $black60
            font-weight normal
            font-size 16px

        h6
            margin 0px
            color $black60
            font-weight normal
            font-size 14px

        p
            color $black60

.
    // 
</style>
