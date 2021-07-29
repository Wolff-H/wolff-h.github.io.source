import plotly from "plotly.js"

// helpers -------------------------------------------------------------------------------------------------------------
type WaypointMap =
    [city_id: number, x: number, y: number][]

function parseCoords(map: WaypointMap)
{
    const plotly_coords: [ids: number[], xs: number[], ys: number[]] = [ [],[],[] ]

    for(const city of map)
    {
        plotly_coords[0].push(city[0])    // id
        plotly_coords[1].push(city[1])    // x-axis
        plotly_coords[2].push(city[2])    // y-axis
    }

    return plotly_coords
}

// draw ----------------------------------------------------------------------------------------------------------------
function drawPlainMap(source: WaypointMap, target: HTMLElement|string)
{
    const plotly_coords = parseCoords(source)

    const traces: plotly.Data[] =
    [
        {
            type: 'scatter',
            mode: 'markers',
            text: plotly_coords[0].toString(),
            x: plotly_coords[1],
            y: plotly_coords[2],
        },
    ]

    plotly.newPlot(
        target,
        traces,
        {},
        {
            responsive: true,
        }
    )
}

function drawExperiment(
    source: any,
    generation_limit: number,
    target_time_cost: any,
    target_result: any
){
    // x 都是测试序数 //
    const xs = []

    for(let i=0; i<source["description"]["evolution_all"]; i++)
    {
        xs.push(i + 1)
    }

    // trials的time-costs统计 - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    const timecost_ys = []

    for(let i=0; i<source["evolutions"].length; i++)
    {
        timecost_ys.push(   source["evolutions"][i][0]["time_cost"]   )
    }

    const plotly_time_cost: any =
    [
        {
            x: xs,
            y: timecost_ys,
            mode: 'lines+markers',
            type: 'bar',
            name: 'time costs',
        }
    ]

    const layout1 =
    {
        xaxis: {   title: 'trial'   },
        yaxis: {   title: 'time cost'   },
    }

    plotly.newPlot(
        target_time_cost,
        plotly_time_cost,
        layout1,
        {
            responsive: true
        }
    )

    // trials的distance统计 - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    const best_ys = []
    const worst_ys = []
    const avg_ys = []

    for(let i=0; i<source["evolutions"].length; i++)
    {
        best_ys.push(
            source["evolutions"][i][generation_limit]["best-individual-distance"]
        )
        worst_ys.push(
            source["evolutions"][i][generation_limit]["worst-individual-distance"]
        )
        avg_ys.push(
            source["evolutions"][i][generation_limit]["average-distance"]
        )
    }

    const plotly_result: any =
    [
        {
            x: xs,
            y: best_ys,
            mode: 'lines+markers',
            fill: 'tonexty',
            name: 'best',
        },
        {
            x: xs,
            y: worst_ys,
            mode: 'lines+markers',
            fill: 'tonexty',
            name: 'worst',
        },
        {
            x: xs,
            y: avg_ys,
            mode: 'lines+markers',
            fill: 'tonexty',
            name: 'average',
        }
    ]

    plotly.newPlot(
        target_result,
        plotly_result,
        {},
        {
            responsive: true,
        }
    )
}

function drawEvolution(
    source: any,
    target: any,
    generation_limit: number,
    trial_n: number
){
    // x 都是世代序数 //
    const xs = []

    for(let i=0; i<generation_limit; i++)
    {
        xs.push(i+1)
    }

    // 选中的测试的各世代max、min、avg分布 - - - - - - - - - - - - - - - - - - - - - - - -
    const best_ys = []
    const worst_ys = []
    const avg_ys = []

    for(let i=1; i<=generation_limit; i++)
    {
        best_ys.push(
            source["evolutions"][trial_n-1][i]["best-individual-distance"]
        )
        worst_ys.push(
            source["evolutions"][trial_n-1][i]["worst-individual-distance"]
        )
        avg_ys.push(
            source["evolutions"][trial_n-1][i]["average-distance"]
        )
    }

    const plotly_evolution =
    [
        {
            x: xs,
            y: best_ys,
            mode: 'lines',
            fill: 'tonexty',
            name: 'best',
        },
        {
            x: xs,
            y: worst_ys,
            mode: 'lines',
            fill: 'tonexty',
            name: 'worst',
        },
        {
            x: xs,
            y: avg_ys,
            mode: 'lines',
            fill: 'tonexty',
            name: 'average',
        }
    ]

    plotly.newPlot(
        target,
        plotly_evolution,
        {},
        {
            responsive: true
        }
    )
}

function drawGeneration(
    source: any, 
    target: any, 
    generation_limit: number, 
    trial_n: number, 
    generation_n: number,
){
    // x 都是世代序数 //
    const xs = []

    for(let i=0; i<generation_limit; i++)
    {
        xs.push(i+1)
    }

    // 选中的世代的所有个体的distance分布 - - - - - - - - - - - - - - - - - - - - - - - -
    const ys = []

    for(let i=0; i<generation_limit; i++)
    {
        ys.push(source["evolutions"][trial_n-1][generation_n]["individual-distances"][i])
    }

    const plotly_generation =
    [
        {
            x: xs,
            y: ys,
            mode: 'lines',
            fill: 'tonexty',
            name: 'individual distance',
        }
    ]

    plotly.newPlot(
        target,
        plotly_generation,
        {},
        {
            responsive: true
        }
    )

    // 返回仪表盘数据 //
    return {
        avg: source["evolutions"][trial_n-1][generation_n]["average-distance"],
        best: source["evolutions"][trial_n-1][generation_n]["best-individual-distance"],
        worst: source["evolutions"][trial_n-1][generation_n]["worst-individual-distance"],
    }
}

function drawIndividual(
    source: any, 
    target: any, 
    generation_limit: number, 
    trial_n: number, 
    generation_n: number, 
    individual_n: number, 
    plain_map: number[][]
){
    let ids = []
    const xs = []
    const ys = []
    
    if(individual_n == 1)    //best
    {
        ids = source["evolutions"][trial_n-1][generation_n]["best-individual-sequence"]
        ids.push(ids[0])

        for(let i=0; i<source["description"]["city_all"]+1; i++)
        {
            xs.push( plain_map[1][ ids[i]-1 ] )
            ys.push( plain_map[2][ ids[i]-1 ] )
        }
    }
    else if(individual_n == 2)    //worst
    {
        ids = source["evolutions"][trial_n-1][generation_n]["worst-individual-sequence"]
        ids.push(ids[0])

        for(let i=0; i<source["description"]["city_all"]+1; i++)
        {
            xs.push( plain_map[1][ ids[i]-1 ] )
            ys.push( plain_map[2][ ids[i]-1 ] )
        }
    }

    const individual_plotly =
    [
        {
            x: xs,
            y: ys,
            text: ids,
            mode: 'lines+markers',
            name: 'individual route',
        }
    ]

    plotly.newPlot(
        target,
        individual_plotly,
        {},
        {
            responsive: true,
        }
    )

    // 返回路径序列 //
    // $(".dashboard textarea").text( ids.toString() );
    return ids.toString()
}

/**********************************************************************************************************************/

export default
{
    parseCoords,
    drawPlainMap,
    drawExperiment,
    drawEvolution,
    drawGeneration,
    drawIndividual,
}