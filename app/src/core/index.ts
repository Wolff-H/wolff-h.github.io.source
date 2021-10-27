
import DragScroll from "@/extensions/demos/drag-scroll"
import HandlelyResizable from "@/extensions/demos/handlely-resizable"
import SmartAlgorithms from "@/extensions/demos/smart-algorithms"
import StickElement from "@/extensions/demos/stick-element"
import SimpleDraggable from "@/extensions/demos/simple-draggable"
import TSPGraphing from "@/extensions/demos/tsp-graphing"

/**********************************************************************************************************************/
const integration =
{
    extensions:
    {
        demos:
        {
            DragScroll,
            HandlelyResizable,
            StickElement,
            SimpleDraggable,
            SmartAlgorithms,
            TSPGraphing,
        },
    },
    plugins:
    {

    },
}

/**********************************************************************************************************************/

export
{
    integration,
}

export default
{
    integration,
}