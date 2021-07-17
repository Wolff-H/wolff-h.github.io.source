import { Topic, TopicTreeData } from "../../types/indexed-layout/topic-tree";

type RoutedTopicTreeData = ((Topic & { route: string }) & { children?: TopicTreeData })[]
type ProcessingTopicTreeData = ((Topic & { route?: string }) & { children?: TopicTreeData })[]

function toRoutedTopic(topic_curr: Topic, topic_prev: Topic)
{

}

// function toRoutedTopicTreeData(topic_tree_data: TopicTreeData)
// {
//     const routed_topic_tree_data: RoutedTopicTreeData = []

//     routed_topic_tree_data = topic_tree_data.
// }

function toRoutedTopicTreeData(tree: ProcessingTopicTreeData)
{
    // tree
}