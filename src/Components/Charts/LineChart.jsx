import React from 'react'

import { ChartComponent, DateTime, Inject, LineSeries, Legend, Tooltip, SeriesCollectionDirective, SeriesDirective } from '@syncfusion/ej2-react-charts'
import { useStateContext } from '../../Context/ContextProvider'
import { lineCustomSeries, LinePrimaryXAxis, LinePrimaryYAxis } from '../../data/dummy'

const LineChart = () => {
    const { currentMode } = useStateContext();
    return (
        <ChartComponent
            id='line-chart'
            height='420px'
            primaryXAxis={LinePrimaryXAxis}
            primaryYAxis={LinePrimaryYAxis}
            chartArea={{ border: { width: 0 } }}
            tooltip={{ enable: true }}
            background={currentMode === 'Dark' ? '#33373E' : '#fff'}
        >
            <Inject services={[LineSeries, DateTime, Legend, Tooltip]} />
            <SeriesCollectionDirective>
                {
                    lineCustomSeries.map((item, index) => <SeriesDirective key={index} {...item} />)
                }
            </SeriesCollectionDirective>
        </ChartComponent>
    )
}

export default LineChart