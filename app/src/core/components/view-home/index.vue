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
                            el-button.menu-item
                                |Site Source
                            el-button.menu-item
                                |Github
                    .scroll-down.el-icon-bottom(
                        @click="scrollToContent()"
                    )
            .body
                div(
                    v-for="i in 100"
                )
                    |撑开高度（行{{   i   }}）
</template>



<script lang="ts">
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



            // return --------------------------------------------------------------------------------------------------
            return{

                ref_home,
                scrollToContent,
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

.
    // 
</style>
