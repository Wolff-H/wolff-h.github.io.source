import { demo_name_to_module_name_dict } from "@/core/logics/extensions/demos";
import store from "@/core/store"
import { DemoName } from "@/core/types/extensions/demos";

function setCurrentTopic(demo_name: DemoName, topic_code: string)
{
    (store as any).commit(`Demos/${demo_name_to_module_name_dict[demo_name]}/setCurrentTopic`, { current_topic: topic_code })
}

export
{
    setCurrentTopic,
}