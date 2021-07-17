/*
    1.
        “相对于 = 容器”的时候

        所有sticky行为仅以元素的容器《全新未滚动》状态为基准，否则（以一个已经滚动了的容器作初始化）情况会非常复杂
        也不一定，可以减去初始化时的容器当前滚动量。
    2.
        如果要利用到所有top、bottom、left、right四个方向的限制值的话，情况会复杂很多，但是会额外实现一种“捕获”的行为特性。
*/



interface Limits
{
    relative_to: 'self'|'container'
    top: number
    bottom: number
    left: number
    right: number
}

interface Options
{
    destroy: boolean
}



interface StickElementData
{
    tool_name: string
    description: string
    container_to_container_data_map: ContainerToContainerDataMap
}

type ContainerToContainerDataMap = WeakMap<HTMLElement, ContainerData>

type ContainerData = StickerData[]

interface StickerData
{
    sticker: HTMLElement
    sticker_original_top: number
    sticker_original_left: number
    sticker_original_away_top: number
    sticker_original_away_left: number
    limits: Limits
}



/**
 * 如果要规定在一个方向上粘滞，则必须显式规定粘滞物在该方向上的宽/高，否则可能发生，在粘滞物运动出在正方向与容器的边距后，发生形变。
 * @param container 容器。
 * @param sticker 粘滞物。
 * @param limits 限制规格。
 * @param options 选项。
 */
function stickElement(
    container: HTMLElement,
    sticker: HTMLElement|null,
    limits:
    {
        relative_to?: 'self'|'container',
        top?: number,
        // bottom?: number,
        left?: number,
        // right?: number,
    } = {},
    options:
    {
        destroy?: boolean,
    } = {},
)
{
    // defaults --------------------------------------------------------------------------------------------------------
    const default_limits: Limits =
    {
        relative_to: 'container',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
    }

    const default_options: Options =
    {
        destroy: false,
    }

    if(!window.__StickElementData)
    {
        window.__StickElementData =
        {
            tool_name: 'stick-element',
            description: 'Make element sticky like.',
            container_to_container_data_map: new WeakMap(),
        } as StickElementData
    }

    const map: ContainerToContainerDataMap = window.__StickElementData.container_to_container_data_map

    // composed params -------------------------------------------------------------------------------------------------
    const _limits = Object.assign({}, default_limits, limits)
    const _options = Object.assign({}, default_options, options)

    // take one desired action -----------------------------------------------------------------------------------------
    // #1. destroy - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    // remove whole record //
    if(sticker === null)
    {
        // if(map.has(container))
        // {
        //     map.delete(container)


        // }

        return
    }

    // #2. create - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
    if(!map.has(container))
    {
        console.log('top', getComputedStyle(sticker).top);
        console.log('left', getComputedStyle(sticker).left);
        console.log('bottom', getComputedStyle(sticker).bottom);
        console.log('right', getComputedStyle(sticker).right);
        console.log('original top', getComputedStyle(sticker).top);
        console.log('original left', getComputedStyle(sticker).left);
        
        map.set(
            container,
            [
                {
                    sticker: sticker,
                    sticker_original_top: parseInt(getComputedStyle(sticker).top, 10),
                    sticker_original_left: parseInt(getComputedStyle(sticker).left, 10),
                    sticker_original_away_top: sticker.getBoundingClientRect().y - container.getBoundingClientRect().y,
                    sticker_original_away_left: sticker.getBoundingClientRect().x - container.getBoundingClientRect().x,
                    limits: _limits,
                },
            ],
        )

        container.addEventListener('scroll', scroll)
    }











}

function scroll(event: Event)
{
    const container = event.target as HTMLElement
    const map: ContainerToContainerDataMap = window.__StickElementData.container_to_container_data_map
    const container_data = map.get(container)!

    let i = container_data.length

    while(i--)
    {
        const sticker_data = container_data[i]
        const { sticker } = sticker_data
        
        // 相对于 = 自己 //
        if(sticker_data.limits.relative_to === 'self')
        {
            // 当容器滚出指定量，对粘滞物施加同向的滚动量差 //
            // y 方向 //
            if(container.scrollTop >= sticker_data.limits.top)
            {
                sticker.style.top =
                    sticker_data.sticker_original_top +
                    (container.scrollTop - sticker_data.limits.top) +
                    'px'
            }
            else
            {
                sticker.style.top = sticker_data.sticker_original_top + 'px'
            }

            // x方向 //
            if(container.scrollLeft >= sticker_data.limits.left)
            {
                sticker.style.left =
                    sticker_data.sticker_original_left +
                    (container.scrollLeft - sticker_data.limits.left) +
                    'px'
            }
            else
            {
                sticker.style.left = sticker_data.sticker_original_left + 'px'
            }
        }
        // 相对于 = 容器 //
        else
        {
            // 当边距超出指定量，对粘滞物施加同向的滚动量差 //
            // y方向 //
            if(container.scrollTop >= (sticker_data.sticker_original_away_top - sticker_data.limits.top))
            {
                sticker.style.top =
                    sticker_data.sticker_original_top +
                    (container.scrollTop - (sticker_data.sticker_original_away_top - sticker_data.limits.top)) +
                    'px'
            }
            else
            {
                sticker.style.top = sticker_data.sticker_original_top + 'px'
            }

            // x方向 //
            if(container.scrollLeft >= (sticker_data.sticker_original_away_left - sticker_data.limits.left))
            {
                sticker.style.left =
                    sticker_data.sticker_original_left +
                    (container.scrollLeft - (sticker_data.sticker_original_away_left - sticker_data.limits.left)) +
                    'px'
            }
            else
            {
                sticker.style.left = sticker_data.sticker_original_left + 'px'
            }

        }
    }
}

/**********************************************************************************************************************/

export default stickElement