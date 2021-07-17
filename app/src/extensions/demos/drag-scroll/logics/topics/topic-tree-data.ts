import { TopicTreeData } from "@/core/interface/types/indexed-layout/topic-tree"

/*
    改进：
        用以下结构来组织

        0. intro
        1. basic
        2. seperate element and container
        3. movement
            3-1. lock axis
            3-2. reverse scroll direction
            3-3. swap controls
            3-4. constrained dragscroll
            3-5. sensitivity
        4. 1-N controls    一个draggable控制多个scrollable
        5. 


*/
const topic_tree_data: TopicTreeData =
[
    {
        code: '',
        code_full: '',
        label: 'Intro',
    },
    {
        code: '1',
        code_full: '1',
        label: 'Basic',
    },
    {
        code: '2',
        code_full: '2',
        label: 'Seperate element and container',
    },
    {
        code: '3',
        code_full: '3',
        label: 'Movement',
        children: 
        [
            {
                code: '1',
                code_full: '3-1',
                label: 'Lock axis',
            },
            {
                code: '2',
                code_full: '3-2',
                label: 'Reverse scroll direction',
            },
            {
                code: '3',
                code_full: '3-3',
                label: 'Swap controls',
            },
            {
                code: '4',
                code_full: '3-4',
                label: 'Constrained dragscroll',
            },
            {
                code: '5',
                code_full: '3-5',
                label: 'Sensitivity',
            },
        ],
    },
    {
        code: '4',
        code_full: '4',
        label: 'Update, disable, destroy',
    },    
    {
        code: '5',
        code_full: '5',
        label: 'Example: A dragscrollable and sticky table',
    },
]

export default topic_tree_data