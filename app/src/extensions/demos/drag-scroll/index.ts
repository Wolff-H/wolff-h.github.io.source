// 扩展包的注册表 //

import StoreModule, { _Module as _StoreModule } from "./store-module"

import routes from "./routes"

/**********************************************************************************************************************/

const meta =
{
    name: 'drag-scroll',
    module_name: 'DragScroll',
} as const

const registration =
{
    api: null,
    logics: null,
    routes: routes,
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