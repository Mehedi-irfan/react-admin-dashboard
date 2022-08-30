import { ColumnDirective, ColumnsDirective, Edit, Filter, GridComponent, Inject, Page, Selection, Sort, Toolbar } from '@syncfusion/ej2-react-grids';
import React from 'react'
import { customersData, customersGrid } from '../data/dummy'
import Header from './../Components/Header';

const Customars = () => {
    return (
        <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
            <Header category='Page' title='Customers' />
            <GridComponent
                dataSource={customersData}
                allowPaging
                allowSorting
                toolbar={['Delete']}
                editSettings={{ allowDeleting: true, allowEditing: true }}
                width='auto'
            >
                <ColumnsDirective>
                    {
                        customersGrid.map((items, index) => (
                            <ColumnDirective key={index} {...items} />
                        ))
                    }
                </ColumnsDirective>
                <Inject services={[Page, Toolbar, Selection, Edit, Sort, Filter]} />
            </GridComponent>
        </div>
    )
}

export default Customars