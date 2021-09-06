import './Chart.css'
import ChartBar from './ChartBar'

function Chart({chartDatas}) {
    // convert chartDatas from objecct to array using the map() function
    const datPointsValue = chartDatas.map(chartData=>chartData.value)
    const totalMax = Math.max(...datPointsValue) // Find the maximum value in each month
    return (
        <div className="chart">
            {chartDatas.map(chartData=> <ChartBar key={chartData.id} value={chartData.value} label={chartData.label} maxValue={totalMax}/>)}
        </div>
    )
}

export default Chart
