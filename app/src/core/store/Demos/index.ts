import { _FULL_PATH as _PREFIX_PATH } from ".."

import { integration } from "@/core"
import { DemoName, DemoStoreModule } from "@/core/types/extensions/demos"

/**********************************************************************************************************************/

const modules =
{
    DragScroll: integration.extensions.demos["DragScroll"].registration.store_module,
    HandlelyResizable: integration.extensions.demos["HandlelyResizable"].registration.store_module,
    SmartAlgorithms: integration.extensions.demos["SmartAlgorithms"].registration.store_module,
    StickElement: integration.extensions.demos["StickElement"].registration.store_module,
    SimpleDraggable: integration.extensions.demos["SimpleDraggable"].registration.store_module,
    TSPGraphing: integration.extensions.demos["TSPGraphing"].registration.store_module,
}

const state: _S =
{
    opting_demo: '',
}

const getters =
{

}

const mutations =
{
    setOptingDemo(state: _S, payload: {
        opting_demo: _S["opting_demo"]
    }){
        state.opting_demo = payload.opting_demo
    }
}

const actions =
{
    optDemo(context: _Context, payload: {
        demo: _S["opting_demo"]
    }){
        // 重置当前demo状态库 //
        // ...
        context.commit("setOptingDemo", { opting_demo: payload.demo })
    }
}

const Module =
{
    namespaced: true,
    modules,
    state,
    getters,
    mutations,
    actions,
}

interface _S
{
    opting_demo: ''|DemoName
}


/**********************************************************************************************************************/
// vuex-pure-typing //
type _PATH = 'Demos'
type _FULL_PATH = `${_PREFIX_PATH}${_PATH}/`
type _Context = ActionContext<_S, typeof getters, typeof mutations>
type _Module = _VMT<_PATH, _FULL_PATH, typeof Module, DemoStoreModule>
export { _FULL_PATH, _Module }
/**********************************************************************************************************************/

export default Module