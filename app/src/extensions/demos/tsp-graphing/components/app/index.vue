<template lang="pug">.
    #tsp-graphing-app
        .header
            .title
                |Solution Visualization of Travel Salesman Problem
            .helpers
                icon-helpcenter.entry.introduction(
                    title="introduction"
                    size="18"
                    @click="setDisplayIntroduction(true)"
                )
                icon-github-one.entry.report(
                    title="experiment report"
                    size="18"
                    @click="toReport()"
                )
                icon-table-report.entry.github(
                    title="github"
                    size="18"
                    @click="toGithub()"
                )
        .body
            el-tabs.big-tabs(
                type="border-card"
            )
                el-tab-pane.pane.experiment(
                    label="Experiment"
                    :style="{ width: if_display_dashboard ? 'calc(100% - 400px)' : 'initial'}"
                )
                    section.time-cost
                        .title
                            |Time Cost
                        .description
                            |Total time cost of running each trial.
                        .figure.time-cost(
                            ref="ref_figure_time_cost"
                        )
                    section.result
                        .title
                            |Result
                        .description
                            |Result of each generation's maximum, minimum, average distance.
                        .figure.result(
                            ref="ref_figure_result"
                        )
                el-tab-pane.pane.evolution(
                    label="Evolution"
                    :style="{ width: if_display_dashboard ? 'calc(100% - 400px)' : 'initial'}"
                )
                    section.xxxx
                        .title
                            |Evolution
                        .description
                            |Trend of each generation's maximum, minimum, average distance.
                        .figure.evolution(
                            ref="ref_figure_evolution"
                        )
                el-tab-pane.pane.generation(
                    label="Generation"
                    :style="{ width: if_display_dashboard ? 'calc(100% - 400px)' : 'initial'}"
                )
                    section.xxxx
                        .title
                            |Generation
                        .description
                            |Eventual arrivals of a generation.
                        .figure.generation(
                            ref="ref_figure_generation"
                        )
                el-tab-pane.pane.individual(
                    label="Individual"
                    :style="{ width: if_display_dashboard ? 'calc(100% - 400px)' : 'initial'}"
                )
                    section.xxxx
                        .title
                            |Individual
                        .description
                            |The individual solution (result travel route).
                        .figure.individual(
                            ref="ref_figure_individual"
                        )
                el-tab-pane.pane.plain-map(
                    label="Plain Map"
                    :style="{ width: if_display_dashboard ? 'calc(100% - 400px)' : 'initial'}"
                )
                    section.xxxx
                        .title
                            |Plain map
                        .description
                            |Plain city map
                        .figure.plain-map(
                            ref="ref_figure_plain_map"
                        )
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
                    disabled
                )
                el-option(
                    :key="2"
                    :value="'Canada'"
                    disabled
                )
            el-select.selector.algorithm(
                v-model="opting_algorithm"
                placeholder="select an algorithm"
                title="algorithm level"
            )
                el-option(
                    :key="0"
                    :value="'basic'"
                    disabled
                )
                el-option(
                    :key="1"
                    :value="'advanced'"
                )
            el-button.dashboard.button(
                size="medium"
                @click="toggleDashboard()"
                type="primary"
                plain
            )
                |Dashboard
            .dashboard.panel(
                v-show="if_display_dashboard"
            )
                .controls
                    section.trial
                        .title
                            |Trial
                        el-slider.slider(
                            v-model="trial_n"
                            :min="1"
                            :max="trial_all"
                            show-input
                            @change="drawEvolution();drawGeneration();drawIndividual();"
                        )
                        //- .player
                        //-     |[TODO] (&lt;&lt;) (&lt;) (&gt;) (&gt;&gt;)
                    section.generation
                        .title
                            |Generation
                        el-slider.slider(
                            v-model="generation_n"
                            :min="1"
                            :max="generation_all"
                            show-input
                            @change="drawGeneration();drawIndividual();"
                        )
                        //- .player
                        //-     |[TODO] (&lt;&lt;) (&lt;) (&gt;) (&gt;&gt;)
                    section.individual
                        .title
                            |Individual
                        el-slider.slider(
                            v-model="individual_n"
                            :min="1"
                            :max="2"
                            show-input
                            @change="drawIndividual();"
                        )
                        //- .player
                        //-     |[TODO] (&lt;&lt;) (&lt;) (&gt;) (&gt;&gt;)
                .details
                    .item.generation
                        |Generation
                        .item.average-distance
                            |Average Distance:
                            span
                                |{{   current_generation_avg_distance   }}
                        .item.shortest-distance
                            |Shortest Distance:
                            span
                                |{{   current_generation_best_distance   }}
                        .item.longtest-distance
                            |Longtest Distance:
                            span
                                |{{   current_generation_worst_distance   }}
                    .item.individual
                        |Individual
                        .item.progress
                            |Progress
                            span
                                |{{   '---'   }}
                    .item.travel-route
                        |Travel Route
                        div.route-sequence
                            |{{   travel_route   }}
        el-dialog(
            title="Introduction"
            v-model="if_display_introduction"
            :style="{ 'max-height': '640px', 'overflow': 'auto' }"
            custom-class="modal introduction"
        )
            div.markdown(
                ref="ref_markdown_mount_node"
            )
                markdown-box(
                    :markdown_string="MarkdownIntroduction"
                )

</template>



<script lang="ts">
    import { defineComponent, nextTick, onMounted, reactive, ref } from "vue"

    import {
        Helpcenter as IconHelpcenter,
        GithubOne as IconGithubOne,
        TableReport as IconTableReport,
    } from "@icon-park/vue-next"

    import Drawing from "./Drawing"
    import M from "./_M"

    import coords_WesternSahara from "./maps/coords_WesternSahara"
    import { ElNotification } from "element-plus"
    import { Case } from "./types"

    import MarkdownBox from "@/plugins/markdown-box/index.vue"
    import MarkdownIntroduction from "./introduction.md"

    export default defineComponent({
        name: 'tsp-graphing-app',
        components:
        {
            [IconHelpcenter.name]: IconHelpcenter,
            [IconGithubOne.name]: IconGithubOne,
            [IconTableReport.name]: IconTableReport,
            [MarkdownBox.name]: MarkdownBox,
        },
        setup()
        {
            // data ----------------------------------------------------------------------------------------------------

            // constants //
            // const introduction_html_string = new MarkdownIt().render(TestMD)
            
            // dom refs //
            const ref_figure_plain_map = ref() as { value: HTMLElement }
            const ref_figure_time_cost = ref() as { value: HTMLElement }
            const ref_figure_result = ref() as { value: HTMLElement }
            const ref_figure_evolution = ref() as { value: HTMLElement }
            const ref_figure_generation = ref() as { value: HTMLElement }
            const ref_figure_individual = ref() as { value: HTMLElement }
            const ref_markdown_mount_node = ref() as { value: HTMLElement }

            // 0 //
            const opting_case = ref<Case|''>('')
            const opting_algorithm = ref<'basic'|'advanced'>('advanced')

            const if_display_dashboard = ref(false)
            const if_display_introduction = ref(false)

            const trial_n = ref(1)
            const trial_all = ref(20)

            const generation_n = ref(1)
            const generation_all = ref(100)

            const individual_n = ref(1)

            const travel_route = ref('')

            const datasets = reactive({
                basic:
                {
                    WesternSahara: null,
                    Uruguay: null,
                    Canada: null,
                },
                advanced:
                {
                    WesternSahara: null,
                    Uruguay: null,
                    Canada: null,
                },
            })

            const current_generation_avg_distance = ref(0)
            const current_generation_best_distance = ref(0)
            const current_generation_worst_distance = ref(0)

            const plain_map = reactive({
                WesternSahara: [[0], [0], [0]],
                Uruguay: [[0], [0], [0]],
                Canada: [[0], [0], [0]],
            })

            // methods -------------------------------------------------------------------------------------------------
            function toggleDashboard()
            {
                if_display_dashboard.value = !if_display_dashboard.value
            }

            function useCase()
            {
                switch(opting_case.value)
                {
                    case 'WesternSahara':
                    {
                        // draw plain map //
                        Drawing.drawPlainMap(coords_WesternSahara, ref_figure_plain_map.value)
                        
                        // fetch experiment data //
                        if(datasets[opting_algorithm.value]['WesternSahara'] === null)
                        {
                            M.getExperimentDataset(`${opting_algorithm.value}_WesternSahara`)
                            .then(({ data }) => {
                                if(data === 'no such dataset')
                                {
                                    ElNotification({
                                        type: 'error',
                                        title: 'data unavailable',
                                        message: `Server responded: ${'no such dataset'}`,
                                    })
                                }
                                else
                                {
                                    ElNotification({
                                        type: 'success',
                                        title: 'data fetched successfully',
                                        message: `Fetched dataset of ${opting_algorithm.value}_WesternSahara`,
                                    })
                                    datasets[opting_algorithm.value]['WesternSahara'] = data
                                    draw()
                                }
                            })
                        }
                        // while has data, go straight draw //
                        else
                        {
                            draw()
                        }

                        break
                    }
                    case 'Uruguay':
                    {
                        // should be doing something
                        break
                    }
                    case 'Canada':
                    {
                        // should be doing something
                        break
                    }
                    default:
                    {
                        break
                    }
                }
            }

            function draw()
            {
                drawExperiment()
                drawEvolution()
                drawGeneration()
                drawIndividual()
            }

            function drawExperiment()
            {
                if(opting_case.value !== '')
                {
                    Drawing.drawExperiment(
                        datasets[opting_algorithm.value][opting_case.value],
                        generation_all.value,
                        ref_figure_time_cost.value,
                        ref_figure_result.value,
                    )
                }
            }

            function drawEvolution()
            {
                if(opting_case.value !== '')
                {
                    Drawing.drawEvolution(
                        datasets[opting_algorithm.value][opting_case.value],
                        ref_figure_evolution.value,
                        generation_all.value,
                        trial_n.value,
                    )
                }
            }

            function drawGeneration()
            {
                if(opting_case.value !== '')
                {
                    const  dashboard_data = 
                    Drawing.drawGeneration(
                        datasets[opting_algorithm.value][opting_case.value],
                        ref_figure_generation.value,
                        generation_all.value,
                        trial_n.value,
                        generation_n.value,
                    )
                    current_generation_avg_distance.value = dashboard_data.avg
                    current_generation_best_distance.value = dashboard_data.best
                    current_generation_worst_distance.value = dashboard_data.worst
                }
            }

            function drawIndividual()
            {
                if(opting_case.value !== '')
                {
                    travel_route.value =
                    Drawing.drawIndividual(
                        datasets[opting_algorithm.value][opting_case.value],
                        ref_figure_individual.value,
                        generation_all.value,
                        trial_n.value,
                        generation_n.value,
                        individual_n.value,
                        plain_map[opting_case.value],
                    )
                }
            }

            function setDisplayIntroduction(if_display: boolean)
            {
                if_display_introduction.value = if_display
            }

            function toGithub()
            {
                window.open('https://github.com/Wolff-H/COMP-3-201', '_blank')
            }

            function toReport()
            {
                window.open('https://github.com/Wolff-H/COMP-3-201/blob/master/Project/COMP3201FinalProjectReport.pdf', '_blank')
            }

            // lifecycles ----------------------------------------------------------------------------------------------
            onMounted(() => {
                // DrawingModule.getTestJsonFile()
                plain_map['WesternSahara'] = Drawing.parseCoords(coords_WesternSahara)

                // automatically fetched the default dataset //
                nextTick(() => {
                    // load and use experiment case //
                    opting_case.value = 'WesternSahara'
                    useCase()
                })
            })

            // return --------------------------------------------------------------------------------------------------
            return {
                // introduction_html_string,
                ref_figure_plain_map,
                ref_figure_time_cost,
                ref_figure_result,
                ref_figure_evolution,
                ref_figure_generation,
                ref_figure_individual,
                ref_markdown_mount_node,
                opting_case,
                opting_algorithm,
                if_display_dashboard,
                if_display_introduction,
                trial_n,
                trial_all,
                generation_n,
                generation_all,
                individual_n,
                travel_route,
                datasets,
                current_generation_avg_distance,
                current_generation_best_distance,
                current_generation_worst_distance,
                plain_map,
                toggleDashboard,
                useCase,
                draw,
                drawExperiment,
                drawEvolution,
                drawGeneration,
                drawIndividual,
                setDisplayIntroduction,
                toGithub,
                toReport,
                MarkdownIntroduction,
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

    .modal.introduction
        .el-dialog__body
            max-height 560px
            overflow auto

    >.header
        display flex
        position relative
        height 48px
        padding-top 12px
        justify-content center
        align-items center

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

        .big-tabs
            height 100%

            .el-tabs__content
                height calc(100% - 40px)
                padding 0px

            .pane
                display flex
                height 100%
                flex-direction column
                overflow-x auto
                overflow-y hidden

                section
                    display flex
                    flex-grow 1
                    flex-direction column

                    >.title
                        padding 8px
                        color $black60
                        font-weight bold

                    >.description
                        padding 0px 8px
                        color $black60

                    >.figure
                        // flex-grow 1
                        // background-color $shadow10
                        &.plain-map, &.evolution, &.generation, &.individual
                            min-width 1600px
                            min-height 560px
                            width 1600px
                            height 560px

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
            // background-color $black10
            // color black

        >.dashboard.panel
            position absolute
            top 40px
            right 8px
            width 400px
            height calc(100% - 48px)
            padding 12px
            overflow auto
            border 1px solid $black10
            border-top none
            background-color $black03
            color $black60

            .controls
                section
                    margin-bottom 8px

                    >.title
                        font-weight bold
                        font-size 14px

                    >.slider
                        margin-left 8px

                section+section
                    padding-top 16px
                    // border-top 1px solid $black10

            .details
                padding-top 12px
                margin-top 12px
                border-top 1px solid $black10

                >.item
                    margin-bottom 16px
                    font-weight bold

                    >.item
                        display flex
                        margin-left 16px
                        justify-content space-between
                        font-weight normal

                        &:first-child
                            margin-top 4px

                    >.route-sequence
                        width calc(100% - 24px)
                        margin-top 4px
                        margin-left 16px
                        font-weight normal
                        white-space wrap
                        word-break break-word

.
    // 
</style>
