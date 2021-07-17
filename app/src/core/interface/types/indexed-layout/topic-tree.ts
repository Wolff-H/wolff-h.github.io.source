
interface Topic
{
    /** 节点名称 */
    label: string
    /** 路由编码 */
    code: string
    /** 路由编码（全），如果指定了这个值则会用此作完全路由 */
    code_full: string
}

type TopicTreeData = (Topic & { children?: TopicTreeData })[]

export
{
    Topic,
    TopicTreeData,
}