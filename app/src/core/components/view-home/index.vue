<template lang="pug">.
    #view-home(ref="ref_home")
        .background
            .banner
        .foreground
            .header
                .header-shadow
                    .branding
                        |wolff-h.github.io
                    .introduction
                        |A place for demonstrating some of my works
                        br
                        |The source code of this site can be inspected from 
                        a(
                            href="https://github.com/Wolff-H/wolff-h.github.io.source"
                            target="_blank"
                        )
                            |Site Source
                .navigation
                    .menu
                        .left
                            el-button.menu-item(
                                type="primary"
                                @click="$router.push({ path: '/demos' })"
                            )
                                |Demos
                        .right
                            el-button.menu-item
                                |Resume
                            el-button.menu-item(
                                @click="toSiteSource()"
                            )
                                |Site Source
                            el-button.menu-item(
                                @click="toGithub()"
                            )
                                |Github
                    .scroll-down.el-icon-bottom(
                        @click="scrollToContent()"
                    )
            .body
                //- div(
                //-     v-for="i in 100"
                //- )
                //-     |撑开高度（行{{   i   }}）
                .demos-list
                    el-popover(
                        popper-class="project-preview-popover"
                        content="drag-scroll"
                        trigger="hover"
                    )
                        template(#reference="")
                            .preview(
                                @click="routeToDemo('drag-scroll')"
                            )
                                img(src="@/assets/images/demo-previews/drag-scroll.png" alt="drag-scroll")
                    el-popover(
                        popper-class="project-preview-popover"
                        content="stick-element"
                        trigger="hover"
                    )
                        template(#reference="")
                            .preview(
                                @click="routeToDemo('stick-element')"
                            )
                                img(src="@/assets/images/demo-previews/stick-element.png" alt="stick-element")
                    el-popover(
                        popper-class="project-preview-popover"
                        content="tsp-graphing"
                        trigger="hover"
                    )
                        template(#reference="")
                            .preview(
                                @click="routeToDemo('tsp-graphing')"
                            )
                                img(src="@/assets/images/demo-previews/tsp-graphing.png" alt="tsp-graphing")
                    el-popover(
                        popper-class="project-preview-popover"
                        content="smart-algorithms"
                        trigger="hover"
                    )
                        template(#reference="")
                            .preview(
                                @click="routeToDemo('smart-algorithms')"
                            )
                                img(src="@/assets/images/demo-previews/smart-algorithms.png" alt="smart-algorithms")
</template>



<script lang="ts">
    import router from "@/core/router"
    import { defineComponent, ref } from "vue"

    export default defineComponent({
        name: 'view-home',
        components:
        {
            
        },
        setup()
        {
            // data ----------------------------------------------------------------------------------------------------
            // 0 //

            // dom refs //
            const ref_home = ref() as { value: HTMLElement }

            // methods -------------------------------------------------------------------------------------------------
            function scrollToContent()
            {
                console.log(ref_home.value);
                
                ref_home.value.scrollTop = ref_home.value.clientHeight
            }

            function routeToDemo(demo_name: string)
            {
                router.push({ path: `/demos/${demo_name}` })
            }

            function toGithub()
            {
                window.open('https://github.com/Wolff-H/', '_blank')
            }

            function toSiteSource()
            {
                window.open('https://github.com/Wolff-H/wolff-h.github.io.source', '_blank')
            }

            // return --------------------------------------------------------------------------------------------------
            return {
                ref_home,
                scrollToContent,
                routeToDemo,
                toGithub,
                toSiteSource,
            }
        },
    })
</script>



<style lang="stylus">
@import _colorset

// 状态样式 -------------------------------------------------------------------------------------------------------------

// 基础样式 -------------------------------------------------------------------------------------------------------------
#view-home
    height 100vh
    overflow-y auto
    scroll-behavior smooth

    >.background
        position absolute
        z-index -1
        width 100%
        height 100%

        >.banner
            position absolute
            width 100%
            height calc(100% - 72px)
            background-image url('~@/assets/images/classic-desktop.jpg')
            background-size 100% 100%

    >.foreground
        position relative
        margin-top calc(100vh - 352px)

        >.header
            height 352px

            >.header-shadow
                position relative
                height 280px
                background linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.3) 75%, rgba(0, 0, 0, 0.3) 100%)

                >.branding
                    position absolute
                    bottom 48px
                    left 64px
                    color white
                    font-size 36px
                    cursor pointer
                    user-select none

                    &:hover
                        color $primary10

                    &:active
                        color $primary20

                >.introduction
                    position absolute
                    right 64px
                    bottom 48px
                    color white
                    text-align right

                    a
                        // background-color $fog20
                        color white

            >.navigation
                display flex
                height 72px
                padding 0px 12px
                align-items center
                border-bottom 1px solid $black40
                background-color $black03

                >.menu
                    display flex
                    width 100%
                    height 100%
                    flex-grow 1
                    justify-content space-between
                    align-items center

                    .menu-item
                        width 160px

                        &:not(:first-child)
                            margin-left 12px

                >.scroll-down
                    display flex
                    width 40px
                    height 40px
                    margin-left 12px
                    justify-content center
                    align-items center
                    font-size 20px
                    cursor pointer

                    &:hover
                        background-color $shadow05

                    &:active
                        background-color $shadow10

        >.body
            background-color white

            >.demos-list
                display flex
                padding 20px 20%
                flex-wrap wrap

                .preview
                    display flex
                    width 268px
                    height 268px
                    margin 0px 20px 20px 0px
                    align-items center
                    border 1px solid $black20
                    cursor pointer

                    &:hover
                        box-shadow 0px 0px 10px $blue60

                    >img
                        // height 100%
                        width 100%

.
    // 
</style>
