import UnionToTuple from "@/common/generics/UnionToTuple"
import { integration } from "@/core"
import router from "@/core/router"
import { DemoModuleName, DemoName } from "@/core/types/extensions/demos"

/**********************************************************************************************************************/

const { demos } = integration.extensions

const demo_names = Object.values(demos).map(info => info.meta.name) as UnionToTuple<DemoName>

const demo_module_names = Object.values(demos).map(info => info.meta.module_name) as UnionToTuple<DemoModuleName>

const demo_name_to_module_name_dict = Object.fromEntries(Object.values(demos).map(info => [
    info.meta.name, info.meta.module_name
]))

const demo_module_name_to_name_dict = Object.fromEntries(Object.values(demos).map(info => [
    info.meta.module_name, info.meta.name
]))

function toDemo(demo_name: DemoName)
{
    router.push({ path: `/demos/${demo_name}` })
}

/**********************************************************************************************************************/

export
{
    demo_names,
    demo_module_names,
    demo_name_to_module_name_dict,
    demo_module_name_to_name_dict,
    toDemo,
}

export default
{
    demo_names,
    demo_module_names,
    demo_name_to_module_name_dict,
    demo_module_name_to_name_dict,
    toDemo,
}
