<template lang="pug">.
    #tsp-graphing-app
        .header
            .title
                |Solution Visualization of Travel Salesman Problem
            .helpers
                icon-helpcenter.entry.introduction(
                    title="introduction"
                    size="18"
                )
                icon-github-one.entry.report(
                    title="experiment report"
                    size="18"
                )
                icon-table-report.entry.github(
                    title="github"
                    size="18"
                )
        .body
            el-tabs.big-tabs(
                type="border-card"
            )
                el-tab-pane.pane.experiment(
                    label="Experiment"
                )
                    |xxxxxx
                el-tab-pane.pane.evolution(
                    label="Evolution"
                )
                    |xxxxxx
                el-tab-pane.pane.generation(
                    label="Generation"
                )
                    |xxxxxx
                el-tab-pane.pane.individual(
                    label="Individual"
                )
                    |xxxxxx
                el-tab-pane.pane.plain-map(
                    label="Plain Map"
                )
                    |xxxxxx
            el-select.selector.case(
                v-model="opting_case"
                placeholder="select a case"
                title="map case"
            )
                el-option(
                    :key="0"
                    :value="'WesternSahara'"
                )
                el-option(
                    :key="1"
                    :value="'Uruguay'"
                )
                el-option(
                    :key="2"
                    :value="'Canada'"
                )
            el-select.selector.algorithm(
                v-model="opting_algorithm"
                placeholder="select an algorithm"
                title="algorithm level"
            )
                el-option(
                    :key="0"
                    :value="'basic'"
                )
                el-option(
                    :key="1"
                    :value="'advanced'"
                )
            el-button.dashboard.button(
                size="medium"
                @click="toggleDashboard()"
            )
                |Dashboard
            .dashboard.panel(
                v-show="if_display_dashboard"
            )


</template>



<script lang="ts">
    import { defineComponent, ref } from "vue"

    import { Helpcenter as IconHelpcenter, GithubOne as IconGithubOne, TableReport as IconTableReport } from "@icon-park/vue-next"

    export default defineComponent({
        name: 'tsp-graphing-app',
        components:
        {
            [IconHelpcenter.name]: IconHelpcenter,
            [IconGithubOne.name]: IconGithubOne,
            [IconTableReport.name]: IconTableReport,
        },
        setup()
        {
            // data ----------------------------------------------------------------------------------------------------
            // 0 //
            const opting_case = ref('')
            const opting_algorithm = ref('advanced')

            const if_display_dashboard = ref(true)

            // methods -------------------------------------------------------------------------------------------------
            function toggleDashboard()
            {
                if_display_dashboard.value = !if_display_dashboard.value
            }

            // return --------------------------------------------------------------------------------------------------
            return {
                opting_case,
                opting_algorithm,
                if_display_dashboard,
                toggleDashboard,
            }
        },
    })
</script>



<style lang="stylus">
@import _colorset

// 状态样式 -------------------------------------------------------------------------------------------------------------

// 基础样式 -------------------------------------------------------------------------------------------------------------
#tsp-graphing-app
    display flex
    width 100%
    height 100%
    flex-direction column

    >.header
        display flex
        position relative
        height 48px
        justify-content center
        align-items center
        padding-top 12px

        >.title
            color $black60
            font-size 24px

        >.helpers
            position absolute
            bottom 2px
            left 8px

            .entry
                margin-right 4px
                cursor pointer

                &:hover
                    color $primary

    >.body
        position relative
        padding 8px
        padding-top 0px
        flex-grow 1

        >.selector.case, >.selector.algorithm
            position absolute
            top 0px
            width 200px
            height 40px

        >.selector.case
            right 616px

        >.selector.algorithm
            right 412px

        >.dashboard.button
            position absolute
            top 0px
            right 8px
            width 400px
            height 40px
            border-radius 0px
            background-color $black10
            color black

        >.dashboard.panel
            position absolute
            top 40px
            right 8px
            width 400px
            height 400px
            padding 10px
            border 1px solid $black10
            border-top none
            background-color $black03

.
    // 
</style>
