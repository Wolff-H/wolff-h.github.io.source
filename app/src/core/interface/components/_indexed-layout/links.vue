<template lang="pug">.
    .links
        .title
            |Links
        .link-items
            inline-svg.link-item.readme(
                v-if="readme !== null"
                @click="openNewTab(readme)"
                :src="require('@/assets/icons/readme.svg')"
                title="readme"
            )
            inline-svg.link-item.github(
                v-if="github !== null"
                @click="openNewTab(github)"
                :src="require('@/assets/icons/github.svg')"
                title="github"
            )
            inline-svg.link-item.npm(
                v-if="npm !== null"
                @click="openNewTab(npm)"
                :src="require('@/assets/icons/npm.svg')"
                title="npm"
            )
            slot
</template>



<script lang="ts">
    import { defineComponent } from "vue"

    export default defineComponent({
        name: 'links',
        components:
        {
            
        },
        props:
        {
            readme:
            {
                type: String as () => string|null,
                default: null,
            },
            github:
            {
                type: String as () => string|null,
                default: null,
            },
            npm:
            {
                type: String as () => string|null,
                default: null,
            },
        },
        setup()
        {
            // data ----------------------------------------------------------------------------------------------------
            // 0 //
            // methods -------------------------------------------------------------------------------------------------
            function openNewTab(url: string)
            {
                window.open(url, '_blank')
            }

            // return --------------------------------------------------------------------------------------------------
            return {
                openNewTab,
            }
        },
    })
</script>



<style lang="stylus">
@import _colorset

// 状态样式 -------------------------------------------------------------------------------------------------------------

// 基础样式 -------------------------------------------------------------------------------------------------------------
.indexed-layout>.sidebar .links
    padding 8px
    // border-bottom 1px solid $black15

    .title
        margin-bottom 12px
        color $black40
        font-size 16px

    .link-items
        .link-item
            width 24px
            height 24px
            margin-right 8px
            opacity 0.5
            cursor pointer

            &:hover
                opacity 0.75

            &:active
                opacity 1

.
    // 
</style>
