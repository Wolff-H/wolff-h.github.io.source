import { _FULL_PATH as _PREFIX_PATH } from "@/core/store/Demos"

/**********************************************************************************************************************/

const modules =
{

}

const state: _S =
{
    a: 'aa'
}

const getters =
{

}

const mutations =
{

}

const actions =
{

}

interface _S
{
    a: 'aa'
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
type _PATH = 'HandlelyResizable'
type _FULL_PATH = `${_PREFIX_PATH}${_PATH}/`
type _Context = ActionContext<_S, typeof getters, typeof mutations>
type _Module = _VMT<_PATH, _FULL_PATH, typeof Module>
export { _FULL_PATH, _Module }
/**********************************************************************************************************************/

export default Module