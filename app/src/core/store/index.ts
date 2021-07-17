import { createStore } from "vuex"

import Demos, { _Module as _Demos } from "./Demos"

/**********************************************************************************************************************/

const modules =
{
    Demos,
}

const state: _S =
{

}

const getters =
{

}

const mutations =
{
    setSomthing(state: _S, payload: {
        num: 123
    }){

    },
}

const actions =
{

}

interface _S
{

}

const Module =
{
    // strict: process.env.NODE_ENV !== 'production',
    // plugins: process.env.NODE_ENV !== 'production' ? [createLogger()] : [],

    namespaced: true,
    modules,
    state,
    getters,
    mutations,
    actions,
}

const store = createStore(Module as any)
// store.commit("")
// store.state.Demos.
// store.state.Demos
// store.state.Demos.DragScroll.a
// store.state.Demos.HandlelyResizable.
// store.state.Demos.

/**********************************************************************************************************************/
// vuex-pure-typing //
type _PREFIX_PATH = ''
type _PATH = ''
type _FULL_PATH = `${_PREFIX_PATH}${_PATH}`
type _Context = ActionContext<_S, typeof getters, typeof mutations>
type _Module = _VMT<_PATH, _FULL_PATH, typeof Module, _Demos>
type _RootState = _Module['_State']

export { _FULL_PATH, _Module, _RootState }

/**********************************************************************************************************************/

export default store

export
{
    Module,
}