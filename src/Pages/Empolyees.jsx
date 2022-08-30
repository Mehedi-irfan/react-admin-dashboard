import React from 'react'
import { ColumnDirective, ColumnsDirective, ContextMenu, Edit, ExcelExport, Filter, GridComponent, Inject, Page, PdfExport, Resize, Search, Sort, Toolbar } from '@syncfusion/ej2-react-grids'

import Header from '../Components/Header'
import { employeesData, employeesGrid } from '../data/dummy'

const Empolyees = () => {
    return (
        <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
            <Header category='Page' title='Employees' />
            <GridComponent
                dataSource={employeesData}
                allowPaging
                allowSorting
                toolbar={['Search']}
                width='auto'
            >
                <ColumnsDirective>
                    {
                        employeesGrid.map((items, index) => (
                            <ColumnDirective key={index} {...items} />
                        ))
                    }
                </ColumnsDirective>
                <Inject services={[Page, Search, Toolbar]} />
            </GridComponent>
        </div>
    )
}

export default Empolyees