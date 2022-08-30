import { ColumnDirective, ColumnsDirective, KanbanComponent } from '@syncfusion/ej2-react-kanban';
import React from 'react'
import Header from './../Components/Header';
import { kanbanData, kanbanGrid } from './../data/dummy';

const Kanban = () => {
    return (
        <div className='m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl'>
            <Header category='App' title='Kanban' />
            <KanbanComponent
                id='kanban'
                dataSource={kanbanData}
                cardSettings={{ contentField: "Summary", headerField: 'Id' }}
                keyField='Status'
            >
                <ColumnsDirective>
                    {
                        kanbanGrid.map((items, index) => (
                            <ColumnDirective key={index} {...items} />
                        ))
                    }
                </ColumnsDirective>
            </KanbanComponent>
        </div>
    )
}

export default Kanban