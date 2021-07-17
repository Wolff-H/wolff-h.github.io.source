
/**********************************************************************************************************************/

interface ResizerData
{
    resizee: HTMLElement
    mouse_start_x: number
    mouse_start_y: number
    resizee_start_width: number
    resizee_start_height: number
    movement:
    {
        x: -1|0|1
        y: -1|0|1
    }
}

interface HandlelyResizableData
{
    tool_name: string
    description: string
    resizer_data_map: ResizerDataMap
    active_resizer: HTMLElement|null
}

type ResizerDataMap = WeakMap<HTMLElement, ResizerData>



/**
 * This package is still under heavy development. For 2.0 version it's planned to support multi resizees for one resizer.
 * @param resizer The resizer handle (user provided)
 * @param resizee The resizable element that will response to the resizer
 * @param movement Movevment along x and y axis. 1 for positive, -1 for negative, 0 for standstill. X and y are both set to 1 by default.
 */
function handlelyResizable(
    resizer: HTMLElement,
    resizee: HTMLElement|null,
    movement:
    {
        x?: -1|0|1,
        y?: -1|0|1,
    } = {}
)
{
    if(!window.__HandlelyResizable)
    {
        window.__HandlelyResizable =
        {
            tool_name: 'handlely-resizable',
            description: 'Make an element resizable with a provided(by user) handle.',
            resizer_data_map: new WeakMap(),
            active_resizer: null,
        } as HandlelyResizableData
    }

    const map: ResizerDataMap = window.__HandlelyResizable.resizer_data_map

    if(resizee === null)
    {
        map.delete(resizer)

        return
    }

    map.set(
        resizer,
        {
            resizee: resizee,
            mouse_start_x: 0,
            mouse_start_y: 0,
            resizee_start_width: 0,
            resizee_start_height: 0,
            movement: Object.assign({ x: 1, y: 1 }, movement)
        }
    )
    
    resizer.addEventListener('mousedown', startDrag)
}

function startDrag(event: MouseEvent)
{
    const resizer = event.target as HTMLElement
    const map:ResizerDataMap = window.__HandlelyResizable.resizer_data_map
    const resizer_data = map.get(resizer)!

    map.set(
        resizer,
        Object.assign(
            {},
            map.get(resizer),
            {
                mouse_start_x: event.clientX,
                mouse_start_y: event.clientY,
                resizee_start_width: parseInt(getComputedStyle(resizer_data.resizee).width, 10),
                resizee_start_height: parseInt(getComputedStyle(resizer_data.resizee).height, 10),
            }
        )
    )

    window.__HandlelyResizable.active_resizer = resizer

    document.addEventListener('mousemove', drag)
    document.addEventListener('mouseup', stopDrag)
}

function drag(event: MouseEvent)
{
    const resizer = window.__HandlelyResizable.active_resizer
    const map:ResizerDataMap = window.__HandlelyResizable.resizer_data_map
    const resizer_data = map.get(resizer)!

    if(resizer_data.movement.x !== 0)
    {
        resizer_data.resizee.style.width = resizer_data.resizee_start_width + resizer_data.movement.x * (event.clientX - resizer_data.mouse_start_x) + 'px'
    }
    if(resizer_data.movement.y !== 0)
    {
        resizer_data.resizee.style.height = resizer_data.resizee_start_height + resizer_data.movement.y * (event.clientY - resizer_data.mouse_start_y) + 'px'
    }
}

function stopDrag()
{
    document.removeEventListener('mousemove', drag)
    document.removeEventListener('mouseup', stopDrag)
}

/**********************************************************************************************************************/

export
{
    HandlelyResizableData,
}

export default handlelyResizable