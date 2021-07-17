import { integration } from "@/core"

/**********************************************************************************************************************/

type Demos = typeof integration.extensions.demos

type DemoName = Demos[keyof Demos]["meta"]["name"]

type DemoModuleName = Demos[keyof Demos]["meta"]["module_name"]

type DemoStoreModule = Demos[keyof Demos]["registration"]["store_module"]

/**********************************************************************************************************************/

export
{
    DemoName,
    DemoModuleName,
    DemoStoreModule,
}
