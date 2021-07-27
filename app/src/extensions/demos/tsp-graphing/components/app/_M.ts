import axios from "axios"
// import plotly from "plotly.js"

/**********************************************************************************************************************/

async function getExperimentDataset(dataset_name: string)
{
    axios.post('http://www.ga3hu.com/external/apps/wolff-h.github.io-backend/TSP-graphing/fetch-data.php', {
        target_resource: dataset_name,
    })
    .then((response) => {
        console.log(response)
    })
}

/**********************************************************************************************************************/

export
{
    getExperimentDataset,
}