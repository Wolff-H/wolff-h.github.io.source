import axios from "axios"
// import plotly from "plotly.js"

/**********************************************************************************************************************/

async function getExperimentDataset(dataset_name: string)
{
    return axios.post('http://www.ga3hu.com/external/apps/wolff-h.github.io-backend/TSP-graphing/fetch-data.php', {
        target_resource: dataset_name,
    })
}

/**********************************************************************************************************************/

export
{
    getExperimentDataset,
}

export default
{
    getExperimentDataset,
}