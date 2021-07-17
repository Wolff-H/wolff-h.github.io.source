import UnionToTuple from "@/common/generics/UnionToTuple"
import { integration } from "@/core"
import router from "@/core/router"
import { DemoModuleName, DemoName } from "@/core/types/extensions/demos"

/**********************************************************************************************************************/

const { demos } = integration.extensions

const demo_names = Object.values(demos).map(info => info.meta.name) as UnionToTuple<DemoName>

const demo_module_names = Object.values(demos).map(info => info.meta.module_name) as UnionToTuple<DemoModuleName>

function toDemo(demo_name: DemoName)
{
    router.push({ path: `/demos/${demo_name}` })
}

/**********************************************************************************************************************/

export
{
    demo_names,
    demo_module_names,
    toDemo,
}

export default
{
    demo_names,
    demo_module_names,
    toDemo,
}
