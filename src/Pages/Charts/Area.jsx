import React from 'react'

import { ChartComponent, DateTime, Inject, LineSeries, Legend, Tooltip, SeriesCollectionDirective, SeriesDirective, SplineAreaSeries } from '@syncfusion/ej2-react-charts'
import { useStateContext } from '../../Context/ContextProvider'
import { areaPrimaryYAxis } from '../../data/dummy'
import { areaCustomSeries, areaPrimaryXAxis } from './../../data/dummy';
import Header from './../../Components/Header';

const Area = () => {
    const { currentMode } = useStateContext();
    return (
        <div className='m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl'>
            <Header category='Area' title='Inflation Rate In Parentage' />
            <ChartComponent
                id='area-chart'
                height='420px'
                primaryXAxis={areaPrimaryXAxis}
                primaryYAxis={areaPrimaryYAxis}
                chartArea={{ border: { width: 0 } }}
                tooltip={{ enable: true }}
                background={currentMode === 'Dark' ? '#33373E' : '#fff'}
            >
                <Inject services={[SplineAreaSeries, DateTime, Legend]} />
                <SeriesCollectionDirective>
                    {
                        areaCustomSeries.map((item, index) => <SeriesDirective key={index} {...item} />)
                    }
                </SeriesCollectionDirective>
            </ChartComponent>
        </div>
    )
}

export default Area