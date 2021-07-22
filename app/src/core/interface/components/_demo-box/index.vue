<template lang="pug">.
    .demo-box
        .main
            slot
        .code(v-if="if_render_code")
            .collapse-toggle(@click="toggleDisplayCode()")
                |code
                .icon.copy.el-icon-document-copy(
                    @click.stop=""
                    title="copy code"
                )
            el-collapse-transition
                .code-wrapper(v-show="if_display_code")
                    .content
                        slot(name="code")
</template>



<script lang="ts">
    import { defineComponent, ref } from "vue"

    import { ElCollapseTransition } from "element-plus"

    export default defineComponent({
        name: 'demo-box',
        components:
        {
            "el-collapse-transition": ElCollapseTransition,
        },
        props:
        {
            "if_render_code":
            {
                type: Boolean,
                default: true,
            },
        },
        setup()
        {
            // data ----------------------------------------------------------------------------------------------------
            // 0 //
            const if_display_code = ref(false)

            // methods -------------------------------------------------------------------------------------------------
            function toggleDisplayCode()
            {
                if_display_code.value = !if_display_code.value
            }

            // return --------------------------------------------------------------------------------------------------
            return{
                if_display_code,
                toggleDisplayCode,
            }
        },
    })
</script>



<style lang="stylus">
@import _colorset

// 状态样式 -------------------------------------------------------------------------------------------------------------

// 基础样式 -------------------------------------------------------------------------------------------------------------
.demo-box
    min-width 400px
    margin 16px 0px 48px 0px
    border 1px solid $black15
    border-radius 4px
    &:hover
        box-shadow 0px 0px 8px $black15

    >.main
        min-height 80px
        padding 16px
        overflow auto

    >.code
        >.collapse-toggle
            display flex
            position relative
            height 32px
            justify-content center
            align-items center
            border-top 1px solid $black15
            color $black40
            cursor pointer

            &:hover
                background-color $primary10

                >.icon.copy
                    display block

            &:active
                background-color $primary20

            >.icon.copy
                display none
                position absolute
                right 8px
                font-size 16px

                &:hover
                    color $primary

        >.code-wrapper
            >.content
                padding 16px
                border-top 1px solid $black15
                background-color #fafafa

.
    // 
</style>
