import { TopicTreeData } from "@/core/interface/types/indexed-layout/topic-tree"

const topic_tree_data: TopicTreeData =
[
    {
        code: '',
        code_full: '',
        label: 'Content',
    }, 
    {
        code: '1',
        code_full: '1',
        label: 'A-star pathfinding',
    },
    {
        code: '2',
        code_full: '2',
        label: 'JPS pathfinding',
    },
    {
        code: '3',
        code_full: '3',
        label: 'Alpha-Beta method',
    },
    {
        code: '4',
        code_full: '4',
        label: 'Reinforcement Learning',
        children:
        [
            {
                code: '4-1',
                code_full: '4-1',
                label: 'N-Armed Bandit',
            },
            {
                code: '4-2',
                code_full: '4-2',
                label: 'Q-Learning',
            },
        ],
    },
]

export default topic_tree_data