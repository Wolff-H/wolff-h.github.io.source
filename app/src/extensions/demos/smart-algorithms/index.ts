// 扩展包的注册表 //

import StoreModule, { _Module as _StoreModule } from "./store-module"

/**********************************************************************************************************************/

const meta =
{
    name: 'smart-algorithms',
    module_name: 'SmartAlgorithms',
} as const

const registration =
{
    api: null,
    logics: null,
    routes: null,
    store_module: StoreModule as unknown as _StoreModule,
    types: null,
}

/**********************************************************************************************************************/

export
{
    meta,
    registration,
}

export default
{
    meta,
    registration,
}