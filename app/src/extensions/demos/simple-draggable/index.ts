// 扩展包的注册表 //

import StoreModule, { _Module as _StoreModule } from "./store-module"

/**********************************************************************************************************************/

const meta =
{
    name: 'simple-draggable',
    module_name: 'SimpleDraggable',
} as const

const registration =
{
    api: null,
    logics: null,
    // routes: routes,    // 含vue组件的对象仅能直接import引入，而不能再放入一个对象中，再从运行时获取，这样做webpack会报错
    store_module: StoreModule as unknown as _StoreModule,
    types: null,
} as const

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