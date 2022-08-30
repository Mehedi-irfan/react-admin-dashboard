import React from 'react'

import { ChartComponent, DateTime, Inject, Legend, SeriesCollectionDirective, SeriesDirective, SplineAreaSeries } from '@syncfusion/ej2-react-charts'
import { useStateContext } from '../../Context/ContextProvider'
import { barPrimaryXAxis, barPrimaryYAxis } from '../../data/dummy'
import { barCustomSeries } from './../../data/dummy';
import Header from './../../Components/Header';

const Bar = () => {
    const { currentMode } = useStateContext()
    return (
        <div className='m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl'>
            <Header category='Area' title='Inflation Rate In Parentage' />
            <ChartComponent
                id='area-chart'
                height='420px'
                primaryXAxis={barPrimaryXAxis}
                primaryYAxis={barPrimaryYAxis}
                chartArea={{ border: { width: 0 } }}
                tooltip={{ enable: true }}
                background={currentMode === 'Dark' ? '#33373E' : '#fff'}
            >
                <Inject services={[SplineAreaSeries, DateTime, Legend]} />
                <SeriesCollectionDirective>
                    {
                        barCustomSeries.map((item, index) => <SeriesDirective key={index} {...item} />)
                    }
                </SeriesCollectionDirective>
            </ChartComponent>
        </div>
    )
}

export default Bar