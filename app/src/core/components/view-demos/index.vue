<template lang="pug">.
    #demos
        .header
            icon-home.home(
                title="home"
                @click="toHome()"
                :size="24"
            )
            el-select.demo-select(
                v-model="opting_demo"
                placeholder="Select a work"
            )
                el-option(
                    v-for="(demo_name, index) of demo_names"
                    :key="demo_name"
                    :value="demo_name"
                    :label="demo_name"
                    @click="toDemo(demo_name)"
                )
            //- .home.el-icon-s-home(
            //-     title="home"
            //-     @click="toHome()"
            //- )
        .body
            router-view
            //- router-view(name="topic-tree")
            //- router-view(name="topic-content")
</template>



<script lang="ts">
    import { defineComponent, ref } from "vue"
    // import store from "@/core/store"

    import { Home as IconHome } from "@icon-park/vue-next"

    import CoreLogics from "@/core/logics"

    import Demos from "@/core/logics/extensions/demos"
    import { DemoName } from "@/core/types/extensions/demos"
    
    export default defineComponent({
        name: 'demos',
        components:
        {
            [IconHome.name]: IconHome,
        },
        setup()
        {
            // data ----------------------------------------------------------------------------------------------------
            // 0 //
            // const opting_demo = computed({
            //     get()         {   return (store as any).state.Demos.opting_demo   },
            //     set(v: string){   store.commit("Demos/optDemo", { demo: v } )   },
            // })

            const opting_demo = ref('')
            const demo_names = Demos.demo_names

            // methods -------------------------------------------------------------------------------------------------
            function toDemo(demo_name: DemoName)
            {
                Demos.toDemo(demo_name)
            }

            function toHome()
            {
                CoreLogics.toHome()
            }

            // return --------------------------------------------------------------------------------------------------
            return{
                opting_demo,
                demo_names,
                toDemo,
                toHome,
            }
        },
    })
</script>



<style lang="stylus">
@import _colorset

// 状态样式 -------------------------------------------------------------------------------------------------------------

// 基础样式 -------------------------------------------------------------------------------------------------------------
#demos
    height 100vh

    >.header
        display flex
        height 41px
        padding 0px 4px
        // justify-content space-between
        align-items center
        border-bottom 1px solid $black40
        background-color $black03

        >.home
            padding 4px
            margin-right 4px
            color $black60
            cursor pointer

            &:hover
                background-color $shadow05

            &:active
                background-color $shadow10

    >.body
        display flex
        height calc(100% - 41px)

.
    // 
</style>
