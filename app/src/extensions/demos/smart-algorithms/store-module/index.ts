import { _FULL_PATH as _PREFIX_PATH } from "@/core/store/Demos"

/**********************************************************************************************************************/

const modules =
{

}

const state: _S =
{
    current_topic: '',
}

const getters =
{

}

const mutations =
{
    setCurrentTopic(state: _S, payload: {
        current_topic: string
    }){
        state.current_topic = payload.current_topic
    },
}

const actions =
{

}

interface _S
{
    /** 当前主题code */
    current_topic: string
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

/**********************************************************************************************************************/
// vuex-pure-typing //
type _PATH = 'SmartAlgorithms'
type _FULL_PATH = `${_PREFIX_PATH}${_PATH}/`
type _Context = ActionContext<_S, typeof getters, typeof mutations>
type _Module = _VMT<_PATH, _FULL_PATH, typeof Module>
export { _FULL_PATH, _Module }
/**********************************************************************************************************************/

export default Module