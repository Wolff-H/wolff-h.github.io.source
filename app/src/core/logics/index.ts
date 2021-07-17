import router from "@/core/router"

/**********************************************************************************************************************/

function toHome()
{
    router.push({ path: '/' })
}


/**
 * 设置全局鼠标状态【笔记：这个功能在以后的版本中作为一个plugin单列出来】
 * @param cursor_state 鼠标状态：
 * - wait - 阻塞等待
 * - progress - 不阻塞等待
 * - ew-resize - 调整宽度
 * - move - 移动（拖拽）磁贴
 */
function setGlobalCursorState(cursor_state: ''|'progress'|'wait'|'ew-resize'|'move' = '')
{
    // 清楚已设置的等待状态类名 //
    document.body.classList.remove(
        'o-cursor-progress',
        'o-cursor-wait',
        'o-cursor-ew-resize',
        'o-cursor-move',
    )

    switch(cursor_state)
    {
        case 'progress':
            document.body.classList.add('o-cursor-progress')
            break
        case 'wait':
            document.body.classList.add('o-cursor-wait')
            break
        case 'ew-resize':
            document.body.classList.add('o-cursor-ew-resize')
            break
        case 'move':
            document.body.classList.add('o-cursor-move')
            break
        default:
            break
    }
}

/**********************************************************************************************************************/

export
{
    toHome,
    setGlobalCursorState,
}

export default
{
    toHome,
    setGlobalCursorState,
}